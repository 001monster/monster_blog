---
title: （二）批量传递 props
date: 2023-01-03
category:
    - react之props
tag: 
    - react
order: 2
---

### 🐷一、props 的基本使用
```jsx
class Person extends React.Component {
    render() {
        console.log(this)
        const { naem, age, sex } = this.props
        return (
            <ul>
                <li>姓名：{name}</li>
                <li>性别：{sex}</li>
                <li>年龄：{age}</li>
            </ul>
        )
    }
}

// 渲染组件到页面 并批量传递数据
const p = {name: 'tom', age: '18', sex: '女'}
ReactDom.render(<Person {...p}/>, doument.getElmentById('test'))
```
- [`...` 扩展运算符的基本知识](../../blend/js/js-9.md)