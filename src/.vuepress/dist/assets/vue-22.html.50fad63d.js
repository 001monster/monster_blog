import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,a as t}from"./app.5cdfbe67.js";const p={},e=t(`<h2 id="\u81EA\u5B9A\u4E49\u6307\u4EE4-\u589E\u5F3A\u7684-html-\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u6307\u4EE4-\u589E\u5F3A\u7684-html-\u529F\u80FD" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u6307\u4EE4-\u589E\u5F3A\u7684 <code>HTML</code> \u529F\u80FD</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- &lt;p v-fsize=&quot;18&quot;&gt;\u8FD9\u662F\u4E00\u4E2A\u6BB5\u843D&lt;/p&gt; --&gt;</span>
      <span class="token comment">&lt;!-- &lt;p v-fsize=&quot;fontSize&quot;&gt;\u8FD9\u662F\u4E00\u4E2A\u6BB5\u843D&lt;/p&gt; --&gt;</span>
      <span class="token comment">&lt;!-- v-fsize:[\u53C2\u6570] \u53EF\u4EE5\u4F20\u9012\u52A8\u6001\u53C2\u6570 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name"><span class="token namespace">v-fsize:</span>[unit]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fontSize<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u8FD9\u662F\u4E00\u4E2A\u6BB5\u843D<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn increase<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fontSize += 1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn decrease<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fontSize -= 1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>a<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
      <span class="token literal-property property">unit</span><span class="token operator">:</span> <span class="token string">&quot;em&quot;</span><span class="token punctuation">,</span>   <span class="token comment">// \u8FD9\u91CC\u53EF\u4EE5\u4F20\u9012\u52A8\u6001\u53C2\u6570</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&quot;./App.vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// app.directive(&quot;fsize&quot;, {</span>
<span class="token comment">//   mounted(el, binding) {</span>
<span class="token comment">//     el.style.fontSize = binding.value + &quot;px&quot;;</span>
<span class="token comment">//   },</span>
<span class="token comment">//   // \u8FD9\u6837\u5728 data \u66F4\u65B0\u65F6\uFF0C\u624D\u4F1A\u89E6\u53D1\u6307\u4EE4\u66F4\u65B0</span>
<span class="token comment">//   updated(el, binding) {</span>
<span class="token comment">//     el.style.fontSize = binding.value + &quot;px&quot;;</span>
<span class="token comment">//   },</span>
<span class="token comment">// });</span>

<span class="token comment">// \u5982\u679C mounted \u548C updated \u7684\u4EE3\u7801\u76F8\u540C\uFF0C\u53EF\u4EE5\u5408\u5E76\u4E3A\u4E00\u4E2A\uFF1A</span>
<span class="token comment">// app.directive(&quot;fsize&quot;, (el, binding) =&gt; {</span>
<span class="token comment">//   el.style.fontSize = binding.value + &quot;px&quot;;</span>
<span class="token comment">// });</span>

<span class="token comment">// \u5E26\u6709 args\uFF1A\u662F\u81EA\u5B9A\u4E49\u6307\u4EE4\u540E\u9762[]\u5E26\u7684\u52A8\u6001\u53C2\u6570</span>
app<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&quot;fsize&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> binding<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token punctuation">(</span>binding<span class="token punctuation">.</span>arg <span class="token operator">||</span> <span class="token string">&quot;px&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u603B\u7ED3-\u5199\u5728\u6700\u540E" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3-\u5199\u5728\u6700\u540E" aria-hidden="true">#</a> \u603B\u7ED3\uFF1A\u5199\u5728\u6700\u540E</h3><div class="custom-container info"><p class="custom-container-title">\u603B\u7ED3</p><p><code>v-fsize:[\u53C2\u6570]</code> \u53EF\u4EE5\u4F20\u9012\u52A8\u6001\u53C2\u6570 <code>args\uFF1A</code> \u662F\u81EA\u5B9A\u4E49\u6307\u4EE4\u540E\u9762[]\u5E26\u7684\u52A8\u6001\u53C2\u6570</p><p>\u5982\u679C mounted \u548C updated \u7684\u4EE3\u7801\u76F8\u540C\uFF0C\u53EF\u4EE5\u5408\u5E76\u4E3A\u4E00\u4E2A, \u5199\u6210\u51FD\u6570\u5F62\u5F0F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&quot;fsize&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> binding<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token string">&quot;px&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,5),o=[e];function c(l,i){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","vue-22.html.vue"]]);export{d as default};
