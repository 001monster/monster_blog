export const categoryMap = {"category":{"/":{"path":"/category/","map":{"个人信息":{"path":"/category/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF/","keys":["v-184f4da6"]},"vue":{"path":"/category/vue/","keys":["v-92639f26"]},"GitHub":{"path":"/category/github/","keys":["v-38e9c58a"]}}},"/en/":{"path":"/en/category/","map":{"个人信息":{"path":"/en/category/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF/","keys":["v-5aa3d8ba"]},"GitHub":{"path":"/en/category/github/","keys":["v-7a4be6f6"]},"vue":{"path":"/en/category/vue/","keys":["v-14cf5952"]}}}},"tag":{"/":{"path":"/tag/","map":{"信息":{"path":"/tag/%E4%BF%A1%E6%81%AF/","keys":["v-184f4da6"]},"个人":{"path":"/tag/%E4%B8%AA%E4%BA%BA/","keys":["v-184f4da6"]},"Git":{"path":"/tag/git/","keys":["v-38e9c58a"]},"deploy":{"path":"/tag/deploy/","keys":["v-38e9c58a"]}}},"/en/":{"path":"/en/tag/","map":{"信息":{"path":"/en/tag/%E4%BF%A1%E6%81%AF/","keys":["v-5aa3d8ba"]},"个人":{"path":"/en/tag/%E4%B8%AA%E4%BA%BA/","keys":["v-5aa3d8ba"]},"Git":{"path":"/en/tag/git/","keys":["v-7a4be6f6"]},"deploy":{"path":"/en/tag/deploy/","keys":["v-7a4be6f6"]}}}}}

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
