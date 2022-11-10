import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,a as e}from"./app.5cdfbe67.js";const t={},p=e(`<h3 id="vue-\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#vue-\u6307\u4EE4" aria-hidden="true">#</a> vue-\u6307\u4EE4</h3><p>\u5373\u5C06\u8FDB\u5165vue\u7684\u6B63\u5F0F\u5B66\u4E60\uFF0C\u6211\u4EEC\u5148\u6765\u70ED\u8EAB\u4E00\u4E0B\u7B80\u5355\u7684\u770B\u4E00\u4E0B\u51E0\u4E2Avue\u7684\u6307\u4EE4\uFF0C\u5E76\u8BF4\u4E00\u4E0B\u4ED6\u4EEC\u7684\u7528\u9014</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>v<span class="token operator">-</span>html<span class="token operator">:</span> \u5728\u6A21\u677F\u4E2D\u539F\u6837\u8F93\u51FAhtml\u4EE3\u7801\u3002
v<span class="token operator">-</span>once<span class="token operator">:</span> \u53EA\u6E32\u67D3\u4E00\u6B21\u6A21\u677F\uFF0C\u4EE5\u540E\u5C31\u7B97\u6570\u636E\u66F4\u65B0\u4E86\u4E5F\u4E0D\u4F1A\u91CD\u65B0\u6E32\u67D3\u6A21\u677F
v<span class="token operator">-</span>bind<span class="token operator">:</span> \u52A8\u6001\u7ED1\u5B9A\u53C2\u6570\uFF0C\u53EF\u4EE5\u7B80\u5199\u4E3A <span class="token operator">:</span>
v<span class="token operator">-</span>on<span class="token operator">:</span> \u76D1\u542C\u4E8B\u4EF6\uFF0C\u53EF\u4EE5\u7B80\u5199\u4E3A@
v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">:</span> \u5FAA\u73AF\u9009\u6E32\u67D3\u6A21\u677F\uFF0C\u4E3A\u4E86\u63D0\u9AD8\u6027\u80FD\u5FC5\u987B\u6307\u5B9A key

<span class="token comment">// \u518D\u6765\u8865\u5145\u4E00\u4E0B\u5176\u4ED6\u7684</span>
<span class="token operator">&lt;</span>template<span class="token operator">/</span><span class="token operator">&gt;</span> \u6E32\u67D3\u4E00\u7EC4\u6807\u7B7E\u4F46\u662F\u4E0D\u4F1A\u589E\u52A0\u989D\u5916\u7684\u5D4C\u5957

<span class="token comment">// \u76F8\u5173\u4E8B\u4EF6\u7684\u4FEE\u9970\u7B26</span>
<span class="token punctuation">.</span>prevent \u963B\u6B62\u4E8B\u4EF6\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u5C31\u6BD4\u5982\u8BF4\u963B\u6B62\u539F\u751F \u8868\u5355form \u7684\u63D0\u4EA4\u4E8B\u4EF6\uFF0C\u6216\u8005a\u6807\u7B7E\u7684\u8DF3\u8F6C\u4E8B\u4EF6
<span class="token punctuation">.</span>stop \u963B\u6B62\u4E8B\u4EF6\u7684\u5192\u6CE1\u884C\u4E3A
<span class="token punctuation">.</span>capture \u6355\u83B7\u5185\u5C42\u4E8B\u4EF6\uFF0C\u521A\u597D\u548C\u5192\u6CE1\u4E8B\u4EF6\u76F8\u53CD\uFF0C\u4ED6\u4F1A\u6700\u5148\u89E6\u53D1 <span class="token punctuation">.</span>capture\u7684\u4E8B\u4EF6
<span class="token punctuation">.</span>once \u53EA\u5141\u8BB8\u70B9\u51FB\u4E00\u6B21\u4E8B\u4EF6
<span class="token punctuation">.</span>self \u4F7F\u7528\u8FD9\u4E2A\u4FEE\u9970\u7B26\u7684\u987A\u5E8F\u5F88\u91CD\u8981
@click<span class="token punctuation">.</span>prevent<span class="token punctuation">.</span>self \u4F1A\u963B\u6B62\u6240\u6709\u7684\u70B9\u51FB
@click<span class="token punctuation">.</span>self<span class="token punctuation">.</span>prevent \u53EA\u4F1A\u963B\u6B62\u5BF9\u5143\u7D20\u81EA\u8EAB\u7684\u70B9\u51FB

<span class="token comment">// \u8868\u5355\u4E8B\u4EF6\u7684\u4FEE\u9970\u7B26</span>
<span class="token punctuation">.</span>number   \u8FD9\u4E2A\u4FEE\u9970\u7B26\u4F1A\u628Ainput \u6846\u91CC\u9762\u7684\u5B57\u7B26\u4E32\u8F6C\u6362\u6210\u6570\u7EC4 \u5982\u679C\u8F6C\u6362\u4E0D\u4E86\u7684\u8BDD\uFF0C\u5C31\u4F1A\u539F\u6837\u8F93\u51FA
<span class="token punctuation">.</span>lazy \u5F53input\u8F93\u5165\u7684\u65F6\u5019\u4ED6\u4E0D\u4F1A\u53BB\u8DDF\u7740\u540C\u6B65\uFF0C\u53EA\u6709\u5F53\u7528\u6237\u8F93\u5165\u5B8C\u4EE5\u540E\u624D\u4F1A\u89E6\u53D1

<span class="token comment">// \u6700\u540E \u8BF7\u6C42\u6570\u636E\u4E00\u822C\u653E\u5728created \u751F\u547D\u5468\u671F\u91CC\u9762</span>
<span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),i=[p];function c(o,l){return s(),a("div",null,i)}const d=n(t,[["render",c],["__file","vue-5.html.vue"]]);export{d as default};
