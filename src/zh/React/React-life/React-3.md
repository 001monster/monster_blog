---
title: （三）生命周期（旧）setState流程
date: 2023-01-03
category:
    - react之 组件生命周期
tag: 
    - react
order: 3
---

## 🐷一、setState流程（第二条线）

![](https://image.zswei.xyz/img/202302051657338.png)

1. 调用 `setState` 修改状态之后，`react` 调用了 `sholdComponentUpdate` 这个阀门钩子，它返回 `true` 就允许页面更新代码往下走，如果它返回 `false` 本次更新就停止了不跟新页面

2. 如果我们没有写 `shouldComponentUpdate` 默认返回的是 `true` 允许页面进行更新，如果我们手动写了 `shouldComponentUpdate` 并且给他返回的是 `false` 也面将不会发生更新 

3. 代码演示
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

    render() {
        console.log('count---render')
        const { count } = this.state
        return (
            <div>
                <h2>当前求和为：{count}</h2>
                <button onClick={this.add}>点我+1</button>
                <button onClick={this.death}>卸载组件</button>
            </div>
        )
    }
}

ReactDom.render(<Count/>, doucment.getElmentById('test'))
```

## 二、`sholdComponentUpdate` 钩子的注意事项
1. 如果没有写这个钩子，`react` 底层会帮我把这个钩子给补上，并且默认返回 `true` 允许页面更新

2. 如果我们写了 `shouldComponentUpdate` 这个钩子函数，就需要我们手动指定返回值，如果不指定返回值就会发生以下错误

![](https://image.zswei.xyz/img/202302051708687.png)