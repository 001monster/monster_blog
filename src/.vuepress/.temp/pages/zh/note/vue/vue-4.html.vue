<template><div><h3 id="vue-行内样式" tabindex="-1"><a class="header-anchor" href="#vue-行内样式" aria-hidden="true">#</a> vue-行内样式</h3>
<p>动态绑定样式的方式有很多种，这里列举两种最常用的</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 行内样式，在标签种使用行内样式为了渐变可以把样式先写在data数据中 如：</span>
<span class="token comment">// 写法一, style中的属性是动态的需要使用{}括起来</span>
<span class="token operator">&lt;</span>div <span class="token operator">:</span>style<span class="token operator">=</span><span class="token string">"{'width': width}"</span><span class="token operator">></span><span class="token operator">&lt;</span>div<span class="token operator">/</span><span class="token operator">></span>
<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100px'</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 写法二，需要注意的是js表达式不识别 _ 的方式，所以像background_color 需要写成backgroundColor这种驼峰的形式</span>
<span class="token operator">&lt;</span>div <span class="token operator">:</span>style<span class="token operator">=</span><span class="token string">"inlineStyle"</span><span class="token operator">></span><span class="token operator">&lt;</span>div<span class="token operator">/</span><span class="token operator">></span>
<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">inlineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'10px'</span>
            <span class="token literal-property property">backgroundCColor</span><span class="token operator">:</span> <span class="token string">'red'</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue动态class" tabindex="-1"><a class="header-anchor" href="#vue动态class" aria-hidden="true">#</a> vue动态class</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 动态class的写法也有很多种，这里也列举最常见的两种</span>
<span class="token comment">// 第一种， 数组形式，多个class</span>
<span class="token operator">&lt;</span>p <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"[textClass, stateClass, { hide: isHidden }]"</span><span class="token operator">></span>
<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">isHidden</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 第二种形式 对象形式</span>
<span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"item"</span> <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"{'hide': isHidden }"</span><span class="token operator">></span>
<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">isHidden</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


