---
title: （十五）设置导航高亮
order: 15
date: 2022-11-14
category:
    - VueRouter
---

![](https://image.zswei.xyz/img/202211142321167.png)

#### 给当前活跃导航设置高亮样式
:::info 说明
如果 `<router-link/>` 展示的路劲和当前 `url` 匹配就会自动给当前元素加上 `..router-link-active` 这个 `class` 设置对应的 `class` 样式就可以了
:::


#### 一、自定义 `class` 高亮名字
:::info 说明
如果要给高亮设置自定义 `class` 名字，则需要在 `<router-link activeClass="newClass">` 加上 `activeClass` 然后设置自定义 `class` 的名字
:::

```html
<!-- 这个会一直保持高亮，因为他包含 /blogs  -->
<router-link to="/blogs">管理首页</router-link>

<!-- 下面这种会高亮 -->
<router-link to="/blogs/new">添加博客</router-link>
<router-link to="/blogs/details">博客详情</router-link>
```
- 会发现不管点击哪个 管理首页始终都是高亮的，这种适合于分组高亮，就比如添加博客和博客详情都属于首页管理，他们需要同时高亮

![](https://image.zswei.xyz/img/202211141035428.png)

#### 二、精确匹配高亮
- 如果需要精确匹配高亮就需要使用 `router-link-exact-active` 这个 `class` , 如果需要自定义精确匹配的高亮就需要给 `<router-link/ linkExactActiveClass="newClass">` `linkExactActiveClass` 这个属性
```html
<router-link to="/blogs/details" linkExactActiveClass="link-active">博客详情</router-link>
```


#### 三、全局定义 `router-link` class
- 直接在创建路由的时候就进行设置

```js
const router = createRouter({
  history: createWebHistory(),
  routes,
  // 非精确匹配
  linkActiveClass: "link-active",
  // 精确匹配
  linkExactActiveClass: "link-exact-active"
});
```