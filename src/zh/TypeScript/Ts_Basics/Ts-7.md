---
title: （七）可选的对象属性类型
order: 7
date: 2022-11-29
category:
    - TypeScript
tag: 
    - Ts
---


### 可选的对象属性类型
:::info 说明
我们上一章节中定义的对象属性，使用的时候必须要包含定义的属性，否则就会报错，那么如果在我们开发中，有些属性不是必须的怎么办呢？
:::

- 定义可选择的对象属性类型，语法：`属性名?: 类型`
```ts
type Product = {
    title?: string          // 可选属性
    price?: number          // 可选属性
    insTock: boolean
}

// 使用
let product: Product = {
    inStock: true       // 这个没有设置可选属性，不需要填写
}
```