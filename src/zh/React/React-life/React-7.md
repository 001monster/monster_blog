---
title: （新一）总结 对比新旧生命周期
date: 2023-02-06
category:
    - react之 生命周期
tag: 
    - react
order: 7
---

## 参考视频
<iframe src="//player.bilibili.com/player.html?aid=798144910&bvid=BV1wy4y1D7JT&cid=266611914&page=43" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

### 🐷一、对比新旧生命周期

![](https://image.zswei.xyz/img/202302052152141.png)

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