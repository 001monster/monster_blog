import {
  useScrollPromise
} from "./chunk-LCZWRCVV.js";
import "./chunk-YPTPVA7L.js";
import "./chunk-ANKY43RT.js";
import "./chunk-RRVQ2EVT.js";
import "./chunk-YACYAO4R.js";
import {
  Transition,
  defineComponent,
  h
} from "./chunk-DAFWFJC4.js";
import "./chunk-MQXBTJN7.js";
import "./chunk-BPKF3OQJ.js";

// node_modules/vuepress-theme-hope/lib/client/components/transitions/FadeSlideY.js
import "D:/\u684C\u9762/monster_blog/node_modules/vuepress-theme-hope/lib/client/styles/fade-slide-y.scss";
var FadeSlideY_default = defineComponent({
  name: "FadeSlideY",
  setup(_props, { slots }) {
    const scrollPromise = useScrollPromise();
    const onBeforeEnter = scrollPromise.resolve;
    const onBeforeLeave = scrollPromise.pending;
    return () => h(Transition, {
      name: "fade-slide-y",
      mode: "out-in",
      onBeforeEnter,
      onBeforeLeave
    }, () => {
      var _a;
      return (_a = slots["default"]) == null ? void 0 : _a.call(slots);
    });
  }
});

// dep:@theme-hope_components_transitions_FadeSlideY__js
var theme_hope_components_transitions_FadeSlideY_js_default = FadeSlideY_default;
export {
  theme_hope_components_transitions_FadeSlideY_js_default as default
};
//# sourceMappingURL=@theme-hope_components_transitions_FadeSlideY__js.js.map
