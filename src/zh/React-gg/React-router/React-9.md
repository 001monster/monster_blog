---
title: （九）嵌套路由
date: 2023-03-16
category:
    - react路由管理
tag: 
    - react
order: 9
---

### 🍇一、嵌套路由

![](https://image.zswei.xyz/img/202303161400831.png)

像上图这种就是嵌套路由，展示区里面又有导航路由。

### 二、如果使用二级路由
一级路由
```js
class Xxxx extends react.Component {
    render() {
        return(
            <div>
                // 导航区域-编写路由连接
                <div>
                    <NavLink className="xxx" to="/home">首页</NavLink>
                </div>

                // 内容展示区域-注册路由
                <div>
                <Switch>
                    <Router path="/home" component={组件名字}/>
                </Switch>
                </div>
            </div>
        )
    }
}
```
一级路由渲染后的路由组件
```js
class Xxx extends react.Component {
    render() {
        return (
            <div>
                // 导航区域-编写路由连接
                <div>
                    <NavLink className="xxx" to="/home/message">message</NavLink>
                </div>

                // 内容展示区域-注册路由
                <div>
                <Switch>
                    <Router path="/home/message" component={组件名字}/>
                    // 兜底路由
                    <Redirect to="/home/news" />
                </Switch>
                </div>
            </div>
        ) 
    }
}
```


### 总结
1. 注册子路由时要写上父路由的 `path` 值

2. 路由的匹配是按照注册路由的顺序进行的（从上到下，从第一层到多层）