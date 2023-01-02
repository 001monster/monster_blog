---
title: （二）React 面向组件编程
date: 2022-12-31
category:
    - react
---


### 🍇一、函数式组件
函数式组件适用于【简单组件】的定义

- 创建第一个函数式组件
```jsx
 // 1. 创建函数式组件, 函数名字必须是大写，大写才能被识别成组件
 function Demo() {
    // 必须有返回值
    return <h2>我是一个函数式组件</h2>
 }

// 若小写字母开头，则将标签转换为 `html` 同名元素，如果没有找到同名的 `html` 标签，则报错
// 若大写字母开头，则 `React` 就去渲染组件，如果没有找到，就报错

//  渲染组件到页面
ReactDom.render(<Demo/>, document.getElmentById('test'))
```

- 函数式的 `this` 是谁
```jsx
 function Demo() {
    console.log(this)       // this 是 undefined
    // 必须有返回值
    return <h2>我是一个函数式组件</h2>
 }
```
为什么这里的 `this` 是 `undefined` 因为我们在这里写的是 `jsx` 它通过 `babel` 编译后会开启 `js` 的严格模式，在 `js` 严格模式中，是禁止自定义函数的 `this` 指向 `window` 的，所以这里的 `this` 是 `undefined`

![](https://image.zswei.xyz/img/202212312119874.png)


#### 🍉执行了 `ReactDom.render(<Demo/>....)` 后发生了什么
1. `React` 解析组件标签，找到 `Demo` 组件
2. 发现组件是使用函数定义的，随后调用函数，将返回的虚拟 `DOM` 站换为真实 `DOM`，随后呈现在页面中

### 🥥二、类式组件
类式组件适用于【复杂组件】的定义