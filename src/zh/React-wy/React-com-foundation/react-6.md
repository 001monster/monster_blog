---
title: （六）、给组件传递事件监听
order: 6
date: 2023-08-29
category:
    - Props
tag: 
    - React
---

![](https://image.zswei.xyz/img/20230828152152.png)

## 一、给组件传递事件监听
1. 使用 `props` 给组件传递一个事件监听函数
```jsx
import BlogListItem from '@/components/blog-list-item/index'

const blogList = [...]

function App({onEdit}) {
    return (
        <div>
            blogList.map((item, index) => (
                {/* 使用组件 */}
                <BlogListItem blog={item} key={item.id}>
                    <EdiAnd onEdit={() => console.log(blog.id)} />
                </BlogListItem>
            ))
        </div>
    )
}

function EdiAnd({onEdit}) {
    return (
        <>
            {/* 当点击编辑的时候触发 父组件传递的 onEdit 函数 */}
            <button onClick={onEdit}>编辑</button>
        </>
    )
}

export default BlogListItem
```

## 二、如果子组件再传递监听之前需要自己先处理一下逻辑如何操作
- 跟处理普通函数是一样的，等组件自己的逻辑处理完了再去执行 `props` 传递的事件监听

```jsx
import BlogListItem from '@/components/blog-list-item/index'

const blogList = [...]

function App({onEdit}) {
    return (
        <div>
            blogList.map((item, index) => (
                {/* 使用组件 */}
                <BlogListItem blog={item} key={item.id}>
                    <EdiAnd onEdit={() => console.log(blog.id)} />
                </BlogListItem>
            ))
        </div>
    )
}

function EdiAnd({onEdit}) {
    // 跟处理普通函数是一样的，等组件自己的逻辑处理完了再去执行props传递的事件监听
    function myselfEdit() {
        console.log('处理自己的')
        // 判罚父组件是否传递了事件监听
        if(onEdit){
             onEdit()
        } else {
            console.warring('警告：没有传递事件监听')
        }
    }

    return (
        <>
            {/* 当点击编辑的时候触发 父组件传递的 onEdit 函数 */}
            <button onClick={myselfEdit}>编辑</button>
        </>
    )
}

export default BlogListItem
```