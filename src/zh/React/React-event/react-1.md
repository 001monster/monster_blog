---
title: （一）React 中的事件处理
date: 2022-12-25
category:
    - React事件处理
tag: 
    - react
order: 1
---

## 参考视频
<iframe src="//player.bilibili.com/player.html?aid=798144910&bvid=BV1wy4y1D7JT&cid=266611374&page=32" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

### 🎄一、事件处理
![](https://image.zswei.xyz/img/202301182139577.png)

```jsx
class Demo {
    MyRef = React.createRef()

    showInfo = () => {
        console.log('xxx')
    }

    render() {
        return(
            <div>
                <input onBlur={this.showInfo} ref={this.MyRef} type="text" placeholder="点击按钮提示信息"/>
            </div>
        )
    }
}

ReactDOM.render(<Demo/>, document.getElmentById('test'))
```
### 二、不能动不动就使用 `ref` 像上面这种 `ref` 其实可以使用事件处理的方式来实现
```jsx
class Demo {

    showInfo = (event) => {
        console.log(event)
    }

    render() {
        return(
            <div>
                <input onBlur={this.showInfo} type="text" placeholder="点击按钮提示信息"/>
            </div>
        )
    }
}

```

![](https://image.zswei.xyz/img/202301182334150.png)

- 当发生事件的元素就是我们要操作的元素的时候就可以省略掉 `ref`

******

### 💖总结
#### 一、通过 `onXxx` 属性指定事件处理函数，注意大小写
1. `React` 中使用的是自定义（合成）事件，而不是使用的原生的 `DOM` 事件
   - 为什么要这样做：是为了更好的兼容性
2. `React` 中的事件是通过事件委托方式处理的（委托给组加你最外层的元素）
   - 事件委托的原理就是 **事件冒泡** 
   - 问什么要使用事件委托呢：为的是高效，就像下面这个例子
   ```html
   <!-- 这里采用事件冒泡，也叫事件委托的形式，在 ul 身上处理点击事件，而不是每一个 li 单独去添加 -->
   <ul onclick="xxxx">
    <li>首页</li>
    <li>个人中心</li>
    <li>关于</li>
   </ul>
   ```

#### 二、通过 `event.target` 得到发生事件的 `DOM` 元素对象

