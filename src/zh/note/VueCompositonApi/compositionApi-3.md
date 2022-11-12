---
title: （三）setup 中定义响应性数据
order: 3
date: 2022-11-08
category:
    - VueCompositonApi
---

![](https://image.zswei.xyz/img/202211121817662.webp)

## setup 中定义响应性数据
1. 在setup 中编写响应性数据
```js
// vue 给我们提供了定义响应性数据的方法
ref()
reactive()
computed()
...
// 我们也把他叫做状态

// 通过ref 包装之后，数据就变成响应性数据了，如果包装的是一个对象，他里面的所有数据也都是响应的
cosnt num = ref('0')

// 通过ref 定义的数据,返回的是一个对象，需要通过.value的形式来访问
console.log(num.value)

// 如果使用 ref 来判断一个数据是否全等，会返回 false 因为 ref 里面的数据是经过ref 处理过后的
let str = '字符串'
const newStr = ref(str)
console.log(str === newStr)   // 返回false

// 在模板中访问 ref 的数据不需要 .value 了，因为在模板中 vue 会自动访问 数据的value 属性
```