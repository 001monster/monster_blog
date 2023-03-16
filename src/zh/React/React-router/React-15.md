---
title: （十五）BrowseRouter和HashRouter的区别
date: 2023-03-16
category:
    - react路由管理
tag: 
    - react
order: 15
---

### 🍇一、`BrowseRouter` 和 `HashRouter` 的区别
1.底层原理不一样：
    -. `BrowserRouter` 使用的是 `H5` 的 `history API`  不兼容 **IE9** 及一下的版本

    -. `HashRouter` 使用的是 `URL` 的哈希值

2. `path` 表现不一样
    - `BrowseRouter` 的路径中没有 **#** 
    - `HashRouter` 的路径中包含 **#**

3. 刷新后对路由 `state` 参数的影响
    - `BrowseRouter` 没有任何影响，因为 `state` 保存在 `history` 对象中的
    - `HashRouter` 刷新后会导致路由 `state` 的丢失

4. 备注：`HashRouter` 可以不用解决医学路径错误相关的问题