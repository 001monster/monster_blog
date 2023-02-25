---
title: （新二）getSnapshotBeforeUpdate
date: 2023-02-06
category:
    - react之 生命周期
tag: 
    - react
order: 9
---

## 参考视频
<iframe src="//player.bilibili.com/player.html?aid=798144910&bvid=BV1wy4y1D7JT&cid=266612215&page=45" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

<iframe src="//player.bilibili.com/player.html?aid=798144910&bvid=BV1wy4y1D7JT&cid=266612248&page=46" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

## 🐷一、getSnapshotBeforeUpdate

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

    // 更新之前获取一个快照值
    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate')
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

- `getSnapshotBeforeUpdate` 这个生命周期钩子也是必须有返回值的否则将会被警告

![](https://image.zswei.xyz/img/202302252111087.png)


## 二、回顾之前的生命周期钩子 `componentDidUpdate` 更新完毕之后的这个生命周期钩子

```jsx
...
componentDidUpdate(preProps, preState) {
    console.log('Count---componentDidUpdate', preProps, preState)
}
...
```
这里接收到的 `props` 和 `state` 都是之前的值

![](https://image.zswei.xyz/img/202302252118023.png)


## 三、 `getSnapshotBeforeUpdate` 的作用

![](https://image.zswei.xyz/img/202302252122398.png)

```jsx
...
// 更新之前获取一个快照值
getSnapshotBeforeUpdate() {
    return 'atguigu'
}

// 接收传递的快照值，在第三个参数 snapshotValue
componentDidUpdate(preProps, preState, snapshotValue) {
    console.log('Count---componentDidUpdate', preProps, preState, snapshotValue)
}
...
```

总的来说就是在页面即将更新的之前的时候把想要更新之前的数据拿到做业务处理，详细使用场景，请看下面这个案例

![](https://image.zswei.xyz/img/202302252125778.png)

## 案例
我们的需求是，当我们在看某一条信息的时候滚动就定在那个位置，不被新的内容往下挤

```jsx
class NewList extends React.Component {
    // 状态
    state = {newArr: []}

    // 组件加载完毕的时候开启一个定时器，每一秒钟往 list 容器里面增加一条新数据
    componentDidMount() {
        setInterval(() => {
            // 获取原状态值
            const { newArr } = this.state
            // 模拟一条新数据
            const news = `新闻${newsArr.length+1}`
            // 更新状态
            this.setState({newsArr: [news, newsArr]})
        }, 1000)
    }

    // 调用更新之前的生命周期钩子，也是就是拍一个即将跟更新之前的快照
    getSnapshotBeforeUpdate() {
        // 返回当前这个容器的高度
        return this.refs.list.scroHeight
    }


    // 组件更新完成之后
    componentDidUpdate(preProps, preState, snapshotValue) {
        // 每次更新完成就剪掉更新过后的高度
        this.refs.list.scrollTop += this.refs.list.scroHeight - height
    }

    render() {
        return(
            <div className="list" ref="list">
                {
                    this.state.newArr.map((newItem, index) => {
                        return <div className="news" key={index}>{newItem}</div>
                    })
                }
            </div>
        )
    }
}
```