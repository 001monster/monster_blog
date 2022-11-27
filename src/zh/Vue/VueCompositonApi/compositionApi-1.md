---
title: （一）为什么要使用compositionApi
order: 1
date: 2022-11-08
category:
    - VueCompositonApi
---

![](https://image.zswei.xyz/img/202211121817662.webp)

## 为什么要使用compositionApi
###  一、`vue` 已经有了 `options Api` 了为啥还要搞出个 `composition APi` 呢，下面我们就来简单的说一下吧
1. `options api` 是把同一功能的代码分布在个个选项中 `data`, `methods`, `computed`, `watch`, 之中;例如要做一个搜索功能，需要把数据定义在 `data` 中，然后需要子啊 `computed` 中进行计算，在到模板使用，如果 `computed` 中的逻辑较为复杂还需要把 `computed` 中的代码放到 `methods` 中去,查看代码的时候需要要反复的在各个选项中来回切换，对大型项目非常不友好；

2. `composition api` 可以最大限度的复用代码，`composition api` 是把所有函数放在一个叫 `setup` 的函数中，可以把形同逻辑功能的代码放到相同的位置, setup 中的函数代码因为都是普通的 JavaScript 代码，可以把他们抽离出来放到一个函数中，或者是放到一个单独的 js 文件中，如果其他组件有相同的逻辑都可以直接使用里面的逻辑

2. `options api` 实现代码复用使用 `Mixins` 里面也是有各项配置，另外给组件添加了 `mixins` 之后并不知到多了那些功能

 