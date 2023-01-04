---
title: （十九）组件导航守卫
order: 19
date: 2022-11-14
category:
    - VueRouter
tag: 
    - Vue和Router
---

![](https://image.zswei.xyz/img/202211142322847.png)

#### 组件导航守卫
:::info 说明
这里指的导航守卫，是在 `router.js` 里面配置了的路由组件，其他不同组件配置不了
:::

- 组件导航
```js
export default {
  // 导航跳转时，组件创建前，他只在组件渲染第一次执行
  beforeRouteEnter(to, from ) {
    // 现在还不能访问this
    console.log('做一些操作阻止路由跳转')
  }

  // 导航跳转时，且复用组件时，数据更新他也会调用
  beforeRouteUpdate(ro, from) {}
  
  // 在页面即将跳转之前，用来提示用户有未 保存的数据
  beforeRouteLeave(to, from) {}
}
```