---
title: （十六）多层传递Props
order: 16
date: 2022-11-04
category:
    - vue
tag: 
    - Vue
---

![](https://image.zswei.xyz/img/202211121813358.webp)

## Provide/Inject：给深层组件中传递属性
:::info 说明
在日常开发中，可能需要把值传递给子组件的子组件
虽然`veu`的`$attrs`能够将美哟定义的属性默认放到最外层的容器上，但是不能保证每一个子组件的最外层都是子组件的子组件，也不能保证所有的中间组件都允许传递未定义属性

于是就有了 `Provide` 和 `Inject`

父组件通过 `Provide` 给下面的所有组件提供属性，而下层需要用到这个属性的通过 `Inject` 来接收这个属性
:::
```js
// 父组件发送属性, 如果是写死固定的值的话provide可以写成一个对象形式
provide: {
    msg: '孩子们你们好啊，我是你们的父组件'
}

// 如果需要使用data 中的数据的话，就需要写成函数形式，并且需要 return 出去，并且provide传递的数据不是响应式的，也就是说data当中的数据改变了provide传递的数据是不会变化的，如果需要响应性的需要把provide当中的数据定义成响应性的，这个后面通过组合式API讲解
data() {
    return {
        title: '给孩子们发钱'
    }
}
provide() {
    return {
        // 传递的数据可以是任意类型的，比如数组，函数等等
        title: this.title
    }
}

// 子组件接收属性
inject: ['msg']
```