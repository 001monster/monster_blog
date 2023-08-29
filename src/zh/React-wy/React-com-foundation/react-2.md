---
title: （二）、创建第一个组件
order: 2
date: 2023-08-29
category:
    - React
tag: 
    - React
---

![](https://image.zswei.xyz/img/20230829095510.png)

## 一、创建组件
1. 在 `src` 下面创建一个 `components` 文件夹-在创建一个对于名字的组件文件夹-里面放对应的样式和逻辑

![](https://image.zswei.xyz/img/20230829101031.png)

2. 使用 `ES7+REact/Redux...`  插件快捷命令来快速创建代码片段
```sh
# 快捷命令
rfce
```

```jsx
import React from 'react'

function BlogListItem() {
    return <div>BlogItem</div>
}

export default BlogListItem
```


## 二、使用组件
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
                <BlogListItem/>
            ))
        </div>
    )
}

export default BlogListItem
```

## 总结
- 当 `vscode` 自动提示不生效时，需要自己配置一下

::: tabs
@tab:active mac
```sh
# 第一步
cmd/control+shift+p

# 第二步 输入
restart

# 第三步 选择 Restart TS Server 并回车
```
@tab windows
```sh
# 第一步
ctrl+shift+p

# 第二步 输入
restart

# 第三步  选择 Restart TS Server 并回车
```
:::