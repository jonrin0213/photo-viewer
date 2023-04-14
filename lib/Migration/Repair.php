<?php

declare(strict_types=1);

namespace OCA\Memories\Migration;

use OCA\Memories\Db\AddMissingIndices;
use OCA\Memories\Service\BinExt;
use OCA\Memories\Util;
use OCP\IConfig;
use OCP\Migration\IOutput;
use OCP\Migration\IRepairStep;

class Repair implements IRepairStep
{
    protected IConfig $config;

    public function __construct(IConfig $config)
    {
        $this->config = $config;
    }

    public function getName(): string
    {
        return 'Repair steps for Memories';
    }

    public function run(IOutput $output): void
    {
        // Add missing indices
        AddMissingIndices::run();

        // kill any instances of go-vod and exiftool
        Util::pkill(BinExt::getName('go-vod'));
        Util::pkill(BinExt::getName('exiftool'));

        // detect exiftool
        if ($path = BinExt::detectExiftool()) {
            $output->info("exiftool binary is configured: {$path}");
        } else {
            $output->warning('exiftool binary could not be configured');
        }

        // detect go-vod
        if ($path = BinExt::detectGoVod()) {
            $output->info("go-vod binary is configured: {$path}");
        } else {
            $output->warning('go-vod binary could not be configured');
        }

        // detect ffmpeg
        if ($path = BinExt::detectFFmpeg()) {
            $output->info("ffmpeg binary is configured: {$path}");
        } else {
            $output->warning('ffmpeg binary could not be configured');
        }
    }
}
