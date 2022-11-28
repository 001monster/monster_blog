---
title: （三）创建 store
order: 3
date: 2022-11-28
category:
    - pinia 状态管理工具
---

<!-- ![](https://image.zswei.xyz/img/202211271445584.png) -->

### 一、创建 `store`
1. 闲在根目录 `src` 根目录下创建一个 `store`  文件夹

2. 创建 `store` 的状态管理名

- defineStore 的第一个参数是 store 的 id 他是用于区分是哪个 store 这样就不会命名冲突了

- defineStore 第二个参数 因为使用的时候 setup 的语法，所以传递是一个没有参数的回调函数

- 命名规则-以 `use` 开头，后面跟上是哪种类型的 `store`，如有关 `note` 类型的 `store` 命名就是 `useNoteStore`

```js
import { ref, computed } from 'vex
import { defineStore } from 'pinia'

export const useNoteStore = defineStore('note', () => {
    
})
```
