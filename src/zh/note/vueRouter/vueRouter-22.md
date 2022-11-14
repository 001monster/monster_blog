---
title: （二十二）路由组件的懒加载
order: 22
date: 2022-11-14
category:
    - VueRouter
---

![](https://image.zswei.xyz/img/202211142323441.png)

#### 路由组件的懒加载
:::info 说明
我们之前使用过组件异步加载，现在我们还可以使用路由懒加载，进一步优化项目
:::

#### 一、不使用懒加载
```js
import BlogListPage from "./pages/BlogListPage.vue";
import BlogPostPage from "./pages/BlogPostPage.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: BlogListPage,
  },
  {
    path: "/:postId",
    component: BlogPostPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
```
- 可以看到所有的组件在页面一加载的时候就全部都加载完了

![](https://image.zswei.xyz/img/202211141538684.png)


#### 二、使用路由懒加载
```js
const BlogListPage = () => import("./pages/BlogListPage.vue");
const BlogPostPage = () => import("./pages/BlogPostPage.vue");

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: BlogListPage,
  },
  {
    path: "/:postId",
    component: BlogPostPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
```
- 可以看到现在就只加载目前使用到的组件

![](https://image.zswei.xyz/img/202211141541490.png)