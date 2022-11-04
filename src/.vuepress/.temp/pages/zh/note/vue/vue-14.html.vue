<template><div><h2 id="组件数据流向的设计" tabindex="-1"><a class="header-anchor" href="#组件数据流向的设计" aria-hidden="true">#</a> 组件数据流向的设计</h2>
<div class="custom-container info">
<p class="custom-container-title">说明</p>
<p>我们之前说过，父组件给子组件传值，子组件通过props 接收，并且子组件不能直接修改父组件传递过来的值
子组件给父组件传值，通过<code v-pre>$emit</code>自定义事件传值</p>
<p>这个是vue的数据流向设计哲学叫做 <code v-pre>Props Down</code>, <code v-pre>Events Up</code>，属性向下，事件向上</p>
</div>
</div></template>


