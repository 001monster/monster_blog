export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-184f4da6","v-6e19edb7","v-df8b6e0c","v-f0ec4556","v-24b7c48d","v-2bc6566a","v-7f25ca3a","v-7d70f19b","v-7bbc18fc","v-7a07405d","v-6cd750ef","v-6b227850","v-696d9fb1","v-67b8c712","v-2e3eac9e","v-4e65ec78","v-c151bf32","v-438ffe52","v-1473bf53"]},"/en/":{"path":"/en/article/","keys":["v-285adf66","v-0e4acecb","v-57615dc1","v-4fd051a1","v-fb852992","v-dd0b14b4","v-e074c5f2","v-e3de7730","v-e748286e","v-4e6ceffa","v-51d6a138","v-55405276","v-58aa03b4","v-5aa3d8ba","v-367b840a","v-70eda030","v-3777b6d3","v-4a2a37eb","v-395cd082"]}},"encrypted":{"/":{"path":"/encrypted/","keys":["v-c151bf32"]},"/en/":{"path":"/en/encrypted/","keys":["v-3777b6d3"]}},"slide":{"/":{"path":"/slide/","keys":["v-2e3eac9e"]},"/en/":{"path":"/en/slide/","keys":["v-367b840a"]}},"star":{"/":{"path":"/star/","keys":["v-184f4da6","v-7bbc18fc","v-696d9fb1"]},"/en/":{"path":"/en/star/","keys":["v-285adf66","v-0e4acecb","v-e3de7730","v-55405276"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-df8b6e0c","v-f0ec4556","v-24b7c48d","v-2bc6566a","v-7f25ca3a","v-7d70f19b","v-7bbc18fc","v-7a07405d","v-6cd750ef","v-6b227850","v-696d9fb1","v-67b8c712","v-6e19edb7"]},"/en/":{"path":"/en/timeline/","keys":["v-285adf66","v-57615dc1","v-4fd051a1","v-fb852992","v-dd0b14b4","v-e074c5f2","v-e3de7730","v-e748286e","v-4e6ceffa","v-51d6a138","v-55405276","v-58aa03b4","v-0e4acecb"]}}}

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
