---
title: （十三）编写插件
order: 13
date: 2022-11-28
category:
    - pinia 状态管理工具
---

<!-- ![](https://image.zswei.xyz/img/202211271445584.png) -->

### 一、编写插件
:::info 说明
命名规范，插件的方法名保持和文件名字一样，

比如：`logPlugin.js`

那么他的方面就应该叫做:
`function logPlugin() {}`
:::

1. 在 `store` 文件下面，添加 `themePlugin.js` 文件 
```js
export default function themePlugin() {
    return { theme: 'light' }
}
```

### 二、使用插件
- `main.js`
```js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// 导出插件
import themePlugin from './store/themePlugin'
// 使用下面定义的日志插件
import logPlugin from './store/logPlugin'

create app = createApp(app)

// 把 pinia 返回的数据保存起来
const pinia = themePlugin()
// 应用插件
pinia.use(themePlugin)
pinia.use(logPlugin)

app.use(pinia)

app.mount('#app')
```


### 三、在组件中使用插件
```html
<script setup>
import { useUserStore } from '@/store/user.js'

const userStore = useUserStore()
console.log(userStorem.theme)
// 最终打印 linght
</script>
```


### 四、定义一个复杂一点的日志插件，监听 `store` 的变化
- 在 `store` 新建一个 `logPlugin.js` 

- `pinia` 会给插件传递一个 `context` 对象作为参数，里面包含 `store` `options` 等其他相关配置

```js
export default function logPlugin() {
    console.log(context)

    // 调用 $subScribe 来监听 store 的变化
    // 需要传递 mutations, state 作为参数
    context.store.$subScribe((mutations, state) => {
        console.log(mutations.type, mutations.stareId, mutations.events.newValue)
    })
}
```