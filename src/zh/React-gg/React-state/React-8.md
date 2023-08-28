---
title: （八）setState 的使用
date: 2022-12-31
category:
    - react之state
tag: 
    - react
---


### 🍧一、`setState` 的使用
- 接着上一章，改变 `isMood` 的值
```jsx
// 1. 创建一个类组件
class Mood extends React.Component {
    constructor(props) {
        super(props)
        // 初始化状态
        this.state = {
            isMood: true
        }
        // 改变 this 指向
        this.demo = this.demo.bind(this)
    }

    render() {
        // 结构赋值 读取状态
        const { isMood } = this.state
        return <h1 onCLick={demo}>今天心情很{isMood ? '开心' : '伤心'}</h1>
    }

    demo() {
        // demo 是放在哪里的？ ---- 放在 Mood 的原型对象上
        // 获取原来的 isMood 的值
        const isMood = this.state.isMood

        // 严重注意：状态不可以直接更改，需要借助一个内置的 Api
        this.state.isMood = !isMood
        console.log(this.state.isMood)
    }
}

// 2. 渲染组件到页面
ReactDom.render(<Mood/>, document.getElmentById('test'))
```
- 按照上面的写法，`boolea` 已经可以切换了，但是 `React` 不能直接更改状态的数据

![](https://image.zswei.xyz/img/202301021548157.png)


### 🐆二、使用内置的 `Api` `setState` 修改 `state` 的值
```js
class Mood extends React.Component {
    ...

    demo() {
        const isMood = this.state.isMood
        this.setState({isMood: !isMood})
    }
}

// 2. 渲染组件到页面
ReactDom.render(<Mood/>, document.getElmentById('test'))
```

### 🐮三、`this.setState()` 更新状态时是合并对象，还是更新对象
- `this.setState` 是合并状态，有重名的就替换掉，没有的保留住

### 🦄四、页面一直在更新，构造器 `constructor` 调用几次
- `new xxx` 实例对象的时候调用构造器 `constructor`，只调用一次

### 🐵五、`render` 函数嗲用几次
- 1+次，第一次是初始化，n次是每一次修改页面就掉一次


### 🐐六、自定义函数调用几次
- 触发几次就调用几次