---
title: （四）虚拟DOM与真实DOM
date: 2022-12-25
category:
    - react
---

### 🍈 一、虚拟 `DOM` 是什么
![](https://image.zswei.xyz/img/202212262232509.png)
![](https://image.zswei.xyz/img/202212262234869.png)
![](https://image.zswei.xyz/img/202212262236583.png)

- 虚拟 `DOM` 就是一个普通的 `Object` 对象（一般对象）

### 🥫二、真实 `DOM`

![](https://image.zswei.xyz/img/202212262235451.png)
![](https://image.zswei.xyz/img/202212262236684.png)


### 🧂总结
- 虚拟 `DOM` 就是一个普通的 `Object` 对象（一般对象）
- 虚拟 `DOM` 属性少，比较轻盈
- 真实 `DOM` 属性多，比较繁重
- 为什么虚拟 `DOM`  轻呢，因为他只在 `React` 内部用到了，不用真实 `DOM` 那么多属性，因为用不到，当然最后虚拟 `DOM` 会转换为真实 `DOM` 呈现在页面上