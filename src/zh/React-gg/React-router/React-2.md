---
title: （二）react-router-dom@5
date: 2023-03-15
category:
    - react路由管理
tag: 
    - react
order: 2
---

### 🍇一、安装 `react-router-dom@5` 
:::tabs
@tab:active npm 
```sh
npm i react-router-dom
```

@tab yarn
```sh
yarn add react-router-dom
```
:::


### 二、开始使用 `react-router-dom@5`
1. 引入 `react-router-dom` 内置组件
```js
import { Link, BrowserRouter } from 'react-router-dom'

// 原生html中使用<a>标签跳转不同的页面
// <a href='xxxx'>home</a>

// react中使用路由连来实现动态切换组件
<BrowserRouter>
    <Link className='xxx' to='/home'>首页</Link>
</BrowserRouter>
```

2. 通过路由 `Router` 组件来动态展示 **组件**
App跟组件
```js
class App extends react.Component {
    ...
}

React.render(<BrowseRouter><App/></BrowseRouter>, document.getElementById('app'))
```
组件
```js
import react from 'react'
import { Link, BrowseRouter, Router } from 'react-router-dom'
import xxx from './xxx/xxx'

class XXX extends react.Component {
    render() {
        return(
            <div>
                // 导航区域-编写路由连接
                <div>
                    <Link className="xxx" to="/home">首页</Link>
                </div>

                // 内容展示区域-注册路由
                <div>
                    <Router path="/home" component={组件名字}/>
                </div>
            </div>
        )
    }
}
```


### 总结
1. 开发项目之前确定好界面的导航区、展示区

2. 导航区的连接标签是 `Link` 
```js
<Link to="/xxx">Demo</Link>
```

3. 展示区域写 `Router` 标签进行路径的匹配
```js
<Router path="xxxx" component={组件名字}/>
```

4. 需要在 `App` 的最外层包裹一个路由器 `BrowseRouter` 或 `HashRouter`