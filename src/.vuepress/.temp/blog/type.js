export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-184f4da6","v-2e3eac9e","v-2bf67255","v-92639f26","v-38e9c58a"]},"/en/":{"path":"/en/article/","keys":["v-285adf66","v-0e4acecb","v-57615dc1","v-4fd051a1","v-fb852992","v-dd0b14b4","v-e074c5f2","v-e3de7730","v-e748286e","v-4e6ceffa","v-51d6a138","v-55405276","v-58aa03b4","v-5aa3d8ba","v-367b840a","v-70eda030","v-3777b6d3","v-4a2a37eb","v-395cd082"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]},"/en/":{"path":"/en/encrypted/","keys":[]}},"slide":{"/":{"path":"/slide/","keys":["v-2e3eac9e"]},"/en/":{"path":"/en/slide/","keys":["v-367b840a"]}},"star":{"/":{"path":"/star/","keys":["v-184f4da6","v-2e3eac9e","v-2bf67255"]},"/en/":{"path":"/en/star/","keys":["v-285adf66","v-0e4acecb","v-e3de7730","v-55405276"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-92639f26","v-184f4da6"]},"/en/":{"path":"/en/timeline/","keys":["v-285adf66","v-57615dc1","v-4fd051a1","v-fb852992","v-dd0b14b4","v-e074c5f2","v-e3de7730","v-e748286e","v-4e6ceffa","v-51d6a138","v-55405276","v-58aa03b4","v-0e4acecb"]}}}

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
