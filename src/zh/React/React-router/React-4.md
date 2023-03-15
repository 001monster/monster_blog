---
title: （四）NavLink的使用
date: 2023-03-15
category:
    - react路由管理
tag: 
    - react
order: 4
---

### 🍇一、点击路由高亮
1. 如果当单击对应路由需要出现高亮效果的时候，就不能使用 `<Link>` 这个内置组件了

2. 使用另外一个组件实现高亮效果 `<NavLink>`

3. 如果需要自定义高亮样式的话需要给 `<NavLink>` 传递一个参数 `activeClassName`
注意：如果自定义样式的类名就叫做 `active` 就可以省去 `activeClassName` 这个属性，直接在 `.active` 这个类名里面写样式
```html
<NavLink activeClassName="自定义的样式类名" className="xxxx">首页</NavLink>
```

### 二、封装自己的 `<NavLink/>` 组件
当我们一个项目当中有很多连接的时候，就会重复写这样的代码。
```html
<NavLink activeClassName="自定义的样式类名" className="xxxx">xxx</NavLink>
<NavLink activeClassName="自定义的样式类名" className="xxxx">xxx</NavLink>
<NavLink activeClassName="自定义的样式类名" className="xxxx">xxx</NavLink>
<NavLink activeClassName="自定义的样式类名" className="xxxx">xxx</NavLink>
<NavLink activeClassName="自定义的样式类名" className="xxxx">xxx</NavLink>
```

我们自己来封装一下上面这组件，让他变得更加好用,把需要重复写的东西提出来写，需要动态写的属性通过 `props` 传递进去
```js
// 封装
class xxNavLink extends react.Component {
    render() {
        const { to, title } = this.props
        return(
            <NavLink activeClassName="xxx" className="xxx" {...this.props}>{title}</NavLink>
        )
    }
}

// 使用
<xxNavLink to="/home">
```

### 三、如何接收标签体内容
标签体内容是一个特殊的属性，他被子组件接收到了 `children` 属性上了
使用他的时候有两种使用方式
1. 方式一
```html
<NavLink activeClassName="xxx" className="xxx" {...this.props}>{this.props.children}</NavLink>
```

2. 方式二，直接使用标签属性接收也是可以解析的
```html
<NavLink activeClassName="xxx" className="xxx" {...this.props}/>
```