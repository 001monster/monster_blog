import {
  PasswordModal_default,
  useGlobalEcrypt
} from "./chunk-RIXSSPKG.js";
import "./chunk-ERH5PQIG.js";
import "./chunk-LCZWRCVV.js";
import "./chunk-YPTPVA7L.js";
import "./chunk-ANKY43RT.js";
import "./chunk-RRVQ2EVT.js";
import "./chunk-YACYAO4R.js";
import {
  defineComponent,
  h
} from "./chunk-DAFWFJC4.js";
import "./chunk-MQXBTJN7.js";
import "./chunk-BPKF3OQJ.js";

// node_modules/vuepress-theme-hope/lib/client/modules/encrypt/components/GloablEncrypt.js
var GloablEncrypt_default = defineComponent({
  name: "GlobalEncrypt",
  setup(_props, { slots }) {
    const { isGlobalEncrypted, validateGlobalToken } = useGlobalEcrypt();
    return () => {
      var _a;
      return isGlobalEncrypted.value ? h(PasswordModal_default, { full: true, onVerify: validateGlobalToken }) : ((_a = slots["default"]) == null ? void 0 : _a.call(slots)) || null;
    };
  }
});

// dep:@theme-hope_modules_encrypt_components_GloablEncrypt__js
var theme_hope_modules_encrypt_components_GloablEncrypt_js_default = GloablEncrypt_default;
export {
  theme_hope_modules_encrypt_components_GloablEncrypt_js_default as default
};
//# sourceMappingURL=@theme-hope_modules_encrypt_components_GloablEncrypt__js.js.map
