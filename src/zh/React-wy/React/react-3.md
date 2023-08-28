---
title: （三）、React 基础语法
date: 2023-08-28
order: 3
category:
    - React
tag: 
    - React
---

![](https://image.zswei.xyz/img/20230828152152.png)

## 一、使用 `JSX` 编写页面结构
1. 写死
```jsx
import React from 'react'

function App() {
  return (
    <div>
        <h1>欢迎使用本应用</h1>
        <div>
            <textarea placeholder="欢迎使用react"></textarea>
            <button>发布</button>
        </div>
    </div>
  )
}

export default App
```

2. 使用变量 `html` 里面使用 `{}` 来访问变量
```jsx

import React from 'react'

function App() {
    const title = '欢迎使用本应用'

  return (
    <div>
        <h1>{title}</h1>
        <div>
            <textarea placeholder="欢迎使用react"></textarea>
            <button>发布</button>
        </div>
    </div>
  )
}

export default App
```

## 二、JSX 与 HTML 的区别
1. `jsx` 里面只能有一个根元素

2. `class` 变成了 `className`

3. `style` 变成了对象 `js` 对象形式
```jsx
import React from 'react'
function App() {
  return (
    <div style={{
        color: 'read',
        // - 多单吃的属性需要变成驼峰形式 后面的值是字符串形式
        fontSize: '32px'
    }}></div>
  )
}
export default App
```

4. `<label for="content"></label>` 标签的 `for` 属性变成了 `<label htmlFor="content"></label>`

## 三、在 `JSX` 中使用 `JS` 表达式来展示内容

1. 语句是不能再 `jsx` 中执行的，如:

![](https://image.zswei.xyz/img/20230828160440.png)

```jsx
// 不能使用js语句
for(i in list) {

}
```

2. 要想在 `jsx` 中使用 `js` 表达式用一个 `{}` 包起来就可以了
```jsx
import React from 'react'
function App() {
  return (
    // 使用一个 {} 包起来的就是 js 表达式
    <div style={{
        color: 'read',
        fontSize: '32px'
    }}></div>
  )
}
export default App
```

3. 在 `jsx` 中可以直接调用方法
```jsx
import React from 'react'
function App() {

    // 使用函数返回值
    function getTitle() {
        return '欢迎使用React（函数）'
    }

    // 使用变量
    const title = '欢迎使用React（变量）'
  return (
    <>
    <h1>{getTitle()}</h1>
    <h1>{title}</h1>
    </>
  )
}
export default App
```

## 四、使用 `map` 在 `JSX` 中渲染列表数据
```jsx
import React from 'react'
function App() {
    // 定义数据
    const myBlog = [
        {
            id: 1,
            title: '标题1',
            img: '图片1',
            timer: '2023-08-28'
        },
        {
            id: 2,
            title: '标题2',
            img: '图片2',
            timer: '2023-08-28'
        },
        {
            id: 3,
            title: '标题3',
            img: '图片3',
            timer: '2023-08-28'
        }
    ]

  return (
    <>
    <h1>欢迎使用React</h1>
    <div>
        <textarea placeholder="写点什么..."></textarea>
        <button>发布</button>
    </div>
    {/* 渲染列表 */}
    <div>
        {
            myBlog.map((item, index) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <img src={item.img}/>
                    <p>{item.timer}</p>
                </div>
            ))
        }
    </div>
    </>
  )
}
export default App
```

## 四、使用 `三目表达式` 根据条件渲染列表
1. 这种情况适用于 `if else` 的情况
```jsx
import React from 'react'
function App() {
    const myBlog = []

  return (
    <>
    <h1>欢迎使用React</h1>
    <div>
        <textarea placeholder="写点什么..."></textarea>
        <button>发布</button>
    </div>
    {/* 渲染列表 */}
    <div>
        {
            myBlog.length > 0 
            ?
            myBlog.map((item, index) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <img src={item.img}/>
                    <p>{item.timer}</p>
                </div>
            ))
            : 
            (
                <div>暂无数据</div>
            )
        }
    </div>
    </>
  )
}
export default App
```

2. 这种情况适用于只有一个 `if`
```jsx
import React from 'react'
function App() {
    const myBlog = []

  return (
    <>
    <h1>欢迎使用React</h1>
    <div>
        <textarea placeholder="写点什么..."></textarea>
        <button>发布</button>
    </div>
    {/* 渲染列表 */}
    <div>
        {
            myBlog.length > 0 
            {/* 使用 && 符合 签名为 true 才返回后面这个 */}
            &&
            myBlog.map((item, index) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <img src={item.img}/>
                    <p>{item.timer}</p>
                </div>
            ))
        }
    </div>

    {/* 使用 || 给默认值 */}
    <div>
        {
            myBlog.length > 0 
            {/* 使用 && 符合 签名为 true 才返回后面这个 */}
            &&
            myBlog.map((item, index) => (
                <div key={item.id}>
                    <h3>{item.title || '默认标题'}</h3>
                    <img src={item.img}/>
                    <p>{item.timer}</p>
                </div>
            ))
        }
    </div>
    </>
  )
}
```

## 五、`JSX` 对于 假值的处理
1. `js` 的假值有
```js
false
null
undefined
0
NaN

// 其中 false null undefined 这些都不会渲染到页面显示为空白

// 0 和 NaN 会显示到 HTML 页面
```