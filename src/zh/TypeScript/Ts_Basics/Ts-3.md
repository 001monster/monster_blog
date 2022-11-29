---
title: （三）定义类型（自动推断）
order: 3
date: 2022-11-29
category:
    - TypeScript
---


### 定义 `ts` 类型（自动推断）
- 需要注意的是 `TypeScript` 类型都是小写的，要和 `JavaSctipt` 里面的构造函数区分开来
```ts
// 这种是隐式类型的定义，后面第一次赋值的是啥类型他就是啥类型
let productName = '纯棉 T 恤'

// 当我们给他定义好了类型，后面在使用这个数据的时候，就可以自动判断出它里面有那写方法
// 如: productName.price()

// 当我们定义好了类型以后，再给他赋值其他类型的数据就会报错
productName = 12   // 报错
```

- 隐式定义类型
```ts
let str1 = 'xxx'

let number1 = 200

let isShow = true

let blog = {
    title: 'xxx',           // 隐式 string 类型
    viewCont: 200           // 隐式 number 类型
}

let tags = ['JavaScript', 'Vue', 'React']   // 隐式数组中的类型都是 string 类型
```