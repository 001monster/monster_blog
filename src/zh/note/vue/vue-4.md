---
title: （四）行内样式和动态class
icon: code
date: 2022-11-03
category:
    - vue
---

### vue-行内样式
动态绑定样式的方式有很多种，这里列举两种最常用的

```js
// 行内样式，在标签种使用行内样式为了渐变可以把样式先写在data数据中 如：
// 写法一, style中的属性是动态的需要使用{}括起来
<div :style="{'width': width}"><div/>
data() {
    return {
        width: '100px'
    }
}

// 写法二，需要注意的是js表达式不识别 _ 的方式，所以像background_color 需要写成backgroundColor这种驼峰的形式
<div :style="inlineStyle"><div/>
data() {
    return {
        inlineStyle: {
            width: '10px'
            backgroundCColor: 'red'
        }
    }
}
```


### vue动态class
```js
// 动态class的写法也有很多种，这里也列举最常见的两种
// 第一种， 数组形式，多个class
<p :class="[textClass, stateClass, { hide: isHidden }]">
data() {
    return {
        isHidden: false
    }
}

// 第二种形式 对象形式
<p class="item" :class="{'hide': isHidden }">
data() {
    return {
        isHidden: false
    }
}
```