<template><div><h3 id="methods、computed、watch-他们三者的区别" tabindex="-1"><a class="header-anchor" href="#methods、computed、watch-他们三者的区别" aria-hidden="true">#</a> methods、computed、watch：他们三者的区别</h3>
<ol>
<li>他们三者都可以完成一些相同的功能</li>
<li>methods可以把他当作原生的js方法或者是函数来使用，可以把watch <a href="http://xn--methodsdthis-db5sl3fp1pblcy98gikk5vojkc9u7dds8bofhzp8mjyb3vuf41b.xxx" target="_blank" rel="noopener noreferrer">里面的代码写成方法放到methodsd当中通过this.xxx<ExternalLinkIcon/></a> 的方式去调用，这样可以减少watch带代码，更加方便维护</li>
<li>computed他是有缓存的，如果依赖的tata数据不改变他就会一直使用缓存，computed使用的数据需要return出去才可以使用</li>
<li>watch 可以用来做一些比较费时的操作，比如网络请求等等之类的，watch没有返回值，他是去修改data里面的数据，data里面的数据变了，页面所依赖data的地方也会发生响应的变化</li>
</ol>
<h3 id="methods-写法" tabindex="-1"><a class="header-anchor" href="#methods-写法" aria-hidden="true">#</a> methods 写法</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 这里使用的是vue2的写法，后面时使用组合式api了就使用vue3的写法</span>
<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">方法名</span><span class="token punctuation">(</span><span class="token parameter">调用时候可以传递参数</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        业务逻辑
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="computed-的两种写法" tabindex="-1"><a class="header-anchor" href="#computed-的两种写法" aria-hidden="true">#</a> computed 的两种写法</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 一般需求都是使用简写方式，方法写法，就是使用 get 只读取数据</span>
<span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">方法名直接在模板页面使用</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> 业务逻辑
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 第二种写法是，对象写法，可以使用 get 和 set 方法</span>
<span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">方法名直接在模板页面使用</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> 业务逻辑
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token comment">// 接受一个参数</span>
        <span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            当有操作修改了当前的这个方法属性机会触发这个函数
            vlaue指的是是该过后的值
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="watch的两种写法" tabindex="-1"><a class="header-anchor" href="#watch的两种写法" aria-hidden="true">#</a> watch的两种写法</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// watch 基本写法 只能读取到最外层的属性</span>
<span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">监听的data当中的数据</span><span class="token punctuation">(</span><span class="token parameter">newVal<span class="token punctuation">,</span> oldVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        没有返回值
        耗时的业务逻辑
        newVal：新值
        oldVal：改变之前的值
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 第二种写法，对象写法，深度监听可以读取到内层的数据</span>
<span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">监听data种的数据</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter">newVal<span class="token punctuation">,</span> oldVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            没有返回值
            耗的业务逻辑
            newVal：新值
            oldVal：改变之前的值
        <span class="token punctuation">}</span>
        <span class="token comment">//深度监听，可以监听多层</span>
        <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<div class="custom-container info">
<p class="custom-container-title">总结</p>
<p>何时使用computed，何时又使用watch呢</p>
<ol>
<li>computed：依赖的数据发生改变才会触发回调</li>
<li>watch：监听的变量发生改变就会触发回调
根据以上说明自行在合适的地方选择使用</li>
</ol>
</div>
</div></template>


