---
title: （二）脚手架文件介绍_src
date: 2023-02-26
category:
    - React脚手架
tag: 
    - react
order: 3
---

## 参考视频
<iframe src="//player.bilibili.com/player.html?aid=798144910&bvid=BV1wy4y1D7JT&cid=266612547&page=51" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

## 🎄一、src文件介绍

1. `App.css` App.js 的样式

2. `App.js` 根组件

3. `index.css` 公共样式

4. `index.js` 程序入口文件
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // 判断App根组件，包括里面的子组件编码是否合理
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
reportWebVitals();

```

5. `reportWebVitals.js` 用于记录页面性能的

6、 `setupTests.js` 单元测试(组件测试)

## 总结

![](https://image.zswei.xyz/img/202302262358674.png)