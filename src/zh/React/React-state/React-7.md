---
title: （七）解决类中 this 指向问题
date: 2022-12-31
category:
    - react
---


### 🍧一、类组件中 方法的 `this`
- 一行代码解决类中 `this` 指向问题，通过类的关键字 `bind` 来改变 `this` 指向
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
        console.log(this.state.isMood)
    }
}

// 2. 渲染组件到页面
ReactDom.render(<Mood/>, document.getElmentById('test'))
```
:::分析 bind
```js
xxx = this.medo.bind(this)
```
- `this` 实例对象
- `medo` 顺着原型链能找到这个函数
- `bind` 能做两件事，1.能生成一个新的函数；2.能够改变函数的 `this` 
- `bind(this)` 把 `mode` 的 `this` 改成了 实例的 `this`
:::

![](https://image.zswei.xyz/img/202301021526375.png)


### 🐴二、简单说一下 `bind`
```js
function fn() {
    console.log(this)     // 没有开启严格模式 use strict this 是 window
}
fn()  // 直接调用

const x = fn.bind({a:1, b:2})       // 改变了 this 的指向
x()
```

![](https://image.zswei.xyz/img/202301021538200.png)