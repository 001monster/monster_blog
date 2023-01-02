---
title: （四）对 state 的理解
date: 2022-12-31
category:
    - react
---


### 🥥一、什么是简单组件，什么是复杂组件
1. 如果组件是有状态的 `state` 就是复杂组件
2. 反之，组件没有 `state` 就是简单组件

### 🦞二、组件实例的三大核心属性之一 `state`
- 说到组件实例，就必须是 `class` 类定义的组件，才能使用
1. state
2. props
3. refs

### 🥡二、初始化 `state`

#### （一）、按照需求初始化一个组件
- 需求：点击文字在开心和伤心两个状态之间切换
```jsx
// 1. 创建一个类组件
class Mood extends React.Component {
    render() {
        return <h1>今天心情很开心</h1>
    }
}

// 2. 渲染组件到页面
ReactDom.render(<Mood/>, document.getElmentById('test'))
```

#### （二）、通过一个 `boolea` 在两个状态之间来回切换
```jsx
// 1. 创建一个类组件
class Mood extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isMood: true
        }
    }

    render() {
        return <h1>今天心情很{this.state.isMood ? '开心' : '伤心'}</h1>
    }
}

// 2. 渲染组件到页面
ReactDom.render(<Mood/>, document.getElmentById('test'))
```

![](https://image.zswei.xyz/img/202301011824566.png)