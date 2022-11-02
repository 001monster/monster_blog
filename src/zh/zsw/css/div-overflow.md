---
title: 文本溢出处理方式
date: 2022-11-02
category:
    - css常用代码
tag:
    - css
article: false
---

## div盒子显示具体行数多余的通过...显示

### 一、显示一行

```css
// 只显示一行，多余的通过...
// 只显示一行的设置方法很简单
.item{	
    overflow: hidden;			// 溢出隐藏
    white-space: nowrap;		// 强制一行显示文本
    text-overflow: ellipsis;	// 溢出部分使用ellipsis 也就是省略号显示
}
```

最终效果图:

![effect](https://img-blog.csdnimg.cn/39c97cc6e1524a8cb345bcedb6bd83ec.png)



### 二、显示多行

```css
// 多行显示，多余的通过... 
// 多行的设置比单行的要多几个内容
.item{
	overflow: hidden;				// 老样子溢出隐藏
	text-overflow: ellipsis;		// 溢出的部分还是使用ellospis 显示
	display: -webkit-box;			// 把盒子设置为弹性盒子
	-webkit-box-orient: vertical;   // 垂直上到下的子元素
	-wekit-line-clamp: 2;			// 这行就是关键了具体要显示多少行就在这里设置了
}
```
最终效果图:
![effect](https://img-blog.csdnimg.cn/e64c39e10e2249b1b2e57915fd7e2037.png)

### 三、总结
各位观众老爷以上呢是我的一个自我总结，全部纯手敲，要错误的地方还望手下留情不要喷我，还有就是以上设置方法有浏览器的兼容问题，但是都这个年代了老浏览器都淘汰了，懂得都懂啊，886

