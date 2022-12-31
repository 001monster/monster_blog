---
title: （三）样式初始化
date: 2022-12-25
category:
    - react
---

### 😘一、去除默认样式
大家可以看到文字到屏幕边缘是有一定的边距的，这个是默认样式，去除这个默认样式方式有很多，可以自己手动编写 `css` 去除默认样式，当然也可以使用插件来去除

![](https://image.zswei.xyz/img/202212251753538.png)

### 🥯二、推荐使用插件去除默认样式
- 推荐插件，`reset-css` 干净利落的去除默认样式，更适合在企业场景中使用
```sh
npm i reset-css
```
- 使用 `reset-css`
```ts
import React from 'react'
import ReactDOM from 'react-dom/client'
// 在这里引入 在App之前引入
import "reset-css"

// UI 框架样式

// 最后才是 组件样式

import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

```