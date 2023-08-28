---
title: （十四）编程式路由导航
date: 2023-03-16
category:
    - react路由管理
tag: 
    - react
order: 14
---

### 🍇一、使用编程式路由导航
1. 编程式导航 **使用push** 方式
```js
class Xxx extends react.Component {
    navLinkClick = () => {
        // 携带 params 参数
        this.props.history.push(`/xxx/xxx/${xxx}/${xxx}`)
        // 携带 search 参数
        this.props.history.push('/xxx/xxx?key=value$key=value')
        // 携带 state 参数
        this.props.history.push(`/xxx/xxx/${xxx}/${xxx}`)
    }

    render() {
        return(
            <div onClick={this.navLinkClick}>点我使用编程式导航</div>
        )
    }
}
```

2. 编程式导航 **使用replace** 方式
```js
class Xxx extends react.Component {
    navLinkClick = () => {
        // 携带 params 参数
        this.props.history.replace(`/xxx/xxx/${xxx}/${xxx}`)
        // 携带 search 参数
        this.props.history.replace('/xxx/xxx?key=value$key=value')
        // 携带 state 参数
        this.props.history.replace('/xxx/xxx', {key:value, key:value})
    }

    render() {
        return(
            <div onClick={this.navLinkClick}>点我使用编程式导航</div>
        )
    }
}
```

3. 控制浏览器前进
```js
this.props.history.goForward()
```

4. 控制浏览器后退
```js
this.props.history.goBack()
```

5. 控制浏览器前进后退（可以前进或后退多个页面）
```js
// 正数，为前进
this.props.history.go(2)

// 负数为后退
this.props.history.go(-2)
```

### 二、注意事项
需要注意的是，以上的这几种编程式导航，只能在**路由**组件中使用，因为只有在路由组件中才有 `history`，普通组件需要经过加工才可以使用


### 三、`withRouter` 的使用，通过 `withRouter` 加工过后，一般组件就可以向路由组件一样使用让 `history` 那些方法了
1. 导入 `withRouter` 函数并使用
```js
import { withRouter } from 'react-router-dom'

class Xxx extends react.Component {
    render() {
        return {
            ...
        }
    }
}

// withRouter 接收一个组件，经过加工以后就可以使用编程式导航的那些方法了
export default withRouter(Xxx)
```
