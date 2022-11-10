import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,a as t}from"./app.5cdfbe67.js";const p={},e=t(`<h2 id="\u5728\u6837\u5F0F\u7ED1\u4E2D\u5B9A\u54CD\u5E94\u6027\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u5728\u6837\u5F0F\u7ED1\u4E2D\u5B9A\u54CD\u5E94\u6027\u6570\u636E" aria-hidden="true">#</a> \u5728\u6837\u5F0F\u7ED1\u4E2D\u5B9A\u54CD\u5E94\u6027\u6570\u636E</h2><div class="custom-container info"><p class="custom-container-title">\u6CE8\u610F</p><p>\u7ED9css \u7ED1\u5B9A\u52A8\u6001\u7684\u54CD\u5E94\u6027\u6570\u636E\u662F\u5728 vue3.2 \u4E4B\u540E\u7684\u7248\u672C\u624D\u652F\u6301</p></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>control<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- \u7ED9input \u8BBE\u7F6E type=&quot;range&quot; \u5E76\u628A\u503C\u901A\u8FC7v-model \u4E0Edata \u6570\u636E\u4E2D\u7684 degree \u7ED1\u5B9A--&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>range<span class="token punctuation">&quot;</span></span> <span class="token attr-name">min</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>360<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>degree<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>\u5F53\u524D\u89D2\u5EA6\uFF1A{{ degree }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u89D2\u5EA6\u6570\u636E</span>
      <span class="token literal-property property">degree</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">newDegredd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>degree <span class="token operator">+</span> <span class="token string">&#39;deg&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> Arial<span class="token punctuation">,</span> <span class="token string">&quot;PingFang SC&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Microsoft Yahei&quot;</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #0f141c<span class="token punctuation">;</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>
    #212943 0.6000000000000001px<span class="token punctuation">,</span>
    #0f141c 0.6000000000000001px
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background-size</span><span class="token punctuation">:</span> 12px 12px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#app</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">place-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">main</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">place-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">row-gap</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span>280deg<span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 60%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 24px <span class="token function">hsl</span><span class="token punctuation">(</span>280deg<span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 70%<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">/* \u5BF9\u5143\u7D20\u8FDB\u884C\u65CB\u8F6C */</span>
  <span class="token comment">/* transform: rotate(v-bind(degree + &quot;deg&quot;)); */</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token function">v-bind</span><span class="token punctuation">(</span>newDegredd<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.control</span> <span class="token punctuation">{</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 64px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://image.zswei.xyz/img/vue-19.png" alt="\u793A\u4F8B\u56FE" loading="lazy"></p><h3 id="\u603B\u7ED3-\u5199\u5728\u6700\u540E" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3-\u5199\u5728\u6700\u540E" aria-hidden="true">#</a> \u603B\u7ED3\uFF1A\u5199\u5728\u6700\u540E</h3><div class="custom-container info"><p class="custom-container-title">\u603B\u7ED3</p><p>\u5728css\u4E2D\u7ED1\u5B9A\u52A8\u6001\u7684\u6570\u636E\uFF0C\u901A\u8FC7v-bind \u7ED1\u5B9A\uFF0C\u540C\u65F6\u5728css \u4E2Dv-bind\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u4ED6\u63A5\u6536\u4E00\u4E2A\u53C2\u6570\uFF0C\u5C31\u662Fdata\u4E2D\u9700\u8981\u54CD\u5E94\u7684\u53C2\u6570\uFF0C\u53C2\u6570\u652F\u6301\u4EFB\u610F\u7684js\u8868\u8FBE\u5F0F</p><p>\u5982\u679Ccss \u4E2D\u7684\u52A8\u6001\u6570\u636E\u8868\u8FBE\u5F0F\u592A\u957F\u4E86\u53EF\u4EE5\u4F7F\u7528computed \u8BA1\u7B97\u5C5E\u6027\u8BA1\u7B97\uFF0C\u4F7F\u7528\u65B9\u5F0F\u662F\u548C\u5728\u6A21\u677F\u4E2D\u4F7F\u7528\u662F\u4E00\u6837\u7684</p></div>`,6),c=[e];function o(l,i){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","vue-19.html.vue"]]);export{k as default};
