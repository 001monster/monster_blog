---
title: （五）类式组件中的构造器与 props
date: 2023-01-11
category:
    - react之props
tag: 
    - react
order: 5
---

### 🐷一、类式组件到底要不要写构造器
1. 不写构造器 `props` 的值能够正常首收到, 以下代码能够正常运行
```jsx
class Person {

    static propTypes = {
        age: PropTypes.number
    }

    static defaultProps = {
        age: 18
    }
}

ReactDOM.render(<Person/>, document.getElmentById('test'))
```

2. 写构造器 `constructor` 值也能正常收到，以下代码也能够正常运行
```jsx
class Person {
    constructor(props) {
        super(props)
        console.log(props)
    }

    static propTypes = {
        age: PropTypes.number
    }

    static defaultProps = {
        age: 18
    }
}

ReactDOM.render(<Person/>, document.getElmentById('test'))
```


### 🐣二、写不写构造器的区别是什么
1. 通常，在 `React` 中，构造函数仅适用于以下两种情况

![](https://image.zswei.xyz/img/202301112204215.png)

```jsx
class Person extends React.Component {
    constructor() {
        // 初始化状态
        this.state = {key: value}

        // 解决 fun this 指向的问题
        this.fun = this.fun.bind(this)
    }
    ...
}
```
- 以上代码是在 `constructor` 构造器中写的，以下代码是简写形式，赋值语句的写法
```jsx
class Person extends React.Component {
    state = {key: value}
    fun = () => {}
    ...
}
```



### 🐷三、类中的构造器到底有什么作用
1. 如果要写构造器，就必须要接收 `props` 参数，并且通过 `super` 传递到他的父类，否则可能会出现以下的 `bug`

![](https://image.zswei.xyz/img/202301112210284.png)

2. 如果在类组件中写了 `constructor` 构造函数, 但是没有接收 `props` 参数，并且也没有通过 `super` 触底到父类，就会出现 `undefined`

- 写了构造器 `constructor` 没有接收 `props`
```jsx
class Person  {
    constructor() {
        super()
        console.log(this.props)     // undefined
    }
    ...
}
```

- 写了构造器 `constructor` 接收 `props`
```jsx
class Person extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)     // 实例对象上的 props
    }
    ...
}
```


### 总结
构造器 `constructor` 是否接收 `props`，是否传递给 `super`，取决于：是否要在构造器中通过 `this` 访问 `props`, 在开发的时候基本上是用不到构造器的