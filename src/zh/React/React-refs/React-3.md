---
title: （三）回调 ref 中调用次数问题
date: 2023-01-17
category:
    - react之refs
tag: 
    - react
order: 3
---

### 🍇一、回调形式的 `ref` 的调用次数
```jsx
class Demo {

    showInfo = () => {
        let {input} = this
        alert(input.value)
    }

    render() {
        return (
            <div>
                <input ref={(currentNode) => this.input = currentNode; console.log('@', currentNode)}/>
                <button onClick={this.showInfo}>点我提示输入数据</button>
            </div>
        )
    }
}

ReactDOM.render(<Demo/>, document.getElmentById('test'))
```

1. 能够正常出来，页面加载就调用一次

![](https://image.zswei.xyz/img/202301172158536.png)


### 二、关于回调形式 `refs` 的说明

![](https://image.zswei.xyz/img/202301172159689.png)


1. 当组件发生更新时，就会出现这个问题，用代码来实际演示一下
```jsx
class Demo {

    state = {isDemo = true}

    showInfo = () => {
        const { isDemo }  = this.state
        this.setState({
            isDemo: !isDemo
            })
    }

    render() {
        const {isDemo} = this.state
        return (
            <div>
                <input ref={(currentNode) => this.input = currentNode; console.log('@', currentNode)}/>
                <div>{ isDemo ? '炎热':'凉爽' }</div>
                <button onClick={this.showInfo}>点我切换天气</button>
            </div>
        )
    }
}

ReactDOM.render(<Demo/>, document.getElmentById('test'))
```

1. 内联写法的问题出现了

![](https://image.zswei.xyz/img/202301172211015.png)

### 三、解决上面出现的这种问题，写成类绑定的函数
```jsx
class Demo {


    saveInput = (c) => {
        this.input = c
        console.log(c)
    }

    render() {
        const {isDemo} = this.state
        return (
            <div>
                <input ref={this.saveInput}/>
                <button onClick={this.showInfo}>点我切换天气</button>
            </div>
        )
    }
}

ReactDOM.render(<Demo/>, document.getElmentById('test'))
```

- 不管点击多少下按钮，都只会调用一次，都不会重复去调用这个函数，因为它放在了类的自身了

![](https://image.zswei.xyz/img/202301172219808.png)


### 总结
上面出现的问题是无关紧要的，在我们正常开发中，基本上都是写内联样式