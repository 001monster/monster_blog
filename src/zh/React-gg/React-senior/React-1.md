---
title: （一）高阶函数与柯里化
date: 2023-01-03
category:
    - react之 高阶函数与柯里化
tag: 
    - react
order: 1
---

## 🍇一、高阶函数优化项目

![](https://image.zswei.xyz/img/202302042259404.png)

1. 我们可以看到我们之前写的案例，保存用户名和用户密码的代码重复度有点高了，接下来我们来优化一下

```jsx
// 创建组件
class Login extends React.Component {
    // 初始化状态
    state = {
        useName: '',    // 用户名
        passward: ''    // 密码
    }
    
    // 保存表单数据到状态中
    saveForemData = (event) => {
        console.log(event.target.value)
        this.setState(userName: event.target.value)
    }

    handleSubmit = (event) => {
        // 因为form 表单有默认的跳转事件，使用js 原生阻止默认事件
        event.preventDefault()  // 阻止表单提交
        const { userName, pawssward } = this.state
        alert(`你输入的用户名是：${username},你输入的密码是：${password}`)
    }

    render() {
        return (
            <form action="https://zswei.xyz" onSubmit={this.handleSubmit}>
                用户名：<input onChange={this.saveForemData('userName')} type="text" name="userName"/>
                密  码：<input onChange={this.saveForemData('password')} type="password" name="password"/>
                <button>登录</button>
            </form>
        )
    }
}

ReactDOM.render(<Login/>, document.getElmentById('test'))
```

2. 按照上面的写法是错误的，因为 `render` 函数在页面一加载就会调用，并且顺势会将里面的其他方法也给调用了，`<input onChange={this.saveForemData('userName')} type="password" name="password"/>` 像这种写法就是一上来就调用saveForemData 
2. 按照上面的写法是错误的，因为 `render` 函数在页面一加载就会调用，并且顺势会将里面的其他方法也给调用了，`<input onChange={this.saveForemData('userName')} type="password" name="password"/>` 像这种写法就是一上来就调用 `saveForemData` 这个方法，但是这个方法，是没有返回值的，所以是错误的，一下是正确的写法
```jsx
class Login extends React.Component {
    // 初始化状态
    state = {
        useName: '',    // 用户名
        passward: ''    // 密码
    }

    // 保存表单数据到状态中
    saveForemData = (dataType) => {
        console.log(dataType, '调用函数传的参数')
        // 返回一个返回处理 onChange 事件
        return (event) => {
            this.setState({
                [dataType]: event.target.value
            })
        }
    } 
    
    render() {
        return (
            <form action="https://zswei.xyz" onSubmit={this.handleSubmit}>
                用户名：<input onChange={this.saveForemData('userName')} type="text" name="userName"/>
                密  码：<input onChange={this.saveForemData('password')} type="password" name="password"/>
                <button>登录</button>
            </form>
        )
    }
}
```

## 二、什么是高阶函数呢?
- 如果两个函数符合下面2个规范中的任何一个，那该函数就是 `高阶函数`
   1. 若 `A` 函数，接收的参数是一个函数，那么 `A` 函数就可以称之为 `高阶函数`
   2. 若 `A` 函数，调用的返回值依然是一个函数，那么 `A` 函数就可以称之为 `高阶函数`
   3. 常见的高阶函数有那些？
      1. `Promise`
      2. `setTimeout`
      3. `arr.map`


## 三、什么是函数的柯里化呢？
- 通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式
   1. 不使用函数的柯里化
    ```js
    // 求和函数
    function sum(a, b, b) {
        return a + b + c
    }
    const resout = sum(1, 2, 3)
    console.log(resout)
    ```

    2. 使用函数的柯里化，上面案例中 `saveForemData` 方法就使用到了函数的柯里化
    ```js
    function sum(a) {
        return (b) {
            return (c) {
                a + b + c
            }
        }
    }
    const resout = sum(1)(2)(3)
    console.log(resout)
    ```


## 四、不使用柯里化实现案例
```jsx
class Login extends React.Component {
    // 初始化状态
    state = {
        useName: '',    // 用户名
        passward: ''    // 密码
    }

    // 保存表单数据到状态中
    saveForemData = (dataType, value) => {
        this.setState({dataType: value})
    } 
    
    render() {
        return (
            <form action="https://zswei.xyz" onSubmit={this.handleSubmit}>
                用户名：<input onChange={(event) => {this.saveForemData('userName', event.target.value)}} type="text" name="userName"/>
                密  码：<input onChange={(event) => {this.saveForemData('password', event.target.value)}} type="password" name="password"/>
                <button>登录</button>
            </form>
        )
    }
}
```

## 五、总结
那么在我们开发中哪种情况使用的比较频繁呢，其实两种方式都在使用，看个人喜好