---
title: （二十五）处理导航错误
order: 25
date: 2022-11-14
category:
    - VueRouter
tag: 
    - Vue和Router
---

![](https://image.zswei.xyz/img/202211142324646.png)

#### 处理导航错误

#### 一、路由中可能出现的错误

![](https://image.zswei.xyz/img/202211142035561.png)

1. 处理错误
```js
const failure = await this.$router.psuh("/blogs")
// 通过打印返回值查看是否是导航错误
console.log(failure)
```

2. 判断是否为一个错误，需要导入 `isNavigationFailure` 这个函数，这个函数需要通过 `vue-router` 导入进来
```js
import { isNavigationFailure } from 'vue-router'
const failure = await this.$router.psuh("/blogs")
// 通过打印返回值查看是否是导航错误
console.log(isNavigationFailure(failure))
// 输出为 true 证明有错误
```

3. 处理错误的返回值也也包含 `to` 和 `from` 
```js
const failure = await this.$router.psuh("/blogs")
console.log(failure.to, failure.from)
```