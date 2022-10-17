import {
  client_exports
} from "./chunk-ANKY43RT.js";
import {
  useRoute
} from "./chunk-RLCMQTEQ.js";
import "./chunk-YACYAO4R.js";
import {
  computed,
  defineComponent,
  h,
  onMounted,
  ref
} from "./chunk-ACN7CFPX.js";
import "./chunk-WFBTEJUR.js";
import "./chunk-BPKF3OQJ.js";

// node_modules/vuepress-plugin-comment2/lib/client/components/Giscus.js
import "D:/\u684C\u9762/\u9879\u76EE\u96C6\u5408/old_master_blog/monster/node_modules/vuepress-plugin-comment2/lib/client/styles/giscus.scss";
var e = COMMENT_OPTIONS;
var k = Boolean(e.repo && e.repoId && e.category && e.categoryId);
var i = ["de", "gsw", "en", "es", "fr", "id", "it", "ja", "ko", "pl", "ro", "ru", "vi", "zh-CN", "zh-TW"];
var P = defineComponent({ name: "GiscusComment", props: { darkmode: Boolean }, setup(s) {
  const p = (0, client_exports.usePageFrontmatter)(), u = useRoute(), r = ref(false), c = computed(() => {
    const t = (0, client_exports.usePageLang)().value;
    if (i.includes(t))
      return t;
    const o = t.split("-")[0];
    return i.includes(o) ? o : "en";
  }), d = computed(() => {
    if (!k)
      return false;
    const t = e.comment !== false, o = p.value.comment;
    return Boolean(o) || t !== false && o !== false;
  }), m = computed(() => {
    var _a, _b;
    return { repo: e.repo, repoId: e.repoId, category: e.category, categoryId: e.categoryId, lang: c.value, theme: s.darkmode ? (_a = e.darkTheme) != null ? _a : "dark" : (_b = e.lightTheme) != null ? _b : "light", mapping: e.mapping || "pathname", term: (0, client_exports.withBase)(u.path), inputPosition: e.inputPosition || "top", reactionsEnabled: e.reactionsEnabled !== false ? "1" : "0", strict: e.strict !== false ? "1" : "0", emitMetadata: "0" };
  });
  return onMounted(async () => {
    await import("./giscus-TZVSQWGI.js"), r.value = true;
  }), () => h("div", { class: ["giscus-wrapper", { "input-top": e.inputPosition !== "bottom" }], style: { display: d.value ? "block" : "none" } }, r.value ? h("giscus-widget", m.value) : h("div", { style: "text-align:center" }, "Loading..."));
} });

// dep:@CommentProvider
var CommentProvider_default = P;
export {
  CommentProvider_default as default
};
//# sourceMappingURL=@CommentProvider.js.map
