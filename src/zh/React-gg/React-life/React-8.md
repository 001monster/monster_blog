---
title: （新一）getDerivedStateFromProps
date: 2023-02-06
category:
    - react之 生命周期
tag: 
    - react
order: 8
---

## 参考视频
<iframe src="//player.bilibili.com/player.html?aid=798144910&bvid=BV1wy4y1D7JT&cid=266612115&page=44" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

## 🐷一、getDerivedStateFromProps

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

    // 这个生命周期钩子不常用
    getDerivedStateFormProps() {
        console.log('getDerivedStateFormProps')
    }

    ...

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

发现报错了，说这个方法不能给实例使用，要定义成静态的方方法，定义静态方法需要使用关键字 `static` 
```js
class Count extends React.Component {
    ...

    static getDerivedStateFormProps() {
        console.log('getDerivedStateFormProps')
    }

    ...
}
...
```

![](https://image.zswei.xyz/img/202302132236736.png)


1. 这下 `getDerivedStateFormProps` 里面的东西打印出来了说明它执行了，但是有个错误说：`我们返回了一个  undefined 他预期需要返回的是一个状态对象 或者返回一个 null`

![](https://image.zswei.xyz/img/202302132238789.png)


2. 他可以收到两个参数，第一个是 `props` 第二个是 `state`
```js
class Count extends React.Component {
    ...

    static getDerivedStateFormProps(props, state) {
        console.log('getDerivedStateFormProps', props, state)
    }

    ...
}
...
```

![](https://image.zswei.xyz/img/202302142211006.png)


## 总结：`getDerivedStateFormProps` 在开发中用的极少，可以说是几乎不用