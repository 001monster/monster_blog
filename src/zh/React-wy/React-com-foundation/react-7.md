---
title: （七）、子组件给父组件传值
order: 7
date: 2023-08-29
category:
    - Props
tag: 
    - React
---

![](https://image.zswei.xyz/img/20230828152152.png)

## 一、子组件给父组件传值
1. 通过事件监听传递参数
```jsx
import BlogListItem from '@/components/blog-list-item/index'

const blogList = [...]

function App({onEdit}) {
    return (
        <div>
            blogList.map((item, index) => (
                {/* 使用组件 */}
                <BlogListItem blog={item} key={item.id}>
                    {/* 接收子组件传递的值 */}
                    <EdiAnd onEdit={(str, e) => console.log(str)} />
                </BlogListItem>
            ))
        </div>
    )
}

function EdiAnd({onEdit}) {
    // 跟处理普通函数是一样的，等组件自己的逻辑处理完了再去执行props传递的事件监听
    function myselfEdit(e) {
        console.log('处理自己的')
        // 判罚父组件是否传递了事件监听
        if(onEdit){
             onEdit('我是给父组件传递的参数', e)
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


## 总结
1. `react` 的 `props` 只能通过父组件传递给子组件，不能通过子组件传递给父组件，因为 `react` 的数据量是单向的【后期课程解释】

2. 子组件给父组件传值，本质上就是通过子组件的事件监听，来给父组件的事件监听传递参数

3. 如果传递的时候需要把 `e` 传递过去也是可以的