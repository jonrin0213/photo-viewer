import { IImageInfo, IPhoto } from '../../types';
import { API } from '../API';
import { constants } from './const';
import { FilePickerType, getFilePickerBuilder } from '@nextcloud/dialogs';
import * as nativex from '../../native';

/**
 * Check if width <= 768px
 */
export function isMobile() {
  return globalThis.windowInnerWidth <= 768;
}

/** Preview generation options */
type PreviewOpts = {
  /** Photo object to create preview for */
  photo: IPhoto;
};
type PreviewOptsSize = PreviewOpts & {
  /**
   * Directly specify the size of the preview.
   * If you already know the size of the photo, use msize instead,
   * so that caching can be utilized best. A size of 256 is not allowed
   * here size the thumbnails are not pre-generated.
   */
  size: 512 | 1024 | 2048 | [number, number] | 'screen';
};
type PreviewOptsMsize = PreviewOpts & {
  /**
   * Size of minimum edge of the preview (recommended).
   * This can only be used if the photo object has width and height.
   */
  msize: 256 | 512 | 1024 | 2048;
};
type PreviewOptsSquare = PreviewOpts & {
  /**
   * Size of the square preview.
   * Note that these will still be cached and requested with XImg multipreview.
   */
  sqsize: 256 | 512 | 1024;
};

/**
 * Get preview URL from photo object
 *
 * @param opts Preview options
 */
export function getPreviewUrl(opts: PreviewOptsSize | PreviewOptsMsize | PreviewOptsSquare) {
  // Destructure does not work with union types
  let { photo, size, msize, sqsize } = opts as PreviewOptsSize & PreviewOptsMsize & PreviewOptsSquare;

  // Square size is just size
  const square = sqsize !== undefined;
  if (square) size = sqsize as any;

  // Native preview
  if (photo.flag & constants.c.FLAG_IS_LOCAL) {
    return API.Q(nativex.API.IMAGE_PREVIEW(photo.fileid), { c: photo.etag });
  }

  // Screen-appropriate size
  if (size === 'screen') {
    const sw = Math.floor(screen.width * devicePixelRatio);
    const sh = Math.floor(screen.height * devicePixelRatio);
    size = [sw, sh];
  }

  // Base size conversion
  if (msize !== undefined) {
    if (photo.w && photo.h) {
      size = (Math.floor((msize * Math.max(photo.w, photo.h)) / Math.min(photo.w, photo.h)) - 1) as any;
    } else {
      console.warn('Photo has no width or height but using msize');
      size = msize === 256 ? 512 : msize;
    }
  }

  // Convert to array
  const [x, y] = typeof size === 'number' ? [size, size] : size!;

  return API.Q(API.IMAGE_PREVIEW(photo.fileid), {
    c: photo.etag,
    x,
    y,
    a: square ? '0' : '1',
  });
}

/**
 * Get the URL for the imageInfo of a photo
 *
 * @param photo Photo object or fileid (remote only)
 */
export function getImageInfoUrl(photo: IPhoto | number) {
  const fileid = typeof photo === 'object' ? photo.fileid : photo;

  if (typeof photo === 'object' && photo.flag & constants.c.FLAG_IS_LOCAL) {
    return nativex.API.IMAGE_INFO(fileid);
  }

  return API.IMAGE_INFO(fileid);
}

/**
 * Update photo object using imageInfo.
 */
export function updatePhotoFromImageInfo(photo: IPhoto, imageInfo: IImageInfo) {
  photo.etag = imageInfo.etag;
  photo.basename = imageInfo.basename;
  photo.mimetype = imageInfo.mimetype;
  photo.w = imageInfo.w;
  photo.h = imageInfo.h;
  photo.imageInfo = {
    ...photo.imageInfo,
    ...imageInfo,
  };
}

/**
 * Get the path of the folder on folders route
 * This function does not check if this is the folder route
 */
export function getFolderRoutePath(basePath: string) {
  let path: any = vueroute().params.path || '/';
  path = typeof path === 'string' ? path : path.join('/');
  path = basePath + '/' + path;
  path = path.replace(/\/\/+/, '/'); // Remove double slashes
  return path;
}

/**
 * Get URL to Live Photo video part
 */
export function getLivePhotoVideoUrl(p: IPhoto, transcode: boolean) {
  return API.Q(API.VIDEO_LIVEPHOTO(p.fileid), {
    etag: p.etag,
    liveid: p.liveid,
    transcode: transcode ? videoClientIdPersistent : undefined,
  });
}

/**
 * Set up hooks to set classes on parent element for Live Photo
 * @param video Video element
 */
export function setupLivePhotoHooks(video: HTMLVideoElement) {
  const div = video.closest('.memories-livephoto') as HTMLDivElement;
  video.onplay = () => {
    div.classList.add('playing');
  };
  video.oncanplay = () => {
    div.classList.add('canplay');
  };
  video.onended = video.onpause = () => {
    div.classList.remove('playing');
  };
}

/**
 * Get route hash for viewer for photo
 */
export function getViewerHash(photo: IPhoto) {
  return `#v/${photo.dayid}/${photo.key}`;
}

/**
 * Get route for viewer for photo
 */
export function getViewerRoute(photo: IPhoto) {
  const $route = globalThis.vueroute();
  return {
    path: $route.path,
    query: $route.query,
    hash: getViewerHash(photo),
  };
}

/**
 * Choose a folder using the NC file picker
 *
 * @param title Title of the file picker
 * @param initial Initial path
 * @param type Type of the file picker
 *
 * @returns The path of the chosen folder
 */
export async function chooseNcFolder(
  title: string,
  initial: string = '/',
  type: FilePickerType = FilePickerType.Choose
) {
  const picker = getFilePickerBuilder(title)
    .setMultiSelect(false)
    .setModal(true)
    .setType(type)
    .addMimeTypeFilter('httpd/unix-directory')
    .allowDirectories()
    .startAt(initial)
    .build();

  // Choose a folder
  const folder = (await picker.pick()) || '/';

  // Remove double slashes
  return folder.replace(/\/+/g, '/');
}

/**
 * Check if the provided Axios Error is a network error.
 */
export function isNetworkError(error: any) {
  return error?.code === 'ERR_NETWORK';
}
