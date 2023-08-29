---
title: （一）、React状态
order: 1
date: 2023-08-29
category:
    - React
tag: 
    - React
---

![](https://image.zswei.xyz/img/20230829095510.png)

## 一、什么是状态
- 状态是一组可以随着时间的推移而发生改变的数据

- 当用户改变了数据，页面视图也会发生改变

## 二、使用 `useState` 定义组件状态
1. `useState` hook 返回一个数组，分别是 `[0]` 状态; 和 `[1]`  修改状态的函数

```jsx
// 导入 useState hooks
import { useState } from 'react'

function App() {
    const [count, setCount] = useState(0)
  
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increase}>增加</button>
        </div>
    )
}

export default App
```

## 二、使用 `useState` 修改状态的值

```jsx
// 导入 useState hooks
import { useState } from 'react'

function App() {
    const [count, setCount] = useState(0)

    function increase() {
        setCount(count + 1)
    }
  
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increase}>增加</button>
        </div>
    )
}

export default App
```

## 三、如何更新数组状态的值
1. 当使用上面的方法去修改普通数据类型的值是没有问题的，但是如果去修改 `数组` `对象` 的值是不能给进行修改的，因为 `数组` `对象` 是引用类型数据他们指向的是内存地址

2. 如何添加数组状态的值
```jsx
function App() {
    const [list, setList] = useState([1, 2, 3, 4])

    // 添加元素
    function handleAdd() {
        setList([...list, list.length = 1])
    }
    
    // 点击某一个元素 +10
    function handlePlusTen(i) {
        const newList = [...list]
        newList[i] += 10
        setList(newList)
    }

    // 点击某些进行删除
    function handelDelate(i) {
        const newList = [...list]
        newList.splice(i, 1) 
        setList(newList)
    }

    return(
        <div>
            <ul>
                {
                    list.map((item, index) => (
                    <li key={index}>{item}</li>
                    <button onClick={() => handlePlusTen(index)}>+10</button>
                    <button onClick={() => handelDelate(index)}>删除</button>
                ))
                }
            </ul>
            <button onClick={handleAdd}>添加</button>
        </div>
    )
}

export default App
```

## 四、如何更新对象状态的值
```jsx
function App() {
    const [person, sePerson] = useState({
        name: 'old-monster',
        age: 001,
    })

    // 添加属性
    function handleSex() {
        setPerson({
            ...person,
            gender: '男'
        })
    }

    // 修改属性
    function handelAge() {
        setPerson({
            ...person,
            age: 000
        })
    }

    // 删除年龄
    function handelDelAge() {
        const newPerson = {...person}
        delete newPerson.age
        setPerson(newPerson)
    }

    return(
        <div>
            <ul>
                (
                    Object.keys(person).map((key, index) => (
                        <li key={index}>
                            {key}:{person[key]}
                        </li>
                    ))
                )
            </ul>
            <button onClick={handleSex}>添加性别</button>
            <button onClick={handelAge}>修改年龄</button>
            <button onClick={handelDelAge}>删除年龄</button>
        </div>
    )
}

export default App
```

## 注意
- 当我们使用 `...` 扩展运算符修改对象的时候我需要注意的是，因为 `...` 扩展运算符是浅拷贝，他只会拷贝第一层，如果对象有多层的话，他里面的也需要使用 `...` 来展开
```jsx
const [person, setPerson] = userState({
    name: 'old-monster',
    info: {
        age: 001,
        gender: '男'
    }
})

// 删除年龄
    function handelDelAge() {
        const newPerson = {
            ...person,
            info: {
                ...info,
                age: 002
            }
        }
        setPerson(newPerson)
    }
```