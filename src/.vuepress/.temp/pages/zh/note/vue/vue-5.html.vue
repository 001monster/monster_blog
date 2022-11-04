<template><div><h3 id="vue-指令" tabindex="-1"><a class="header-anchor" href="#vue-指令" aria-hidden="true">#</a> vue-指令</h3>
<p>即将进入vue的正式学习，我们先来热身一下简单的看一下几个vue的指令，并说一下他们的用途</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>v<span class="token operator">-</span>html<span class="token operator">:</span> 在模板中原样输出html代码。
v<span class="token operator">-</span>once<span class="token operator">:</span> 只渲染一次模板，以后就算数据更新了也不会重新渲染模板
v<span class="token operator">-</span>bind<span class="token operator">:</span> 动态绑定参数，可以简写为 <span class="token operator">:</span>
v<span class="token operator">-</span>on<span class="token operator">:</span> 监听事件，可以简写为@
v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">:</span> 循环选渲染模板，为了提高性能必须指定 key

<span class="token comment">// 再来补充一下其他的</span>
<span class="token operator">&lt;</span>template<span class="token operator">/</span><span class="token operator">></span> 渲染一组标签但是不会增加额外的嵌套

<span class="token comment">// 相关事件的修饰符</span>
<span class="token punctuation">.</span>prevent 阻止事件默认行为，就比如说阻止原生 表单form 的提交事件，或者a标签的跳转事件
<span class="token punctuation">.</span>stop 阻止事件的冒泡行为
<span class="token punctuation">.</span>capture 捕获内层事件，刚好和冒泡事件相反，他会最先触发 <span class="token punctuation">.</span>capture的事件
<span class="token punctuation">.</span>once 只允许点击一次事件
<span class="token punctuation">.</span>self 使用这个修饰符的顺序很重要
@click<span class="token punctuation">.</span>prevent<span class="token punctuation">.</span>self 会阻止所有的点击
@click<span class="token punctuation">.</span>self<span class="token punctuation">.</span>prevent 只会阻止对元素自身的点击

<span class="token comment">// 表单事件的修饰符</span>
<span class="token punctuation">.</span>number   这个修饰符会把input 框里面的字符串转换成数组 如果转换不了的话，就会原样输出
<span class="token punctuation">.</span>lazy 当input输入的时候他不会去跟着同步，只有当用户输入完以后才会触发

<span class="token comment">// 最后 请求数据一般放在created 生命周期里面</span>
<span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


