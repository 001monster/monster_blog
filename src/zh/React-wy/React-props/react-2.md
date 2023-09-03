---
title: （二）、给props传递jsx
order: 2
date: 2023-09-03
category:
    - React
tag: 
    - React
---

![](https://image.zswei.xyz/img/20230828152152.png)

## 一、给 `props` 传递 `jsx`

- 子组件
```jsx
function Layout({nav, children}) {
    return (
        <div>
            <nav>{nav}</nav>
            <main>{children}</main>
        </div>
    )
}

export default Layout
```

1. 直接在组件标签中间写 `jsx`
```jsx
function App() {
    return (
        <Layout>
            <div>
                <h1>欢迎</h1>
            </div>
        </Layout>
    )
}

export default App
```

2. 在组件标签属性中写 `jsx` 同样它也只能有一个跟标签
```jsx
function App() {
    return (
        <Layout nav={
            <div>
                <a href="#">首页</a>
                <a href="#">产品</a>
                <a href="#">用户</a>
            </div>
        }>
            <div>
                <h1>欢迎</h1>
            </div>
        </Layout>
    )
}

export default App
```

3. 也可以把它定义在一个变量当中
```jsx
function App() {
    const　Nav = (
        <div>
            <a href="#">首页</a>
            <a href="#">产品</a>
            <a href="#">用户</a>
        </div>
    )

    return (
        <Layout nav={Nav}>
            <div>
                <h1>欢迎</h1>
            </div>
        </Layout>
    )
}

export default App
```

4. 也可以把她定义成一个单独的组件，使用的时候就要使用标签体 `<Nav/>`
```jsx
function App() {
    return (
        <Layout nav={<Nav/>}>
            <div>
                <h1>欢迎</h1>
            </div>
        </Layout>
    )
}

export default App

function Nav() {
    return (
        <div>
            <a href="#">首页</a>
            <a href="#">产品</a>
            <a href="#">用户</a>
        </div>
    )
}
```