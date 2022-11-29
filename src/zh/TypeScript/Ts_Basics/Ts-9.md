---
title: （九）interface 和 type 区别
order: 9
date: 2022-11-29
category:
    - TypeScript
---


### `interface` 和 `type` 区别
:::info 说明
- `interface` 可扩展

- `type` 不好扩展，后者是不方便扩展
:::

#### `interface` 扩展
:::info 说明
比如说我们现在正在编写一个公共类库，允许程序员来基础上进行扩展，或者是自定义，这个时候就需要使用 `interface`
:::

- 扩展语法，定义一个和原有的 `interface` 一样的类型，里面添加上自己需要的属性就可以了

```ts
interface Product {
    title: string
    price: number
    isStock: boolean
}

// 扩展 interface 添加一个新的属性数量
interface product {
    cont?: number
}

// 使用扩展过后的
let product: Product = {
    title: '纯棉秋裤',
    price: 200,
    isStock: true,
    cont: 100
}
```

- 如果我们使用的是 `type` 定义的话
```ts
type Product = {
    title: string
}

// 此时这里就会报错，说不能定义重复的 type
type Procuct = {
    price: number
}
```

### 总结-写在最后
:::info 总结
在我们日常开发中推荐首选 `interface` ，因为他可扩展性好
:::