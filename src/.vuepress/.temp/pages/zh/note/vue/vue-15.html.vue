<template><div><h2 id="组件的生命周期" tabindex="-1"><a class="header-anchor" href="#组件的生命周期" aria-hidden="true">#</a> 组件的生命周期</h2>
<div class="custom-container info">
<p class="custom-container-title">说明</p>
<p>请求数据一般在 <code v-pre>create</code> 和 <code v-pre>mounted</code> 中进行</p>
</div>
<h3 id="组件生命周期" tabindex="-1"><a class="header-anchor" href="#组件生命周期" aria-hidden="true">#</a> 组件生命周期</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>beforeCreate        <span class="token operator">-</span>组件实例被创建之初，data 和 methods 中的数据还没有初始化

created             <span class="token operator">-</span>组件实例已经完全创建，data 和 methods 都已经初始化好了

beforeMounte        <span class="token operator">-</span>模板渲染，相关的 render 函数首次被调用，模板已经在内存中编译好了，但是尚未挂载到页面中去

mounted             <span class="token operator">-</span>el 被新创建的 vm<span class="token punctuation">.</span>el 替 换 ，真实dom已经生成，el 替换，真实 dom 已经生成，el替换，真实dom已经生成，el 可用，组件脱离创建阶段，进入运行阶段

beforeupdate        <span class="token operator">-</span>组件数据更新之前调用， 此时页面中显示的数据还是旧的，但 data 是最新的，页面尚未和最新的数据保持同步

update              <span class="token operator">-</span>组件数据更新之后，页面和 data 数据已经保持同步，都是最新的

beforeUnmount       <span class="token operator">-</span>组件写在之前

unmount             <span class="token operator">-</span>组件写在完成
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


