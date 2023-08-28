---
title: （二）hello_react 案例
date: 2022-12-25
category:
    - react基础
tag: 
    - react
order: 2
---

### 🎄一、hello_react 案例
- 我们先从最基础的入门，就像写 `jQuery` 一样直接引入写入
- 需要的依赖包
![](https://image.zswei.xyz/img/202212261909226.png)

- `babel.js` 用于 `jsx` 转 `js`

- `react.development.js` `react` 核心库

- `react-dom-devlopment.js` `react` 扩展库，帮助我们操作 `Dom` 的


### 🍇二、第一个 `react` 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>hello_react</title>
</head>
<body>
    <!-- 准备好一个  “容器” -->
    <div id="test"></div>
    
    <script type="text/javaScript" src="../package/react.development.js"></script>
    <script type="text/javaScript" src="../package/react-dom.development.js"></script>
    <script type="text/javaScript" src="../package/babel.min.js"></script>
    <!-- type 必须写成 'taxt/babel' -->
    <script type="text/babel">
        // 1. 创建虚拟DOm - 此处不能写 '' 因为 jsx 可以和 js 混合写
        const VDOM = <h1>Hell,react</h1>
        
        // 2.渲染虚拟DOM到页面
        ReactDOM.render(VDOM, document.getElementById('test'))
    </script>
</body>
</html>
```

![](https://image.zswei.xyz/img/202212261947373.png)