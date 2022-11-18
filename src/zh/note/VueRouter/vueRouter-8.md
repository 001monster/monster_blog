---
title: （八）获取Query查询参数
order: 8
date: 2022-11-13
category:
    - VueRouter
---

![](https://image.zswei.xyz/img/202211131642373.png)

#### 获取Query查询参数

:::info 说明
有好多应用，后端给我们返回的不都是以 `/` 分割的参数，好多都是以 `?` 开头分割的参数
:::

#### 一、解析 `Query` 字符串
- 访问 `query`
```js
this.$toute.query
```