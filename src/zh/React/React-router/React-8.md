---
title: （八）Redirect的使用
date: 2023-03-16
category:
    - react路由管理
tag: 
    - react
order: 8
---

### 🍇一、Redirect的使用
1. 经过我们之前的学习，页面在一加载的时候不会默认选择一个路由，而是空的，下面就来解决这个问题，需要用到一个内置组件 `Redirect(重定向)`
```js
import { NavLink, BrowseRouter, Switch, Redirect }


class xxx extends react.Component {
    render() {
        return(
            <div>
                <Switch>
                    <Router path="/about" component={xxx} />
                    <Router path="/home" component={xx
                    x} />
                    // 路由重定向，上面都没有匹配上就进入到兜底方案 Redirect
                    <Redirect to="/about" />
                </Switch>
            </div>
        )
    }
}
```

### 总结
1. 一边写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到 `Redirect` 指定的路由

2. 具体编写
```html
<Switch>
    <Router path="/about" component={xxx} />
    <Router path="/home" component={xxx} />
    // 路由重定向，上面都没有匹配上就进入到兜底方案 Redirect
    <Redirect to="/about" />
</Switch>
```