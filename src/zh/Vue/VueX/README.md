---
title: 为什么需要全局状态管理
icon: donghua
date: 2022-11-15
category:
    - VueX 状态管理
---

![](https://image.zswei.xyz/img/202211271445584.png)


#### 为什么需要全局状态管理
:::info 说明
我们在开发中随着组件的嵌套层级可能会越来越深，传递参数需要层层传递，这时候就需要用到全局状态管理了
:::

```js
// 全局状态管理
store {
    state: {},
    mutations: {},
    actions: {},
    getters: {}
}
```
