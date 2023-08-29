---
title: （四）、给组件传递Props
order: 4
date: 2023-08-29
category:
    - Props
tag: 
    - React
---

![](https://image.zswei.xyz/img/20230828152152.png)

## 一、给 `Props` 设置默认值
1. 当父组件使用子组件的时候没有传递 `Props` 值，但是子组件又使用 `Props` 参数就会报错
```sh
# TypeError: Cannot read properties of undefined (reding 'xxx')

# 不能在 undefined 上读取 xxx 的属性
```

2. 这个时候就需要给 `Props` 设置默认值, 当使用组件的时候不传递属性就使用组件的默认值

3. 直接使用 `js` 特性 结构的时候给他赋值就可以了
```jsx
import React from 'react'

function BlogListItem({msg = 'hello', blog = {}}) {
    console.log(msg)
    // 接收父组件传递的值
    return <div>{blog.title}</div>
}

export default BlogListItem
```