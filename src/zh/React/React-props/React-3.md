---
title: （三）、对 props 进行限制
date: 2023-01-03
category:
    - react之props
tag: 
    - react
---

### 🐷一、对 `props` 进行限制
```jsx
class Person {
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

Person.propTypes = {
    name: PropTypes.string.isReauired,       // 字符串类型，必穿
    sex: PropTypes.string,   // 字符串类型
    age: PropTypes.number,   // number 类型
    speck:  PropTypes.func   // 类型为函数
}
Person.defaultProps = {
    sex: '男',  // 不传默认为男
    age: 18    // 不传默认为 18 岁
}

// 渲染组件到页面 并批量传递数据
const p = {name: 'tom', age: '18', sex: '女'}
ReactDom.render(<Person {...p} speck={speck}/>, doument.getElmentById('test'))
speck() {
    console.log('说话')
}
```


### 🐣总结
1. `类名.propTypes` 定义 `props` 传递类型
2. `类名.defaultProps` 给 `props` 设置默认值
3. 需要注意的是，传递方法的时候，限制方法的关键字是 `PropTypes.func`