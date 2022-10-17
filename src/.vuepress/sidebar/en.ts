import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/note/": [
    "",
    {
      text: "前端",
      icon: "creative",
      prefix: "front-end/",
      collapsable: true,
      children: "structure"
    },

    {
      text: "后端",
      icon: "creative",
      prefix: "back-end/",
      collapsable: true,
      children: "structure"
    }
  ],

  "/en/diary/": [
    "",
    {
      text: "前端",
      icon: "creative",
      prefix: "Poetry/",
      collapsable: true,
      children: "structure"
    }
  ],

  "/en/test/": [
    "",
  ],
});
