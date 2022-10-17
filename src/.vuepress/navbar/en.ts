import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  // {
  //   text: "随笔",
  //   icon: "edit",
  //   prefix: "/zh/diary/",
  //   children: [
  //     { text: "代码笔记", link: "", icon: "note", activeMatch: "^/zh/diary/$" },
  //     { 
  //       text: "春之诗",
  //       children: ["Poetry/"]
  //     }
  //   ],
  // },

  {
    text: "CodeNotes",
    icon: "edit",
    prefix: "/en/note/",
    children: [
      { text: "old monster the code notes", link: "", icon: "note", activeMatch: "^/en/note/$" },
      { 
        text: "FrontEnd",
        children: ['front-end/']
      },
      { 
        text: "BackEnd",
        children: ['back-end/']
      },
    ],
  },

  // {
  //   text: "软件教程",
  //   icon: "edit",
  //   prefix: "/zh/test/",
  //   children: [
  //     ""
  //   ],
  // },
]);

