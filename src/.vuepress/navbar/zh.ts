import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "Vue全家桶",
    icon: "vue",
    prefix: "/zh/Vue/",
    children: [
      { text: "Vue全家桶", link: '', icon: 'vuequanjiatonggongju' },
      { text: "Vue基础教程", link: 'Vue/', icon: 'vue' },
      { text: "CompositionApi", link: 'VueCompositonApi/', icon: 'API' },
      { text: "Vue路由管理", link: 'VueRouter/', icon: 'daohang-' },
      { text: "Vue动画", link: 'VueTransition/', icon: 'donghua' },
      { text: "VueX状态管理", link: 'VueX/', icon: 'vuex-store' },
      { text: "Pinia状态管理", link: 'Pinia/', icon: 'boluo' },
      { text: "Vue项目开发与部署", link: 'VueProjectdeployment/', icon: 'bushu' },
      { text: "Vue底层机制", link: 'VueBottom/', icon: 'gongzuoliugongzuoliuguanli' },
    ],
  },
  {
    text: "React全家桶",
    icon: "react",
    prefix: "/zh/React/",
    children: [
      { text: "React基础教程", link: 'React-Basics/', icon: 'jichushuju' },
      { text: "React三大核心之state", link: 'React-state/', icon: 'zhuangtai' },
      { text: "React三大核心之props", link: 'React-props/', icon: 'jisuchuandi' },
      { text: "React实战项目", link: 'React-project/', icon: 'shizhanpeixun' }
    ],
  },
  {
    text: "TypeScript",
    icon: "typescript",
    prefix: "/zh/TypeScript/",
    children: [
      { text: "TypeScript基础", icon: 'typescript', link: 'Ts_Basics/' },
      { text: "Vue-and-Ts", icon: 'AwesomeVue', link: 'Vue_and_Ts/' }
    ],
  },
  {
    text: "开发杂项",
    icon: "huizong",
    prefix: "/zh/blend/",
    children: [
      { text: "css杂项", icon: 'qianduankaifa', link: 'css/' },
      { text: "js杂项", icon: 'js', link: 'js/' },
      { text: "vue杂项", icon: 'vue', link: 'vue/' }
    ],
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
