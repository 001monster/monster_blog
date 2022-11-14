---
title: （二十三）给组件传值 Props
order: 23
date: 2022-11-14
category:
    - VueRouter
---

![](https://image.zswei.xyz/img/202211142323761.png)

#### 给组件传值 Props
:::info 说明
目前我们给组件传递参数，主要是使用动态路由来传递的参数，`vue-router` 也支持通过组件属性的方式来传递数据 `props` 
:::

- 使用 `pros` 传递数据的语法
```js
// 1. 先在展示详情的组件接收  props 
props: ['postId']

created() {
  console.log(postsId)
}
```

- 如果需要使用 `props` 来传递数据，就需要在 `router.js` 当中 设置 `props` 的属性未 `true`
```js
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/:postId",
    component: BlogPostPage,
    // 设置 props 为true 就可以开始使用prop是传递数据了
    props: true,
    // 可以固定传递 props
    props: { postId: 5 },
    // props 可以是一个函数他返回一个键值对，可以在里面做一些业务逻辑操作
    props: (route) => {
      console.log(route);
      // 实例 对数据进行 类型转化
      return { postId: Number(route.params.postId) };
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
```