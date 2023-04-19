/** System configuration */
export type ISystemConfig = {
  'memories.exiftool': string;
  'memories.exiftool_no_local': boolean;
  'memories.index.mode': string;
  'memories.index.path': string;

  'memories.gis_type': number;

  'memories.vod.disable': boolean;
  'memories.vod.ffmpeg': string;
  'memories.vod.ffprobe': string;
  'memories.vod.path': string;
  'memories.vod.bind': string;
  'memories.vod.connect': string;
  'memories.vod.external': boolean;
  'memories.video_default_quality': string;

  'memories.vod.vaapi': boolean;
  'memories.vod.vaapi.low_power': boolean;

  'memories.vod.nvenc': boolean;
  'memories.vod.nvenc.temporal_aq': boolean;
  'memories.vod.nvenc.scale': string;
};

export type IBinaryStatus = 'ok' | 'not_found' | 'not_executable' | 'test_ok' | string;

export type ISystemStatus = {
  last_index_job_start: number;
  last_index_job_duration: number;
  last_index_job_status: string;
  last_index_job_status_type: string;

  bad_encryption: boolean;
  indexed_count: number;
  mimes: string[];
  gis_type: number;
  gis_count?: number;
  exiftool: IBinaryStatus;
  perl: IBinaryStatus;
  ffmpeg: IBinaryStatus;
  ffprobe: IBinaryStatus;
  govod: IBinaryStatus;
  vaapi_dev: 'ok' | 'not_found' | 'not_readable';

  action_token: string;
};
