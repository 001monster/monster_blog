<template><div><h2 id="intersectionobserver-api-使用教程" tabindex="-1"><a class="header-anchor" href="#intersectionobserver-api-使用教程" aria-hidden="true">#</a> IntersectionObserver API 使用教程</h2>
<p>在网页开发时我们经常需要判断某个元素是否已经进入到视口<code v-pre>viewpot</code>，也就是用户能不能看见他</p>
<p><img src="https://www.ruanyifeng.com/blogimg/asset/2016/bg2016110201.gif" alt="示例图片" loading="lazy"></p>
<p>上面的绿色方块不断滚动，顶部就会提示他的可见性。
传统的方法是，监听<code v-pre>socroll</code>滚动条，判断元素到视口<code v-pre>viewpot</code>顶部的距离，当元素到视口<code v-pre>viewpot</code>顶部的距离小于整个视口，这时就证明用户已经可以可以看见元素了。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">const</span> imgags <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">'img'</span><span class="token punctuation">)</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'scorll'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      images<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">image</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> imageTop <span class="token operator">=</span> image<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>top
        <span class="token keyword">if</span><span class="token punctuation">(</span>imageTop <span class="token operator">&lt;</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> data_src <span class="token operator">=</span> image<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">'data_src'</span><span class="token punctuation">)</span>
          image<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'src'</span><span class="token punctuation">,</span> data_src<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      consoloe<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'scorll触发'</span><span class="token punctuation">)</span>
      <span class="token comment">// 这样写非常消耗性能，他一直都会去监听scorll 的状态</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一、api" tabindex="-1"><a class="header-anchor" href="#一、api" aria-hidden="true">#</a> 一、API</h2>
<p>现在有个简单的方法使用<code v-pre>IntersectionObserver</code>api</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> io <span class="token operator">=</span> <span class="token function">IntersectionObserver</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span> option<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码中，IntersectionObserver是浏览器原生提供的构造函数，接受两个参数：callback是可见性变化时的回调函数，option是配置对象（该参数可选）。</p>
<p>构造函数的返回值是一个观察器实例。实例的observe方法可以指定观察哪个 DOM 节点。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 开始观察</span>
io<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'example'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 停止观察</span>
io<span class="token punctuation">.</span><span class="token function">unobserve</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 关闭观察器</span>
io<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>observe</code>的参数是一个 <code v-pre>DOM</code> 节点对象。如果要观察多个节点，就要多次调用这个方法。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>io<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>elementA<span class="token punctuation">)</span><span class="token punctuation">;</span>
io<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>elementB<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、callback-参数" tabindex="-1"><a class="header-anchor" href="#二、callback-参数" aria-hidden="true">#</a> 二、callback 参数</h2>
<p>目标元素的可见性变化时，就会调用观察器的回调函数<code v-pre>callback</code>。
<code v-pre>callback</code>一般会触发两次。一次是目标元素刚刚进入视口（开始可见），另一次是完全离开视口（开始不可见）。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> io <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span>
  <span class="token parameter">entries</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>entries<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>面代码中，回调函数采用的是箭头函数的写法。<code v-pre>callback</code>函数的参数（<code v-pre>entries</code>）是一个数组，每个成员都是一个<code v-pre>IntersectionObserverEntry</code>对象。举例来说，如果同时有两个被观察的对象的可见性发生变化，<code v-pre>entries</code>数组就会有两个成员。</p>
