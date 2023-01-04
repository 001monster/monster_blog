---
title: （六）使用 type 关键字定义可复用的对象类型
order: 6
date: 2022-11-29
category:
    - TypeScript
tag: 
    - Ts
---


### 使用 `type` 关键字定义可复用的对象类型
- 在上一章节中我们定义的类型是直接写死在变量后面的，这样的话有新的对象需要用到要在复制一份
```ts
let product: {
    title: string
    price: number
    insTock: boolean
} = {
    title: '纯棉 T 恤',
    price: 99.8,
    inStock: true
}

// 新，这两个是重复的，但是还是要重新赋值，不利于代码复用
let productLable: {
    title: string
    price: number
    insTock: boolean
} = {
    title: '纯棉秋裤',
    price: 89.8,
    inStock: true
}
```

- 为了解决上面出现的这种情况，`TypeScript` 可以允许我们将上面这种可复用的类型定义到一个 `type` 里面，使用的时候直接在属性后面使用就可以了(推荐首字母大写和其他变量名区分开)
```ts
type Product = {
    title: string
    price: number
    insTock: boolean
}

// 使用
let product: Product = {
    title: '纯棉 T 恤',
    price: 99.8,
    inStock: true
}

let productLable: Product = {
    title: '纯棉秋裤',
    price: 89.8,
    inStock: true
}
```