---
title: （十）template ref 类型定义
order: 10
date: 2022-11-30
category:
    - TypeScript
---


### 一、`template` 的 `ref` 类型定义

```html
<div ref="getDom">这个是需要获取的 DOM 元素</div>

<script setup lang="ts">
import { getDom } from 'vuex'

const getDom = ref<HTMLSelectElment | null>(null)
</script>
```

### 总结-写在最后
:::info 说明
- 当我们定义需要获取原生的 `DOM` 的时候需要给他定义联合类型为 `null` 因为页面刚渲染的时候他还没有值，给他赋值 `null`

- 当我们不知道原生的 `HTML` 是啥类型的时候，可以把 `HTML` 先打出来 `vscode` 就会进行提示

- 当不确定一个参数是否有值的时候，我们可以使用 `?` 然后在 `.` 他后面的属性，下面这个代码的意思就是只要这行代码中有一个 `undefind` 他就整体返回 `undefind`
```js
const str
console.log(str?.toString())
```
:::