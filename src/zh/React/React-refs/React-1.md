---
title: （一）、字符转形式的 ref
date: 2023-01-03
category:
    - react之refs
tag: 
    - react
order: 1
---

### 🍇一、props 的基本使用
1. 先实现一个需求效果

![](https://image.zswei.xyz/img/202301132226287.png)

```jsx
class Demo extends React.Component{
    render() {
        return (
            <div>
                <input type="text" placeholder="点击按钮提示数据"/>
                <button>点我提示左侧的数据</button>
                <input type="text" placeholder="失去焦点提示数据"/>
            </div>
        )
    }
}

ReactDOM.render(<Demo/>, document.getElmentByID('test'))
```

#### 🥥步骤一、给按钮添加点击事件
```jsx
class Demo extends React.Component{
    showData = () => {
        console.log('@@@@')     // 控制台能出现 @@@@ 点击事件可以使用
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="点击按钮提示数据"/>
                <button onClick="this.showData">点我提示左侧的数据</button>
                <input type="text" placeholder="失去焦点提示数据"/>
            </div>
        )
    }
}

ReactDOM.render(<Demo/>, document.getElmentByID('test'))
```

#### 🌽步骤二、使用原生的 `js` 方法来完成需求
```jsx
class Demo extends React.Component {
    showData = () => {
        let ipt = document.getElmentById('ipt')
        alert(ipt.value)
    }
    
    render() {
        return (
            <div>
                <input id="ipt" type="text" placeholder="点击按钮提示数据"/>
                <button onClick="this.showData">点我提示左侧的数据</button>
                <input type="text" placeholder="失去焦点提示数据"/>
            </div>
        )
    }
}
```

![](https://image.zswei.xyz/img/202301132252372.png)


#### 🥔步骤三、通过 `React` 的 `ref` 实现需求
```jsx
class Demo extends React.Component {
    // 展示左侧输入框数据
    showData = ()=> {
        cosnt { ipt } = this.refs
        alert(ipt.value)
    }

    // 展示右侧输入框数据
    showData2 = ()=> {
        const { ipt1 } = this.refs
        alert(ipt1)
    }

    render() {
        return (
            <div>
                <input ref="ipt" type="text" placeholder="点击按钮提示数据"/>
                <button onClick="this.showData">点我提示左侧的数据</button>
                <input ref="ipt1" onBluer="showData2" type="text" placeholder="失去焦点提示数据"/>
            </div>
        )
    }
}
```