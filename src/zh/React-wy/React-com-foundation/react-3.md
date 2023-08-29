---
title: （三）、给组件传递Props
order: 3
date: 2023-08-29
category:
    - Props
tag: 
    - React
---

![](https://image.zswei.xyz/img/20230828152152.png)

## 一、子组件接收 `Props` 值
- 每个组件都接收一个 `Props` 参数，通过 `Props` 参数来给子组件传递值
```jsx
import React from 'react'

function BlogListItem(props) {
    // 接收父组件传递的值
    return <div>{props.blog.title}</div>
}

export default BlogListItem
```

## 二、父组件传递 `Props` 参数
- 传递属性就跟普通的 `html` 属性一样，属性名加属性值
```jsx
import BlogListItem from '@/components/blog-list-item/index'

const blogList = [
    {
        id: 1,
        title: '标题1'
    },
    {
        id: 2,
        title: '标题2'
    }
]

function App() {
    return (
        <div>
            blogList.map((item, index) => (
                {/* 使用组件 */}
                <BlogListItem blog={item} key={item.id}/>
            ))
        </div>
    )
}

export default BlogListItem
```

## 三、注意事项
1. 如果在父组件传递的 `props` 值是字符串，那么接收到的值使用的时候也是字符串

2. 如果要传递 `number` 或 `bool` 等类型需要使用 `{}` 括起来
```jsx
<BlogListItem msgId={1} blog={item} key={item.id}/>
```

3. 使用 `props` 参数的时候可以直接使用结构的方式来使用
```jsx
import React from 'react'

function BlogListItem({msg, blog}) {
    // 接收父组件传递的值
    return <div>{blog.title}</div>
}

export default BlogListItem
```