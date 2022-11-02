<template><div><h2 id="div盒子显示具体行数多余的通过-显示" tabindex="-1"><a class="header-anchor" href="#div盒子显示具体行数多余的通过-显示" aria-hidden="true">#</a> div盒子显示具体行数多余的通过...显示</h2>
<h3 id="一、显示一行" tabindex="-1"><a class="header-anchor" href="#一、显示一行" aria-hidden="true">#</a> 一、显示一行</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">// 只显示一行，多余的通过...
// 只显示一行的设置方法很简单
.item</span><span class="token punctuation">{</span>	
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>			// 溢出隐藏
    <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>		// 强制一行显示文本
    <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>	// 溢出部分使用ellipsis 也就是省略号显示
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终效果图:</p>
<p><img src="https://img-blog.csdnimg.cn/39c97cc6e1524a8cb345bcedb6bd83ec.png" alt="effect" loading="lazy"></p>
<h3 id="二、显示多行" tabindex="-1"><a class="header-anchor" href="#二、显示多行" aria-hidden="true">#</a> 二、显示多行</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">// 多行显示，多余的通过... 
// 多行的设置比单行的要多几个内容
.item</span><span class="token punctuation">{</span>
	<span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>				// 老样子溢出隐藏
	<span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>		// 溢出的部分还是使用ellospis 显示
	<span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>			// 把盒子设置为弹性盒子
	<span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>   // 垂直上到下的子元素
	<span class="token property">-wekit-line-clamp</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>			// 这行就是关键了具体要显示多少行就在这里设置了
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终效果图:
<img src="https://img-blog.csdnimg.cn/e64c39e10e2249b1b2e57915fd7e2037.png" alt="effect" loading="lazy"></p>
<h3 id="三、总结" tabindex="-1"><a class="header-anchor" href="#三、总结" aria-hidden="true">#</a> 三、总结</h3>
<p>各位观众老爷以上呢是我的一个自我总结，全部纯手敲，要错误的地方还望手下留情不要喷我，还有就是以上设置方法有浏览器的兼容问题，但是都这个年代了老浏览器都淘汰了，懂得都懂啊，886</p>
</div></template>


