export const data = JSON.parse("{\"key\":\"v-33d5168f\",\"path\":\"/zh/note/vue/vue-16.html\",\"title\":\"（十六）多层传递Props\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"（十六）多层传递Props\",\"order\":16,\"date\":\"2022-11-04T00:00:00.000Z\",\"category\":[\"vue\"],\"summary\":\"Provide/Inject：给深层组件中传递属性\\r说明 在日常开发中，可能需要把值传递给子组件的子组件 虽然veu的$attrs能够将美哟定义的属性默认放到最外层的容器上，但是不能保证每一个子组件的最外层都是子组件的子组件，也不能保证所有的中间组件都允许传递未定义属性 于是就有了 Provide 和 Inject 父组件通过 Provide 给下面的所有组\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"http://zswei.xyz/zh/note/vue/vue-16.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"老怪兽\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"（十六）多层传递Props\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:locale:alternate\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-11-04T00:00:00.000Z\"}],[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"en-us\",\"href\":\"http://zswei.xyz/en/zh/note/vue/vue-16.html\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"Provide/Inject：给深层组件中传递属性\",\"slug\":\"provide-inject-给深层组件中传递属性\",\"link\":\"#provide-inject-给深层组件中传递属性\",\"children\":[]}],\"readingTime\":{\"minutes\":1.23,\"words\":369},\"filePathRelative\":\"zh/note/vue/vue-16.md\",\"localizedDate\":\"2022年11月4日\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
