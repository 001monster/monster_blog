import { defineUserConfig } from "vuepress";
import { sitemapPlugin } from "vuepress-plugin-sitemap2";
import { seoPlugin } from "vuepress-plugin-seo2";
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

  plugins: [
    sitemapPlugin({
      hostname: 'https://www.zswei.xyz'
    }),
    seoPlugin({
      hostname: 'https://www.zswei.xyz'
    }),
  ],
});
