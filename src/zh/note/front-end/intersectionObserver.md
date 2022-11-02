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

## 一、API
现在有个简单的方法使用`IntersectionObserver`api

```javascript
let io = IntersectionObserver(callback, option)
```

上面代码中，IntersectionObserver是浏览器原生提供的构造函数，接受两个参数：callback是可见性变化时的回调函数，option是配置对象（该参数可选）。

构造函数的返回值是一个观察器实例。实例的observe方法可以指定观察哪个 DOM 节点。

```javascript
// 开始观察
io.observe(document.getElementById('example'));

// 停止观察
io.unobserve(element);

// 关闭观察器
io.disconnect();
```

上面代码中，`observe`的参数是一个 `DOM` 节点对象。如果要观察多个节点，就要多次调用这个方法。

``` javascript
io.observe(elementA);
io.observe(elementB);
```

## 二、callback 参数

目标元素的可见性变化时，就会调用观察器的回调函数`callback`。
`callback`一般会触发两次。一次是目标元素刚刚进入视口（开始可见），另一次是完全离开视口（开始不可见）。

```javascript
var io = new IntersectionObserver(
  entries => {
    console.log(entries);
  }
);
```
面代码中，回调函数采用的是箭头函数的写法。`callback`函数的参数（`entries`）是一个数组，每个成员都是一个`IntersectionObserverEntry`对象。举例来说，如果同时有两个被观察的对象的可见性发生变化，`entries`数组就会有两个成员。

## 三、IntersectionObserverEntry 对象

`IntersectionObserverEntry`对象提供目标元素的信息，一共有六个属性。
```javascript
{
  time: 3893.92,
  rootBounds: ClientRect {
    bottom: 920,
    height: 1024,
    left: 0,
    right: 1024,
    top: 0,
    width: 920
  },
  boundingClientRect: ClientRect {
     // ...
  },
  intersectionRect: ClientRect {
    // ...
  },
  intersectionRatio: 0.54,
  target: element
}
```


