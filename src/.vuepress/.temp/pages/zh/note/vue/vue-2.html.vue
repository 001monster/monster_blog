<template><div><h3 id="第一个vue3-x-应用" tabindex="-1"><a class="header-anchor" href="#第一个vue3-x-应用" aria-hidden="true">#</a> 第一个vue3.x 应用</h3>
<p>我们上一节说了传统网页的开发的弊端，那么我从现在开始就来解决这写弊端，来创建我们的第一个vue3.x应用</p>
<h3 id="引用vue-js" tabindex="-1"><a class="header-anchor" href="#引用vue-js" aria-hidden="true">#</a> 引用vue.js</h3>
<p>这里呢我们先采用传统网页使用vue.js 来编写代码，先体验一下vue</p>
<h2 id="html代码" tabindex="-1"><a class="header-anchor" href="#html代码" aria-hidden="true">#</a> html代码</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>style.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lib/vue.global.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>播放列表<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入要查找的歌曲名<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>search<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>searchTerm<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>song in filterList<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ song }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css样式" tabindex="-1"><a class="header-anchor" href="#css样式" aria-hidden="true">#</a> css样式</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> Arial<span class="token punctuation">,</span> <span class="token string">"PingFang SC"</span><span class="token punctuation">,</span> <span class="token string">"Microsoft Yahei"</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #ebfafe<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">place-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#app</span> <span class="token punctuation">{</span>
  <span class="token property">min-width</span><span class="token punctuation">:</span> 375px<span class="token punctuation">;</span>
  <span class="token property">min-height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0px 0px 48px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.25<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 28px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#app h1</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #878b91<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 500<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.search</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 24px 0<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.search::placeholder</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #d5dbe3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#app ul</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #425066<span class="token punctuation">;</span>
  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#app ul li</span> <span class="token punctuation">{</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="js-脚本" tabindex="-1"><a class="header-anchor" href="#js-脚本" aria-hidden="true">#</a> js 脚本</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> dataList <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 数据</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">playlist</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"What about now"</span><span class="token punctuation">,</span> <span class="token string">"一千万个可能"</span><span class="token punctuation">,</span> <span class="token string">"Me llamas"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">searchTerm</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 计算属性</span>
    <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">filterList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>searchTerm<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>playlist<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">song</span><span class="token punctuation">)</span> <span class="token operator">=></span>
                    song<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>searchTerm<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>playlist
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span>dataList<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">"#app"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="效果图" tabindex="-1"><a class="header-anchor" href="#效果图" aria-hidden="true">#</a> 效果图</h2>
</div></template>


