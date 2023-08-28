---
title: （四）css样式模块化
date: 2023-02-28
category:
    - React脚手架
tag: 
    - react
order: 4
---

## 参考视频
<iframe src="//player.bilibili.com/player.html?aid=798144910&bvid=BV1wy4y1D7JT&cid=266612638&page=53" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

## 🎄一、样式的模块化
在开发的过程中会有很多的组件，这些组件难免的会有相同的类名，就会造成样式冲突，为了解决这个问题，就需要使用到样式的模块化了

1. 模块化样式的命名
```sh
xxx.module.css
```

2. 引入模块化的样式文件
```sh
import xxx from './xxx.module.css'
```

3. 使用模块化样式
```js
class xxx extends React.COmponent {
  render() {
    return(
      <div className={xxx.titile}></div>
    )
  }
}
```

## 二、vscode中的React插件

![](https://image.zswei.xyz/img/202302281943377.png)