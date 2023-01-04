---
title: （十四）在嵌套路由中使用命名视图
order: 14
date: 2022-11-14
category:
    - VueRouter
tag: 
    - Vue和Router
---

![](https://image.zswei.xyz/img/202211142320430.png)

#### 在嵌套路由中使用命名视图
:::info 说明
如果我们要做到如下图着两个效果，就可以使用命名视图
:::
- 右侧显示博客标题和分类

![](https://image.zswei.xyz/img/202211140952494.png)

- 右侧显示博客详情

![](https://image.zswei.xyz/img/202211140954190.png)

#### 是由使用命名路由完成效果

- `router.js` 配置

```js
import AddBlog from "./pages/AddBlog.vue";
import BlogDetails from "./pages/BlogDetails.vue";
import BlogManagement from "./pages/BlogManagement.vue";
import RightSidebar from "./pages/RightSidebar.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/blogs",
    component: BlogManagement,
    children: [
      {
        path: "new",
        // 使用命名视图，右侧展示两个视图
        components: {
          default: AddBlog,
          rightSideBar: RightSidebar,
        },
      },
      {
        path: "details",
        // 右侧只显示一个视图
        component: BlogDetails,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
```

- 组件使用命名视图
```html
<template>
  <div class="container">
    <aside class="leftSideBar">
      <h2>博客管理</h2>
      <nav>
        <router-link to="/blogs/new">添加博客</router-link>
        <router-link to="/blogs/details">博客详情</router-link>
      </nav>
    </aside>
    <main class="content">
      <!-- 默认视图 -->
      <router-view></router-view>
      <!-- 右侧分类视图 -->
      <router-view name="rightSideBar"></router-view>
    </main>
  </div>
</template>
```