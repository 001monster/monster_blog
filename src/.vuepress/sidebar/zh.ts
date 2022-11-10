import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/note/": [
    "",
    {
      text: "veu",
      icon: "vue",
      prefix: "vue/",
      collapsable: true,
      children: "structure"
    },
    {
      text: "VueCompositonApi",
      icon: "API",
      prefix: "VueCompositonApi/",
      collapsable: true,
      children: "structure"
    },
    {
      text: "Vue背后机制",
      icon: "gongzuoliugongzuoliuguanli",
      prefix: "VueBottom/",
      collapsable: true,
      children: "structure"
    },
    {
      text: "Vue动画过渡",
      icon: "donghua",
      prefix: "vueTransition/",
      collapsable: true,
      children: "structure"
    }
  ],

  "/zh/diary/": [
    "",
    {
      text: "前端",
      icon: "test",
      prefix: "Poetry/",
      collapsable: true,
      children: "structure"
    }
  ],

  "/zh/zsw/": [
    "",
    {
      text: "CSS常用代码",
      icon: 'CSS',
      prefix: "css/",
      children: "structure"
    },
    {
      text: "JS常用代码",
      icon: 'js',
      prefix: "js/",
      children: "structure"
    }
  ],
});
