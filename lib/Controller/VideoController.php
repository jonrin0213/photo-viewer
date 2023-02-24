<?php

declare(strict_types=1);

/**
 * @copyright Copyright (c) 2022 Varun Patil <radialapps@gmail.com>
 * @author Varun Patil <radialapps@gmail.com>
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

namespace OCA\Memories\Controller;

use OCA\Memories\Exif;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\DataDisplayResponse;
use OCP\AppFramework\Http\JSONResponse;
use OCP\Files\File;

class VideoController extends ApiBase
{
    /**
     * @NoAdminRequired
     *
     * @PublicPage
     *
     * @NoCSRFRequired
     *
     * Transcode a video to HLS by proxy
     */
    public function transcode(string $client, int $fileid, string $profile): Http\Response
    {
        // Make sure not running in read-only mode
        if (false !== $this->config->getSystemValue('memories.no_transcode', 'UNSET')) {
            return new JSONResponse(['message' => 'Transcoding disabled'], Http::STATUS_FORBIDDEN);
        }

        // Check client identifier is 8 characters or more
        if (\strlen($client) < 8) {
            return new JSONResponse(['message' => 'Invalid client identifier'], Http::STATUS_BAD_REQUEST);
        }

        // Get file
        $file = $this->getUserFile($fileid);
        if (!$file) {
            return new JSONResponse(['message' => 'File not found'], Http::STATUS_NOT_FOUND);
        }

        if (!($file->getPermissions() & \OCP\Constants::PERMISSION_READ)) {
            return new JSONResponse(['message' => 'File not readable'], Http::STATUS_FORBIDDEN);
        }

        // Local files only for now
        if (!$file->getStorage()->isLocal()) {
            return new JSONResponse(['message' => 'External storage not supported'], Http::STATUS_FORBIDDEN);
        }

        // Get file path
        $path = $file->getStorage()->getLocalFile($file->getInternalPath());
        if (!$path || !file_exists($path)) {
            return new JSONResponse(['message' => 'File not found'], Http::STATUS_NOT_FOUND);
        }

        // Check if file starts with temp dir
        $tmpDir = sys_get_temp_dir();
        if (0 === strpos($path, $tmpDir)) {
            return new JSONResponse(['message' => 'File is in temp dir!'], Http::STATUS_NOT_FOUND);
        }

        // Request and check data was received
        try {
            $status = $this->getUpstream($client, $path, $profile);
            if ($status === 409 || $status === -1) {
                // Just a conflict (transcoding process changed)
                return new JSONResponse(['message' => 'Conflict'], Http::STATUS_CONFLICT);
            }
            if ($status !== 200) {
                throw new \Exception("Transcoder returned {$status}");
            }
        } catch (\Exception $e) {
            $msg = 'Transcode failed: '.$e->getMessage();
            $this->logger->error($msg, ['app' => 'memories']);

            return new JSONResponse(['message' => $msg], Http::STATUS_INTERNAL_SERVER_ERROR);
        }

        // The response was already streamed, so we have nothing to do here
        exit;
    }

    /**
     * @NoAdminRequired
     *
     * @PublicPage
     *
     * @NoCSRFRequired
     *
     * Return the live video part of a live photo
     */
    public function livephoto(
        int $fileid,
        string $liveid = '',
        string $format = '',
        string $transcode = ''
    ) {
        $file = $this->getUserFile($fileid);
        if (null === $file) {
            return new JSONResponse(['message' => 'File not found'], Http::STATUS_NOT_FOUND);
        }

        // Check file liveid
        if (!$liveid) {
            return new JSONResponse(['message' => 'Live ID not provided'], Http::STATUS_BAD_REQUEST);
        }

        // Response data
        $name = '';
        $mime = '';
        $blob = null;
        $liveVideoPath = null;

        // Video is inside the file
        $path = null;
        if (str_starts_with($liveid, 'self__')) {
            $path = $file->getStorage()->getLocalFile($file->getInternalPath());
            $mime = 'video/mp4';
            $name = $file->getName().'.mp4';
        }

        // Different manufacurers have different formats
        if ('self__trailer' === $liveid) {
            try { // Get trailer
                $blob = Exif::getBinaryExifProp($path, '-trailer');
            } catch (\Exception $e) {
                return new JSONResponse(['message' => 'Trailer not found'], Http::STATUS_NOT_FOUND);
            }
        } elseif ('self__embeddedvideo' === $liveid) {
            try { // Get embedded video file
                $blob = Exif::getBinaryExifProp($path, '-EmbeddedVideoFile');
            } catch (\Exception $e) {
                return new JSONResponse(['message' => 'Embedded video not found'], Http::STATUS_NOT_FOUND);
            }
        } elseif (str_starts_with($liveid, 'self__traileroffset=')) {
            // Remove prefix
            $offset = (int) substr($liveid, \strlen('self__traileroffset='));
            if ($offset <= 0) {
                return new JSONResponse(['message' => 'Invalid offset'], Http::STATUS_BAD_REQUEST);
            }

            // Read file from offset to end
            $blob = file_get_contents($path, false, null, $offset);
        } else {
            // Get stored video file (Apple MOV)
            $lp = $this->timelineQuery->getLivePhoto($fileid);
            if (!$lp || $lp['liveid'] !== $liveid) {
                return new JSONResponse(['message' => 'Live ID not found'], Http::STATUS_NOT_FOUND);
            }

            // Get and return file
            $liveFileId = (int) $lp['fileid'];
            $files = $this->rootFolder->getById($liveFileId);
            if (0 === \count($files)) {
                return new JSONResponse(['message' => 'Live file not found'], Http::STATUS_NOT_FOUND);
            }
            $liveFile = $files[0];

            if ($liveFile instanceof File) {
                // Requested only JSON info
                if ('json' === $format) {
                    return new JSONResponse($lp);
                }

                $name = $liveFile->getName();
                $blob = $liveFile->getContent();
                $mime = $liveFile->getMimeType();
                $liveVideoPath = $liveFile->getStorage()->getLocalFile($liveFile->getInternalPath());
            }
        }

        // Data not found
        if (!$blob) {
            return new JSONResponse(['message' => 'Live file not found'], Http::STATUS_NOT_FOUND);
        }

        // Transcode video if allowed
        if ($transcode && !$this->config->getSystemValue('memories.no_transcode', true)) {
            // If video path not given, write to temp file
            if (!$liveVideoPath) {
                $liveVideoPath = tempnam(sys_get_temp_dir(), 'livevideo');
                file_put_contents($liveVideoPath, $blob);

                register_shutdown_function(function () use ($liveVideoPath) {
                    unlink($liveVideoPath);
                });
            }

            // If this is H.264 it won't get transcoded anyway
            if ($this->getUpstream($transcode, $liveVideoPath, 'max.mov')) {
                exit;
            }
        }

        // Make and send response
        $response = new DataDisplayResponse($blob, Http::STATUS_OK, []);
        $response->setHeaders([
            'Content-Type' => $mime,
            'Content-Disposition' => "attachment; filename=\"{$name}\"",
        ]);
        $response->cacheFor(3600 * 24, false, false);

        return $response;
    }

    private function getUpstream($client, $path, $profile)
    {
        $returnCode = $this->getUpstreamInternal($client, $path, $profile);

        // If status code was 0, it's likely the server is down
        // Make one attempt to start after killing whatever is there
        if (0 !== $returnCode) {
            return $returnCode;
        }

        // Get transcoder path
        $transcoder = $this->config->getSystemValue('memories.transcoder', false);
        if (!$transcoder) {
            throw new \Exception('Transcoder not configured');
        }

        // Make transcoder executable
        if (!is_executable($transcoder)) {
            @chmod($transcoder, 0755);
            if (!is_executable($transcoder)) {
                throw new \Exception("Transcoder not executable (chmod 755 {$transcoder})");
            }
        }

        // Kill the transcoder in case it's running
        \OCA\Memories\Util::pkill($transcoder);

        // Check for environment variables
        $env = [];

        // QSV with VAAPI
        if ($this->config->getSystemValue('memories.qsv', false)) {
            $env[] = 'VAAPI=1';
        }

        // NVENC
        if ($this->config->getSystemValue('memories.nvenc', false)) {
            $env[] = 'NVENC=1';
        }

        // Bind address / port
        $port = $this->config->getSystemValue('memories.govod_port', 47788);
        $env[] = "GOVOD_BIND='127.0.0.1:{$port}'";

        // Paths
        $ffmpegPath = $this->config->getSystemValue('memories.ffmpeg_path', 'ffmpeg');
        $ffprobePath = $this->config->getSystemValue('memories.ffprobe_path', 'ffprobe');
        $env[] = "FFMPEG='{$ffmpegPath}'";
        $env[] = "FFPROBE='{$ffprobePath}'";

        // Get temp directory
        $defaultTmp = sys_get_temp_dir().'/go-vod/';
        $tmpPath = $this->config->getSystemValue('memories.tmp_path', $defaultTmp);

        // Make sure path ends with slash
        if ('/' !== substr($tmpPath, -1)) {
            $tmpPath .= '/';
        }

        // Add instance ID to path
        $tmpPath .= $this->config->getSystemValue('instanceid', 'default');

        // (Re-)create temp dir
        shell_exec("rm -rf '{$tmpPath}' && mkdir -p '{$tmpPath}' && chmod 755 '{$tmpPath}'");

        // Check temp directory exists
        if (!is_dir($tmpPath)) {
            throw new \Exception("Temp directory could not be created ({$tmpPath})");
        }

        // Check temp directory is writable
        if (!is_writable($tmpPath)) {
            throw new \Exception("Temp directory is not writable ({$tmpPath})");
        }

        // Set temp dir
        $env[] = "GOVOD_TEMPDIR='{$tmpPath}'";

        // Start transcoder
        $env = implode(' ', $env);
        $logFile = $tmpPath.'.log';
        shell_exec("{$env} nohup {$transcoder} > '{$logFile}' 2>&1 & > /dev/null");

        // wait for 1s and try again
        sleep(1);

        $returnCode = $this->getUpstreamInternal($client, $path, $profile);
        if (0 === $returnCode) {
            throw new \Exception("Transcoder could not be started, check {$logFile}");
        }
        return $returnCode;
    }

    private function getUpstreamInternal($client, $path, $profile)
    {
        $path = rawurlencode($path);

        // Make sure query params are repeated
        // For example, in folder sharing, we need the params on every request
        $port = $this->config->getSystemValue('memories.govod_port', 47788);
        $url = "http://127.0.0.1:{$port}/{$client}{$path}/{$profile}";
        if ($params = $_SERVER['QUERY_STRING']) {
            $url .= "?{$params}";
        }

        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);
        curl_setopt($ch, CURLOPT_HEADER, 0);

        // Catch connection abort here
        ignore_user_abort(true);

        // Stream the response to the browser without reading it into memory
        $headersWritten = false;
        curl_setopt($ch, CURLOPT_WRITEFUNCTION, function ($curl, $data) use (&$headersWritten, $profile) {
            $returnCode = (int) curl_getinfo($curl, CURLINFO_HTTP_CODE);

            if (200 === $returnCode) {
                // Write headers if just got the first chunk of data
                if (!$headersWritten) {
                    $headersWritten = true;
                    $contentType = curl_getinfo($curl, CURLINFO_CONTENT_TYPE);
                    header("Content-Type: {$contentType}");

                    if (str_ends_with($profile, 'mov')) {
                        // cache full video 24 hours
                        header('Cache-Control: max-age=86400, public');
                    } else {
                        // no caching of segments
                        header('Cache-Control: no-cache, no-store, must-revalidate');
                    }

                    http_response_code($returnCode);
                }

                echo $data;
                flush();

                if (connection_aborted()) {
                    return -1; // stop the transfer
                }
            }

            return \strlen($data);
        });

        // Start the request
        curl_exec($ch);
        $returnCode = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        return $returnCode;
    }
}
