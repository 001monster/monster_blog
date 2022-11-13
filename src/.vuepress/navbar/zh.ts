import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "前端代码代码笔记",
    icon: "yongyan",
    prefix: "/zh/note/",
    children: [
      { text: "前端代码笔记", link: "", icon: "biji", activeMatch: "^/zh/note/$" },
      { text: "vue", children: ['vue/'] },
    ],
  },
  {
    text: "常用开发汇总",
    icon: "huizong",
    link: "/zh/zsw/",
  }
]);
