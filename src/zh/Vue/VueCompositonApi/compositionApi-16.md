---
title: （十六）简化setup组件代码
order: 16
date: 2022-11-10
category:
    - VueCompositonApi
tag: 
    - Vue3
---

![](https://image.zswei.xyz/img/202211121817662.webp)

## 进一步简化 `setup` 代码
:::info 说明
`vue@3.2` 版本推出了新的简化 `setup` 的语法糖写法

- 以前的写法
```html
<script>
setup() {
    // 代码

    retrun {}
}
</script>
```

- @3.2 语法糖写法
```html
// 可以直接在 script 标签中添加 setup 属性
<script lang="ts" setup>
    // 代码 

    // 里面的代码可以直接在模板中使用，无需return
</script>
```
:::


#### 总结：写在最后
:::info 总结
通过 `@3.2` 的语法糖写法有一下简写方式
- 可以直接在 `script` 标签中编写代码
- 无需使用 `return` 返回模板可以直接使用
- 因为语法糖形式无法配置 `components` 所以组件导入了就可以直接在模板使用
-  定义 `props` `emit` 也有了新的写法, 同时这两个方法是编译器宏，我用导入即可使用
```js
// 写法一
defineProps(['title', 'name'])
// 写法二
defineProps([
    {
        title: String,
        dafault: '默认标题'
    },
    {
        name: String,
        dafault: '默认名字'
    }
])
// 写法三如果需要在 setup 中访问 props 的值，就使用 defineProps 的返回值
cosnt props = defineProps(['title', 'name'])
console.log(props.title)
```
- 定义自定义事件 `emits` 
```html
// 模板中使用
<div @click="$emit('click')"><div>
<script>
// 写法一
defineEmits(['click', 'remove'])
// 使用方法是一样的
function handlerClick() {
    emit('click', 传递的参数)
}
</script>
```
- 对于 `setup` 中第二个参数，也有对应的访问方式
```js
// 导入他们
import { useSlots, useAttrs } from 'vue'
cosnt slots = useSlots()
cosnt attrs = useAttrs()
``` 
:::

:::info 小结
1. 给 `script` 标签添加 `setup` 属性
2. 可以直接当作在 `setup()` 函数中编写代码
3. 不用手动返回变量，可以直接在模板中使用
4. `import` 导入的变量也可以直接在模板中使用
5. 定义 `props` 使用 `defineProps` 编译器宏，无需导入
6. 定义 `emit` 使用 `defineEmits` 编译器宏，无需导入

:::