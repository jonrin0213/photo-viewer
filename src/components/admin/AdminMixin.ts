import { defineComponent, PropType } from "vue";
import { ISystemStatus, ISystemConfig, IBinaryStatus } from "./AdminTypes";
import axios from "@nextcloud/axios";

const NcCheckboxRadioSwitch = () =>
  import("@nextcloud/vue/dist/Components/NcCheckboxRadioSwitch");
const NcNoteCard = () => import("@nextcloud/vue/dist/Components/NcNoteCard");
const NcTextField = () => import("@nextcloud/vue/dist/Components/NcTextField");
import NcLoadingIcon from "@nextcloud/vue/dist/Components/NcLoadingIcon";
import NcButton from "@nextcloud/vue/dist/Components/NcButton";

export default defineComponent({
  name: "AdminMixin",

  components: {
    NcCheckboxRadioSwitch,
    NcNoteCard,
    NcTextField,
    NcLoadingIcon,
    NcButton,
  },

  props: {
    status: {
      type: Object as PropType<ISystemStatus>,
      required: false,
    },
    config: {
      type: Object as PropType<ISystemConfig>,
      required: true,
    },
  },

  methods: {
    update(key: keyof ISystemConfig, value: any = null) {
      this.$emit("update", key, value);
    },

    binaryStatus(name: string, status: IBinaryStatus): string {
      const noescape = {
        escape: false,
        sanitize: false,
      };
      if (status === "ok") {
        return this.t("memories", "{name} binary exists and is executable.", {
          name,
        });
      } else if (status === "not_found") {
        return this.t("memories", "{name} binary not found.", { name });
      } else if (status === "not_executable") {
        return this.t("memories", "{name} binary is not executable.", {
          name,
        });
      } else if (status.startsWith("test_fail")) {
        return this.t(
          "memories",
          "{name} failed test: {info}.",
          {
            name,
            info: status.substring(10),
          },
          0,
          noescape
        );
      } else if (status.startsWith("test_ok")) {
        return this.t(
          "memories",
          "{name} binary exists and is usable ({info}).",
          {
            name,
            info: status.substring(8),
          },
          0,
          noescape
        );
      } else {
        return this.t("memories", "{name} binary status: {status}.", {
          name,
          status,
        });
      }
    },

    binaryStatusType(status: IBinaryStatus, critical = true): string {
      if (status === "ok" || status.startsWith("test_ok")) {
        return "success";
      } else if (
        status === "not_found" ||
        status === "not_executable" ||
        status.startsWith("test_fail")
      ) {
        return critical ? "error" : "warning";
      } else {
        return "warning";
      }
    },
  },

  computed: {
    requestToken() {
      return (<any>axios.defaults.headers).requesttoken;
    },

    actionToken() {
      return this.status?.action_token || "";
    },

    /** Reverse of memories.vod.disable, unfortunately */
    enableTranscoding: {
      get() {
        return !this.config["memories.vod.disable"];
      },
      set(value: boolean) {
        this.config["memories.vod.disable"] = !value;
      },
    },
  },
});
