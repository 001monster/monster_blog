---
title: （九）使用js实现动画
order: 9
date: 2022-11-11
category:
    - Vue动画过渡
---

### 使用 `JavaScript` 实现动画
:::info 说明
因为 `css` 不能实现较为复杂的动画，如数字变化动画，或者 `canvas` 形变动画等
:::

#### 认识 `js` 动画

- 市面上有很多优秀的 `js` 库 如下面这个 `GreenSock`

![](https://image.zswei.xyz/img/202211112224886.png)

- 我们需要在合适的地方切入 `js` 动画，具体参数如下图

![](https://image.zswei.xyz/img/202211112226190.png)

- 这些回调函数需要以当前 组件作为实例调用，方便对接 `js` 库操作 `DOM` 实例

![](https://image.zswei.xyz/img/202211112227975.png)

- `enter` 和 `leave` 还接收第二个参数 `done` 需要手动调用通知 `vue` 动画执行完成可以正式卸载挂载组件了

```js
function lave(el, done) {
  done()
}
```

#### 禁用组件自带的 6 个 `css` 动画
- 使用 `v-bind:css="fasle"` 简写 `:css="fasle"`
```html
<Transition :css="false">
  <div></div>
</Transition>
```


#### 使用 `web animation Api` 来实现动画
- `web animation api` 是浏览器原生支持的，他给每一个 `DOM` 元素都添加了一个 `animat` 方法，方法接收两个参数，第一个参数接收一个数组 `[]` 数组的每一个元素相当于 `@keyframe` 的百分比阶段，第二个参数相当于 `animate` 的配置参数相当于 `animation` 的配置，可以配置动画时常，动画执行方式，就跟 `animation` 是一样的

```js
function enter(el, done) {
  // 通过el 实例调用 `animate` 方法
  cosnt fadeIn = el.animate([{opacity: 0}, {opacity: 1}], {
    duration: 700,        // 执行时间
    easing: 'ease-in-out'   // 动画类型
  })

  // animate 会返回一个animation实例，通过他我们可以监听动画的执行阶段，可以手动暂停，或者播放动画

  fadeIn.onfinis = () => {
    done()
  }
}
```

#### 可以和 组件自带的 6 个 `class` 一起混合使用
 - 删除 `:class="false"` ； 和之前一样配置 6 个 `class` 就可以了

![](https://image.zswei.xyz/img/202211112252181.png)