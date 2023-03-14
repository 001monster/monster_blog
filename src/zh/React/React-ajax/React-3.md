---
title: （三）兄弟组件传值
date: 2023-03-13
category:
    - 兄弟组件传值
tag: 
    - react
order: 3
---


### 一、兄弟组件传
1. 消息订阅与发布,使用第三方库 `pubsub-js`
:::tabs
@tab:active npm pubsub-js
```sh
npm i 
```

@tab yarn
```sh
yarn add pubsub-js
```
:::


### 二、使用第三方库来实现消息订阅与发布
1. 引入第三方库
:::tabs
@tab:active ES6 
```sh
import Pubsub from 'pubsub-js'
```

@tab =CommonJS
```sh
const Pubsub = require('pubsub-js')
```
:::

2. 在需要接收数据的组件去订阅消息, `Pubsub.subscribe()` 返回的是一个消息ID在不需要订阅的时候可以明确的知道需要取消订阅那个消息
```js
/**
 * 订阅消息的回调函数,当有人发布消息了就会触发这个函数
 * @param {string} 发布消息的名字
 * @param {any} 发布消息传递的数据
*/
let Fn = function(msg, data) {
  ...
}
let token = Pubsub.subscribe('订阅的消息名字', Fn)
```
3. 在需要传递数据的组件去发布消息
```js
Pubsub.publish('订阅消息的名字(记住是订阅消息的名字)', '需要传递的数据')
```