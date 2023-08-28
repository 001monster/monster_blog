---
title: （五）Switch 的使用
date: 2023-03-15
category:
    - react路由管理
tag: 
    - react
order: 5
---

### 🍇一、Switch 的使用
如果按照之前的使用方法，每一个都通过 `path` 去匹配组件，他会从头匹配到尾，有效率问题
```html
<Router path="/xxx" component={xxx} />
<Router path="/xxx" component={xxx} />
<Router path="/xxx" component={xxx} />
<Router path="/xxx" component={xxx} />
<Router path="/xxx" component={xxx} />
```

解决上面这种每一个路劲都去匹配一次的问题，需要给它加上一个 `Switch` 组件包裹，当它匹配到需要的组件的时候就不会在向匹配了
```html
<Switch>
    <Router path="/xxx" component={xxx} />
    <Router path="/xxx" component={xxx} />
    <Router path="/xxx" component={xxx} />
    <Router path="/xxx" component={xxx} />
    <Router path="/xxx" component={xxx} />
</Switch>
```

### 总结
1. 通常情况下，`path` 和 `component` 是一一对应的关系

2. `Switch` 可以提高路由匹配效率（单一匹配）