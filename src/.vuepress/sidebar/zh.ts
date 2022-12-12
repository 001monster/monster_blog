import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({

  "/zh/Vue/": [{ text: "Vue全家桶", icon: 'vuequanjiatonggongju', prefix: "", children: "structure" }],

  "/zh/Vue/Vue/": [{ text: "Vue基础教程", icon: 'vue', link: "", children: "structure" }],

  "/zh/Vue/VueCompositonApi/": [{ text: "CompositionApi", icon: 'API', prefix: "", children: "structure" }],

  "/zh/Vue/VueRouter/": [{ text: "Vue路由管理", icon: "daohang", prefix: "", children: "structure" }],

  "/zh/Vue/VueTransition/": [{ text: "Vue动画", icon: "donghua", prefix: "", children: "structure" }],

  "/zh/Vue/VueX/": [{ text: "VueX状态管理", icon: "vuex-store", prefix: "", children: "structure" }],

  "/zh/Vue/Pinia/": [{ text: "Pinia状态管理", icon: "boluo", prefix: "", children: "structure" }],

  "/zh/Vue/VueProjectdeployment/": [{ text: "Vue项目开发与部署", icon: "bushu", prefix: "", children: "structure" }],

  "/zh/Vue/VueBottom/": [{ text: "Vue底层机制", icon: "gongzuoliugongzuoliuguanli", prefix: "", children: "structure" }],

  "/zh/blend/js/": [{ text: "js杂项", icon: 'js', prefix: "", children: "structure" }],

  "/zh/blend/css/": [{ text: "css杂项", icon: 'CSS', prefix: "", children: "structure" }],

  "/zh/TypeScript/Ts_Basics/": [{ text: "Ts基础入门", icon: 'typescript', prefix: "", children: "structure" }],

  "/zh/TypeScript/Vue_and_Ts/": [{ text: "Vue-and-Ts", icon: 'AwesomeVue', prefix: "", children: "structure" }],
});