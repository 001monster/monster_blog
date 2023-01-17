---
title: （四）props 的简写方式
date: 2023-01-03
category:
    - react之props
tag: 
    - react
order: 4
---

### 🐷一、`props` 的只读性质
#### `props` 是只读的，只允许读取，不允许修改
- 如果强行修改，就会出现一下的错误，不能在一个只读的属性上进行修改

![](https://image.zswei.xyz/img/202301092204398.png)

```jsx
class Person extends React.Component {
    render() {
        console.log(this)
        const { naem, age, sex } = this.props
        // 如果在这里直接修改就会报错
        // this.props.name = '张三'
        return (
            <ul>
                <li>姓名：{name}</li>
                <li>性别：{sex}</li>
                {/* 在这里修改不报错，因为这里是运算，不是修改 */}
                <li>年龄：{age + 1}</li>
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


### 🐷二、`props` 的简写方式
- 上面这种方式的写法，我们是在类的外部给类的原型对象上添加属性
- 我们前面复习过，给类的原型对象上直接添加属性可以使用，赋值的方式
```js
class Person extends React.Component {
    // 在Person 的原型对象上添加了一个属性
    constructor() {
        this.a = '张三'
    }

    // 这里的写法同上面是一样的
    a = '张三'
    
}
```

- 那么如何给 `props` 也简写在类的里面呢
```jsx
class Person extends React.Component {
    ...
}

Person.dome  = '我不是放在原型对象上,我是类自身的属性'
// 之前我们是这样写的
```
- 把类自身的属性放到类的里面, 需要用到 `static` 这个关键词
```jsx
class Person extends React.Component {
    // 如果直接这样写赋值语句,是加在了 Person 的原型对象上
    Person.dome  = '我不是放在原型对象上,我是类自身的属性'

    // 前面加上 static 就变成了静态的,就变成了类自身的属性了
    static dome = '我是类自身的属性'
}
```