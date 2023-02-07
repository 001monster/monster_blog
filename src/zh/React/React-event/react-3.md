---
title: （三）受控组件
date: 2022-02-05
category:
    - React事件处理
tag: 
    - react
order: 3
---

## 参考视频
<iframe src="//player.bilibili.com/player.html?aid=798144910&bvid=BV1wy4y1D7JT&cid=266611503&page=34" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

### 🎄一、非受控组件
- 案例需求：定义一个包含表单的组件，输入用户名密码后了，点击登录提示输入信息

![](https://image.zswei.xyz/img/202301302155184.png)

```jsx
// 创建组件
class Login extends React.Component {
    // 初始化状态
    state = {
        useName: '',    // 用户名
        passward: ''    // 密码
    }
    
    // 表单提交回调，保存 用户名和密码到状态中
    saveUserName = (event) => {
        console.log(event.target.value)
        this.setState({userName: event.target.value})
    }
    savePassward = (event) => {
        console.log(event.target.value)
        this.setState(passward: event.target.value)
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
                用户名：<input onChange={this.saveUserName} type="text" name="userName"/>
                密  码：<input onChange={this.savePassward} type="password" name="password"/>
                <button>登录</button>
            </form>
        )
    }
}

ReactDOM.render(<Login/>, document.getElmentById('test'))
```

![](https://image.zswei.xyz/img/202302012103966.png)

## 总结
### 什么是受控组件呢？
1. 页面中所有输入类的 `DOM` 随着用户的输入就把数据给维护到 `state` 状态中等需要用的时候，直接就去取就叫做 `受控组件`

2. 总的来说现用现取，并且没有维护到 `state` 中就叫做非受控组件；而随着用户的输入就把数据存入到 `state` 中，要用的时候直接到 `state` 中取出来

3. 那么什么时候用 `ref` 什么时候使用 `onChange` 呢，看下面一张图就明白了

![](https://image.zswei.xyz/img/202302042135544.png)