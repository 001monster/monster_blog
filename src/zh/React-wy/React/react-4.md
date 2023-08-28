---
title: （四）、React 中的事件处理
date: 2023-08-28
order: 4
category:
    - React
tag: 
    - React
---

![](https://image.zswei.xyz/img/20230828152152.png)

## 一、文本框的监听事件
```jsx
import React from 'react'

function App() {
    function handleInputChange(e) {
        console.log(e.target.value)
    }

  return (
    <div>
        <h1>欢迎使用本应用</h1>
        <div>
            <textarea onInput={handleInputChange} placeholder="欢迎使用react"></textarea>
            <button>发布</button>
        </div>
    </div>
  )
}

export default App
```

## 二、给处理函数传递自定义参数
```jsx
import React from 'react'

function App() {
    const blogList = [
        {
            id: 1,
            title: '标题1'
        },
        {
            id: 1,
            title: '标题1'
        }
    ]

    function handleBlogClick(id) {
        console.log(id)
    }

    function handleBlogClick1(id) {
        return (e) => {
            console.log(e)
            console.log(id)
        }
    }

  return (
    <div>
        <h1>欢迎使用本应用</h1>
        <div>{
            blogList.map((item, index) => (
                <div key={item.id} onClick={() = > handleBlogClick(item.id)}>{item.title}</div>
            ))
            {/* 或者 */}
            blogList.map((item, index) => (
                <div key={item.id} onClick={handleBlogClick1(item.id)}>{item.title}</div>
            ))
        }</div>
    </div>
  )
}

export default App
```

## 总结
如果事件处理逻辑比较简单或者不考虑性能可以直接写在处理事件后面 `onClick={() => console.log('xxxx')}`

[为啥说直接写在 jsx 当中有性能问题]()