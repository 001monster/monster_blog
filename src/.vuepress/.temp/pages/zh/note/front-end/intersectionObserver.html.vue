<template><div><h2 id="intersectionobserver-api-使用教程" tabindex="-1"><a class="header-anchor" href="#intersectionobserver-api-使用教程" aria-hidden="true">#</a> IntersectionObserver API 使用教程</h2>
<p>在网页开发时我们经常需要判断某个元素是否已经进入到视口<code v-pre>viewpot</code>，也就是用户能不能看见他</p>
<p><img src="https://www.ruanyifeng.com/blogimg/asset/2016/bg2016110201.gif" alt="示例图片" loading="lazy"></p>
<p>上面的绿色方块不断滚动，顶部就会提示他的可见性。
传统的方法是，监听<code v-pre>socroll</code>滚动条，判断元素到视口<code v-pre>viewpot</code>顶部的距离，当元素到视口<code v-pre>viewpot</code>顶部的距离小于整个视口，这时就证明用户已经可以可以看见元素了。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">const</span> imgags <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">'img'</span><span class="token punctuation">)</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'scorll'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      images<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">image</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> imageTop <span class="token operator">=</span> image<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>top
        <span class="token keyword">if</span><span class="token punctuation">(</span>imageTop <span class="token operator">&lt;</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> data_src <span class="token operator">=</span> image<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">'data_src'</span><span class="token punctuation">)</span>
          image<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'src'</span><span class="token punctuation">,</span> data_src<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      consoloe<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'scorll触发'</span><span class="token punctuation">)</span>
      <span class="token comment">// 这样写非常消耗性能，他一直都会去监听scorll 的状态</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="一、api" tabindex="-1"><a class="header-anchor" href="#一、api" aria-hidden="true">#</a> 一、API</h1>
<p>现在有个简单的方法使用<code v-pre>IntersectionObserver</code>api
``</p>
</div></template>


