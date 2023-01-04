---
title: （九）provide / inject 类型定义
order: 9
date: 2022-11-30
category:
    - TypeScript
tag: 
    - Ts和Vue
---


### 一、`provide / inject` 类型定义

#### 定义 `provide` 值的类型
```js
import {InjectIonKey } from 'vue'

// 使用 Symbol() 来定义key 因为他不能被重复定义
export default const Theme = Symbol() as InjectIonKey<值的类型>
```

#### 传递 `provide` 值
```html
<script setup lang="ts">
import Theme from 'Theme.js'

provide(Theme, '需要传递的值')
</script>
```

#### 接收 `inject` 值
- 因为 `Symbol` 不允许被重复定义，所以这里不能够直接接收到 `provide` 传递的值，需要把 `provide` 传递的值定义到一个单独的文件里然后进行导出使用
```js
import Theme from 'Theme.js'

// 接收
const theme = inject(Theme)
```


### 二、第二种方式定义
```js
provide('title', '这是我需要传递的内容')
```

```js
// 此时因为传递和接收在不同的文件，无法自动判断出是啥类型，默认是 unknown
const title = inject('title')

// 可以使用泛型来指定类型
cosnt title = inject<string>('title')
```