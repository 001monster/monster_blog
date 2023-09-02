---
title: （二）、错误使用副作用的例子
order: 2
date: 2023-09-02
category:
    - React
tag: 
    - React
---

![](https://image.zswei.xyz/wj/202309021700967.png)

## 一、组件发生副作用的例子
- 这个组件显示日期，每一秒更新一下
```jsx
function App() {
    const [dateTime, setDateTime] = useState(new Date())

    setInterval(() => {
        setDateTime(new Date())
    }, 1000)

    return (
        <main className="main">
            <h1>{dateTime.toLocaleString('zh-CN')}</h1>
        </main>
    )
}
```

![](https://image.zswei.xyz/wj/202309021724620.png)

- 这样做虽然出来了，但是我们打印一下 `setInterval` 会发现 `setInterval` 这个函数没 1000 毫秒都会执行一次，这样很快就会造成内存泄漏

![](https://image.zswei.xyz/wj/202309021726485.png)

## 二、为啥会发生上面的情况
- 这是 `React` 更新的机制是当 `state` 里面的数据发生变化时，`React` 就会重新执行 当前组件里面的所有内容

## 总结
上面的这种情况就称之为组件的副作用，下一章我们来看看如和解决这种副作用