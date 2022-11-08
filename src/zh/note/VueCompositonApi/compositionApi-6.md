---
title: （六）监听响应数据的变化
order: 6
date: 2022-11-08
category:
    - VueCompositonApi
---

## `watch` 监听响应性数据的变化
### 一、监听基本类型的响应性数据
```js
const data = ref('')

// 监听基本类型的参数，第一个传递的参数是需要监听的值， 第一个参数是一个回调函数，回调函数又两个值，一个是，监听数据变化过后的值，第二个是变化之前的值
watch(data, (newVal, oldVal) => {
    console.log(newVal, oldVal)
})


// 监听 ref 的 value 属性， 例如通过组件props 传递进来的, 这个时候第一个参数需要使用回调函数的形式
watch(
    () => data.value,
    (newVal, oldVal) => {
        console.log(newVal, oldVal)
    }
)
```
