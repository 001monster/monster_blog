---
title: （二十）路由 meta 元数据
order: 20
date: 2022-11-14
category:
    - VueRouter
---

![](https://image.zswei.xyz/img/202211142322478.png)

#### 路由 meta 元数据

1. 可以使用 `meta` 来改变 网站的 `title`

2. 二可以用来判断用户是否登录，也可以做权限验证
```js
...
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/blogs",
    component: BlogManagement,
    meta: { private: true }, // 3. 合并，值必须一致，否则重复的属性，会以最后一个属性值为准，子路由的 meta 属性可以省略
    children: [
      {
        path: "new",
        components: {
          default: AddBlog,
          rightSideBar: RightSidebar,
        },
        // 登录后才可以查看次路由
        meta: { private: true },
      },
      {
        path: "details",
        component: BlogDetails,
        // 登录之后才可以查看路由
        meta: { private: true },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const loggedIn = false;

router.beforeEach((to, from) => {
  // 1.  打印 to.matched
  console.log(to);

  // 2. 判断匹配的路由是否是私密路由
  // if (to.matched.some((record) => record.meta.private) && !loggedIn) {
  //   return "/login";
  // }
  // 3. meta 合并 判断匹配的路由是否是私密路由
  if (to.meta.private && !loggedIn) {
    return "/login";
  }
});

export default router;

```

- 这里我我们需要注意一些这个个参数 `matched` 

![](https://image.zswei.xyz/img/202211141509306.png)

:::info 说明
这个属性的意思是，访问当前路由，匹配了他多少上级路由，他是一个数组
:::

### 总结：写在最后
:::info 总结
需要注意的是 `meta` 这个属性对象，会把他下面的所有 `meta` 进行合并，如果有重名的就会被覆盖（子路由覆盖父路由）
:::