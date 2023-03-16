---
title: （七）路由的模糊匹配与严格匹配
date: 2023-03-16
category:
    - react路由管理
tag: 
    - react
order: 7
---

### 🍇一、路由的模糊匹配与严格匹配
1. 模糊匹配，下面的实例代码是可以匹配组件成功的（只要注册路由中包含在导航路由中的第一层就可以匹配成功）
```html
<!-- home 导航路由 -->
<NavLink to="/home/a/b">Home</NavLink>
<!-- 这样是匹配不成功的 -->
<NavLink to="/a/home/b">Home</NavLink>
<NavLink to="about">About</NavLink>

<!-- 可以正常匹配到home路径 -->
<Router path="/home">
<Router path="/about">
```

2. 开启精准匹配在 `Router` 组件中把 `exact` 属性改为 `true` 就可以开启精准匹配
```html
<!-- home 导航路由 -->
<NavLink to="/home/a/b">Home</NavLink>
<NavLink to="about">About</NavLink>

<!-- 开启了严格模式不能匹配成功 -->
<Router exact={true} path="/home">
<Router exact={true} path="/about">
```

### 总结
1. 默认使用的是严格匹配（简单记：【输入的路径】必须要包含【匹配的路径】，并且顺序要一致）

2. 开启严格模式：`<Router exact={true} path="/xxx" component={xxx}>`

3. 严格匹配不要随便开启，需要在打开，有些时候会导致无法继续匹配二级路由