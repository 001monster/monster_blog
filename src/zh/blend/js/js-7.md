---
title: （七）call、bind、apply三者的区别
date: 2022-12-12
category:
    - this
tag:
    - js
    - js类的基本知识
order: 7
---

### 🍈一、call、bind、apply三者的区别
- 三者都可以改变函数的 this 对象指向。
- 三者第一个参数都是 this 要指向的对象，如果如果没有这个参数或参数为 undefined 或 null，则默认指向全局 window。
- 三者都可以传参，但是 apply 是数组，而 call 是参数列表，且 apply 和 call 是一次性传入参数，而 bind 可以分为多次传入。
- bind 是返回绑定 this 之后的函数，便于稍后调用；apply 、call 则是立即执行 。
- bind()会返回一个新的函数，如果这个返回的新的函数作为构造函数创建一个新的对象，那么此时 this 不再指向传入给 bind 的第一个参数，而是指向用 new 创建的实例

#### 🍌call
写了就等于直接调用函数、
```js
food.call(obj,要传给函数的参数1,要传给函数的参数2...)
```

#### 🍊apply
- 写了就等于直接调用函数
- 区别于 call 就是后面参数的传入，其他都一样
```js
food.apply(obj,[要传给函数的参数1,要传给函数的参数2...])
```

#### 🍋bind
- 写了还要加括号才算调用函数
- 跟 call 参数设置一样
```js
food.bind(obj,要传给函数的参数1,要传给函数的参数2...)
```

#### 🍒相同点
- 这三个都能够改变 this 指向
- call 和 apply 的第一个参数都一样是要指向的 this ，写他们就等于写了函数的执行
- call 和 bind 的参数设置相同

#### 🍓不同点
- call 和 apply 的给函数传入的参数设置不一样，call 直接逗号隔开就好，apply 需要用数组
- bind 不会立即执行，call 和 apply 都会立即执行

[一文搞定this、apply、call、bind](https://mp.weixin.qq.com/s/sKyEbEwhT3kCEvyCT6l22Q)