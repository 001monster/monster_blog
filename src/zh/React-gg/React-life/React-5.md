---
title: （五）父组件 render 流程
date: 2023-01-11
category:
    - react之 组件生命周期
tag: 
    - react
order: 5
---

## 参考视频

<iframe src="//player.bilibili.com/player.html?aid=798144910&bvid=BV1wy4y1D7JT&cid=266611781&page=41" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

## 🐷一、父组件 `render` 流程

- 父子组件嵌套使用
```jsx
class A extends React.component {
    state = {
        carName: '奔驰'
    }

    changeCar = () => {
        this.setState({carName: '奥托'})
    }

    render() {
        cosnt { carName } = this.state
        return (
            <div>
                <div>我是A组件</div>
                <button onClick={this.changeCar}>换车</button>
                {/* 使用子组件 */}
                <B carName={carName}/>
            </div>
        )
    }
}

class B extends React.component {
    componentWillReceiveProps(props) {
        console.log('B---componentWillReceiveProps', props)
    }

    render() {
        return (
            <div>我是B组件，接收到的车是：{this.props.carName}</div>
        )
    }
}

ReactDOM.render(<A/>, document.getElmentById('text'))
```
1. 父组件修改状态，子组件使用修改过后的状态

![](https://image.zswei.xyz/img/202302052002659.png)

2. 当父组件给给子组件传值 `props` 的时候调用 `componentWillReceiveProps` 钩子
    1. 这个钩子在 `props` 第一次接收参数的时候是不作数的，不会调用 `componentWillReceiveProps`
    2. 只有等父组件更新了 `props` 传递的参数的时候 `componentWillReceiveProps` 才会被调用

    ![](https://image.zswei.xyz/img/202302052010441.png)

    3. `componentWillReceiveProps` 可以接收到 `props` 传递的参数

    ![](https://image.zswei.xyz/img/202302052011110.png)