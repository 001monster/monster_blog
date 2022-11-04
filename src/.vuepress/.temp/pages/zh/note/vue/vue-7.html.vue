<template><div><h2 id="vue单文件应用续" tabindex="-1"><a class="header-anchor" href="#vue单文件应用续" aria-hidden="true">#</a> vue单文件应用续</h2>
<h3 id="一、创建模板" tabindex="-1"><a class="header-anchor" href="#一、创建模板" aria-hidden="true">#</a> 一、创建模板</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 模板</span>
<span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>input v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">"content"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>p<span class="token operator">></span>你共输入了 <span class="token punctuation">{</span><span class="token punctuation">{</span> count <span class="token punctuation">}</span><span class="token punctuation">}</span> 个字符<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>


<span class="token comment">// 脚本</span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>content<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>


<span class="token comment">// 样式</span>
<span class="token operator">&lt;</span>style scoped<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二、使用模板" tabindex="-1"><a class="header-anchor" href="#二、使用模板" aria-hidden="true">#</a> 二、使用模板</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 使用模板</span>
<span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>main<span class="token operator">></span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>字符统计应用<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>WordCount <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>


<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token comment">// 引入注册组件</span>
<span class="token keyword">import</span> WordCount <span class="token keyword">from</span> <span class="token string">"./components/WordCount.vue"</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 注册组件</span>
    WordCount<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>


<span class="token comment">// 样式</span>
<span class="token operator">&lt;</span>style<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


