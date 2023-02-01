---
title: （六）函数式组件使用 props
date: 2023-01-11
category:
    - react之props
tag: 
    - react
order: 6
---

### 🐷一、函数式组件使用 `props`
1. `state` 和 `refs` 需要使用 `this` 点出自己实例身上的属性，而函数式组件因为开启了严格模式，所以他没有自己的 `this` 所以不能使用 `state` 和 `refs` 但是函数可以接收参数，所以可以使用 `props`

- 无法获取实例，组件报错
```jsx
function Person() {
    return (
        <ul>
            <li>姓名：{name}</li>
            <li>性别：{sex}</li>
            <li>年龄：{age}</li>
        </ul>
    )
}

ReactDOM.render(<Person name={'张三'} sex={'男'} age={18}/>, document.getElmentById('test'))
```
- 函数接收 `props` 参数
```jsx
function Person(props) {
    console.log(props)
    const {name, sex, age} = props
    return (
        <ul>
            <li>姓名：{name}</li>
            <li>性别：{sex}</li>
            <li>年龄：{age}</li>
        </ul>
    )
}

ReactDOM.render(<Person name={'jerry'} sex={'女'} age={18}/>, document.getElmentById('test'))
```

![](https://image.zswei.xyz/img/202301112235357.png)


### 二、函数式组件对 `props` 进行类型限制，和默认值赋值
```jsx
function Person(props) {
    console.log(props)
    const {name, sex, age} = props
    return (
        <ul>
            <li>姓名：{name}</li>
            <li>性别：{sex}</li>
            <li>年龄：{age}</li>
        </ul>
    )
}

// 限制
Person.propsTypes = {
    name: PropsTypes.string.isRequired,  // 限制string 必传
    sex: PropsTypes.string,
    age: PropsTypes.number
}

// 默认值
Person.defaultProps = {
    sex: '男',
    age: 18
}

ReactDOM.render(<Person name={'jerry'} sex={'女'} age={18}/>, document.getElmentById('test'))
```