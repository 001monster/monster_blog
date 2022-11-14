---
title: （十八）路由导航守卫
order: 18
date: 2022-11-14
category:
    - VueRouter
---

![](https://image.zswei.xyz/img/202211132216232.png)

#### 路由导航守卫
:::info 说明
路由导航守卫，支持对每一个路由进行设置 `beforeEnter` 路由实际跳转前做的操作
:::

```js
...

import { createRouter, createWebHistory } from "vue-router";

const loggedIn = true;

const routes = [
  {
    path: "/blogs",
    component: BlogManagement,
    children: [
      {
        path: "new",
        components: {
          default: AddBlog,
          rightSideBar: RightSidebar,
        },
      },
      {
        path: "details/:postId",
        component: BlogDetails,
        beforeEnter(to, from) {
          console.log(to);
          console.log(from);
        },
      },
    ],
    // 对所有子路由也生效
    beforeEnter(to, from) {
      if (!loggedIn) {
        return "/login";
      }
    },

    // 它还可以是一个数据，这样写的好处是，多个路由可以共同使用一个函数
    beforeEnter: [authBlogsPage],
  },
];

function authBlogsPage(to, from) {
  if (!loggedIn) {
    return "/login";
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

```

#### 总结：写在最后
:::info 总结
对路由设置了路由导航对他的子路由也是生效的，同时 `beforeEnter` 还可以是一个数组，这个样写的好处是多个路由可以使用同一个函数，需要注意的是如果是带参数的相同页面跳转他是不会重复调用
:::