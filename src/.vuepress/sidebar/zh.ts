import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/Vue/": [
    "",
    {
      text: "Veu",
      icon: "vue",
      prefix: "Vue/",
      collapsable: true,
      children: "structure"
    },
    {
      text: "CompositonApi",
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
      prefix: "VueTransition/",
      collapsable: true,
      children: "structure"
    },
    {
      text: "Vue项目开发与部署",
      icon: "bushu",
      prefix: "VueProjectdeployment/",
      collapsable: true,
      children: "structure"
    },
    {
      text: "VueRouter路由",
      icon: "daohang-",
      prefix: "VueRouter/",
      collapsable: true,
      children: "structure"
    },
    {
      text: "VueX状态管理",
      icon: "vuex-store",
      prefix: "VueX/",
      collapsable: true,
      children: "structure"
    },
    {
      text: "Pinia状态管理",
      icon: "boluo",
      prefix: "Pinia/",
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

  "/zh/TypeScript/Ts_Basics/": [
    "",
    {
      text: "Ts基础入门",
      icon: 'typescript',
      prefix: "",
      children: "structure"
    }
  ],
});
