---
title: （一）高阶函数
date: 2023-01-03
category:
    - react之refs
tag: 
    - react
order: 1
---

### 🍇一、高阶函数优化项目

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
    
    // 表单提交回调，保存 用户名和密码到状态中
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
                密  码：<input onChange={this.saveForemData('userName')} type="password" name="password"/>
                <button>登录</button>
            </form>
        )
    }
}

ReactDOM.render(<Login/>, document.getElmentById('test'))
```