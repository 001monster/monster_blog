---
title: （四）嵌套路由子路由
order: 4
date: 2022-11-13
category:
    - VueRouter
tag: 
    - Vue和Router
---

![](https://image.zswei.xyz/img/202211131228554.png)

#### 嵌套路由子路由
- `App.vue`
```html
<!-- app.vue -->
<template>
  <nav>
    <router-link to="/">首页</router-link>
    <router-link to="/about">关于</router-link>
  </nav>
  <router-view></router-view>
</template>

<script>
export default {};
</script>
```
- 子组件
```html
<!-- 子组件嵌套路由 -->
<template>
  <div class="container">
    <p>Hi 你好！这是关于我的页面</p>
    <p>更多详情查看：</p>
    <nav>
      <router-link to="/about/work">工作经历</router-link>
      <router-link to="/about/education">教育经历</router-link>
    </nav>

    <!-- 需要在哪里显示嵌套的组件就在哪里使用 -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>
```

- 配置 `vueRouter`
```js
import HomePage from "./pages/HomePage.vue";
import AboutMe from "./pages/AboutMe.vue";
import WorkExperience from "./pages/about/WorkExperience.vue";
import EducationExperience from "./pages/about/EducationExperience.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/about",
    component: AboutMe,
    // 这里下面就是他的子路由
    children: [
      { path: "work", component: WorkExperience },
      { path: "education", component: EducationExperience },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

```
