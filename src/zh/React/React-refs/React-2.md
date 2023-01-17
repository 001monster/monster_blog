---
title: （二）回调形式的 ref
date: 2023-01-17
category:
    - react之refs
tag: 
    - react
order: 2
---

### 🍇一、字符串形式的 `ref` 不被官方推荐使用，后续更新很有可能直接废弃掉
1. 过时的字符串 `ref`

![](https://image.zswei.xyz/img/202301172110404.png)

### 二、回调形式的 `ref`
```jsx
class Demo {
    render() {
        return(
            <div>
                <input ref={() => {console.log('@')}}/>
                
                <input ref={(a) => {console.log(a)}}/>

                <input ref={(a) => {this.input1 = a}}/>
            </div>
        )
    }
}

ReactDOM.render(<Demo/>, document.getElmentById('test'))
```

1. 证明 `ref={() => {console.log('@')}}` 它是一个回调函数
什么是回调函数：1.程序员定义的函数，2.程序员没有调用，3.这个函数执行了

![](https://image.zswei.xyz/img/202301172140356.png)

2. 接收一下回调函数的参数

![](https://image.zswei.xyz/img/202301172142391.png)


3. `ref={(a) => {this.input1 = a}}` 这串代码的意思就是，当回调执行了的时候，拿到这个节点，然后把这个节点挂载到了实例身上，名字叫 `input1`


### 案例
```jsx
class Demo extends React.Component{
    showData = () => {
        let {input1} = this
        alert(input1.value)
    }

    showData2 = () => {
        let {input2} = this
        alert(input1.value)
    }

    render() {
        return (
            <div>
                <input ref={C = this.input1 = C} type="text" placeholder="点击按钮提示数据"/>
                <button onClick="this.showData">点我提示左侧的数据</button>
                <input onBlur={this.showData2} type="text" placeholder="失去焦点提示数据"/>
            </div>
        )
    }
}

ReactDOM.render(<Demo/>, document.getElmentByID('test'))
```