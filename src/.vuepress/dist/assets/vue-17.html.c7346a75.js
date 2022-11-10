import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,a as t}from"./app.5cdfbe67.js";const p={},e=t(`<h2 id="\u5728\u4F20\u9012-slot-\u6A21\u677F\u4E2D-\u8BBF\u95EE\u5B50\u7EC4\u4EF6\u7684\u5C5E\u6027\u503C-\u4F5C\u7528\u57DF\u63D2\u69FD" tabindex="-1"><a class="header-anchor" href="#\u5728\u4F20\u9012-slot-\u6A21\u677F\u4E2D-\u8BBF\u95EE\u5B50\u7EC4\u4EF6\u7684\u5C5E\u6027\u503C-\u4F5C\u7528\u57DF\u63D2\u69FD" aria-hidden="true">#</a> \u5728\u4F20\u9012 <code>slot</code> \u6A21\u677F\u4E2D\uFF0C\u8BBF\u95EE\u5B50\u7EC4\u4EF6\u7684\u5C5E\u6027\u503C\uFF08\u4F5C\u7528\u57DF\u63D2\u69FD\uFF09</h2><ol><li>\u6570\u636E\u5728\u5B50\u7EC4\u4EF6\u5F53\u4E2D\u5B9A\u4E49\uFF0C\u901A\u8FC7 <code>slot</code> \u81EA\u5B9A\u4E49\u5C5E\u6027\u4F20\u9012\u7ED9\u7236\u7EC4\u4EF6\u63D0\u4F9B\u6A21\u677F\u7684\u5730\u65B9\u4F7F\u7528</li></ol><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>contact in contacts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>contact.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      &lt;slot :contacts=&quot;contacts/&gt;
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">contacts</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;John Doe&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&quot;johndoe@domain.com&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Karen Williams&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&quot;kwill@domai.com&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Steve Rogers&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&quot;stevrog@domain.com&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u7236\u7EC4\u4EF6\u7ED9\u5B50\u7EC4\u4EF6\u63D0\u4F9B\u6A21\u677F\u5E76\u4E14\u4F7F\u7528\u5B50\u7EC4\u4EF6\u7684\u6570\u636E\u6E32\u67D3\u6A21\u677F</li></ol><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- \u7B80\u5199\u7ED3\u6784\u8BED\u6CD5 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ContactList</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ contact }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- \u53EA\u6709\u4E00\u4E2Apropss\u53EF\u4EE5\u7B80\u5199 --&gt;</span>
        <span class="token comment">&lt;!-- &lt;ContactList v-slot=&quot;props&quot;&gt; --&gt;</span>
        <span class="token comment">&lt;!-- \u6B63\u5E38\u5199\u6CD5-\u53EA\u6709\u4E00\u4E2Aslot \u7684\u65F6\u5019\u53EF\u4EE5\u76F4\u63A5\u5199\u5728\u7EC4\u4EF6\u6807\u7B7E\u4E0A --&gt;</span>
        <span class="token comment">&lt;!-- &lt;ContactList v-slot:default=&quot;props&quot;&gt; --&gt;</span>
        <span class="token comment">&lt;!-- \u6B63\u5E38\u5199\u6CD5 --&gt;</span>
        <span class="token comment">&lt;!-- &lt;template v-slot:default=&quot;props&quot;&gt; --&gt;</span>
        <span class="token comment">&lt;!-- &lt;p&gt;{{ props.contact.name }}&lt;/p&gt;
        &lt;p&gt;{{ props.contact.email }}&lt;/p&gt; --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ contact.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ contact.email }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- &lt;/template&gt; --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ContactList</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> ContactList <span class="token keyword">from</span> <span class="token string">&quot;./components/ContactList.vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ContactList<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[e];function l(c,i){return s(),a("div",null,o)}const k=n(p,[["render",l],["__file","vue-17.html.vue"]]);export{k as default};
