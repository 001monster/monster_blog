import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/note/": [
    "",
    {
      text: "前端",
      icon: "qianduankaifa",
      prefix: "front-end/",
      collapsable: true,
      children: "structure"
    },

    {
      text: "后端",
      icon: "houduankaifa",
      prefix: "back-end/",
      collapsable: true,
      children: "structure"
    },

    {
      text: "veu",
      icon: "vue",
      prefix: "vue/",
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
