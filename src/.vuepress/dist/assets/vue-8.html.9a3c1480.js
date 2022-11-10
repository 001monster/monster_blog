import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,a as t}from"./app.5cdfbe67.js";const p={},e=t(`<h2 id="props-\u5C5E\u6027-\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#props-\u5C5E\u6027-\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5185\u5BB9" aria-hidden="true">#</a> props \u5C5E\u6027\uFF1A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5185\u5BB9</h2><h3 id="\u4E00\u3001\u4F20\u9012\u56FA\u5B9A\u7684\u503C" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u4F20\u9012\u56FA\u5B9A\u7684\u503C" aria-hidden="true">#</a> \u4E00\u3001\u4F20\u9012\u56FA\u5B9A\u7684\u503C</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// props \u4F20\u503C \u7EC4\u4EF6\u4F20\u503C</span>
<span class="token operator">&lt;</span>MyComponent 
  name<span class="token operator">=</span><span class="token string">&quot;\u5F20\u4E09&quot;</span>
  age<span class="token operator">=</span><span class="token string">&quot;18&quot;</span>
<span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token comment">// props \u63A5\u6536\u4F7F\u7528 \u4F20\u503C\u6570\u636E</span>
<span class="token comment">// \u7B2C\u4E00\u79CD\u5199\u6CD5 \u6570\u7EC4\u5199\u6CD5</span>
<span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">]</span>

<span class="token comment">// \u7B2C\u4E8C\u79CD\u5199\u6CD5 \u5BF9\u8C61\u5199\u6CD5</span>
<span class="token comment">// \u7B2C\u4E8C\u79CD\u5199\u6CD5\u53EF\u4EE5\u89C4\u5B9A\u4F20\u503C\u7684\u7C7B\u578B\uFF0C\u548C\u9ED8\u8BA4\u503C\uFF0C\u662F\u5426\u4E3A\u5FC5\u4F20\u9879\uFF0C\u8FD9\u4E2A\u7C7B\u578B\u89C4\u5B9A\u4E0D\u662F\u5F3A\u5236\u7684\uFF0C\u5F53\u4F20\u9519\u503C\u7684\u65F6\u5019\uFF0Cvue\u4F1A\u53D1\u51FA\u8B66\u544A</span>
<span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;\u674E\u56DB&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token function">validator</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u9A8C\u8BC1\u901A\u8FC7\u8FD4\u56DEtrue \u4E0D\u901A\u8FC7\u8FD4\u56DE false</span>
      reurn value<span class="token operator">&gt;</span><span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5728\u6A21\u677F\u4E2D\u4F7F\u7528</span>
<span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span>div<span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>age<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span>div<span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token comment">// \u5728\u751F\u547D\u5468\u671F\u4E2D\u8BBF\u95EEprops \u4F20\u9012\u8FC7\u6765\u7684\u503C</span>
<span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u603B\u7ED3 props \u53EA\u80FD\u7531\u7236\u7EC4\u4EF6\u4F20\u9012\u503C\u7ED9\u5B50\u7EC4\u4EF6\uFF0C\u540C\u65F6\u5B50\u7EC4\u4EF6\u4E0D\u80FD\u4FEE\u6539\u7236\u7EC4\u4EF6\u4F20\u9012\u8FDB\u6765\u7684\u503C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="props-\u4F20\u503C\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#props-\u4F20\u503C\u9A8C\u8BC1" aria-hidden="true">#</a> props \u4F20\u503C\u9A8C\u8BC1</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5982\u679C\u9700\u8981\u9700\u8981\u5BF9\u4F20\u9012\u8FDB\u6765\u7684\u503C\u8FDB\u884C\u9A8C\u8BC1\uFF0C\u5C31\u9700\u8981\u628Aprops \u5199\u6210\u5BF9\u8C61\u5F62\u5F0F</span>
<span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;\u674E\u56DB&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token function">validator</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u9A8C\u8BC1\u901A\u8FC7\u8FD4\u56DEtrue \u4E0D\u901A\u8FC7\u8FD4\u56DE false</span>
      reurn value<span class="token operator">&gt;</span><span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// type \u9A8C\u8BC1\u4F20\u9012\u7684\u6570\u636E\u7C7B\u578B \u5982\u679C\u9A8C\u8BC1\u591A\u4E2A\u7C7B\u578B\u901A\u8FC7\u6570\u636E [&#39;String&#39;, &#39;Number&#39;]</span>
<span class="token comment">// default \u9ED8\u8BA4\u503C\uFF0C\u5982\u679C\u4E8B\u4E00\u4E2A\u5BF9\u8C61\u3001\u6570\u7EC4\u3001\u6216\u8005\u4E8B\u65B9\u6CD5\uFF0C\u5C31\u9700\u8981\u5199\u6210\u51FD\u6570\u5F62\u5F0F \u901A\u8FC7return \u8FD4\u56DE\uFF0C\u5373\u4F7F\u662F\u4E00\u4E2A\u7A7A\u5BF9\u8C61\u6216\u7A7A\u6570\u7EC4\u4E5F\u9700\u8981\u5199\u6210\u51FD\u6570 \u8FD4\u56DE</span>
<span class="token keyword">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// \u7A7A\u6570\u7EC4\u4E5F\u9700\u8981\u8FD4\u56DE</span>
<span class="token punctuation">}</span>
<span class="token comment">// required \u9A8C\u8BC1\u503C\u662F\u5426\u4E3A\u5FC5\u4F20\u9879\uFF0C true\u662F\u5FC5\u4F20\uFF0Cfalse\u662F\u975E\u5FC5\u4F20</span>
<span class="token comment">// validator \u81EA\u5B9A\u4E49\u9A8C\u8BC1\u5668 \u9A8C\u8BC1\u901A\u8FC7\u8FD4\u56DEtrue \u4E0D\u901A\u8FC7\u8FD4\u56DE false</span>
<span class="token function">validator</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u9A8C\u8BC1\u901A\u8FC7\u8FD4\u56DEtrue \u4E0D\u901A\u8FC7\u8FD4\u56DE false</span>
  reurn value<span class="token operator">&gt;</span><span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4EE5\u4E0A\u9A8C\u8BC1\u5462\u90FD\u4E0D\u662F\u5F3A\u5236\u6027\u7684\uFF0C\u5373\u4F7F\u662F\u4F20\u503C\u9519\u8BEF\u540C\u6837\u4E5F\u4F1A\u6E32\u67D3\u51FA\u6765\uFF0C\u53EA\u662Fvue\u4F1A\u53D1\u51FA\u8B66\u544A</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E8C\u3001\u4F20\u9012\u52A8\u6001\u7684\u503C" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u4F20\u9012\u52A8\u6001\u7684\u503C" aria-hidden="true">#</a> \u4E8C\u3001\u4F20\u9012\u52A8\u6001\u7684\u503C</h3><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>// \u5B50\u7EC4\u4EF6
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ sender }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{ time }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;sender&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;msg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;time&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>


// \u7236\u7EC4\u4EF6
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MessageItem</span>
        <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>message in messages<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>message.id<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:sender</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>message.sender<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:msg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>message.msg<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:time</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>message.time<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">/&gt;</span></span>

      // \u53EF\u4EE5\u4F7F\u7528\u7B80\u5199\u5F62\u5F0F\uFF0Cvue \u4F1A\u6839\u636Eprops \u91CC\u9762\u63A5\u6536\u7684\u6570\u636E\u81EA\u884C\u62C6\u89E3\uFF0C\u6CA1\u6709\u63A5\u6536\u7684\u5C06\u4F1A\u81EA\u52A8\u5FFD\u7565
      <span class="token comment">&lt;!-- &lt;MessageItem
        v-for=&quot;message in messages&quot;
        :key=&quot;message.id&quot;
        v-bind=&quot;message&quot;
      /&gt; --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> MessageItem <span class="token keyword">from</span> <span class="token string">&quot;./components/MessageItem.vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    MessageItem<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">messages</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token literal-property property">sender</span><span class="token operator">:</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&quot;\u4F60\u597D\u5440!&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token string">&quot;19:38&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token literal-property property">sender</span><span class="token operator">:</span> <span class="token string">&quot;\u674E\u56DB&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&quot;Hi!&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token string">&quot;19:40&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
          <span class="token literal-property property">sender</span><span class="token operator">:</span> <span class="token string">&quot;\u738B\u4E94&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&quot;\u6700\u8FD1\u600E\u4E48\u6837\uFF1F&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token string">&quot;19:42&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E09\u3001\u7ED9\u7EC4\u4EF6\u4F20\u9012\u672A\u5B9A\u4E49\u7684\u5C5E\u6027\u53D1\u751F\u7684\u53D8\u5316" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u7ED9\u7EC4\u4EF6\u4F20\u9012\u672A\u5B9A\u4E49\u7684\u5C5E\u6027\u53D1\u751F\u7684\u53D8\u5316" aria-hidden="true">#</a> \u4E09\u3001\u7ED9\u7EC4\u4EF6\u4F20\u9012\u672A\u5B9A\u4E49\u7684\u5C5E\u6027\u53D1\u751F\u7684\u53D8\u5316</h3><p>\u7ED9\u7EC4\u4EF6\u4F20\u9012\u672A\u5B9A\u4E49\u7684\u5C5E\u6027\uFF0C\u503C\u5F97\u662F\u5B50\u7EC4\u4EF6\u672A\u901A\u8FC7props \u63A5\u6536\u7684\u5C5E\u6027\uFF0C\u957F\u7528\u6765\u5B9A\u4E49claa \u6765\u4FEE\u6539\u5B50\u7EC4\u4EF6\u7684class \u6837\u5F0F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u9ED8\u8BA4\u672A\u5B9A\u4E49\u7684\u5C5E\u6027\u9ED8\u8BA4\u662F\u653E\u5728\u5B50\u7EC4\u4EF6\u7684\u6700\u5916\u5C42\u5BB9\u5668\u4E0A\u5982</span>
<span class="token comment">// \u7236\u7EC4\u4EF6\u4F7F\u7528\u5B50\u7EC4\u4EF6</span>
<span class="token operator">&lt;</span>FatherComponent <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;blogColor&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token comment">// \u5B50\u7EC4\u4EF6 \u5199\u5728\u7236\u7EC4\u4EF6\u7684class \u9ED8\u8BA4\u51FA\u73B0\u5728\u5B50\u7EC4\u4EF6\u7684\u6700\u5916\u5C42</span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;blogColor&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>a<span class="token operator">&gt;</span>\u4F60\u597D\u554A<span class="token operator">&lt;</span>a<span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>div<span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>
<span class="token punctuation">.</span>blogColor <span class="token operator">&gt;</span> a<span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span>style<span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token comment">// \u5B50\u7EC4\u4EF6\u8BBF\u95EE\u672A\u5B9A\u4E49\u7684\u5C5E\u6027</span>
<span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8FD9\u91CC\u662F\u5B50\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$attrs<span class="token punctuation">.</span>class<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u963B\u6B62\u672A\u5B9A\u4E49\u7684\u5C5E\u6027\u653E\u5230\u6700\u5916\u5C42\u5BB9\u5668\u4E0A inheritAttrs \u6539\u4E3Afalse \u5C31\u65E0\u6CD5\u628A\u672A\u5B9A\u4E49\u7684\u5C5E\u6027\u653E\u5230\u5B50\u7EC4\u4EF6\u7684\u6700\u5916\u57CE\u4E86</span>
<span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8FD9\u91CC\u662F\u5B50\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F</span>
  <span class="token literal-property property">inheritAttrs</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[e];function l(c,i){return s(),a("div",null,o)}const k=n(p,[["render",l],["__file","vue-8.html.vue"]]);export{k as default};
