---
title: （六）、如何在 React 使用内联样式
date: 2023-08-28
order: 6
category:
    - React
tag: 
    - React
---

![](https://image.zswei.xyz/img/20230828152152.png)

## 一、在 `jsx` 中使用内联样式
1. 直接写在 `JSX` 里面
```jsx
import React from 'react'

function App() {
  return (
    <div>
        <h1 style={{
            color: 'red'
            fontSize: '50px'
        }}>欢迎使用本应用</h1>
    </div>
  )
}

export default App
```

2. 如果内联样式太多了写在 `JSX` 里面不方便阅读可以定义成变量
```jsx
import React from 'react'

function App() {
    const h1Style = {
        color: 'red'
        fontSize: '50px'
    }

  return (
    <div>
        <h1 style={h1Style}>欢迎使用本应用</h1>
    </div>
  )
}

export default App
```

## 总结
- 内联盐样式是一个 `js对象` 同时短横线命名在 `js` 中是不合法的要写成驼峰命名 `font-size` 要写成 `fontSize`

- 因为内联样式他是 `js` 表达式，所以它既可以写在 `jsx` 中 也可以定义成为变量直接使用