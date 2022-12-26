---
title: （六）jsx 小练习
date: 2022-12-25
category:
    - react
---

### 🍈 一、写一个 `jsx` 小练习
![](https://image.zswei.xyz/img/202212262317275.png)

1. 数据写活
```js
// 创建虚拟DOM
const VDOM = (
    <div>
        <h1>前端JS框架列表</h1>
        <ul>
            <li>Angular</li>
            <li>React</li>
            <li>Vue<li/>
        </ul>
    </div>
)
```

![](https://image.zswei.xyz/img/202212262318972.png)

2. 数据写活
```js
const data = ['Angular', 'React', 'Vue']

const VDOM = (
    <div>
        <h1>前端JS框架列表</h1>
        <ul>
            {
                data.map((item, index) => {
                    return <li key={index}>{item}<li/>
                })
            }
        </ul>
    </div>
)
```


### 🍑总结
1. 一定注意区分：【js语句（代码）】与【js表达式】
- 1. 表达式：一个表达式会产生一个值，可以放在任何需要值的地方
- 2. 表达式使用一个变量去接收，是可以接收到值的
- 3. `js` 语句使用一个变量去接收，毛都没有