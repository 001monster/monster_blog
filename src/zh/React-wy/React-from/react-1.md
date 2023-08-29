---
title: （一）、处理用户输入
order: 1
date: 2023-08-29
category:
    - React
tag: 
    - React
---

![](https://image.zswei.xyz/img/20230829095510.png)

## 一、处理用户输入
```jsx
function App() {
    // 初始化状态
    const [blog, setBlog] = useState([
        {
            id: 1,
            title: '标题1'
        }
    ])
    const [title, setTitle] = useSate('')

    // 处理用户输入事件
    function handelInput(e) {
        setTitle(e.target.value)
    }

    // 处理用户点击发布事件
    function sendMsg() {
        console.log('发布')
        console.log(title)
        setTitle('')
    }

    return (
        <man>
            <h1>欢迎使用React</h1>
            <textarea 
            onChange={handelInput}
            value={title}
            placeholder="写点什么..."
            ></textarea>
            <button onClick={sendMsg}>发布</button>
        </man>
    )
}
```