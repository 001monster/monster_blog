---
icon: note
title: IntersectionObserver之v-lazy
date: 2022-10-17
category:
  - vue
description: 原作者：阮一峰
---

## IntersectionObserver API 使用教程
在网页开发时我们经常需要判断某个元素是否已经进入到视口`viewpot`，也就是用户能不能看见他

![示例图片](https://www.ruanyifeng.com/blogimg/asset/2016/bg2016110201.gif)

上面的绿色方块不断滚动，顶部就会提示他的可见性。
传统的方法是，监听`socroll`滚动条，判断元素到视口`viewpot`顶部的距离，当元素到视口`viewpot`顶部的距离小于整个视口，这时就证明用户已经可以可以看见元素了。
```javascript
    const imgags = document.querySelectorAll('img')
    window.addEventListener('scorll', (e) => {
      images.forEach(image => {
        const imageTop = image.getBoundingClientRect().top
        if(imageTop < window.innerHeight) {
          const data_src = image.getAttribute('data_src')
          image.setAttribute('src', data_src)
        }
      })
      consoloe.log('scorll触发')
      // 这样写非常消耗性能，他一直都会去监听scorll 的状态
    })
```

# 一、API
现在有个简单的方法使用`IntersectionObserver`api
``