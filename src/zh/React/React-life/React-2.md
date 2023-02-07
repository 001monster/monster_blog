---
title: （二）生命周期（旧）组件挂载流程
date: 2023-01-03
category:
    - react之 组件生命周期
tag: 
    - react
order: 2
---

## 🐷生命周期(旧版本)挂载流程

![](https://image.zswei.xyz/img/202302051151099.png)

![](https://image.zswei.xyz/img/202302051157745.png)

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

- 浏览器的输出顺序

![](https://image.zswei.xyz/img/202302051206867.png)