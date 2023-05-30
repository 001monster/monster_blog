import { defineUserConfig } from "vuepress";
import { sitemapPlugin } from "vuepress-plugin-sitemap2";
import { seoPlugin } from "vuepress-plugin-seo2";
import docsearchPlugin from "@vuepress/plugin-docsearch";
// import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "老怪兽",
      description: "@会敲代码的怪兽",
    },
  },

  theme,

  head: [
    // 导入一个外部脚本
    ["script", { src: "/myScript.js" }]
  ],

  shouldPrefetch: false,

  plugins: [
    sitemapPlugin({
      hostname: 'https://www.zswei.xyz'
    }),
    seoPlugin({
      hostname: 'https://www.zswei.xyz'
    }),
    docsearchPlugin({
      appId: "HDVBEPINCC",
      apiKey: "893ad5918e8c53ad305f203c34c3e30b",
      indexName: "zswei",
      locales: {
        "/": {
          placeholder: "搜素文档",
          translations: {
            button: {
              buttonText: "搜索",
              buttonAriaLabel: "搜索",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          },
        },
      },
    }),
    // searchProPlugin({
    //   // 配置选项
    //   indexContent: true
    // })
  ],
});
