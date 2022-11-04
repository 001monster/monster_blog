---
title: 6.vue单文件应用
icon: code
date: 2022-11-03
category:
    - vue
---

## vue单文件应用

### 一、如何创建一个组件
```js
cosnt app = Vue.createApp({})
app.component('组件名字', {
    data() {
        return {
            content: ''
        }
    },

    computed: {
        return this.content.length
    },

    template: `
        <div>
            <input v-model="content" />
            <p>你共输入了 {{ count }} 个字符</p>
        </div>
    `
})

const vm = app.mount('#app')
```


### 二、全局注册组件
```js
cosnt app = Vue.createApp({})

app.component('全局组件名字', {
    template: `
    <div>
        <h1>字符统计应用</h1>
        <WordCount />
    </div>`
})

const vm = app.mount('#app')
```


### 三、局部注册组件
```js
// 先引入组件 
import ComponentApp from './component/index.vue'

const app = Vue.createApp({
    // 注册组件
    components: {
        ComponentApp
    }
})

const vm = app.mount({#app})
```


### 四、使用 `Vite` 创建 `Vue` 项目
1. 打开终
使用idea或者vscode编辑器，打开本地终端，就是为了在自定义的目录中新建vue项目
![打开终端](http://image.zswei.xyz/img/1.webp)

2. 这边是使用npm创建vite，输入npm create vite@latest ,使用yarrn 可输入 yarn create vite，会有提示，一步步选择vue即可

3. 如果想要一个模板，创建一个vite+vue的模板，就输入npm create vite@latest my-vue-app -- --template vue
![选择模板](http://image.zswei.xyz/img/2.webp)

4. 进入你创建的app目录中，cd cillian-vue

5. 运行 `npm install` 安装依赖
![安装依赖](http://image.zswei.xyz/img/3.webp)

6. 运行 `npm run dev` 运行项目
![运行项目](http://image.zswei.xyz/img/4.webp)


7. ok项目创建完成，咱们下一章来说说创建和使用单一文件组件