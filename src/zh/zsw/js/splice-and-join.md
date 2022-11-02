---
title: 字符串与数互转
date: 2022-11-02
category: 
    - JS常用代码
article:
    - js
---

## 数组与字符串互相转换

### 一、字符串转数组
:::info split
个人理解：把一个有规则的字符串通过split 转成一个数组，应用场景：可以在数据库存储多个相同雷响的数据，取出来使用使用的时候通过split 转换成为数组
:::
```js
// split
// str.split(分隔符号，分割长度可以为空)
let str = '1, 2, 3, 4'
let resout = str.split(',')

// 最终结果
resout = ['1', '2', '3', '4']
```

### 二、数组转字符串
:::info join
当需求是数组转字符串时就可以使用arr.join 进行处理
:::
```js
// 实例代码
let arr = ['1', '2', '3', '4']

let resout = arr.join(',')

// 最终效果
resout = '1, 2, 3, 4'
```

### 三、补充
:::info 截取字符串
可以通过sunstring()去掉字符串后面的字符
:::
```js
let s1= '各位观众老爷大家好hhhh'

let resout = s1.sunstring(0, s1.length-4)

// 最终效果
resout = '各位观众老爷大家好'
```

### 四、总结
各位观众老爷以上呢是我的一个自我总结，全部纯手敲，要错误的地方还望手下留情不要喷我，886