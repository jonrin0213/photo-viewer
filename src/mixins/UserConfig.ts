import axios from '@nextcloud/axios';
import { emit, subscribe, unsubscribe } from '@nextcloud/event-bus';
import { API } from '../services/API';
import { defineComponent } from 'vue';
import { IConfig } from '../types';
import staticConfig from '../services/static-config';

const eventName = 'memories:user-config-changed';
const localSettings: (keyof IConfig)[] = [
  'square_thumbs',
  'full_res_on_zoom',
  'full_res_always',
  'show_face_rect',
  'album_list_sort',
];

export default defineComponent({
  name: 'UserConfig',

  data: () => ({
    config: { ...staticConfig.getDefault() },
    configEventName: eventName,
  }),

  created() {
    subscribe(eventName, this.updateLocalSetting);
    this.refreshFromConfig();
  },

  beforeDestroy() {
    unsubscribe(eventName, this.updateLocalSetting);
  },

  methods: {
    async refreshFromConfig() {
      const config = await staticConfig.getAll();
      const changed = Object.keys(config).filter((key) => config[key] !== this.config[key]);
      if (changed.length === 0) return;

      changed.forEach((key) => (this.config[key] = config[key]));
      emit(eventName, { setting: null, value: null });
    },

    updateLocalSetting({ setting, value }) {
      if (setting) {
        this.config[setting] = value;
      }
    },

    async updateSetting<K extends keyof IConfig>(setting: K, remote?: string) {
      const value = this.config[setting];

      if (!localSettings.includes(setting)) {
        await axios.put(API.CONFIG(remote ?? setting), {
          value: value.toString(),
        });
      }

      staticConfig.setLs(setting, value);

      emit(eventName, { setting, value });
    },
  },
});
