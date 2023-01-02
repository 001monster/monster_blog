---
title: （九）state 的简写方式
date: 2023-01-03
category:
    - react
---


### 🍧一、`state` 的简写方式

#### 课前预热
- 在类中不能直接定义变量赋值，可以直接赋值，直接赋值就是往原型上追加一个属性

```js
class Car {
    constructor(name, price) {
        this.name = name
        this.price = price
        this.a = 1
    }
}
const  c1 = new Car('奔驰', 199)
console.log(c1)
```
- 等价于
```js
class Car {
    constructor(name, price) {
        this.name = name
        this.price = price
        // this.a = 1
    }
    // 直接赋值，给 Car 的实例对象添加一个属性
    a = 1
}
const  c1 = new Car('奔驰', 199)
console.log(c1)
```
![](https://image.zswei.xyz/img/202301021652989.png)

:::说明
明白了上面的写法，就知道 `state` 该怎么简写了
:::

#### 简写 `state`
```js
class Person {
    // 赋值语句
    state = {
        isMood: false
    }

    render() {...}
}

// 渲染组件
ReactDom.render(<Person/>, document.getElmentById('test'))
```

#### 简写方法
```js
class Person {
    // 赋值语句
    state = {
        isMood: false
    }

    render() {...}

    // 赋值语句，只能写箭头函数，箭头函数是没有自己的 this 的他就像向外层找，就找到实例的 this
    demo = () => {
        const isMood = this.state.isMood
        this.setState({isMood: !isMood})
    }
}

// 渲染组件
ReactDom.render(<Person/>, document.getElmentById('test'))
```