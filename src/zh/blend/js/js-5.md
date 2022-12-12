---
title: （五）IntersectionObserver 监听元素进入离开指定可视区域
date: 2022-11-02
category: 
    - 拖动排序
article:
    - IntersectionObserver
---

### 'IntersectionObserver' 监听元素进入离开指定可视区域
:::info 说明
在开发过程中，我们可能经常需要监听元素是否进入可是区域，平时我们都是监听滚动条的高度，但是这样非常消耗资源，在这里我们可以使用 `IntersectionObserver` 这个 `api` 来进行监听，使用方法如下
:::

```js
提供了一种异步观察目标元素与其祖先元素或顶级文档视窗(viewport)交叉状态的方法

1、生成观察器
	可以在同一个观察者对象中配置监听多个目标元素
	
	var intersectionObserver = new IntersectionObserver(function(entries) {
		触发的监听回调
		entries:所有监听的元素
			boundingClientRect  目标元素的矩形信息
			intersectionRatio 	相交区域和目标元素的比例值 intersectionRect/boundingClientRect 不可见时小于等于0
			intersectionRect 	目标元素和视窗(根)相交的矩形信息可以称为相交区域
			isIntersecting 		目标元素当前是否可见Boolean值可见为true
			rootBounds 			根元素的矩形信息,没有指定根元素就是当前视窗的矩形信息
			target 				观察的目标元素
			time 				返回一个记录从IntersectionObserver的时间到交叉被触发的时间的时间戳
	},{
		root:监听对象的参照dom元素,如果未传入值或值为null,则默认使用视窗(viewport)
		rootMargin:'npx,...'	可以有效的缩小或扩大根的判定范围从而满足计算需要,支持css的margin格式
		threshold: [0, 0.5, 1],	指定交叉比,在达到指定交叉比会触发回调,默认为0
	});

2、设置监听元素
	intersectionObserver.observe(document.querySelector('.scrollerFooter'));

3、停止监听
	intersectionObserver.disconnect()
	
4、停止监听特定目标元素
	intersectionObserver.unobserve(dom)

5、返回所有观察目标的IntersectionObserverEntry对象数组。
	如果使用回调来监视这些更改,则无需调用此方法。调用此方法会清除挂起的相交状态列表,因此不会运行回调。
	intersectionObserver.takeRecords()

```


####代码示例:

####实现懒加载:

```js
const io = new IntersectionObserver(()=>{ // 实例化 默认基于当前视窗
    
})  

let ings = document.querySelectorAll('[data-src]') // 将图片的真实url设置为data-src src属性为占位图 元素可见时候替换src

function callback(entries){  
    entries.forEach((item) => { // 遍历entries数组
        if(item.isIntersecting){ // 当前元素可见
            item.target.src = item.target.dataset.src  // 替换src
            io.unobserve(item.target)  // 停止观察当前元素 避免不可见时候再次调用callback函数
        }   
    })
}

imgs.forEach((item)=>{  // io.observe接受一个DOM元素，添加多个监听 使用forEach
    io.observe(item)
})
```