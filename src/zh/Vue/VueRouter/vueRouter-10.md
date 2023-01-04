---
title: （十）路由别名
order: 10
date: 2022-11-13
category:
    - VueRouter
tag: 
    - Vue和Router
---

![](https://image.zswei.xyz/img/202211131700505.png)

#### 路由别名，给不同路径渲染同一组件
:::info 说明
我们有时候需要用不同的名字来渲染相同的组件,这个时候就需要用到`路由别名`了
:::
- 都渲染成根路由

![](https://image.zswei.xyz/img/202211131704733.png)

- 通过 `alias` 来设置别名
```js
{
  path: '/',
  // 这里有参数，别名也需要有参数
  path: '/:postsId',
  component: BlogListPage,
  // 可以设置单个
  alias: '/posts'
  // 也可以通过数组形式设置多个
  alias: ['/posts', '/blogs']
  // 如果path中有参数，别名中也需要有，否则就会获取不到
  alias: '/posts/:postsId'
  // 子路由也是同样的配置
  children: [{
    path: ':usersId',
    component: UsersDetailsPage,
    alias: 'details/:usersId'
  }]
}
```


#### 总结：写在最后
:::info 总结
别名的是作用是，使多个路径可以使用同一个组件
:::