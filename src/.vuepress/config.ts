import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "老怪兽",
      description: "@会敲代码的怪兽",
    },
    "/en/": {
      lang: "en-US",
      title: "old monster",
      description: "@A monster that can tap code",
    },
  },

  theme,

  shouldPrefetch: false,
});
