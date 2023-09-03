---
title: （五）、className 的传递与合并
order: 5
date: 2023-09-03
category:
    - React
tag: 
    - React
---

![](https://image.zswei.xyz/img/20230828152152.png)

## 一、`className` 的传递与合并
1. 当我们在写组件的时候会直接把组件的样式写好，当然有时候我们也需要传递自己的样式，这个时候子组件就需要对传递的样式进行处理

1. 使用 `props` 的方式进行传递 `className`
```jsx
function App() {
    return (
        <UserDate msg="hello word" className={fontColor}/>
    )
}

// 子组件
function UserDate({className, msg, ...rest}) {
    return (
        <div className={className}>
            <h1>{msg}</h1>
            <UserDate2 {...rest}/>
        </div>
    )
}
```

2. 将组件本身的 `className` 和 外部设置的 `className` 进行合并，还可以使用 `空格` 传递多个 `className` 
```jsx
function App() {
    return (
        <UserDate msg="hello word" className="fontColor fontSize"/>
    )
}

// 子组件
function UserDate({className, msg, ...rest}) {
    return (
        <div className={`userDateCard ${className}`}>
            <h1>{msg}</h1>
            <UserDate2 {...rest}/>
        </div>
    )
}
```

## 二、使用三方库进行拼接 `className`
1. 常用拼接 `className` 的库 [classnames](https://www.npmjs.com/package/classnames)