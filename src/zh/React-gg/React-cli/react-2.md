---
title: （二）脚手架文件介绍_public
date: 2023-02-26
category:
    - React脚手架
tag: 
    - react
order: 2
---

## 参考视频
<iframe src="//player.bilibili.com/player.html?aid=798144910&bvid=BV1wy4y1D7JT&cid=266612477&page=50" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

## 🎄一、public文件介绍
`public` 里面一般存静态文件

1. `favicon.ico` 网站图标

2. `index.html` 主页面

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <!-- 网赚图标  %PUBLIC_URL% 代表public文件夹路劲-->
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <!-- 开启理想视口，用于做移动端网页适配的 -->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- 用于配置浏览器页签+地址栏颜色（仅支持安卓手机老浏览器） -->
    <meta name="theme-color" content="#000000" />
    <!-- 网站的seo网站搜索引擎收录 -->
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <!-- ios添加网页到主屏幕的图标（仅支持ios） -->
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!-- 应用加壳 可以生成.apk文件或者是ios 安卓包 -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
  </head>
  <body>
    <!-- 如果浏览器不支持js脚本的运行这句话就会出现在浏览器的页面上 -->
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>

```

3. `manifest.json` 应用加壳配置文件

4. `robots.txt` 爬虫规则文件