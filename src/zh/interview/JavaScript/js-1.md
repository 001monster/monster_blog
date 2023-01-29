---
title: （一）延迟加载 JS 有那些方式
date: 2023-01-29
category:
    - 前端面试题
tag: 
    - js面试题
order: 1

---

## 参考视频
<iframe src="//player.bilibili.com/player.html?aid=893165041&bvid=BV1QP4y1j74h&cid=486774032&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

- 课前小知识 [`web` 程序的渲染步骤](https://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html)

## 一、延迟加载 `JS` 有那些方式?
1. 我们可以通过动态创建的方式
2. 通过定时器 `setTimeout` 来实现
3. `async` `defer`

## 二、延时加载第一种，按照顺序加载
1. 如果把 `js` 引入放在 `body` 之前则是先把 `js` 加载完了在来加载 `html` 
2. 如果把 `js` 引入放在 `body` 之后则是把 `html` 加载完了在加载 `html`
- 总结：所以我们一搬优化网站或者项目，都是把 `js` 引入放在 `</body>` 之前，这样就算是 `js` 出现错误了，也不会影响 `html` 的渲染，如果是放在了 `body` 之前，`js` 出现错误了就会阻止 `html` 的渲染

![](https://image.zswei.xyz/img/202301292159884.png)

- 例子
```html
...
<script src="./script.js"></script>
...
<div id="box">111111</div>
```
- 我们去获取上面途中 `id` 为 `box` 的 `DOM` 发现是 null，原因就是浏览器解析的时候是从上到下解析的，当解析到 `script` 的时候 `DOM` 还没有渲染出来
```js
// script.js
console.log(document.getElmentById('box'))
```

![](https://image.zswei.xyz/img/202301292208946.png)


## 三、 当在引入外部连接 `js` 时使用 `async`
```html
...
<script async src="./script.js"></script>
...
<div id="box">111111</div>
```
- 当在 `script` 标签中加了 `async` 就可以正常获取到了
```js
// script.js
console.log(document.getElmentById('box'))
```

![](https://image.zswei.xyz/img/202301292211139.png)

## 四、 当在引入外部连接 `js` 时使用 `defer`
```html
...
<script defer src="./script.js"></script>
...
<div id="box">111111</div>
```
- 当在 `script` 标签中加了 `async` 也可以正常获取到了
```js
// script.js
console.log(document.getElmentById('box'))
```

![](https://image.zswei.xyz/img/202301292211139.png)


## 五、延时加载 `js` 中 `async` 和 `defer` 的区别
通过上面 `三` `四`可以看出 `async` 和 `defer` 都可以达到一样的效果，那么他们之间到底有啥区别呢