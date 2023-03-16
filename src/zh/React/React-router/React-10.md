---
title: （十）向路由组件传递params参数
date: 2023-03-16
category:
    - react路由管理
tag: 
    - react
order: 10
---

### 🍇一、向路由组件传递params参数
1. 跳转路由携带 `params` 参数
```js
class Xxxx extends react.Component {
    render() {
        return(
            // 传递参数
            <NavLink to={`/home/message/detail/${xxx}/${xxx}`}>xxx</NavLink>
        )
    }
}
```

2. 目标路由接收传递参数(声明接收)
```js
class Xxxx extends react.Component {
    render() {
        console.log(this.props.match.params)
        // {xxx: xxx, xxx: xxx}

        return(
            <Router path="/home/message/detail/:xxx/:xxx" component={路由组件名字}/>
        )
    }
}
```


### 总结
1. 路由连接携带参数：
```sh
<NavLink to="/home/message/detail/18">详情</NavLink>
```

2. 注册路由（声明接收）：
```sh
<Router path="/home/message/detail/:id" component={组件名字}/>
```

3. 接收参数：
```sh
const { xxx } = this.props.match.params
```