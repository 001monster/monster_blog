---
title: （一）keyframes 实现动画
order: 1
date: 2022-11-10
category:
    - Vue动画过渡
---

### 使用 `@keyframes` 实现动画 - `css` 自己的跟 `vue` 没有关系
-[设置动画属性参考网站](https://www.w3school.com.cn/cssref/pr_animation.asp)

![](https://image.zswei.xyz/img/202211101522004.png)

```html
<!-- 此时页面上有一个正方形的div 我们设置一个 动画让他匀速旋转起来 -->

<style>
/* div 的样式 */
.box {
  width: 100px;
  height: 100px;
  background: linear-gradient(
    45deg,
    hsl(240deg, 60%, 50%),
    hsl(300deg, 90%, 50%)
  );
  padding: 0.5em 1.4em;
  border-radius: 4px;
  color: white;

  /* 给div 设置动画 */
  /* 
  动画设置参考地址：https://www.w3school.com.cn/cssref/pr_animation.asp
  第一个参数：执行动画名称 
  第二个参数：执行动画时间
  第三个参数：执行动画方式 
    - linear：匀速执行
    - ease：动画以低速开始，然后加很快，结束前变慢
    - ease-in ：动画以低速开始
    - ease-out：动画以低俗结束
    - ease-in-out：动画以低俗开始-以低速结束
    - cubic-bezier(n, n ,n)：设置自己的值。可能的值是从 0 到 1 的数值。
  第四个参数：执行动画次数 
    - n：自定义次数
    - infinite：无限循环
  */
  animation: rotate 10s linear infinite;
}

/* 设置动画 使用 @keyframes */
@keyframes rotate {
    /* 0% 的时候 0deg */
    0%{
        transform: rotate(0deg);
    }

    /* 100% 的时候 旋转 360deg */
    100%{
        transform: rotate(360deg);
    }
}
</style>
```

![](https://image.zswei.xyz/img/202211101538369.png)