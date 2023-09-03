---
title: （三）、验证Props的类型
order: 3
date: 2023-09-03
category:
    - React
tag: 
    - React
---

![](https://image.zswei.xyz/img/20230828152152.png)

## 一、类型验证

1. 在前端开发中类型验证是十分重要的，避免在传递错误的类型时出现 `bug`

2. 现在大部分前端应用使用的都是 `TypeScript` 来进行验证

3. 使用 `React` 原生方式进行验证
   1. 导入 `prop-types` 这个库来进行验证
   2. `prop-types` 这个库是 `React` 自带的不需要额外的安装
```jsx
import PropTypes from 'prop-types'

function Nav({title, content, likes, onLike, author, tags}) {
    Nav.propsTypes = {
        title: PropsTypes.string,
        onLike: PropsTypes.func.isRequired,
        author: PropsTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        }),
        tags: PropTypes.array
    }
    
    return (

    )
}

export default Nav
```

## 二、`prop-types` 类型解释

1. `string` 字符串类型

2. `number` 数字类型

3. `func` 函数类型

4. `shape` 函数对象类型

5. `object` 对象类型

6. `array` 数组类型

7. `isRequired` 必传类型