---
title: （一）、子组件根父组件通信（传值）
order: 1
date: 2023-09-03
category:
    - React
tag: 
    - React
---

![](https://image.zswei.xyz/img/20230828152152.png)

## 一、通过事件处理给父组件传值

- 子组件
```jsx
function Child({user, setFatherName}) {
    function updateName() {
        setFatherName('李四')
    }

    return (
        <>
            <h1>名字：{name}</h1>
            <button onClick={updateName}>修改名字</button>
        </>
    )
}

export default Child
```

- 父组件
```jsx
function App() {
    const [user, setUser] = useState('张三')、

    function setFatherName(name) {
        setUser(name)
    }

    return (
        <Child user={user} setFatherName={setFatherName}/>
    )
}

export default App
```