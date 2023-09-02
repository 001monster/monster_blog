---
title: （五）、清理副作用
order: 5
date: 2023-09-02
category:
    - React
tag: 
    - React
---

![](https://image.zswei.xyz/wj/202309021700967.png)

## 一、清理副作用
- 当组件卸载的时候应该清理掉 `定时器` `断开长连接` `监听窗口的滚动` 等方法 

```jsx
function App() {
    const [dateTime, setDateTime] = useState(new Date())
    const [refresh, setRefresh] = useState(new Date())

    useEffect(() => {
        const id = setInterval(() => {

        }, 1000) 
        console.log(id)

        // 清理定时器
        return () => {
            clearInterval(id)
            console.log('我清理的定时器ID为:' + id)
        }
    }, [refresh])

    // 校准时间
    useEffect(() => {
        setDateTime(new Date())
    }, [refresh])

    return (
        <div>
            <h1>{dateTime.toLocaleString('zh-CN')}</h1>
            <button onClick={() => setRefresh(refresh + 1)}>校准</button>
        </div>
    )
}
```

## 总结
1. `useEffect` 可以调用多次，吧相关的代码放到一起，方便维护