<template><div><h2 id="响应性props" tabindex="-1"><a class="header-anchor" href="#响应性props" aria-hidden="true">#</a> 响应性props</h2>
<div class="custom-container info">
<p class="custom-container-title">说明</p>
<p>我们之前通过<code v-pre>props</code>传递的数据都是固定的，但是我们开发的过程中数据都是动态</p>
</div>
<ol>
<li>子组件，这里的子组件是一个翻页组件，接收一个总页数来显示按钮</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>当前页： {{ currentPage }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>n in totalPage<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>changePage(n)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      {{ n }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"totalPage"</span><span class="token punctuation">,</span> <span class="token string">"defaultCurrentPage"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token comment">// 要想子组件改变父组件的传递过来的值，就需要手动维护一个数据，默认值是父组件传递过来的值</span>
      <span class="token literal-property property">currentPage</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>defaultCurrentPage<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">changePage</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 现在去修改data里面的数据就可以修改了，不会报错了</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>currentPage <span class="token operator">=</span> n<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>父组件</li>
</ol>
<div class="custom-container info">
<p class="custom-container-title">说明</p>
<p>需求1. 现在我们父组件当中有一个按钮，每当我们点击一次页数就加一
需求2. 我们在子组件当点击按钮切换当前页，发现vue发出警告说我们尝试修改defaultCurrentPage
如果我们确实要在子组件修改父组件传递过来的值的话，就需要我们手动在组件的data里面维护一个数据，初始值使用父组件传递过来的值，后续改变就改变子组件data里面的数据</p>
</div>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PaginationComponent</span>
        <span class="token attr-name">:totalPage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>totalPage<span class="token punctuation">"</span></span>
        <span class="token attr-name">:defaultCurrentPage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentPage<span class="token punctuation">"</span></span>
      <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>totalPage += 1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>增加页数<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> PaginationComponent <span class="token keyword">from</span> <span class="token string">"./components/PaginationComponent.vue"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    PaginationComponent<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">totalPage</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
      <span class="token literal-property property">currentPage</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="总结-写在最后" tabindex="-1"><a class="header-anchor" href="#总结-写在最后" aria-hidden="true">#</a> 总结：写在最后</h3>
<ol>
<li>vue的数据是单向数据流，允许从父组件流向子组件，子组件不能直接修改父组件的值，我们只能在子组件中定义一个新属性，把他的默认值设置为父组件传递进来的默认，之后修改子组件自己维护的值</li>
<li>父组件属性变化，子组件自动刷新</li>
<li>子组件不能直接修改父组件的值</li>
</ol>
</div></template>


