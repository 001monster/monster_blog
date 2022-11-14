---
title: （十七）全局导航守卫
order: 17
date: 2022-11-14
category:
    - VueRouter
---

![](https://image.zswei.xyz/img/202211142321472.png)

#### 全局导航守卫

1. 全局路由导航
```js
// 导航刚触发、组件还没有加载，且导航发生实际跳转之前
router.beforeEach((to, form) => {
  console.log('全局路由守卫')
})

// 导航守卫执行完毕，且组件加载完成，组件中的导航守卫执行完毕之后，且导航实际跳转前执行
router.beforeResolve((to) => {
  if(to.path.startsWith('blogs')) {
    console.log('用户已经登录')
  }
})

// 导航确认并实际跳转之后执 - 可以操作 DOM 可以进行埋点统计数据，可以创建多个他们会按照顺序执行
router.afterEach((to) => {
  document.title = to.path
})
```

#### 一、使用全局路由
```js
...

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  ...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const loggedIn = true;

router.beforeEach((to, from) => {
  // console.log(from);
  // console.log(to);

  // 这个写法只限制 /blogs 如果访问其他 /blogs/news 还是能正常跳转
  if (to.path === "/blogs") {}

  // 如果要验证所有以 /blogs 开始的路由就使用下面这个方法 to.path.startWith
  if (to.path.startsWith("/blogs")) {
    // return false;
    if (!loggedIn) {
      return "/login";

      // 可以返回字符串 url 也可以返回 对象
      // return { path: "/login" };
      // return { name: "login" };
    }
  }
});

// 路由跳转之后，组件加载完毕，实际跳转之前
router.beforeResolve((to) => {
  if (to.path.startsWith("/blogs")) {
    console.log("用户已登录...");
  }
});

// 跳转成，可以操作 DOM
router.afterEach((to) => {
  document.title = to.path;
});

export default router;

```