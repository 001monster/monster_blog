---
title: （十四）组件数据流向设计
order: 14
date: 2022-11-04
category:
    - vue
---

![](https://image.zswei.xyz/img/202211121813358.webp)

## 组件数据流向的设计
:::info 说明
我们之前说过，父组件给子组件传值，子组件通过props 接收，并且子组件不能直接修改父组件传递过来的值
子组件给父组件传值，通过`$emit`自定义事件传值

这个是vue的数据流向设计哲学叫做 `Props Down`, `Events Up`，属性向下，事件向上
:::
