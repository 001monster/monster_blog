---
title: （三）、条件渲染的另一种形式
order: 3
date: 2023-09-03
category:
    - React
tag: 
    - React
---

![](https://image.zswei.xyz/img/20230828152152.png)

## 一、条件渲染的另一种形式

1. 远程请求数据，请求成功展示数据，请求中显示 `loading...`

- 以前的写法
```jsx
function App() {
    const [user, steUser] = useState()

    // 页面初始话去请求数据
    useEffect(() => {
        setTimeout(() => {
            setUser({
                name: '张三',
                occupation: '前端工程师'
            })
        }, 3000)
    }, [])

    return user ? (
        <div>
            <p>用户名：{user.name}</p>
            <p>职业：{user.occupation}</p>
        </div>
    ) : <div>loading...</div>
}

export default App
```

- 另外一种形式
```jsx
function App() {
    const [user, steUser] = useState()

    // 页面初始话去请求数据
    useEffect(() => {
        setTimeout(() => {
            setUser({
                name: '张三',
                occupation: '前端工程师'
            })
        }, 3000)
    }, [])

    if(!user) {
        return <div>loading...</div>
    }

    return(
        <div>
            <p>用户名：{user.name}</p>
            <p>职业：{user.occupation}</p>
        </div>
    )
}

export default App
```