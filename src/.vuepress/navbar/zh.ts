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
      { text: "三大核心:state", link: 'React-state/', icon: 'zhuangtai' },
      { text: "三大核心:props", link: 'React-props/', icon: 'jisuchuandi' },
      { text: "三大核心:refs", link: 'React-refs/', icon: 'icon' },
      { text: "受控组件和非受控组件", link: 'React-event/', icon: 'kongzhizhongxin' },
      { text: "高阶函数与柯里化", link: 'React-senior/', icon: 'hanshu' },
      { text: "组件的生命周期", link: 'React-file/', icon: 'shengmingzhouqi' },
      { text: "react应用(基于react脚手架)", link: 'React-cli/', icon: 'jiaoshoujia-xian' },
      { text: "react发送网络请求", link: 'React-ajax/', icon: 'wangluo' },
      { text: "react路由管理", link: 'React-router/', icon: 'luyouqi' },
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
      { text: "ios杂项", icon: 'ios', link: 'ios/' },
      { text: "css杂项", icon: 'qianduankaifa', link: 'css/' },
      { text: "js杂项", icon: 'js', link: 'js/' },
      { text: "vue杂项", icon: 'vue', link: 'vue/' },
      { text: "服务器杂项", icon: 'fuwuqi', link: 'server/' }
    ],
  },
  {
    text: "前端面试题",
    icon: "huizong",
    prefix: "/zh/interview/",
    children: [
      { text: "JavaScript面试题", icon: 'mianshianpai', link: 'JavaScript/' },
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
  },
  // {
  //   text: "小王同学的笔记",
  //   icon: "ps",
  //   prefix: "/zh/wangjing/",
  //   children: [
  //     { text: "作品集", icon: 'tupian', link: 'works/' },
  //     { text: "ps笔记", icon: 'ps', link: 'ps/' }
  //   ],
  // }
]);
