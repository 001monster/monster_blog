---
title: （二十六）动态的添加路由
order: 26
date: 2022-11-14
category:
    - VueRouter
---

![](https://image.zswei.xyz/img/202211142324895.png)

#### 动态的添加路由
:::info 说明
我们之前写的路由都是在 `route.js` 里面写的，这个是声明式的导航，他是静态的
:::

#### 一、编程式的添加和访问路由
```js
// 这个和我们在文件中配置的路由是一样的
this.$router.addRoute({
    pathF: '',
    name: 'blogs',
    component: BlogListPage
})
```

#### 二、编程式动态的删除路由
```js
// 通过 name 删除路由
this.$touter.removeRoute('blogs')

// 如果添加的路由没有 name 属性，则可以通过 addRoute() 返回的实例来删除
const removeRote = this.$router.addRoute()
removeRoute()
```


#### 三、查看添加的路由
```js
console.log(this.$touter.getRoutes())
```

- 可以用来动态添加路由，页面内容可以使用 `mackdown`  来编写，也可以使用更高级的模板渲染引擎

![](https://image.zswei.xyz/img/202211142113873.png)