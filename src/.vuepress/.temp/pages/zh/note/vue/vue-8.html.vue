<template><div><h2 id="props-属性-自定义组件内容" tabindex="-1"><a class="header-anchor" href="#props-属性-自定义组件内容" aria-hidden="true">#</a> props 属性：自定义组件内容</h2>
<h3 id="一、传递固定的值" tabindex="-1"><a class="header-anchor" href="#一、传递固定的值" aria-hidden="true">#</a> 一、传递固定的值</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// props 传值 组件传值</span>
<span class="token operator">&lt;</span>MyComponent 
  name<span class="token operator">=</span><span class="token string">"张三"</span>
  age<span class="token operator">=</span><span class="token string">"18"</span>
<span class="token operator">/</span><span class="token operator">></span>

<span class="token comment">// props 接收使用 传值数据</span>
<span class="token comment">// 第一种写法 数组写法</span>
<span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token string">'age'</span><span class="token punctuation">]</span>

<span class="token comment">// 第二种写法 对象写法</span>
<span class="token comment">// 第二种写法可以规定传值的类型，和默认值，是否为必传项，这个类型规定不是强制的，当传错值的时候，vue会发出警告</span>
<span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'李四'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token function">validator</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 验证通过返回true 不通过返回 false</span>
      reurn value<span class="token operator">></span><span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 在模板中使用</span>
<span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span>div<span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span>age<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span>div<span class="token operator">/</span><span class="token operator">></span>

<span class="token comment">// 在生命周期中访问props 传递过来的值</span>
<span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 总结 props 只能由父组件传递值给子组件，同时子组件不能修改父组件传递进来的值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="props-传值验证" tabindex="-1"><a class="header-anchor" href="#props-传值验证" aria-hidden="true">#</a> props 传值验证</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 如果需要需要对传递进来的值进行验证，就需要把props 写成对象形式</span>
<span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'李四'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token function">validator</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 验证通过返回true 不通过返回 false</span>
      reurn value<span class="token operator">></span><span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// type 验证传递的数据类型 如果验证多个类型通过数据 ['String', 'Number']</span>
<span class="token comment">// default 默认值，如果事一个对象、数组、或者事方法，就需要写成函数形式 通过return 返回，即使是一个空对象或空数组也需要写成函数 返回</span>
<span class="token keyword">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 空数组也需要返回</span>
<span class="token punctuation">}</span>
<span class="token comment">// required 验证值是否为必传项， true是必传，false是非必传</span>
<span class="token comment">// validator 自定义验证器 验证通过返回true 不通过返回 false</span>
<span class="token function">validator</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 验证通过返回true 不通过返回 false</span>
  reurn value<span class="token operator">></span><span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token comment">// 以上验证呢都不是强制性的，即使是传值错误同样也会渲染出来，只是vue会发出警告</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二、传递动态的值" tabindex="-1"><a class="header-anchor" href="#二、传递动态的值" aria-hidden="true">#</a> 二、传递动态的值</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>// 子组件
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>{{ sender }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>{{ time }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>{{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"sender"</span><span class="token punctuation">,</span> <span class="token string">"msg"</span><span class="token punctuation">,</span> <span class="token string">"time"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>


// 父组件
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MessageItem</span>
        <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>message in messages<span class="token punctuation">"</span></span>
        <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>message.id<span class="token punctuation">"</span></span>
        <span class="token attr-name">:sender</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>message.sender<span class="token punctuation">"</span></span>
        <span class="token attr-name">:msg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>message.msg<span class="token punctuation">"</span></span>
        <span class="token attr-name">:time</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>message.time<span class="token punctuation">"</span></span>
      <span class="token punctuation">/></span></span>

      // 可以使用简写形式，vue 会根据props 里面接收的数据自行拆解，没有接收的将会自动忽略
      <span class="token comment">&lt;!-- &lt;MessageItem
        v-for="message in messages"
        :key="message.id"
        v-bind="message"
      /> --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> MessageItem <span class="token keyword">from</span> <span class="token string">"./components/MessageItem.vue"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    MessageItem<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">messages</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token literal-property property">sender</span><span class="token operator">:</span> <span class="token string">"张三"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">"你好呀!"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token string">"19:38"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token literal-property property">sender</span><span class="token operator">:</span> <span class="token string">"李四"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">"Hi!"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token string">"19:40"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
          <span class="token literal-property property">sender</span><span class="token operator">:</span> <span class="token string">"王五"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">"最近怎么样？"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token string">"19:42"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三、给组件传递未定义的属性发生的变化" tabindex="-1"><a class="header-anchor" href="#三、给组件传递未定义的属性发生的变化" aria-hidden="true">#</a> 三、给组件传递未定义的属性发生的变化</h3>
<p>给组件传递未定义的属性，值得是子组件未通过props 接收的属性，长用来定义claa 来修改子组件的class 样式</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 默认未定义的属性默认是放在子组件的最外层容器上如</span>
<span class="token comment">// 父组件使用子组件</span>
<span class="token operator">&lt;</span>FatherComponent <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"blogColor"</span> <span class="token operator">/</span><span class="token operator">></span>

<span class="token comment">// 子组件 写在父组件的class 默认出现在子组件的最外层</span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"blogColor"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>a<span class="token operator">></span>你好啊<span class="token operator">&lt;</span>a<span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>div<span class="token operator">/</span><span class="token operator">></span>

<span class="token operator">&lt;</span>style<span class="token operator">></span>
<span class="token punctuation">.</span>blogColor <span class="token operator">></span> a<span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span>style<span class="token operator">/</span><span class="token operator">></span>

<span class="token comment">// 子组件访问未定义的属性</span>
<span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 这里是子组件的生命周期</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$attrs<span class="token punctuation">.</span>class<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 阻止未定义的属性放到最外层容器上 inheritAttrs 改为false 就无法把未定义的属性放到子组件的最外城了</span>
<span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 这里是子组件的生命周期</span>
  <span class="token literal-property property">inheritAttrs</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


