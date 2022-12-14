---
title: （五）vue指令认识
order: 5
date: 2022-11-03
category:
    - vue
tag: 
    - Vue
---

![](https://image.zswei.xyz/img/202211121813358.webp)

### vue-指令
即将进入vue的正式学习，我们先来热身一下简单的看一下几个vue的指令，并说一下他们的用途
```js
v-html: 在模板中原样输出html代码。
v-once: 只渲染一次模板，以后就算数据更新了也不会重新渲染模板
v-bind: 动态绑定参数，可以简写为 :
v-on: 监听事件，可以简写为@
v-for: 循环选渲染模板，为了提高性能必须指定 key

// 再来补充一下其他的
<template/> 渲染一组标签但是不会增加额外的嵌套

// 相关事件的修饰符
.prevent 阻止事件默认行为，就比如说阻止原生 表单form 的提交事件，或者a标签的跳转事件
.stop 阻止事件的冒泡行为
.capture 捕获内层事件，刚好和冒泡事件相反，他会最先触发 .capture的事件
.once 只允许点击一次事件
.self 使用这个修饰符的顺序很重要
@click.prevent.self 会阻止所有的点击
@click.self.prevent 只会阻止对元素自身的点击

// 表单事件的修饰符
.number   这个修饰符会把input 框里面的字符串转换成数组 如果转换不了的话，就会原样输出
.lazy 当input输入的时候他不会去跟着同步，只有当用户输入完以后才会触发

// 最后 请求数据一般放在created 生命周期里面
created() {
}
```