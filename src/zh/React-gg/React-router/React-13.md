---
title: （十三）路路由跳转的两祌方式_push和replace
date: 2023-03-16
category:
    - react路由管理
tag: 
    - react
order: 13
---

### 🍇一、路路由跳转的两祌方式 `_push` 和 `replace`
- 注意：在 `react` 中默认开启的是 `push` 模式
1. `push` 会在浏览器里面存放请求地址，每次操作都会向浏览器缓存里面压入一个历史记录

2. `replace` 不会在浏览器当中留下历史记录，他会把上一条记录给替换掉

### 二、在 `react` 中开启 `replace` 模式
```sh
<Router replace path="/xxx" component={组件名字}/>
```