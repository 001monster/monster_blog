import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
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
    text: "代码笔记",
    icon: "edit",
    prefix: "/zh/note/",
    children: [
      { text: "代码笔记", link: "", icon: "note", activeMatch: "^/zh/note/$" },
      { 
        text: "前端",
        children: ['front-end/']
      },
      { 
        text: "后端",
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
