---
title: （一）响应基础：proxy
order: 1
date: 2022-11-10
category:
    - Vue背后的机制
---

![](https://image.zswei.xyz/img/202211121335443.jpg)

## 响应基础：proxy
::: 说明
proxy 是 ES6 新增加的特性，用于给一个对象添加代理，拦截对象的一些操作。
:::

### 具体拦截方法参考表

![](https://image.zswei.xyz/img/202211101340651.png)
![](https://image.zswei.xyz/img/202211101341169.png)


### 操作示例
```js
let obj = {
    a: 1, 
    b: 2
}

// 创建 proxy 代理，第一个参数：需要代理的对象，第二个参数：接收一个对象在里面定义需要拦截的操作方法
let objProxy = new Proxy(obj, {
    get(target, key, receiver) {
        console.log(`访问了${target} 中的 ${key}, 值为 ${target[key]}`)

        // 把对应的操作返回元对象
        return Reflect.get(target, key, receiver)
    },
    set(target, key, value, receiver) {
        console.log(`修改了 ${target} 中的 ${key} 值为 ${value}`)

        // 把修改过后的值 返回给原对象
        return Reflect.set(target, key, value, receiver)
    }
})
```