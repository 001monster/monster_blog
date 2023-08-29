---
title: （五）、给子组件设置自定义视图
order: 5
date: 2023-08-29
category:
    - Props
tag: 
    - React
---

![](https://image.zswei.xyz/img/20230828152152.png)


## 一、设置自定义视图

1. 自定义视图就是在组件的内部自己定义需要展示的内容

2. 父组件传递自定义的 `html`

```jsx
import BlogListItem from '@/components/blog-list-item/index'

const blogList = [...]

function App() {
    return (
        <div>
            blogList.map((item, index) => (
                {/* 使用组件 */}
                <BlogListItem blog={item} key={item.id}>
                    <button>自定义view视图，编辑按钮</button>
                </BlogListItem>
            ))
        </div>
    )
}

export default BlogListItem
```

3. 子组件接收自定义视图

```jsx
import React from 'react'

function BlogListItem({msg = 'hello', blog = {}, children}) {
    console.log(msg)
    // 接收父组件传递的值
    return (
        <>
            <div>{blog.title}</div>
            {/* 自定义视图 */}
            <div>{children}</div>
        </>
    )
}

export default BlogListItem
```

## 注意
1. 自定义视图可以是 `html` 标签，也可使 `React组件`

2. 在子组件中把想自定义视图的地方放上一个 `children` 属性，然后再父组件传递 `html` 标签，他就会自动放到 `children` 的地方