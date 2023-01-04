---
title: （十二）编程式导航
order: 12
date: 2022-11-13
category:
    - VueRouter
tag: 
    - Vue和Router
---

![](https://image.zswei.xyz/img/202211132156111.png)

#### 编程式的控制导航
:::info 说明
我们在编写页面跳转的时候并不只用超链接来控制页面的跳转，例如我们想在点击按钮的时候跳转页面，或者是在生命周期中跳转页面，就需要使用编程式的导航
:::

#### 一、有历史记录的跳转，可以返回 `this.$router.push()`
 
- 传递字符串路由

```js
/**
 * 编程式导航语法
 * this.$router.push('路径')
 */
<button @click="$router.push(`/${blogPost.id}`)">查看全文</button>
```

- 传递 `name` 路由
```js
{
  path: '/',
  component: BlogListPage,
  name: 'blogList'
}

/**
 * 语法
 * this.$router.pauh({
 * name: 'blogList',
 * params: {
 *  id: 12
 * }
 * })
 */
<buttom @click="$router.push({name: 'blogList', params: {id: 12}})">查看全文</buttom>
```

#### 二、替换历史记录的最新一条 `this.$router.replace`
- 使用 `replace` 跳转的路径他会替换掉历史记录的第一条，使用浏览器倒退的时候，会返回上一次使用 `replace` 跳转的页面
```js
<button @click="$router.replace(`/${blogPost.id}`)">查看全文</button>
```

#### 三、前进页面和后退页面 `this.$router.go(-/+ 1)`
:::info 说明
上面的括号里面的数字是 `-2` 就是后退两步，`+2` 就是前进两步，传递 `0` 就是刷新当前页面，如果是超过了里面记录里面的条数就没有任何效果
:::