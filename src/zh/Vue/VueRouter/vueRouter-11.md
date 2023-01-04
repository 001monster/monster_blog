---
title: （十一）vueRouter重定向
order: 11
date: 2022-11-13
category:
    - VueRouter
tag: 
    - Vue和Router
---

![](https://image.zswei.xyz/img/202211131715556.png)

#### 重定向跳转其他 `URL`
:::info 说明
重定向会发生页面的跳转，顾名思义重定向的意思就是访问某个路径的时候，给他重新定义到某个路径
:::

- 使用 `redirect` 属性设置重定向
```js
{
  path: '/',
  // 第一种方法是直接跳转路径
  redirect: '/home'
  // 第二种方法是使用名 - 推荐使用这种方式，避免路径出现歧义
  redirect: {
    name: 'blogList'
  }
  // 以为是重定向到其他路径所以不用配置 component 因为他不需要渲染组件
},
{
  path: '/',
  component: blogListPage
  name: 'blogList'
}
```

- 带参数的重定向
```js
{
  path: '/:postId',
  componenty: BlogListPage,
  name: 'blogPost'
},
{
  path: '/posts/:postId',
  // 第一种方式使用返回值
  redirect: (to) => {
    return {
      path: `/${ro.params.postId}`
    }
  }
  // 第二种方式，使用name
  redirect: (to) =。 {
    return {
      name: 'blogList',
      params: to.params.postId
    }
  }
}
```