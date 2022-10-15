import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "老怪兽",
      description: "vuepress-theme-hope 的博客演示",
    },
    "/en/": {
      lang: "en-US",
      title: "old monster",
      description: "A blog demo for vuepress-theme-hope",
    },
  },

  theme,

  shouldPrefetch: false,
});
