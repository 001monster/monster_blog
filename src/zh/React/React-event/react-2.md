---
title: （一）非受控组件
date: 2022-12-25
category:
    - react项目
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
    handleSubmit = () => {
        
    }

    render() {
        return (
            <form action="https://zswei.xyz" onSubmit={this.handleSubmit}>
                用户名：<input type="text" name="userName"/>
                密  码：<input type="password" name="password"/>
                <button>登录</button>
            </form>
        )
    }
}

ReactDOM.render(<Login/>, document.getElmentById('test'))
```