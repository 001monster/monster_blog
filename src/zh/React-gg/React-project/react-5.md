---
title: （五）路劲配置别名@
date: 2022-12-25
category:
    - react项目
tag: 
    - react
---

### ✨一、路径别名 `@` 说明
 - 默认脚手架是不认识 `@` 的，使用会报错

![](https://image.zswei.xyz/img/202212251822218.png)

### 🎑二、配置路劲别名
- 使用 `vite` 脚手架创建的项目在 `vite.config.ts` 当中进行配置
```ts
import { defineConfig } from 'vite'
import path from "path"
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@":path.resolve(__dirname, './src')
    }
  }
})
```

- 我们可以看到我们这里配置好了但是他会说我们没有 `path` 模块，但是大家都知道，`path` 是 `node` 里面的模块，所以肯定是有的，这里报错是因为我们使用的是 `ts` 所以需要进行生命

![](https://image.zswei.xyz/img/202212251828292.png)


### 🎃三、安装 `node` 这里库的 `ts` 声明设置
:::tabs
@tab:active npm 
```sh
npm i -D @types/node
```

@tab yarn
```sh
yarn add @types/node
```
:::

### 😁四、解决报错
如果配置好以后还是报错的话就把这个文件关闭重新打开，如果还是报错的话，就这样引入 `path` 模块
```sh
import * as path from "path"
```


### 😋五、配置 `@` 绝对路径文件提示
我们经过上面的配置已经可以使用 `@` 绝对路径来访问文件了，但是没有提示这个文件夹下面有些啥文件

- tsconfig.json
```ts
{
  "compilerOptions": {
    ...
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}

```