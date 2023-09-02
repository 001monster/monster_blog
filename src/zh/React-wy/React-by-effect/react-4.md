---
title: （四）、useEffect() 执行的时间与依赖数组的作用
order: 4
date: 2023-09-02
category:
    - React
tag: 
    - React
---

![](https://image.zswei.xyz/wj/202309021700967.png)

## 一、useEffect() 执行的时间
1. 组件挂载的时候

2. 组件重新渲染的时候

3. 组件卸载的时候

## 二、useEffect() 第二个参数的作用
1. 如果是个空数组的时候，他就不依赖任何一个 `state` 的数据变化，他就在组件第一次执行的时候挂载一下

```jsx
function App() {
    useEffect(() => {
    }, [])

    return <div></div>
}
```


2. 如果去掉数组的话，就是每次 `state` 里面的数据发生改变的时候，他都会改变一次

```jsx
function App() {
    useEffect(() => {
    })

    return <div></div>
}
```

3. 不同状态的时候执行 `useEffect` 点击刷新按钮的时候 改变依赖数组再次执行 `useEffect`

```jsx
function App() {
    const [dateTime, setDateTime] = useState(new Date())
    const [refresh, setRefresh] = useState(new Date())

    useEffect(() => {
        setDateTime(new Date())
    }, [refresh])

    return (
        <div>
            <h1>{dateTime.toLocaleString('zh-CN')}</h1>
            <button onClick={() => setRefresh(refresh + 1)}>刷新</button>
        </div>
    )
}
```

## 总结
1. `useEffect` 的依赖数组可以是多个，每当其中一个数据发生改变，`useEffect` 都会执行

2. 依赖数组可以是 `state` 也可以是 `props` 