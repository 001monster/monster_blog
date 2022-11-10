import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as a,a as e}from"./app.5cdfbe67.js";const t={},p=e(`<h3 id="vue-\u884C\u5185\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#vue-\u884C\u5185\u6837\u5F0F" aria-hidden="true">#</a> vue-\u884C\u5185\u6837\u5F0F</h3><p>\u52A8\u6001\u7ED1\u5B9A\u6837\u5F0F\u7684\u65B9\u5F0F\u6709\u5F88\u591A\u79CD\uFF0C\u8FD9\u91CC\u5217\u4E3E\u4E24\u79CD\u6700\u5E38\u7528\u7684</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u884C\u5185\u6837\u5F0F\uFF0C\u5728\u6807\u7B7E\u79CD\u4F7F\u7528\u884C\u5185\u6837\u5F0F\u4E3A\u4E86\u6E10\u53D8\u53EF\u4EE5\u628A\u6837\u5F0F\u5148\u5199\u5728data\u6570\u636E\u4E2D \u5982\uFF1A</span>
<span class="token comment">// \u5199\u6CD5\u4E00, style\u4E2D\u7684\u5C5E\u6027\u662F\u52A8\u6001\u7684\u9700\u8981\u4F7F\u7528{}\u62EC\u8D77\u6765</span>
<span class="token operator">&lt;</span>div <span class="token operator">:</span>style<span class="token operator">=</span><span class="token string">&quot;{&#39;width&#39;: width}&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>div<span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;100px&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5199\u6CD5\u4E8C\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662Fjs\u8868\u8FBE\u5F0F\u4E0D\u8BC6\u522B _ \u7684\u65B9\u5F0F\uFF0C\u6240\u4EE5\u50CFbackground_color \u9700\u8981\u5199\u6210backgroundColor\u8FD9\u79CD\u9A7C\u5CF0\u7684\u5F62\u5F0F</span>
<span class="token operator">&lt;</span>div <span class="token operator">:</span>style<span class="token operator">=</span><span class="token string">&quot;inlineStyle&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>div<span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">inlineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;10px&#39;</span>
            <span class="token literal-property property">backgroundCColor</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue\u52A8\u6001class" tabindex="-1"><a class="header-anchor" href="#vue\u52A8\u6001class" aria-hidden="true">#</a> vue\u52A8\u6001class</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u52A8\u6001class\u7684\u5199\u6CD5\u4E5F\u6709\u5F88\u591A\u79CD\uFF0C\u8FD9\u91CC\u4E5F\u5217\u4E3E\u6700\u5E38\u89C1\u7684\u4E24\u79CD</span>
<span class="token comment">// \u7B2C\u4E00\u79CD\uFF0C \u6570\u7EC4\u5F62\u5F0F\uFF0C\u591A\u4E2Aclass</span>
<span class="token operator">&lt;</span>p <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;[textClass, stateClass, { hide: isHidden }]&quot;</span><span class="token operator">&gt;</span>
<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">isHidden</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7B2C\u4E8C\u79CD\u5F62\u5F0F \u5BF9\u8C61\u5F62\u5F0F</span>
<span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;item&quot;</span> <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;{&#39;hide&#39;: isHidden }&quot;</span><span class="token operator">&gt;</span>
<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">isHidden</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[p];function l(i,c){return n(),a("div",null,o)}const u=s(t,[["render",l],["__file","vue-4.html.vue"]]);export{u as default};
