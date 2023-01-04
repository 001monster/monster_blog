---
title: （三）安装配置VueRouter
order: 3
date: 2022-11-13
category:
    - VueRouter
tag: 
    - Vue和Router
---

![](https://image.zswei.xyz/img/202211131212917.png)


#### 一、安装 `vueRouter` 

::: tabs
@tab:active npm
```sh
npm install --save vue-router@4
```

@tab Yarn
```sh
yarn add vue-router@4
```

:::

#### 二、配置 `vue-router` 
:::info 配置
- 在 `src` 下面新建文件夹 `router` 并新建文件 `router.js`

- 配置 `vuerouter.js` 
```js
// 1. 导入需要使用路由跳转的页面
import PageOne from "./components/PageOne.vue";
import PageTwo from "./components/PageTwo.vue";
import PageThree from "./components/PageThree.vue";

// 2. 导入router 依赖
import { createRouter, createWebHistory } from "vue-router";

// 3. 定义一个routes 数组
const routes = [
  {
    path: "/",
    component: PageOne,
  },
  {
    path: "/2",
    component: PageTwo,
  },
  {
    path: "/3",
    component: PageThree,
  },
];

// 4. 配置router参数
const router = createRouter({
  // 配置router 的方式
  history: createWebHistory(),
  // 配置routes
  // routes：routes
  routes
})

// 5. 导出router
export default router
```

- 全局使用 `vueRouter`
```js
import { createApp } from "vue";
import App from "./App.vue";
// 引入router
import router from "./routes";

const app = createApp(App);

// 使用router
app.use(router);

app.mount("#app");

```

- 使用 `router` 的组件进行跳转
```html
<template>
  <nav>
    <!-- router-linke 用于页面跳转 -->
    <router-link to="/">页面1</router-link>
    <router-link to="/2">页面2</router-link>
    <router-link to="/3">页面3</router-link>
  </nav>

  <!-- 渲染当前页面下对应的组件 -->
  <router-view></router-view>
</template>

<script>
</script>
```
:::