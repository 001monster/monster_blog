---
title: （二）、input、select、radio、checkbox的处理
order: 2
date: 2023-08-29
category:
    - React
tag: 
    - React
---

![](https://image.zswei.xyz/img/20230829095510.png)

## 表单控件的处理
```jsx
function App() {
    return (
        <main>
            <h1>注册用户</h1>
            <form>
                <label htmlFor="userName">用户名</label>
                <input type="text" id="userName"/>
                <fieldset id="gender">
                    <input type="radio" id="male" value="male"/>
                    <label htmlFor="male">男</label>
                </fieldset>
                <label htmlFor="occupation">
                    <select id="occupation">
                        <option value="">请选择</option>
                        <option value="frontend">后端</option>
                    </select>
                </label>
                <fieldset id="hobbies">
                    <input 
                    type="checkbox"
                    name="hobby"
                    value="bc"
                    id="bcID"
                    />
                    <label htmlFor="bcID">编程</label>
                </fieldset>
            </form>
        </main>
    )
}
```