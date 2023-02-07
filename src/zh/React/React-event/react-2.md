---
title: （二）非受控组件
date: 2022-12-25
category:
    - React事件处理
tag: 
    - react
order: 2
---

## 参考视频
<iframe src="//player.bilibili.com/player.html?aid=798144910&bvid=BV1wy4y1D7JT&cid=266611422&page=33" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

### 🎄一、非受控组件
- 案例需求：定义一个包含表单的组件，输入用户名密码后了，点击登录提示输入信息

![](https://image.zswei.xyz/img/202301302155184.png)

```jsx
// 创建组件
class Login extends React.Component {
    handleSubmit = (event) => {
        // 因为form 表单有默认的跳转事件，使用js 原生阻止默认事件
        event.preventDefault()  // 阻止表单提交
        const { userName, password } = this
        alert(`你输入的用户名是：${username.value},你输入的密码是：${password.value}`)
    }

    render() {
        return (
            <form action="https://zswei.xyz" onSubmit={this.handleSubmit}>
                用户名：<input ref={c => this.userName} type="text" name="userName"/>
                密  码：<input ref={c => this.password} type="password" name="password"/>
                <button>登录</button>
            </form>
        )
    }
}

ReactDOM.render(<Login/>, document.getElmentById('test'))
```

![](https://image.zswei.xyz/img/202302012103966.png)

## 总结
### 什么是非受控组件呢？
页面中所有输入类的 `DOM` 现用现取的就是 `非受控组件`，就是当操作某一个方法的时候，用到了才取值的时候
