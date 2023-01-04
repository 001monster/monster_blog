---
title: （八）使用 interface 定义对象类型
order: 8
date: 2022-11-29
category:
    - TypeScript
tag: 
    - Ts
---


### 使用 `interface` 定义对象类型
:::info 说明
- 我们上几个章节中都是使用 `type` 来定义对象类型，他和 `interface` 是等价的但是还是有些许区别
:::

- 使用 `interface` 定义
```js
interface Product {
    title?: string          // 可选属性
    price: number          
    insTock: boolean
}

{
    title: '纯棉 T 恤',
    price: 99.8,
    inStock: true
}
```