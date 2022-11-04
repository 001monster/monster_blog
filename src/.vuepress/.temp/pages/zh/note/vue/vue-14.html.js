export const data = JSON.parse("{\"key\":\"v-306b6551\",\"path\":\"/zh/note/vue/vue-14.html\",\"title\":\"（十四）组件数据流向设计\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"（十四）组件数据流向设计\",\"order\":14,\"date\":\"2022-11-04T00:00:00.000Z\",\"category\":[\"vue\"],\"summary\":\"组件数据流向的设计\\r说明 我们之前说过，父组件给子组件传值，子组件通过props 接收，并且子组件不能直接修改父组件传递过来的值 子组件给父组件传值，通过$emit自定义事件传值 这个是vue的数据流向设计哲学叫做 Props Down, Events Up，属性向下，事件向上\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"http://zswei.xyz/zh/note/vue/vue-14.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"老怪兽\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"（十四）组件数据流向设计\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:locale:alternate\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-11-04T00:00:00.000Z\"}],[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"en-us\",\"href\":\"http://zswei.xyz/en/zh/note/vue/vue-14.html\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"组件数据流向的设计\",\"slug\":\"组件数据流向的设计\",\"link\":\"#组件数据流向的设计\",\"children\":[]}],\"readingTime\":{\"minutes\":0.4,\"words\":121},\"filePathRelative\":\"zh/note/vue/vue-14.md\",\"localizedDate\":\"2022年11月4日\"}")

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
