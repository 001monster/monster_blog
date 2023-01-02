---
title: （六）类组件中 方法的 this
date: 2022-12-31
category:
    - react
---


### 🍧一、类组件中 方法的 this
```jsx
// 1. 创建一个类组件
class Mood extends React.Component {
    constructor(props) {
        super(props)
        // 初始化状态
        this.state = {
            isMood: true
        }
    }

    render() {
        // 结构赋值 读取状态
        const { isMood } = this.state
        return <h1 onCLick={demo}>今天心情很{isMood ? '开心' : '伤心'}</h1>
    }
}

// 2. 渲染组件到页面
ReactDom.render(<Mood/>, document.getElmentById('test'))

function demo() {
    const { isMood } = this.state
    console.log(isMood)
}
```
- 为什么此处的 `this` 是 `undefiend` 因为这个是一个普通函数，`babel` 在进行翻译的时候，开启了严格模式，禁止自定义函数 `this` 指向 `window`

![](https://image.zswei.xyz/img/202301021229585.png)


### 🦝二、如何获取到类组件的实例对象
1. 因为这是一个类组件，所以当我们把类一折叠，应该把所有的东西都带走，所以把 `demoe` 函数放到类里面去

```jsx
// 1. 创建一个类组件
class Mood extends React.Component {
    constructor(props) {
        super(props)
        // 初始化状态
        this.state = {
            isMood: true
        }
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
2. `demo` 函数是放在哪里的？ ---- 放在 `Mood` 的原型对象上，供实例使用
3. 通过 `Mood` 的实例调用 `dome` 函数时，`dome` 中的 `this` 就是 `Mood` 实例

#### 🐱为什么会说 `demo` 函数没有定义呢？

![](https://image.zswei.xyz/img/202301021242303.png)

1. 因为在下面这段代码中不能调用到 `demo` 这个函数，`demo` 这个函数是供实例使用的，所以在使用的时候需要 `this.demo` 去调用这个函数
```jsx
render() {
    // 结构赋值 读取状态
    const { isMood } = this.state
    return <h1 onCLick={demo}>今天心情很{isMood ? '开心' : '伤心'}</h1>
}

demo() {
    // demo 是放在哪里的？ ---- 放在 Mood 的原型对象上
    console.log(this.state.isMood)
}
```

#### 🐶为什么还是不能读取 `state` 在 `undefiend` 身上呢？
[为什么此处的 `this` 是 `undefiend`，参考地址](../../blend/js/js-8.md)

![](https://image.zswei.xyz/img/202301021247786.png)

1. 看一下 `demo` 函数中的 `this` 到底是什么
```jsx
demo() {
    // demo 是放在哪里的？ ---- 放在 Mood 的原型对象上
    // 由于 demo 函数是作为 onClick 的回调，所以不是通过实例调用的，是直接调用，又应为严格模式限制，不允许自定义函数 this 指向 window 所以此处的 this 是 undefiend
    console.log(this)   // undefiend
}
```
- 由于 demo 函数是作为 onClick 的回调，所以不是通过实例调用的，是直接调用，又应为严格模式限制，不允许自定义函数 this 指向 window 所以此处的 this 是 undefiend
    console.log(this)   // undefiend

![](https://image.zswei.xyz/img/202301021249493.png)
