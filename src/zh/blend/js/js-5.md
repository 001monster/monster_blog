---
title: （五）IntersectionObserver 监听元素进入离开指定可视区域
date: 2022-11-02
category: 
    - 拖动排序
tag:
    - js
    - IntersectionObserver
order: 5
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


#### 代码示例:

#### 实现懒加载:

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

#### 配合vue实现demo
:::info dome
配合 `vue` 写一个自定义指定，当元素进入可视区域的时候给他加上一个 `class` 离开可视区域的时候给他移除 `class`
:::

##### 第一步
- 在 `vue` 的 `src` 文件夹下面创建一个 `directives` 文件夹，文件夹里面创建一个 `index` 的 `ts` 或 `js` 文件

![](https://image.zswei.xyz/img/202212241150044.png)

```js
/**
 * @describe 自定义指令模块
 * @params { 
 *  ToAnimation         进入可视区域动画 离开可视区域动画
 *  formAnimation       离开可视区不移除class
 * }
 */
import ToAnimation from "./animation/toAnimation"
import FromAnimation from "./animation/fromAnimation"

// 这里的 app 是在 main.ts 里面调用这个方法传过来的
export default(app: any) => {
    ToAnimation(app)
    FromAnimation(app)
}
```

##### 第二步
- 在 `manin.ts` 里面引入 `import directives from './directives'` 这个自定义指令文件

```js
import { createApp } from 'vue'
import App from './App.vue'
import directives from './directives'  // 自定义指令

const app = createApp(App)
// 这里调用这个方法将 app 传过去
directives(app)         // 全局指令

app.mount('#app')
```

##### 第三步
- 为了可以让自定义指令分模块 可以在 `directives` 文件夹 创建需要自定义指令的文件夹

- 自定义动画指令

![](https://image.zswei.xyz/img/202212241248657.png)


#### 第四步
- 编写自定义指令，并在 `directives` 下的 `index` 入口文件里注册自定义指令

```js
/**
 * @describe 元素进入可视化区域动画挂载
 */


export default(app: any) => {
    app.directive('toAnimation', {
        mounted(el: any, val: any) {     
            const io = new IntersectionObserver(function(entries) {
                if(entries[0].isIntersecting) {
                    addClass(el, val.value)
                } else {
                    remove(el, val.value)
                }
            }, {
                rootMargin: '0px',
                threshold: 0.5
            })
            io.observe(el);
        }
    })
}

// 添加class
const addClass = (el: Element, className: string) => {
    if (_hasClass(el, className)) return
    let newClass = el.className.split(' ')
    newClass.push(className)
    el.className = newClass.join(' ')
}


// 移除class
const remove = (el: Element, className: string) => {
    if (!_hasClass(el, className)) return
    let newClass = el.className.split(' ')
    let index = newClass.indexOf(className)
    newClass.splice(index, 1)
    el.className = newClass.join(' ')

}


// 判断当前元素中是否有该类名
const _hasClass = (el: Element, className: string) => {
    const reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
    return reg.test(el.className)
}
```