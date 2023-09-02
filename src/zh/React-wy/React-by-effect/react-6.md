---
title: （六）、useEffect 中执行异步函数
order: 6
date: 2023-09-02
category:
    - React
tag: 
    - React
---

![](https://image.zswei.xyz/wj/202309021700967.png)

## 一、在 useEffect 中执行异步函数
1. 如网络请求，等到数据返回回来了在执行

```jsx
function App() {
    const [dateTime, setDateTime] = useState(new Date())

    useEffect(async () => {
        // 异步函数，等待三秒后在执行
        await new Promise((resolve, reject) =>  setTimeout(resolve. 3000))
    }, [refresh])

    return (
        <div>
            <h1>{dateTime.toLocaleString('zh-CN')}</h1>
        </div>
    )
}
```

2. 像上面这样不行，因为 `useEffect` 是同步函数，来避免竞争，所以不能在 `useEffect` 上使用 `async`
 ```jsx
function App() {
    const [dateTime, setDateTime] = useState(new Date())

    useEffect(() => {
        // 调用异步函数，react 会自动 await 这个函数
        updateTime()
    }, [])

    // 将异步函数放到外面来写
    // 异步函数，等待三秒后在执行
    async function updateTime() {
        await new Promise((resolve,reject) => {
            setTimeout(() => {
                setDateTime(new Date())
            }, 3000)
        })
    }

    return (
        <div>
            <h1>{dateTime.toLocaleString('zh-CN')}</h1>
        </div>
    )
}
```

## 总结
1. `useEffect` 是一个同步函数，不是直接在里面执行异步函数

2. 如果需要请求网络数据的话，也是像上面一样把异步函数写道外面，然后在 `useEffect` 里面调用，他会自动帮我们 `await` 这个函数