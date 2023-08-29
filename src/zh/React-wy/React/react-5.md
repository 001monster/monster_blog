---
title: （五）、如何给 React 中的 className 添加样式
date: 2023-08-28
order: 5
category:
    - React
tag: 
    - React
---

![](https://image.zswei.xyz/img/20230828152152.png)

## 一、给 `className` 添加 *全局* 样式
1. 导入 `css` 样式文件
```jsx
import React from 'react'
// 导入css文件
import './xxx.css'

function App() {
  return (
    <div>
        <h1 className="bg">欢迎使用本应用</h1>
    </div>
  )
}

export default App
```

2. css 文件
```css
bg {
  background-color: red;
}
```

## 总结
导入全局样式会造成 样式污染 后期使用 `css-in-js` 等方式