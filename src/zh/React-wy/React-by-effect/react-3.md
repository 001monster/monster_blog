---
title: （三）、使用 useEffect 执行副作用
order: 3
date: 2023-09-02
category:
    - React
tag: 
    - React
---

![](https://image.zswei.xyz/wj/202309021700967.png)

## 一、使用 useEffect 执行副作用

```jsx
function App() {
    const [dateTime, setDateTime] = useState(new Date())

    // 第二个参数是必须要传递的，不传递就和没有使用 useEffect 是一样的
    useEffect(() => {
        setInterval(() => {
            setDateTime(new Date())
        }, 1000)
    }, [])

    return (
        <main className="main">
            <h1>{dateTime.toLocaleString('zh-CN')}</h1>
        </main>
    )
}
```

## 二、注意
- 在开发的时候吧 `App.jsx` 里面的 `<React.StrictMode></React.StrictMode>` 注释掉，因为他会导致 `useEffect` 执行两次，这是因为 `useEffect` 组件卸载的时候他也会执行，在开发中时候 `<React.StrictMode></React.StrictMode>` 这个标签是帮助我们测试 组件卸载的