---
title: （十一）向路由组件传递search参数
date: 2023-03-16
category:
    - react路由管理
tag: 
    - react
order: 11
---

### 🍇一、向路由组件传递search参数
1. 跳转路由携带 `search` 参数
```js
class Xxxx extends react.Component {
    render() {
        return(
            // 传递参数
            <NavLink to={`/home/message/detail?id=${xxx}&title=${xxx}`}>xxx</NavLink>
        )
    }
}
```

2. 目标路由接收传递参数(因为是search传递参数，所以无需接收)
```js
class Xxxx extends react.Component {
    render() {
        console.log(this.props.location.search)
        // "?id=xx&title='xxx'"

        return(
            <Router path="/home/message/detail" component={路由组件名字}/>
        )
    }
}
```

3. 当我门使用 `search` 传递参数的时候，拿到的是一个字符串，需要使用一个第三方库 `querystring` 来格式化，这个库在 `react` 中已经帮我下载了，直接引用就可以了
- 注意：
    1. `key=value&key=value` 这种格式叫做 `urlEncode` 格式的编码
    2. 对象转 `urlEncode` 编码 `qs.stringify({key:value,key:value})`
    3. `urlEncode` 串转对象 `qs.parse(key=value&key=value)`
```js
import qs from 'querysgting'

class Xxx extends react.Component {
    render() {
        const { search } = this.props.location
        const { xxx, xxx } = qs.parse(search)
        // { xxx:xxx, xxx:xxx }

        return (
            ...
        )
    }
}
```


### 总结
1. 路由连接携带参数：
```sh
<NavLink to="/home/message/detail?key=value&key=value">详情</NavLink>
```

2. 注册路由（无需声明接收，正常注册即可）：
```sh
<Router path="/home/message/detail" component={组件名字}/>
```

3. 接收参数：
```sh
const { search } = this.props.location
备注：获取到的 search 是 urlEncode 编码字符串，需要使用querystring
```