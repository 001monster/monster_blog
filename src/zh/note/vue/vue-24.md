---
title: （二十四）解决动态组件切换数据丢失问题
order: 24
date: 2022-11-07
category:
    - vue
---

![](https://image.zswei.xyz/img/202211121813358.webp)

## 解决动态组件切换数据丢失问题 `<KeepAlive />`
当我们动态切换表单的时候，数据会丢失，解决这个问题非常简单
```html
<!-- 我们只需要在需要保留数据的外面加上一个 KeepAlive 标签就可以了 -->
<KeepAlive>
  <component :is="动态的组件名字" />
</KeepAlive>
```