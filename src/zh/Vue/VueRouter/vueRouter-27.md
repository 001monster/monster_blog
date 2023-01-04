---
title: （二十七）路由过度动画
order: 27
date: 2022-11-14
category:
    - VueRouter
tag: 
    - Vue和Router
---

![](https://image.zswei.xyz/img/202211142324437.png)

#### 路由过度动画


#### 一、复习 `dom` 组件的动画
- 给多个元素添加动画

![](https://image.zswei.xyz/img/202211142117624.png)

- 自动应用这些样式

![](https://image.zswei.xyz/img/202211142117119.png)

#### 二、`vue-router` 实现动画过渡

- 路由跳转实现渐隐渐显的效果

```js
// 使用封装的 router-link 来做
<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>

  {/* v-slot 还接受第二个参数 router */}
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'fade'" mode="out-in">
      <component :is="Component" />

      <!-- 对于 /1，/2类似的跳转，组件会进行复用，过渡不会执行。添加 key 可以强制执行过渡 -->
      <!-- <component :is="Component" :key="route.path" /> -->
    </transition>
  </router-view>
</template>
<script></script>
```

- 不同组件设置不容的过度动画，通过 `meta` 来设置

```js
const routes = [
  {
    path: "/",
    component: BlogListPage,
    meta: {
      transition: "fade",
    },
  },
  {
    path: "/:postId",
    component: BlogPostPage,
    meta: {
      transition: "fadeAndMove",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
```