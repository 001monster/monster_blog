import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "前端代码代码笔记",
    icon: "yongyan",
    prefix: "/zh/Vue/",
    children: [
      { text: "vue", children: [''] }
    ],
  },
  {
    text: "TypeScript",
    icon: "typescript",
    prefix: "/zh/TypeScript/",
    children: [
      { text: "TypeScript基础", link: 'Ts_Basics/' }
    ],
  },
  {
    text: "常用开发汇总",
    icon: "huizong",
    link: "/zh/zsw/",
  },
  {
    text: "项目",
    icon: "fuwuxiangmu",
    link: "/zh/project/",
  },
  {
    text: "导航",
    icon: "daohang01",
    link: "/zh/navLable/",
  }
]);
