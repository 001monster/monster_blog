---
title: （十二）向路由组件传递state参数
date: 2023-03-16
category:
    - react路由管理
tag: 
    - react
order: 12
---

### 🍇一、向路由组件传递state参数
1. 跳转路由携带 `state` 参数
- 注意：
    1. 这里的 `state` 跟状态里面的 `state` 没有关系
    2. 传递 `state` 的时候 `to` 的参数不能写成**字符串**的形式，需要写成对**象形式**
```js
class Xxxx extends react.Component {
    render() {
        return(
            // 传递参数
            <NavLink to={{pathname: '/home/message/detail', state:{id: xxx, title: xxx}}}>xxx</NavLink>
        )
    }
}
```

2. 目标路由接收传递参数(`state` 无需接收)
- 注意：
    1. 使用 `state` 传递参数的时候，刷新浏览器数据是不会丢失的，应为他存在浏览器 `history`  历史记录的
    2. 如果浏览器关掉了，`history` 历史记录没有了数据就丢失了，所以接收数据的时候需要进行处理

```js
class Xxxx extends react.Component {
    render() {
        // 当历史记录没有的时候他是一个空对象
        const { xxx, xxx } = this.props.location.state || {}
        console.log(this.props.location.state)
        // {xxx: xxx, xxx: xxx}

        return(
            <Router path="/home/message/detail" component={路由组件名字}/>
        )
    }
}
```



### 总结
1. 路由连接携带参数：
```sh
<NavLink to={pathname: '/home/message/detail', state: {key: value, key: value}}>详情</NavLink>
```

2. 注册路由（无需声明接收）：
```sh
<Router path="/home/message/detail" component={组件名字}/>
```

3. 接收参数：
```sh
const { xxx } = this.props.location.state
备注：刷新页面是参数是不会丢失的，但是关闭浏览器会丢失
```