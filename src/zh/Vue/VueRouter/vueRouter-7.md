---
title: （七）高级路由配置语法
order: 7
date: 2022-11-13
category:
    - VueRouter
---

![](https://image.zswei.xyz/img/202211131605925.png)

#### 高级路由匹配语法和优先权

#### 一、多个动态参数
```js
// 传递参数写法
url: /users/100/posts/50
写法：/users/:userId/posts/:postsId

// 获取参数方法
this.$route.params
{
  userId: 100,
  postId: 50
}
```

#### 二、重复 `URL` 路径模式匹配
```js
/usters/:userId/posts/:postId/
/users/100/posts/50

// 上面这个写法只会匹配到 /users/100，后面的数据不会在匹配
```
- 有时候我们可能会获取多个 `URL` 进行多级 `URL` 请求
```js
// 获取商品
/clothes

// 获取商品并且获取商品子分类
/clothes/t-shirt

// 或者时后面的子分类不固定
/clothes/t-shirt/long-sleeve
```
- 如果有以上这种需求我们可以使用正则表达式进行匹配 `+、*、?`

#### 三、正则表达式匹配多个路径
1. `+` 至少出现一次
```js
/:categories+
// 可以匹配到如下这几类 URL 地址  但是不可以匹配 / 也就是没有任何内容的情况
/clothes
/clothes/t-shirt
```

2. `*` 出现0到多次
```js
/:categories*
// 可以匹配到如下这几类 URL 地址  并且可以匹配 /
/clothes
/clothes/t-shirt
/
```

3. `?` 出现0次到1次
```js
/:categories?
// 可以匹配到如下这几类 URL 地址  不能出现多次，比如 /clothes/t-shirt
/clothes
/
```
*注意 `+、*、?` 只能用于动态参数，像 `/categores?` 这种写法是错误的*

#### 四、高级正则表达式匹配路径
- 如果以上的简单正则匹配无法满足，可以使用一下高级正则表达式拉匹配
```js
// 语法 url ([正则表达式])
// 例子
/posts/:title([a-zA-Z0-9-]+)

// 解析出来就是
/pots/how-to-use-vue-router
// 但是不能匹配-因为+是至少匹配一次
/pots/what-is+
```

#### 五、匹配 `404`
```js
/:notFound(.*)/*
```


#### 六、匹配优先级
- 路由匹配的优先级是按照 `path` 来决定的
```js
// 例如
/:postId
/about
// 上面两个路径 /about 优先及更高，因为他是个具体的路径(固定写死的)
// 匹配的时候，会先查找路径中有没有，没有在去查找动态的，如果有多个动态的会按照他们在route中的顺序决定
/:postID    // 先执行-因为他在前面
/:userId    // 后执行-因为他在后面
```


#### 七、路由可视化工具
- https://paths.esm.dev

[路由可视化工具](https://paths.esm.dev)

![](https://image.zswei.xyz/img/202211131639742.png)

-他们的分数越高优先级就越高，分数相同优先级就相同，如果优先级相同就以 他在 `route` 中的顺序决定，前面的先执行