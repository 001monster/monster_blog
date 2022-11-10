---
title: （二）Transition 实现动画
order: 2
date: 2022-11-10
category:
    - Vue背后的机制
---

### 使用 `Transition` 实现动画 `css` 自己的动画跟 `vue` 没啥关系
-[设置动画属性参考网站](https://www.w3school.com.cn/cssref/pr_animation.asp)

:::info 说明
1. 什么是过度
过度就是一个元素从一个状态过度到另外一个状态的过程，就比如一个元素鼠标移上去慢慢变化颜色

2. `Transition` 和 `@keyframes` 的区别是啥
`Transition` 只有一个开始和结束过程，无法设置中间时间的变化，而 `@keyframes` 强调一个动画的运动轨迹，会随着时间的变化而不同，可以通过 `%` 来控制

:::

![](https://image.zswei.xyz/img/202211101622018.png)

```css
/* 盒子样式 */
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
  transition: all 0.5s ease-in-out;
}

/* 鼠标移动上去 盒子变大，倾斜 通过 transition 来实现 */
.box:hover {
  transform: scale(1.25) skewY(-20deg) rotateY(20deg);
}
```

![](https://image.zswei.xyz/img/202211101622935.png)