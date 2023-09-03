---
title: （二）、jsx复用与可读性：保存jsx到变量中
order: 2
date: 2023-09-03
category:
    - React
tag: 
    - React
---

![](https://image.zswei.xyz/img/20230828152152.png)

## 一、保存 `jsx` 到变量中
1. 因为 `jsx` 最后也是转换成了 `js` 函数调用的形式，所以可以吧 `jsx` 保存到变量中

2. 这样写的好处就是 `可以进行多次的复用` `提高代码的可读性`

```jsx
function App() {
    const  tags = ['React', 'Vue', 'JavaScript']

    // 头部信息
    const hider = (
        <>
            <h1>这是一个用户信息</h1>
            <p>用户信息页面</p>
        </>
    )

    // 列表信息
    const tagSection = tags.map((item, index) => {
        return (
            <Fragment key={index}>
                <p>{item}</p>
                <hr/>
            </Fragment>
        )
    } )

    // 渲染模板
    return (
        <div>
            {hider}
            {tagSection}
        </div>
    )
}

export default App
```

![](https://image.zswei.xyz/wj/202309031834387.png)