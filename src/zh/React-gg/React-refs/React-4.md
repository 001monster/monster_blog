---
title: （四）createRef 的使用
date: 2023-01-17
category:
    - react之refs
tag: 
    - react
order: 4
---

### 🍇一、createRef 的使用
```jsx
class Demo {
    /**
     * React.createRef 调用后可以返回一个容器，该容器可以存储被 ref 表示的节点
     */
    myRef = React.createRef()

    showInputVal = () => {
        // 1.`myRef`
        console.log(this.myRef)

        alert(this.myRef.current.value)
    }

    render() {
        return (
            <div>
                <input ref={this.myRef}/>
                <button onClick={this.showInputVal}">点我提示输入框的数据</button>
            </div>
        )
    }
}

ReactDome.render(<Demo/>, document.getElmentById('test'))
```

1. 输出 `myRef`

![](https://image.zswei.xyz/img/202301172230419.png)
