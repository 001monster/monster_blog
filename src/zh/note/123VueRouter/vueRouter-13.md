---
title: （十三）命名视图
order: 13
date: 2022-11-13
category:
    - VueRouter
---

![](https://image.zswei.xyz/img/202211132216232.png)

#### 命名视图同一个路由渲染多个组件
:::info 说明
命名视图可以通过 `<router-view/>` 设置那么 `name` 属性，然后在路由配置对象，中根据路由属性展示不同的组件
:::
- 组成一个页面的布局，这个方式跟命名的 `slot` 方式类似
```html
<template>
  <nav>
    <router-view name="nav"></router-view>
  </nav>
  <main>
    <!-- 如果这里没有设置 name 他会隐式转换 name="default" -->
    <router-view></router-view>
  </main>
  <footer>
    <router-view name="footer"></router-view>
  </footer>
</template>
```

![](https://image.zswei.xyz/img/202211132219230.png)

- 设置 `router.js` 使用命名视图
```js
/**
 * 语法
 * component: {
 *  key- 是router-view 的 name 值 ：value- 是要展示的组件
 * }
 */
const routes = [
  {
    path: "/",
    components: {
      nav: NavBar,
      default: HomePage,
      footer: FooterView,
    },
  },
  {
    path: "/about",
    components: {
      // 如果这里不写 就不会渲染这个组件
      // nav: NavBar,
      default: AboutMe,
      footer: FooterViewAbout,
    },
  },
];
```

![](https://image.zswei.xyz/img/202211132224424.png)