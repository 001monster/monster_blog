---
title: （一）引出生命周期
date: 2023-02-06
category:
    - react之 组件生命周期
tag: 
    - react
order: 1
---

## 🐷演示生命周期
- 页面上有一个组件，字体透明度 从 0 到 1 不停来回切换，点击按钮销毁组件

![](https://image.zswei.xyz/img/202302051105650.png)

![](https://image.zswei.xyz/img/202302051051807.png)

```jsx
class Life extends React.Component {
    render() {
        return (
            <div>
                <h2>学不会怎么办</h2>
                <button>不活了</button>
            </div>
        )
    }
}

ReactDom.render(<Life/>, document.getElementById('test'))
```

![](https://image.zswei.xyz/img/202302051055165.png)

1. 点击按钮销毁这个组件
  - 了解组件挂载和销毁生命周期
  :::info 
  挂载组件到页面    mount
  在页面卸载组件    unmount
  :::

```jsx
class Life extends React.Component {
    death = () => {
        // 卸载组件
        ReactDom.unmountComponentAtNode(document.getElementById('test'))
    }

    render() {
        return (
            <div>
                <h2>学不会怎么办</h2>
                <button onClick={this.death}>不活了</button>
            </div>
        )
    }
}

ReactDom.render(<Life/>, document.getElementById('test'))
```

2. 让自定在 透明度 0 到 1 之间来回切换
```jsx
class Life extends React.Component {
    state = {
        opacity: 1
    }

    death = () => {
        // 卸载组件
        ReactDom.unmountComponentAtNode(document.getElementById('test'))
    }
    
    // 组件挂载到页面完毕后调用
    componentDidMount() {
        setInterval(() => {
            let { opacity } = this.state
            opacity -= 0.2
            if(opacity <= 0) opacity = 1
            this.setState({opacity})
        }, 200)
    }

    render() {
        return (
            <div>
                <h2 style={{opacity: this.state.opacity}}>学不会怎么办</h2>
                <button onClick={this.death}>不活了</button>
            </div>
        )
    }
}

ReactDom.render(<Life/>, document.getElementById('test'))
```

3. 功能确实实现了组件挂载完成就开始切换透明度，但是浏览器发出了警告，
组件被卸载了，不能在执行状态的更新了，是因为组件被卸载了没有清空定时器，他修改了被卸载的组件的 `state` 状态，所以就报错了

![](https://image.zswei.xyz/img/202302051130441.png)

    
- 在组件卸载之前清空定时器
```jsx
class Life extends React.Component {
    state = {
        opacity: 1
    }

    death = () => {
        // 卸载组件
        clearInterval(this.timer)
        ReactDom.unmountComponentAtNode(document.getElementById('test'))
    }
    
    // 组件挂载到页面完毕后调用
    componentDidMount() {
        this.timer = setInterval(() => {
            let { opacity } = this.state
            opacity -= 0.2
            if(opacity <= 0) opacity = 1
            this.setState({opacity})
        }, 200)
    }

    render() {
        return (
            <div>
                <h2 style={{opacity: this.state.opacity}}>学不会怎么办</h2>
                <button onClick={this.death}>不活了</button>
            </div>
        )
    }
}

ReactDom.render(<Life/>, document.getElementById('test'))
```

4. 组件卸载的生命周期函数 `componentDidUnmount`
```jsx
class Life extends React.Component {
    state = {
        opacity: 1
    }

    death = () => {
        // 卸载组件
        // 清除定时器，写在 componentWillUnmount 里面
        // clearInterval(this.timer)
        ReactDom.unmountComponentAtNode(document.getElementById('test'))
    }
    
    // 组件挂载到页面完毕后调用
    componentDidMount() {
        this.timer = setInterval(() => {
            let { opacity } = this.state
            opacity -= 0.2
            if(opacity <= 0) opacity = 1
            this.setState({opacity})
        }, 200)
    }

    // 组件在将要卸载之前调用
    componentWillUnmount() {
        // 清除定时器
        clearInterval(this.timer)
    }

    render() {
        return (
            <div>
                <h2 style={{opacity: this.state.opacity}}>学不会怎么办</h2>
                <button onClick={this.death}>不活了</button>
            </div>
        )
    }
}

ReactDom.render(<Life/>, document.getElementById('test'))
```

## 总结
![](https://image.zswei.xyz/img/202302051146381.png)

![](https://image.zswei.xyz/img/202302051151119.png)