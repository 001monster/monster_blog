<template><div><h2 id="provide-inject-给深层组件中传递属性" tabindex="-1"><a class="header-anchor" href="#provide-inject-给深层组件中传递属性" aria-hidden="true">#</a> Provide/Inject：给深层组件中传递属性</h2>
<div class="custom-container info">
<p class="custom-container-title">说明</p>
<p>在日常开发中，可能需要把值传递给子组件的子组件
虽然<code v-pre>veu</code>的<code v-pre>$attrs</code>能够将美哟定义的属性默认放到最外层的容器上，但是不能保证每一个子组件的最外层都是子组件的子组件，也不能保证所有的中间组件都允许传递未定义属性</p>
<p>于是就有了 <code v-pre>Provide</code> 和 <code v-pre>Inject</code></p>
<p>父组件通过 <code v-pre>Provide</code> 给下面的所有组件提供属性，而下层需要用到这个属性的通过 <code v-pre>Inject</code> 来接收这个属性</p>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 父组件发送属性, 如果是写死固定的值的话provide可以写成一个对象形式</span>
<span class="token literal-property property">provide</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">'孩子们你们好啊，我是你们的父组件'</span>
<span class="token punctuation">}</span>

<span class="token comment">// 如果需要使用data 中的数据的话，就需要写成函数形式，并且需要 return 出去，并且provide传递的数据不是响应式的，也就是说data当中的数据改变了provide传递的数据是不会变化的，如果需要响应性的需要把provide当中的数据定义成响应性的，这个后面通过组合式API讲解</span>
<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'给孩子们发钱'</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">provide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token comment">// 传递的数据可以是任意类型的，比如数组，函数等等</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>title
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 子组件接收属性</span>
<span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'msg'</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