<h2 id="三、intersectionobserverentry-对象" tabindex="-1"><a class="header-anchor" href="#三、intersectionobserverentry-对象" aria-hidden="true">#</a> 三、IntersectionObserverEntry 对象</h2>
<p><code v-pre>IntersectionObserverEntry</code>对象提供目标元素的信息，一共有六个属性。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token number">3893.92</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rootBounds</span><span class="token operator">:</span> ClientRect <span class="token punctuation">{</span>
    <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token number">920</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">1024</span><span class="token punctuation">,</span>
    <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token number">1024</span><span class="token punctuation">,</span>
    <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">920</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">boundingClientRect</span><span class="token operator">:</span> ClientRect <span class="token punctuation">{</span>
     <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">intersectionRect</span><span class="token operator">:</span> ClientRect <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">intersectionRatio</span><span class="token operator">:</span> <span class="token number">0.54</span><span class="token punctuation">,</span>
  <span class="token literal-property property">target</span><span class="token operator">:</span> element
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个属性的含义如下:</p>
<div class="custom-container info">
<p class="custom-container-title">相关信息</p>
<p>time：可见性发生变化的时间，是一个高精度时间戳，单位为毫秒
target：被观察的目标元素，是一个 <code v-pre>DOM</code> 节点对象
rootBounds：根元素的矩形区域的信息，<code v-pre>getBoundingClientRect()</code>方法的返回值，如果没有根元素（即直接相对于视口滚动），则返回<code v-pre>null</code>
boundingClientRect：目标元素的矩形区域的信息
intersectionRect：目标元素与视口（或根元素）的交叉区域的信息
intersectionRatio：目标元素的可见比例，即<code v-pre>intersectionRect</code>占<code v-pre>boundingClientRect</code>的比例，完全可见时为1，完全不可见时小于等于0</p>
</div>
<p><img src="https://www.ruanyifeng.com/blogimg/asset/2016/bg2016110202.png" alt="实例图片" loading="lazy"></p>
<p>上图中，灰色的水平方框代表视口，深红色的区域代表四个被观察的目标元素。它们各自的intersectionRatio图中都已经注明。</p>
<h2 id="四、实例-vue懒加载-v-lazy" tabindex="-1"><a class="header-anchor" href="#四、实例-vue懒加载-v-lazy" aria-hidden="true">#</a> 四、实例 vue懒加载(v-lazy)</h2>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img-lazy<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>参考链接：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>IntersectionObserver API 使用教程<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> 
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span>
    <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(item, i) in arrSrc<span class="token punctuation">"</span></span>
    <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> 
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img<span class="token punctuation">"</span></span> 
      <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>moren<span class="token punctuation">"</span></span>
      <span class="token attr-name">v-lazy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span>
      <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>懒加载<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'imgLazy'</span><span class="token punctuation">,</span>
<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">moren</span><span class="token operator">:</span> <span class="token string">"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.soogif.com%2F1g9pHPk2uEA9JT8lT8ejc1WE2mgQTVy4.gif&amp;refer=http%3A%2F%2Fimg.soogif.com&amp;app=2002&amp;size=f9999,10000&amp;q=a80&amp;n=0&amp;g=0n&amp;fmt=auto?sec=1668584050&amp;t=e90ea07c724b96a9446190b6cbe4de35"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">arrSrc</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">'https://image.jxc4.com/image/21170e70681c93e9ef85453cb5f28e33.png'</span><span class="token punctuation">,</span>
      <span class="token string">'https://image.jxc4.com/image/71b9046bb233bccf103825e74d5fc257.png'</span><span class="token punctuation">,</span>
      <span class="token string">'https://image.jxc4.com/image/48d133ab53758f1caf05654f0eb40605.png'</span><span class="token punctuation">,</span>
      <span class="token string">'https://image.jxc4.com/image/e8e9e36d4a1d814bc059a588e49c20b6.png'</span><span class="token punctuation">,</span>
      <span class="token string">'https://image.jxc4.com/image/e4042b6463fcf5b4cc58e01c7311e392.jpg'</span><span class="token punctuation">,</span>
      <span class="token string">'https://image.jxc4.com/image/ec7bf3e5a8efb503ce1c51ed135f773e.jpg'</span><span class="token punctuation">,</span>
      <span class="token string">'http://image.jxc4.com/image/a21a88820fdde49807de58964295d1ee.jpg'</span><span class="token punctuation">,</span>
      <span class="token string">'http://image.jxc4.com/e0c502683858f1e6c82a6e110b880c10.jpg'</span><span class="token punctuation">,</span>
      <span class="token string">'http://image.jxc4.com/image/de2be839697594030b7023edb2274c8f.jpg'</span><span class="token punctuation">,</span>
      <span class="token string">'http://image.jxc4.com/image/c7de655f254ddde1a9919195b4516b94.jpg'</span><span class="token punctuation">,</span>
      <span class="token string">'http://image.jxc4.com/image/0c083fb4ec22f28bed2cded5d2424c11.jpg'</span><span class="token punctuation">,</span>
      <span class="token string">'http://zswei.xyz/assets/hero.197a9d2d.jpg'</span><span class="token punctuation">,</span>
      <span class="token string">'https://image.jxc4.com/image/21170e70681c93e9ef85453cb5f28e33.png'</span><span class="token punctuation">,</span>
      <span class="token string">'https://image.jxc4.com/image/71b9046bb233bccf103825e74d5fc257.png'</span><span class="token punctuation">,</span>
      <span class="token string">'https://image.jxc4.com/image/48d133ab53758f1caf05654f0eb40605.png'</span><span class="token punctuation">,</span>
      <span class="token string">'https://image.jxc4.com/image/e8e9e36d4a1d814bc059a588e49c20b6.png'</span><span class="token punctuation">,</span>
      <span class="token string">'https://image.jxc4.com/image/e4042b6463fcf5b4cc58e01c7311e392.jpg'</span><span class="token punctuation">,</span>
      <span class="token string">'https://image.jxc4.com/image/ec7bf3e5a8efb503ce1c51ed135f773e.jpg'</span><span class="token punctuation">,</span>
      <span class="token string">'http://image.jxc4.com/image/a21a88820fdde49807de58964295d1ee.jpg'</span><span class="token punctuation">,</span>
      <span class="token string">'http://image.jxc4.com/e0c502683858f1e6c82a6e110b880c10.jpg'</span><span class="token punctuation">,</span>
      <span class="token string">'http://image.jxc4.com/image/de2be839697594030b7023edb2274c8f.jpg'</span><span class="token punctuation">,</span>
      <span class="token string">'http://image.jxc4.com/image/c7de655f254ddde1a9919195b4516b94.jpg'</span><span class="token punctuation">,</span>
      <span class="token string">'http://image.jxc4.com/image/0c083fb4ec22f28bed2cded5d2424c11.jpg'</span><span class="token punctuation">,</span>
      <span class="token string">'http://zswei.xyz/assets/hero.197a9d2d.jpg'</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token comment">// 自定义指令</span>
<span class="token literal-property property">directives</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">/*
   *@描述: 自定义懒加载指令
   *@作者: zhang-shu-wei
   *@日期: 2022-10-17 15:38:28
   *@params: {
    el - 不包括自定义指令的容器 也就是没有 v-laz
    binding - 包括自定义指令的容器 也就是有 v-lazy
   }
  */</span>
  <span class="token literal-property property">lazy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">inserted</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 实例化一个交叉监视</span>
      <span class="token keyword">let</span> io <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">entries</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// entries 里面是一个数组 有多少个监视就有多少个成员</span>
        entries<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span> <span class="token parameter">element</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span><span class="token punctuation">(</span>element<span class="token punctuation">.</span>isIntersecting <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> img <span class="token operator">=</span> element<span class="token punctuation">.</span>target
            <span class="token function">setTimeout</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              img<span class="token punctuation">.</span>src <span class="token operator">=</span> binding<span class="token punctuation">.</span>value
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>
            io<span class="token punctuation">.</span><span class="token function">unobserve</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      io<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>less<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.img-lazy</span><span class="token punctuation">{</span>
<span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
<span class="token property">width</span><span class="token punctuation">:</span> 750px<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token property">border</span><span class="token punctuation">:</span> 1px solid <span class="token function">rgb</span><span class="token punctuation">(</span>199<span class="token punctuation">,</span> 199<span class="token punctuation">,</span> 199<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token selector">.item</span><span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px soldi <span class="token function">rgb</span><span class="token punctuation">(</span>185<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token selector">.img</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">object-fit</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、无限滚动" tabindex="-1"><a class="header-anchor" href="#五、无限滚动" aria-hidden="true">#</a> 五、无限滚动</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> intersectionObserver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">entries</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果不可见，就返回</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>entries<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>intersectionRatio <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token function">loadItems</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Loaded new items'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 开始观察</span>
intersectionObserver<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>
  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.scrollerFooter'</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>无限滚动时，最好在页面底部有一个页尾栏（又称<code v-pre>sentinels</code>）。一旦页尾栏可见，就表示用户到达了页面底部，从而加载新的条目放在页尾栏前面。这样做的好处是，不需要再一次调用<code v-pre>observe()</code>方法，现有的<code v-pre>IntersectionObserver</code>可以保持使用。</p>
<h2 id="六、option-对象" tabindex="-1"><a class="header-anchor" href="#六、option-对象" aria-hidden="true">#</a> 六、Option 对象</h2>
<p>threshold属性决定了什么时候触发回调函数。它是一个数组，每个成员都是一个门槛值，默认为[0]，即交叉比例（intersectionRatio）达到0时触发回调函数。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span>
  <span class="token parameter">entries</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token comment">/* ... */</span><span class="token punctuation">}</span><span class="token punctuation">,</span> 
  <span class="token punctuation">{</span>
    <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.25</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0.75</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用户可以自定义这个数组。比如，[0, 0.25, 0.5, 0.75, 1]就表示当目标元素 0%、25%、50%、75%、100% 可见时，会触发回调函数。
<img src="https://www.ruanyifeng.com/blogimg/asset/2016/bg2016110202.gif" alt="实例图片" loading="lazy"></p>
<h3 id="_6-2-root-属性-rootmargin-属性" tabindex="-1"><a class="header-anchor" href="#_6-2-root-属性-rootmargin-属性" aria-hidden="true">#</a> 6.2 root 属性，rootMargin 属性</h3>
<p>很多时候，目标元素不仅会随着窗口滚动，还会在容器里面滚动（比如在iframe窗口里滚动）。容器内滚动也会影响目标元素的可见性，参见本文开始时的那张示意图。</p>
<p>IntersectionObserver API 支持容器内滚动。root属性指定目标元素所在的容器节点（即根元素）。注意，容器元素必须是目标元素的祖先节点。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token keyword">var</span> opts <span class="token operator">=</span> <span class="token punctuation">{</span> 
  <span class="token literal-property property">root</span><span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.container'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rootMargin</span><span class="token operator">:</span> <span class="token string">"500px 0px"</span> 
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span>
  callback<span class="token punctuation">,</span>
  opts
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，除了<code v-pre>root</code>属性，还有<code v-pre>rootMargin</code>属性。后者定义根元素的<code v-pre>margin</code>，用来扩展或缩小rootBounds这个矩形的大小，从而影响<code v-pre>intersectionRect</code>交叉区域的大小。它使用CSS的定义方法，比如<code v-pre>10px</code> <code v-pre>20px</code> <code v-pre>30px</code> <code v-pre>40px，表示 </code>top<code v-pre>、</code>right<code v-pre>、</code>bottom<code v-pre>和</code>left` 四个方向的值。</p>
<p>这样设置以后，不管是窗口滚动或者容器内滚动，只要目标元素可见性变化，都会触发观察器。</p>
</div></template>


