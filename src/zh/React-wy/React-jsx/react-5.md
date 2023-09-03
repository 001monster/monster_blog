---
title: （五）、一次性传递多个属性
order: 5
date: 2023-09-03
category:
    - React
tag: 
    - React
---

![](https://image.zswei.xyz/img/20230828152152.png)

## 一、一次性传递多个属性

1. 我们之前传递的时候是一个一个属性的传递
```jsx
function App() {
    return (
        <BlogList name={blog.name} avatar={blog.avatar} key={blog.id}/>
    )
}

export default App
```

2. 我们现在使用 `...` 扩展运算符就可以一次性传递过去了
```jsx
function App() {
    return (
        <BlogList {...blog} key={blog.id}/>
    )
}

export default App
```