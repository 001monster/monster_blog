---
title: （三）路由组件与一般组件
date: 2023-03-15
category:
    - react路由管理
tag: 
    - react
order: 3
---

### 🍇一、什么是路由组件、什么是一般组件
1. 组件是用户在模板当中直接使用的就是一般组件

2. 组件在 `Router` 组件的 `component` 属性中使用的就是路由组件

### 二、路由组件传递数据
某个路由组件
```js
class xxx extends react.Component {
    render() {
        console.log('xx组件收到的props是', this.props)

        return(
            ...
        )
    }
}
```

![](https://image.zswei.xyz/img/202303151652165.png)


### 总结：一般组件和路由组件
1. 写法不同
    1. 一般组件：<Demo/>
    2. 路由租价 <Router path="/demo" component={Demo} />


2. 存放位置不同
    1. 一般组件：components
    2. 路由组件：pages


3. 接收到的 `props` 不同
    1. 一般组件：写组件时传递的是什么，接收到的就是什么
    2. 路由组件：接收到三个固定的数据 `history` `location` `match` 