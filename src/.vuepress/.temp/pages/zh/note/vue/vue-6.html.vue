<template><div><h2 id="vue单文件应用" tabindex="-1"><a class="header-anchor" href="#vue单文件应用" aria-hidden="true">#</a> vue单文件应用</h2>
<h3 id="一、如何创建一个组件" tabindex="-1"><a class="header-anchor" href="#一、如何创建一个组件" aria-hidden="true">#</a> 一、如何创建一个组件</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>cosnt app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'组件名字'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">''</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>content<span class="token punctuation">.</span>length
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
        &lt;div>
            &lt;input v-model="content" />
            &lt;p>你共输入了 {{ count }} 个字符&lt;/p>
        &lt;/div>
    </span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二、全局注册组件" tabindex="-1"><a class="header-anchor" href="#二、全局注册组件" aria-hidden="true">#</a> 二、全局注册组件</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>cosnt app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'全局组件名字'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    &lt;div>
        &lt;h1>字符统计应用&lt;/h1>
        &lt;WordCount />
    &lt;/div></span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三、局部注册组件" tabindex="-1"><a class="header-anchor" href="#三、局部注册组件" aria-hidden="true">#</a> 三、局部注册组件</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 先引入组件 </span>
<span class="token keyword">import</span> ComponentApp <span class="token keyword">from</span> <span class="token string">'./component/index.vue'</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 注册组件</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        ComponentApp
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> vm <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token punctuation">{</span>#app<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="四、使用-vite-创建-vue-项目" tabindex="-1"><a class="header-anchor" href="#四、使用-vite-创建-vue-项目" aria-hidden="true">#</a> 四、使用 <code v-pre>Vite</code> 创建 <code v-pre>Vue</code> 项目</h3>
<ol>
<li>
<p>打开终
使用idea或者vscode编辑器，打开本地终端，就是为了在自定义的目录中新建vue项目
<img src="http://image.zswei.xyz/img/1.webp" alt="打开终端" loading="lazy"></p>
</li>
<li>
<p>这边是使用npm创建vite，输入npm create vite@latest ,使用yarrn 可输入 yarn create vite，会有提示，一步步选择vue即可</p>
</li>
<li>
<p>如果想要一个模板，创建一个vite+vue的模板，就输入npm create vite@latest my-vue-app -- --template vue
<img src="http://image.zswei.xyz/img/2.webp" alt="选择模板" loading="lazy"></p>
</li>
<li>
<p>进入你创建的app目录中，cd cillian-vue</p>
</li>
<li>
<p>运行<code v-pre>npm install</code>安装依赖</p>
</li>
</ol>
<p><img src="http://image.zswei.xyz/img/3.webp" alt="安装依赖" loading="lazy"></p>
<ol start="6">
<li>运行 <code v-pre>npm run dev</code> 运行项目</li>
</ol>
<p><img src="http://image.zswei.xyz/img/4.webp" alt="运行项目" loading="lazy"></p>
<ol start="7">
<li>ok项目创建完成，咱们下一章来说说创建和使用单一文件组件</li>
</ol>
</div></template>


