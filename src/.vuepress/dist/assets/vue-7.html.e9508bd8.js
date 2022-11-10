import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,a as e}from"./app.5cdfbe67.js";const t={},p=e(`<h2 id="vue\u5355\u6587\u4EF6\u5E94\u7528\u7EED" tabindex="-1"><a class="header-anchor" href="#vue\u5355\u6587\u4EF6\u5E94\u7528\u7EED" aria-hidden="true">#</a> vue\u5355\u6587\u4EF6\u5E94\u7528\u7EED</h2><h3 id="\u4E00\u3001\u521B\u5EFA\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u521B\u5EFA\u6A21\u677F" aria-hidden="true">#</a> \u4E00\u3001\u521B\u5EFA\u6A21\u677F</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u6A21\u677F</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>input v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">&quot;content&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>\u4F60\u5171\u8F93\u5165\u4E86 <span class="token punctuation">{</span><span class="token punctuation">{</span> count <span class="token punctuation">}</span><span class="token punctuation">}</span> \u4E2A\u5B57\u7B26<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>


<span class="token comment">// \u811A\u672C</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>content<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>


<span class="token comment">// \u6837\u5F0F</span>
<span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E8C\u3001\u4F7F\u7528\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u4F7F\u7528\u6A21\u677F" aria-hidden="true">#</a> \u4E8C\u3001\u4F7F\u7528\u6A21\u677F</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u4F7F\u7528\u6A21\u677F</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>main<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>\u5B57\u7B26\u7EDF\u8BA1\u5E94\u7528<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>WordCount <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>


<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token comment">// \u5F15\u5165\u6CE8\u518C\u7EC4\u4EF6</span>
<span class="token keyword">import</span> WordCount <span class="token keyword">from</span> <span class="token string">&quot;./components/WordCount.vue&quot;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6CE8\u518C\u7EC4\u4EF6</span>
    WordCount<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>


<span class="token comment">// \u6837\u5F0F</span>
<span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[p];function l(r,c){return s(),a("div",null,o)}const u=n(t,[["render",l],["__file","vue-7.html.vue"]]);export{u as default};
