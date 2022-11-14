---
title: （二十一）页面滚动行为控制
order: 21
date: 2022-11-14
category:
    - VueRouter
---

![](https://image.zswei.xyz/img/202211132216232.png)

#### 页面滚动行为控制 `scrollBehavior(to, from, savedPosition)` 

:::info 说明
浏览器默认前进后退的时候，滚动条会默认保持子啊当前滚动区域，如果要让滚动条每次访问页面的时候都从头开始，则需要在路由创建的时候进行配置
:::

- 页面滚回到顶部 `scrollBehavior(to, from, savedPosition)` 
```js
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { 
      // top 操控的是 纵坐标的滚动，正数则是向下偏移，负数表示向上偏移
      top: 0 ,
      // 设置平滑滚动，这个属性要浏览器支持，现在浏览器都支持
      behavior: 'smooth'
    }
  }
});
```

- 延时滚动到顶部
```js
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promis((resolve) => {
      setTimeOut(() => {
        top: 200,
        // 设置增提页面进行偏移
        behavior: 'smooth',
        // 针对某一个元素进行偏移
        el: '#app'
      }, 1000)
    })
  }
});
```

- 浏览器自带的前进后退不滚动到浏览器顶部
```js
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    console.log(savedPosition);
    // 如果是浏览器的前进后退就保留当前的滚动条位置，不是就滚动到顶部
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});
```