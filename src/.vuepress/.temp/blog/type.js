export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-184f4da6","v-2e3eac9e","v-2bf67255","v-8f7378d6","v-92639f26","v-7d911270","v-20d19a5c","v-1228cf66","v-57c4ebd6","v-5b2e9d14","v-5e984e52","v-6201ff90","v-464aa9b4","v-4495d115","v-42e0f876","v-412c1fd7","v-38e9c58a"]},"/en/":{"path":"/en/article/","keys":["v-5aa3d8ba","v-367b840a","v-3839b0e0","v-14cf5952","v-7a4be6f6"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]},"/en/":{"path":"/en/encrypted/","keys":[]}},"slide":{"/":{"path":"/slide/","keys":["v-2e3eac9e"]},"/en/":{"path":"/en/slide/","keys":["v-367b840a"]}},"star":{"/":{"path":"/star/","keys":["v-184f4da6","v-2e3eac9e","v-2bf67255","v-8f7378d6","v-5e984e52","v-42e0f876"]},"/en/":{"path":"/en/star/","keys":["v-5aa3d8ba","v-367b840a","v-3839b0e0"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-92639f26","v-184f4da6","v-8f7378d6","v-7d911270","v-20d19a5c","v-1228cf66","v-57c4ebd6","v-5b2e9d14","v-5e984e52","v-6201ff90","v-464aa9b4","v-4495d115","v-42e0f876","v-412c1fd7"]},"/en/":{"path":"/en/timeline/","keys":["v-14cf5952","v-5aa3d8ba"]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}
