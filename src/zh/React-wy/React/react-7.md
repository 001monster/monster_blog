---
title: （七）、如何在 React 中展示图片
date: 2023-08-28
order: 7
category:
    - React
tag: 
    - React
---

![](https://image.zswei.xyz/img/20230828152152.png)

## 一、展示图片
1. 在 `react` 项目中不能直接写具体的图片所在路径，因为打包后路径会改变，要使用图片需要使用 `import` 导入并保存到一个变量中、
```jsx
import React from 'react'
import BlogImg1 = from '@/xxx.png'

function App() {
  return (
    <div>
        <img src={BlogImg1}/>
    </div>
  )
}

export default App
```

