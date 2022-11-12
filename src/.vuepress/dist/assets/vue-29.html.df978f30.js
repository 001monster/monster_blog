import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,a as t}from"./app.5cdfbe67.js";const p={},e=t(`<h2 id="\u7EC4\u4EF6\u9519\u8BEF\u5904\u7406-\u5168\u5C40\u9519\u8BEF\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u9519\u8BEF\u5904\u7406-\u5168\u5C40\u9519\u8BEF\u5904\u7406" aria-hidden="true">#</a> \u7EC4\u4EF6\u9519\u8BEF\u5904\u7406,\u5168\u5C40\u9519\u8BEF\u5904\u7406</h2><h3 id="\u4E00\u3001\u5168\u5C40\u5904\u7406\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u5168\u5C40\u5904\u7406\u9519\u8BEF" aria-hidden="true">#</a> \u4E00\u3001\u5168\u5C40\u5904\u7406\u9519\u8BEF</h3><ol><li>\u6211\u4EEC\u6B63\u5728\u7EC4\u4EF6\u5F53\u4E2D,\u81EA\u5B9A\u4E49\u4E00\u4E2A\u672A\u629B\u51FA\u7684\u9519\u8BEF</li></ol><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AppListItem</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in data<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ item }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AppListItem</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> AppListItem <span class="token keyword">from</span> <span class="token string">&quot;./AppListItem.vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;data&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    AppListItem<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u81EA\u5B9A\u4E49\u4E00\u4E2A\u672A\u6355\u83B7\u7684\u9519\u8BEF</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;\u53D1\u751F\u4E86\u5F02\u5E38&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u5168\u5C40\u5904\u7406\u9519\u8BEF</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&quot;./App.vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span>config<span class="token punctuation">.</span><span class="token function-variable function">errorHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> vm<span class="token punctuation">,</span> info</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>    <span class="token comment">// \u9519\u8BEF\u4FE1\u606F</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>     <span class="token comment">// vue \u5B9E\u4F8B</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span>   <span class="token comment">// \u9519\u8BEF\u4F4D\u7F6E</span>
<span class="token punctuation">}</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u3001\u5C40\u90E8\u5904\u7406\u9519\u8BEF-\u9519\u8BEF\u8FB9\u754C" tabindex="-1"><a class="header-anchor" href="#\u3001\u5C40\u90E8\u5904\u7406\u9519\u8BEF-\u9519\u8BEF\u8FB9\u754C" aria-hidden="true">#</a> \u3001\u5C40\u90E8\u5904\u7406\u9519\u8BEF(\u9519\u8BEF\u8FB9\u754C)</h3><div class="custom-container info"><p class="custom-container-title">\u8BF4\u660E</p><p>\u9519\u8BEF\u8FB9\u754C\u5C31\u50CF\u662F\u4E8B\u4EF6\u5192\u6CE1\u4E00\u6837,\u4F1A\u4E00\u76F4\u7F51\u4E0A\u5192\u5230\u7236\u7EC4\u4EF6,\u76F4\u5230\u9519\u8BEF\u4E8B\u4EF6\u88AB\u6355\u83B7\u5904\u7406</p></div><ol start="3"><li>\u8FB9\u754C\u6355\u83B7\u5904\u7406</li></ol><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;AppListItem \u7EC4\u4EF6\u5F02\u5E38&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>\u7EC4\u4EF6\u5904\u7406\u9519\u8BEF</li></ol><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>error<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u554A\u54E6\uFF0C\u51FA\u9519\u4E86\uFF01<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">v-else</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AppListItem</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in data<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ item }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AppListItem</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> AppListItem <span class="token keyword">from</span> <span class="token string">&quot;./AppListItem.vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;data&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    AppListItem<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \u9519\u8BEF\u5904\u7406\u751F\u547D\u5468\u671F</span>
  <span class="token function">errorCaptured</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> instance<span class="token punctuation">,</span> info</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>          <span class="token comment">// \u9519\u8BEF\u4FE1\u606F</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span>     <span class="token comment">// \u7EC4\u4EF6\u7684\u5B9E\u4F8B</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">// \u9519\u8BEF\u4F4D\u7F6E</span>

    <span class="token comment">// \u51FA\u9519\u4E86\u901A\u8FC7\u9519\u8BEFDOM\u5143\u7D20\u60F3\u7528\u6237\u8BF4\u51FA\u9519\u4E86</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>error <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token comment">// \u505C\u6B62\u9519\u8BEF\u4E8B\u4EF6\u9519\u8BEF\u5411\u4E0A\u4F20\u9012</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u603B\u7ED3-\u5199\u5728\u6700\u540E" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3-\u5199\u5728\u6700\u540E" aria-hidden="true">#</a> \u603B\u7ED3:\u5199\u5728\u6700\u540E</h3><div class="custom-container info"><p class="custom-container-title">\u603B\u7ED3</p><p>\u5168\u5C40\u5904\u7406\u9519\u8BEF\u662F\u76F4\u63A5\u5728main.js \u91CC\u9762\u8FDB\u884C\u7EDF\u4E00\u5904\u7406</p><p>\u5982\u679C\u662F\u8FB9\u754C\u5904\u7406\u7684\u8BDD(\u4E5F\u5C31\u662F\u7EC4\u4EF6\u9519\u8BEF\u81EA\u5DF1\u5904\u7406)\u7684\u8BDD,\u5C31\u9700\u8981\u7528\u5230\u751F\u547D\u5468\u671F\u94A9\u5B50 <code>errorCaptured()</code> \u6765\u5904\u7406,\u5982\u679C\u9519\u8BEF\u6CA1\u6709\u5904\u7406\u7684\u8BDD\u4ED6\u4F1A\u4E00\u76F4\u7F51\u4E0A\u5192\u6CE1, \u5230<code> App.vue</code> \u5982\u679C <code>App.vue</code> \u6CA1\u6709\u5904\u7406\u7684\u8BDD,\u5C31\u4F1A\u628A\u9519\u8BEF\u51FA\u73B0\u5728\u63A7\u5236\u53F0, \u6216\u8005\u662F\u7EC4\u4EF6\u5F53\u4E2D\u5904\u7406\u9519\u8BEF\u4E86\u4F46\u662F\u6CA1\u6709 <code>return false</code> \u9519\u8BEF\u8FD8\u662F\u4F1A\u4E00\u76F4\u7F51\u4E0A\u5192\u6CE1\u7684</p></div>`,14),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","vue-29.html.vue"]]);export{r as default};