每个属性的含义如下:

  ::: info
  time：可见性发生变化的时间，是一个高精度时间戳，单位为毫秒
  target：被观察的目标元素，是一个 `DOM` 节点对象
  rootBounds：根元素的矩形区域的信息，`getBoundingClientRect()`方法的返回值，如果没有根元素（即直接相对于视口滚动），则返回`null`
  boundingClientRect：目标元素的矩形区域的信息
  intersectionRect：目标元素与视口（或根元素）的交叉区域的信息
  intersectionRatio：目标元素的可见比例，即`intersectionRect`占`boundingClientRect`的比例，完全可见时为1，完全不可见时小于等于0
  :::

  ![实例图片](https://www.ruanyifeng.com/blogimg/asset/2016/bg2016110202.png)

  上图中，灰色的水平方框代表视口，深红色的区域代表四个被观察的目标元素。它们各自的intersectionRatio图中都已经注明。

  ## 四、实例 vue懒加载(v-lazy)
  ```vue
  <template>
  <div class="img-lazy">
    <div>参考链接：<a href="https://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html">IntersectionObserver API 使用教程</a></div>
    <div 
      class="item"
      v-for="(item, i) in arrSrc"
      :key="i"
    >
      <img 
        class="img" 
        :src="moren"
        v-lazy="item"
        alt="懒加载"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'imgLazy',
  data() {
    return {
      moren: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.soogif.com%2F1g9pHPk2uEA9JT8lT8ejc1WE2mgQTVy4.gif&refer=http%3A%2F%2Fimg.soogif.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668584050&t=e90ea07c724b96a9446190b6cbe4de35",
      arrSrc: [
        'https://image.jxc4.com/image/21170e70681c93e9ef85453cb5f28e33.png',
        'https://image.jxc4.com/image/71b9046bb233bccf103825e74d5fc257.png',
        'https://image.jxc4.com/image/48d133ab53758f1caf05654f0eb40605.png',
        'https://image.jxc4.com/image/e8e9e36d4a1d814bc059a588e49c20b6.png',
        'https://image.jxc4.com/image/e4042b6463fcf5b4cc58e01c7311e392.jpg',
        'https://image.jxc4.com/image/ec7bf3e5a8efb503ce1c51ed135f773e.jpg',
        'http://image.jxc4.com/image/a21a88820fdde49807de58964295d1ee.jpg',
        'http://image.jxc4.com/e0c502683858f1e6c82a6e110b880c10.jpg',
        'http://image.jxc4.com/image/de2be839697594030b7023edb2274c8f.jpg',
        'http://image.jxc4.com/image/c7de655f254ddde1a9919195b4516b94.jpg',
        'http://image.jxc4.com/image/0c083fb4ec22f28bed2cded5d2424c11.jpg',
        'http://zswei.xyz/assets/hero.197a9d2d.jpg',
        'https://image.jxc4.com/image/21170e70681c93e9ef85453cb5f28e33.png',
        'https://image.jxc4.com/image/71b9046bb233bccf103825e74d5fc257.png',
        'https://image.jxc4.com/image/48d133ab53758f1caf05654f0eb40605.png',
        'https://image.jxc4.com/image/e8e9e36d4a1d814bc059a588e49c20b6.png',
        'https://image.jxc4.com/image/e4042b6463fcf5b4cc58e01c7311e392.jpg',
        'https://image.jxc4.com/image/ec7bf3e5a8efb503ce1c51ed135f773e.jpg',
        'http://image.jxc4.com/image/a21a88820fdde49807de58964295d1ee.jpg',
        'http://image.jxc4.com/e0c502683858f1e6c82a6e110b880c10.jpg',
        'http://image.jxc4.com/image/de2be839697594030b7023edb2274c8f.jpg',
        'http://image.jxc4.com/image/c7de655f254ddde1a9919195b4516b94.jpg',
        'http://image.jxc4.com/image/0c083fb4ec22f28bed2cded5d2424c11.jpg',
        'http://zswei.xyz/assets/hero.197a9d2d.jpg'
      ]
    }
  },
  // 自定义指令
  directives: {
    /*
     *@描述: 自定义懒加载指令
     *@作者: zhang-shu-wei
     *@日期: 2022-10-17 15:38:28
     *@params: {
      el - 不包括自定义指令的容器 也就是没有 v-laz
      binding - 包括自定义指令的容器 也就是有 v-lazy
     }
    */
    lazy: {
      inserted(el, binding) {
        // 实例化一个交叉监视
        let io = new IntersectionObserver((entries) => {
          // entries 里面是一个数组 有多少个监视就有多少个成员
          entries.forEach( element => {
            if(element.isIntersecting > 0) {
              let img = element.target
              setTimeout( () => {
                img.src = binding.value
              }, 500)
              io.unobserve(img)
            }
          })
        })
        io.observe(el);
      }
    }
  }
  
}
</script>
<style scoped lang="less">
.img-lazy{
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 750px;
  height: auto;
  border: 1px solid rgb(199, 199, 199);
  
  .item{
    margin: 20px;
    height: 200px;
    width: 200px;
    border: 1px soldi rgb(185, 0, 0);
    overflow: hidden;
    .img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
  ```

## 五、无限滚动
```javascript
var intersectionObserver = new IntersectionObserver(
  function (entries) {
    // 如果不可见，就返回
    if (entries[0].intersectionRatio <= 0) return;
    loadItems(10);
    console.log('Loaded new items');
  });

// 开始观察
intersectionObserver.observe(
  document.querySelector('.scrollerFooter')
);
```
无限滚动时，最好在页面底部有一个页尾栏（又称`sentinels`）。一旦页尾栏可见，就表示用户到达了页面底部，从而加载新的条目放在页尾栏前面。这样做的好处是，不需要再一次调用`observe()`方法，现有的`IntersectionObserver`可以保持使用。

## 六、Option 对象
threshold属性决定了什么时候触发回调函数。它是一个数组，每个成员都是一个门槛值，默认为[0]，即交叉比例（intersectionRatio）达到0时触发回调函数。
```javascript
new IntersectionObserver(
  entries => {/* ... */}, 
  {
    threshold: [0, 0.25, 0.5, 0.75, 1]
  }
)
```
用户可以自定义这个数组。比如，[0, 0.25, 0.5, 0.75, 1]就表示当目标元素 0%、25%、50%、75%、100% 可见时，会触发回调函数。
![实例图片](https://www.ruanyifeng.com/blogimg/asset/2016/bg2016110202.gif)

### 6.2 root 属性，rootMargin 属性
很多时候，目标元素不仅会随着窗口滚动，还会在容器里面滚动（比如在iframe窗口里滚动）。容器内滚动也会影响目标元素的可见性，参见本文开始时的那张示意图。

IntersectionObserver API 支持容器内滚动。root属性指定目标元素所在的容器节点（即根元素）。注意，容器元素必须是目标元素的祖先节点。

```javascript

var opts = { 
  root: document.querySelector('.container'),
  rootMargin: "500px 0px" 
};

var observer = new IntersectionObserver(
  callback,
  opts
);
```
上面代码中，除了`root`属性，还有`rootMargin`属性。后者定义根元素的`margin`，用来扩展或缩小rootBounds这个矩形的大小，从而影响`intersectionRect`交叉区域的大小。它使用CSS的定义方法，比如`10px` `20px` `30px` `40px，表示 `top`、`right`、`bottom` 和 `left` 四个方向的值。

这样设置以后，不管是窗口滚动或者容器内滚动，只要目标元素可见性变化，都会触发观察器。