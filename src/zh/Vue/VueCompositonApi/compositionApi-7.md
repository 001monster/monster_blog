---
title: （七）watchEffect()的使用
order: 7
date: 2022-11-08
category:
    - VueCompositonApi
tag: 
    - Vue3
---

![](https://image.zswei.xyz/img/202211121817662.webp)

## `watchEffect` 的使用：变体的watch

### 一、`watchEffect` 基本使用方式
:::info 说明
`watchEffect()` 跟 `watch` 的作用基本一致，用于监听响应性数据的变化，并根据变化做一些响应的业务逻辑，例如请求远程的服务端数据
:::

:::info watchEffect的基本用法
我们来看一下 `watchEffect` 的基本用法，它接收一个回调函数作为参数，因为他是一个函数，所以里面可以编写任何代码，如果里面监听的数据发生了变化，这个回调函数就会重新执行，与 `watch` 不同是 `watchEffect` 不需要指定需要监听的数据，而是会根据回调函数中的代码来自动判断，如果回调函数中用到了响应性数据，无论回调函数中有多好个，只要数据发生了变化 `watchEffect` 就会重新执行一次，`watch` 是数据变化了才监听，而 `wachEffect` 是一上来就执行一次 相当于 `while` 和 `do while` 的区别；需要注意的是回调函数中返回的值，都是修改之后的值
```js
watchEffect( () => {
    // 因为他是一个函数，所以里面可以编写任何代码
    console.log(options.value.title)
    console.log(options.value.user.name)
})

// watchEffect 也可以执行 async awati 方便异步请求远程的数据
watchEffect( asycn () => {
    // 编写代码
    // 返回的都是最新值
})
```
:::


### 二、使用 `watch()` 和 `watchEffect` 做一些清理操作
```js
watchEffect( (onInvalidate) => {
    onInvalidate( () => {
        // 它只有在下一次操作之前才会被调用，也就是清理完成了才进行接下了的操作
        console.log('做一些清理的操作')
    })
})

// watch 则是在第二个参数中传递这个参数
watch(
    () => options.value.title,
    (newVal, oldVal, onInvalidate) => {
        onInvalidate( () => {
            // 它只有在下一次操作之前才会被调用，也就是清理完成了才进行接下了的操作, 因为它没有在开始就执行一次,所以它会在调用第二次的时候才会执行
            console.log('做一些清理操作')
        })
    }
)
```

![](https://image.zswei.xyz//img/compositonApi-7.png)

