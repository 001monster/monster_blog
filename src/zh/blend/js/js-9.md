---
title: （九）... 扩展运算符的基本知识
date: 2022-12-12
category:
    - this
tag:
    - js
    - Es6
order: 9
---

### 🐆一、跟数组一起使用
- 展开一个数组
```js
let arr1 = [1, 3, 5, 7, 9]
let arr2 = [2, 4, 6, 8, 10]
console.log(...arr1)    
```
![](https://image.zswei.xyz/img/202301021751314.png)


- 链接数组
```js
let arr1 = [1, 3, 5, 7, 9]
let arr2 = [2, 4, 6, 8, 10]
console.log([...arr1, ...arr2])  
```

![](https://image.zswei.xyz/img/202301021753079.png)


### 🐼二、函数传参
- 接收不固定的值
```js
function sum(...nums) {
    // 求和累加
    return nums.reduce(perValue, currentValue) => {
        // perValue 之前的值
        // currentValue 当前的值
        return perValue + currentValue
    }
}
console.log(sum(1,2,5,8))
```
- [数组身上的常用方法]()

### 🐥三、在对象上使用
```js
let person = {name: 'tom', age: 18}
console.log(...person)

// 这种形式可以用于克隆一个对象
let person = {name: 'tom', age: 18}
let personNew = {...person}
console.log('克隆后的对象', presonNew)
```

- 不能把 `...` 展开运算符应用到一个对象身上

![](https://image.zswei.xyz/img/202301021800166.png)

#### `...` 对象说明
1. `...` 是不能展开对象的，必须要用对象包裹
- [...参考文档]()
```js
let person = {name: 'tom', age: 18}
console.log({...person})     // 这样就可以展开了
```

2. `...` 结合 `React` 的 `props` 批量传参
```js
// 这里的 {...person} 和下面 React 的 ...p 是不一样的
let person = {name: 'tom', age: 18}
let personNew = {...person}

// React {} 里面是赋值语句，因为是通过 React 和 babel 翻译过后就允许这样写了
ReactDom.render(<Person {...p}/>, doument.getElmentById('test'))
```

### 🐤四、`...` 赋值并修改属性，也称合并对象
```js
let person = {name: 'tom', age: 18}
let personNew = {...person, name: 'jack'}
console.log(personNew) // {name: 'jack', age: 18}
```