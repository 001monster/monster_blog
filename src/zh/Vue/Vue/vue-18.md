---
title: （十八）组件设置样式
order: 18
date: 2022-11-06
category:
    - vue
tag: 
    - Vue
---

![](https://image.zswei.xyz/img/202211121813358.webp)

## 给组件设置样式
1. 基础给组件设置样式
```css
/* 直接在 <style> 设置样式*/
<style>
/* 这里面设置的是最基本的样式，同时也是全局样式 */
</style>
```

2. 只对组件生效的样式
```css
/* 直接在 <style> 设置样式*/
<style scoped>
/* 这里设置的样式只针对组件内，就算其他组件有相同名字的css 也不会覆盖 */
</style>
```

3. 使用 `less` `sass` 等预编译语言
```less
<style lang="less" scoped>
// 在style标签上 加上lang属性就可以设置对应的预编译语言，vue在使用对应的预编译语言的时候需要安装依赖，否则无法使用
</style>
```

4. 样式穿透
:::info 应用场景
应用场景，在当前组件中修改其他组件的样式，如果他们带有scoped 是无法修他们的样式，这里我们就需要使用vue 给我们提供的样式穿透了
:::
```less
<style lang="less" scoped>
// 场景父组件中引入的子组件，子组件的根组件有一个 .text 的css名字，如果带有scopod我们无法修改子组件嵌套的标签，这时候我们使用样式穿透

// 不起作用，但是如果直接修改子组件的根元素可以用普通方式修改，但是如果要修改子组件当中嵌套的标签就使用下面这种方法
.text a{
  color: red;
}

// 使用样式穿透, 设置成功
.text :deep(a) {
  color: red;
}
</style>
```

5. 子组件修改父组件通过 `slot` 传递进来的标签（不常用）
```less
// 如果我们要在子组件中设置父组件通过slot 传递进来标签的样式怎么办呢，正常直接在子组件当中是无法设置的，veu提供了 :slotted 来修改，但是这种方法尽量少用，因为我们不知道父组件到底要给我们传递什么

// 父组件通过slot 插槽给子组件传递了一个div
:slotted(dev) {
  // 子组件修改父组件通过 slot 插槽传递进来的div
  background-color: red;
}
```
