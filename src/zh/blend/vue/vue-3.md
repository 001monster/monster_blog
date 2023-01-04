---
title: （三）vite 脚手架
date: 2022-12-24
category:
    - vite 脚手架
tag: 
    - Vue
---

### 设置多种 `vite` 的方式
- 1.设置所以用 `host` 访问
- 直接在脚本 `dev` 的后面跟上 `--host`
```json
{
  ...
  "scripts": {
    "dev": "vite --host",
    ...
  },
  "dependencies": {
    ...
  },
  "devDependencies": {
    ...
  }
}
```

- 2.不使用默认端口自定义端口
- 直接在脚本 `dev` 的后面跟上 `--port 端口号`
```json
{
  ...
  "scripts": {
    "dev": "vite --port 3002",
    ...
  },
  "dependencies": {
    ...
  },
  "devDependencies": {
    ...
  }
}
```

- 3.启动脚手架默认打开浏览器
- 直接在脚本 `dev` 的后面跟上 `--open`
```json
{
  ...
  "scripts": {
    "dev": "vite --open",
    ...
  },
  "dependencies": {
    ...
  },
  "devDependencies": {
    ...
  }
}
```