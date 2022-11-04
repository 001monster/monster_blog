export const categoryMap = {"category":{"/":{"path":"/category/","map":{"个人信息":{"path":"/category/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF/","keys":["v-184f4da6"]},"GitHub":{"path":"/category/github/","keys":["v-38e9c58a"]},"vue":{"path":"/category/vue/","keys":["v-299802d5","v-2b4cdb74","v-2d01b413","v-2eb68cb2","v-306b6551","v-32203df0","v-33d5168f","v-3589ef2e","v-1589d386","v-173eac25","v-0eb6710a","v-106b49a9","v-12202248","v-13d4fae7","v-0997e72d","v-0b4cbfcc","v-0d01986b","v-92639f26"]},"JS常用代码":{"path":"/category/js%E5%B8%B8%E7%94%A8%E4%BB%A3%E7%A0%81/","keys":["v-1ca83fd6"]}}},"/en/":{"path":"/en/category/","map":{"个人信息":{"path":"/en/category/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF/","keys":["v-5aa3d8ba"]},"vue":{"path":"/en/category/vue/","keys":["v-14cf5952"]},"GitHub":{"path":"/en/category/github/","keys":["v-7a4be6f6"]}}}},"tag":{"/":{"path":"/tag/","map":{"信息":{"path":"/tag/%E4%BF%A1%E6%81%AF/","keys":["v-184f4da6"]},"个人":{"path":"/tag/%E4%B8%AA%E4%BA%BA/","keys":["v-184f4da6"]},"Git":{"path":"/tag/git/","keys":["v-38e9c58a"]},"deploy":{"path":"/tag/deploy/","keys":["v-38e9c58a"]}}},"/en/":{"path":"/en/tag/","map":{"信息":{"path":"/en/tag/%E4%BF%A1%E6%81%AF/","keys":["v-5aa3d8ba"]},"个人":{"path":"/en/tag/%E4%B8%AA%E4%BA%BA/","keys":["v-5aa3d8ba"]},"Git":{"path":"/en/tag/git/","keys":["v-7a4be6f6"]},"deploy":{"path":"/en/tag/deploy/","keys":["v-7a4be6f6"]}}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
