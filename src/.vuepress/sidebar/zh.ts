import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  // vue
  "/zh/Vue/Vue/": [{ text: "Vue基础教程", icon: 'vue', link: "", children: "structure" }],
  "/zh/Vue/VueCompositonApi/": [{ text: "CompositionApi", icon: 'API', prefix: "", children: "structure" }],
  "/zh/Vue/VueRouter/": [{ text: "Vue路由管理", icon: "daohang", prefix: "", children: "structure" }],
  "/zh/Vue/VueTransition/": [{ text: "Vue动画", icon: "donghua", prefix: "", children: "structure" }],
  "/zh/Vue/VueX/": [{ text: "VueX状态管理", icon: "vuex-store", prefix: "", children: "structure" }],
  "/zh/Vue/Pinia/": [{ text: "Pinia状态管理", icon: "boluo", prefix: "", children: "structure" }],
  "/zh/Vue/VueProjectdeployment/": [{ text: "Vue项目开发与部署", icon: "bushu", prefix: "", children: "structure" }],
  "/zh/Vue/VueBottom/": [{ text: "Vue底层机制", icon: "gongzuoliugongzuoliuguanli", prefix: "", children: "structure" }],


  // react
  "/zh/React/React-Basics/": [{text: 'React基础', icon: 'jichushuju', prefix: "", children: "structure"}],
  "/zh/React/React-state/": [{text: '三大核心:state', icon: 'zhuangtai', prefix: "", children: "structure"}],
  "/zh/React/React-props/": [{text: '三大核心:props', icon: 'jisuchuandi', prefix: "", children: "structure"}],
  "/zh/React/React-refs/": [{text: '三大核心:refs', icon: 'icon', prefix: "", children: "structure"}],
  "/zh/React/React-project/": [{text: 'React项目实战', icon: 'shizhanpeixun', prefix: "", children: "structure"}],


  // js css vue
  "/zh/blend/js/": [{ text: "js杂项", icon: 'js', prefix: "", children: "structure" }],
  "/zh/blend/css/": [{ text: "css杂项", icon: 'CSS', prefix: "", children: "structure" }],
  "/zh/blend/vue/": [{ text: "vue杂项", icon: 'vue', prefix: "", children: "structure" }],


  // ts
  "/zh/TypeScript/Ts_Basics/": [{ text: "Ts基础入门", icon: 'typescript', prefix: "", children: "structure" }],
  "/zh/TypeScript/Vue_and_Ts/": [{ text: "Vue-and-Ts", icon: 'AwesomeVue', prefix: "", children: "structure" }],
});