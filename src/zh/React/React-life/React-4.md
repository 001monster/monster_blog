---
title: （四）生命周期（旧）forceUpdate流程
date: 2023-01-03
category:
    - react之 组件生命周期
tag: 
    - react
order: 4
---

## 参考视频

<iframe src="//player.bilibili.com/player.html?aid=798144910&bvid=BV1wy4y1D7JT&cid=266611764&page=40" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

## 🐷一、`forceUpdate` 强制更新流程（不常用）

![](https://image.zswei.xyz/img/202302051657338.png)

1. 什么时候使用强制更新 `forceUpdate` 呢？
    1. 在不改变 `state` 状态的情况下也需要更新页面的时候调用
    2. 示例代码
    ```jsx
    class Count extends React.Component {
        // 第一步先调构造器
        constructor(props) {
            console.log('Count---constructor')
            super(props)
            // 初始化状态
            this.state = {
                count: 0
            }
        }

        // 点我 + 1 回调
        add = () => {
            // 获取原来的值
            let { count } = this.state
            this.setState({count: count+1})
        }

        // 组件将要挂载到页面的钩子
        componentWillMount() {
            console.log('count--componentWillMount')
        }

        // 组件挂载到页面完毕的钩子
        componentDidMount() {
            console.log('count---componentDidMount')
        }

        // 卸载组件回调函数
        death = () => {
            ReactDOM.unmountComponentAtNode(document.getElmentById('test'))
        }

        // 组件即将卸载之前的钩子
        componentWillUnmount() {
            console.log('count---componentWillUnmount')
        }

        // 控制组件是否更新的阀门，写了就必须要指定返回值
        sholdComponentUpdate() {
            console.log('count---shouldComponentUpdate')
            return true
        }

        // 组件将要被跟新
        componentWillUpdate() {
            console.log('count---componentWillUpdate')
        }

        // 组件更新完毕的钩子
        componentDidUpdate() {
            console.log('count---componentDidUpdta')
        }

        // 不改变 `state` 数据强制更新页面
        force = () => {
            this.forceUpdate()
        }

        render() {
            console.log('count---render')
            const { count } = this.state
            return (
                <div>
                    <h2>当前求和为：{count}</h2>
                    <button onClick={this.add}>点我+1</button>
                    <button onClick={this.death}>卸载组件</button>
                    <button onClick={this.force}>强制更新页面</button>
                </div>
            )
        }
    }

    ReactDom.render(<Count/>, doucment.getElmentById('test'))
    ```
    
    ![](https://image.zswei.xyz/img/202302051950590.png)