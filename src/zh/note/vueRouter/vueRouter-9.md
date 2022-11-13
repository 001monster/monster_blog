---
title: （九）命名路由精确控制跳转
order: 9
date: 2022-11-13
category:
    - VueRouter
---

![](https://image.zswei.xyz/img/202211131647368.png)

#### 使用命名路由精确控制跳转
::::info  说明
我们通过前面的学习发现了，难免会应为命名的优先级情况出现匹配错误的问题，为了解决这个问题，`vueRouter` 给我们命名路由的时候提供了 `name`

![](https://image.zswei.xyz/img/202211131649405.png)
:::
- 给 `router` 取名
```js
cosnt routes = [{
    path: '/posts/:id',
    name: 'post',
    component: BolgPostPage
}]
```

- 使用 `router` 取名
```js
// 名字要和 route 取的名字一样
<router-link :to="{name: 'post'}">
内容详情页
</router-link>

// 传递 params，query 参数
<router-link 
    :to="{
        name: 'post', 
        params: {id: 50, name: '张三'}，
        query: {order: 'desc', gender: '男'}
    }"
>
内容详情页
</router-link>
```
*以上这种方式就叫做命名路由*


#### 一、使用场景
```js
import BlogPostPage from "./pages/BlogPostPage.vue";
import UserDetailsPage from "./pages/UserDetailsPage.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    // path: "/posts/:id",
    path: "/:id",
    name: "post",
    component: BlogPostPage,
  },
  {
    // path: "/users/:id",
    path: "/:id",
    name: "userDetails",
    component: UserDetailsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
```
*以上这种编写方式是故意写成了有歧义的路由，但是因为我们是通过命名路由的方式来访问路由的所以他会精确的找到自己所需要的路由*

![](https://image.zswei.xyz/img/202211131659423.png)