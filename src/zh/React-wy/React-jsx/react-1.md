---
title: （一）、处理用户输入
order: 1
date: 2023-09-03
category:
    - React
tag: 
    - React
---

![](https://image.zswei.xyz/img/20230828152152.png)

## 一、解决 `jsx` 只有一个根元素的问题

1. 因为 `jsx` 只能有一个根标签，如果我们不想增加额外的标签，就需要使用 `Fragment` 这个标签来进行包裹

```jsx
import { Fragment } from 'react'

function App() {
    return (
        <Fragment>
            <p>名字：张三</p>
            <p>职业：前端工程师</p>
        </Fragment>
    )
}

export default App
```

2. 比如循环某个列表的时候也必须有根元素

```jsx
import { Fragment } from 'react'

function App() {
    const tags = ['React', 'Vue', 'JavaScript']

    return (
        <div>
            {
                tags.map((item, index) => {
                    return (
                        <Fragment key={index}>
                            <p>{item}</p>
                            <hr/>
                        </Fragment>
                    )
                })
            }
        </div>
    )
}
```

## 总结
1. `jsx` 只能有一个根元素，如果要使用平行标签，就需要使用一个根元素来进行包裹，可以是 `div` ，但是如果不想加深 `html` 层级就使用 `Fragment`

2. 使用 `Fragment` 的时候需要引入

3. 列表渲染的时候也必须有一个跟标签

4. `Fragment` 标签可以简写为 `<></>` 这样写的话就可以不用进行引入了

5. 在循环某个列表的时候不可以使用 `<></>` 这个空标签，因为他不能设置 `key` 属性