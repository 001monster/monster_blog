---
title: （四）定义响应式数据的第二种方法
order: 4
date: 2022-11-08
category:
    - VueCompositonApi
---

## 定义响应式数据的第二种方法 `reactive`
```js
// reactive 和 ref 函数类似，但是 reactive 接收一个对象，这个对象是一个广义的，它可以是一个对象，也可以是一个数组，如果给他一个普通的数据类型vue 将会发出警告

cosnt data = reactive({1, 2, 3})   // 正确
cosnt data1 = reactive([1, 2, 3])  // 正确
cosnt data2 = reactive(0)          // vue 发出警告

// 他和 ref 是一样的 也会把里面的数据 全都变成响应性数据

// 通过reactive创建的响应性函数需要通过 不需要通过 .value 来访问，而 ref 创建的响应性数据需要通过 .value 来访问

// 什么时候用 ref 什么时候用 reactive 呢
// 在日常开发中只使用 ref 就可以了，因为他 还是会去调用 reactive , 而且他还支持普通类型的数据
// reactive适用于一次性定义多个响应式数据类型，如表单数据等
```