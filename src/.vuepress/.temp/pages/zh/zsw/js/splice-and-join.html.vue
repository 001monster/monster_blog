<template><div><h2 id="数组与字符串互相转换" tabindex="-1"><a class="header-anchor" href="#数组与字符串互相转换" aria-hidden="true">#</a> 数组与字符串互相转换</h2>
<h3 id="一、字符串转数组" tabindex="-1"><a class="header-anchor" href="#一、字符串转数组" aria-hidden="true">#</a> 一、字符串转数组</h3>
<div class="custom-container info">
<p class="custom-container-title">split</p>
<p>个人理解：把一个有规则的字符串通过split 转成一个数组，应用场景：可以在数据库存储多个相同雷响的数据，取出来使用使用的时候通过split 转换成为数组</p>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// split</span>
<span class="token comment">// str.split(分隔符号，分割长度可以为空)</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">'1, 2, 3, 4'</span>
<span class="token keyword">let</span> resout <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">','</span><span class="token punctuation">)</span>

<span class="token comment">// 最终结果</span>
resout <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token string">'3'</span><span class="token punctuation">,</span> <span class="token string">'4'</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二、数组转字符串" tabindex="-1"><a class="header-anchor" href="#二、数组转字符串" aria-hidden="true">#</a> 二、数组转字符串</h3>
<div class="custom-container info">
<p class="custom-container-title">join</p>
<p>当需求是数组转字符串时就可以使用arr.join 进行处理</p>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 实例代码</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token string">'3'</span><span class="token punctuation">,</span> <span class="token string">'4'</span><span class="token punctuation">]</span>

<span class="token keyword">let</span> resout <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">','</span><span class="token punctuation">)</span>

<span class="token comment">// 最终效果</span>
resout <span class="token operator">=</span> <span class="token string">'1, 2, 3, 4'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三、补充" tabindex="-1"><a class="header-anchor" href="#三、补充" aria-hidden="true">#</a> 三、补充</h3>
<div class="custom-container info">
<p class="custom-container-title">截取字符串</p>
<p>可以通过sunstring()去掉字符串后面的字符</p>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> s1<span class="token operator">=</span> <span class="token string">'各位观众老爷大家好hhhh'</span>

<span class="token keyword">let</span> resout <span class="token operator">=</span> s1<span class="token punctuation">.</span><span class="token function">sunstring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> s1<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">)</span>

<span class="token comment">// 最终效果</span>
resout <span class="token operator">=</span> <span class="token string">'各位观众老爷大家好'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="四、总结" tabindex="-1"><a class="header-anchor" href="#四、总结" aria-hidden="true">#</a> 四、总结</h3>
<p>各位观众老爷以上呢是我的一个自我总结，全部纯手敲，要错误的地方还望手下留情不要喷我，886</p>
</div></template>


