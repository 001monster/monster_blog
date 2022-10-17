export const categoryMap = {"category":{"/":{"path":"/category/","map":{"个人信息":{"path":"/category/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF/","keys":["v-184f4da6"]},"樱桃":{"path":"/category/%E6%A8%B1%E6%A1%83/","keys":["v-1228cf66"]},"火龙果":{"path":"/category/%E7%81%AB%E9%BE%99%E6%9E%9C/","keys":["v-20d19a5c"]},"水果":{"path":"/category/%E6%B0%B4%E6%9E%9C/","keys":["v-7d911270","v-20d19a5c","v-5e984e52","v-6201ff90","v-464aa9b4","v-4495d115"]},"草莓":{"path":"/category/%E8%8D%89%E8%8E%93/","keys":["v-7d911270"]},"蔬菜":{"path":"/category/%E8%94%AC%E8%8F%9C/","keys":["v-8f7378d6"]},"苹果":{"path":"/category/%E8%8B%B9%E6%9E%9C/","keys":["v-464aa9b4","v-4495d115","v-42e0f876","v-412c1fd7"]},"香蕉":{"path":"/category/%E9%A6%99%E8%95%89/","keys":["v-57c4ebd6","v-5b2e9d14","v-5e984e52","v-6201ff90"]},"GitHub":{"path":"/category/github/","keys":["v-38e9c58a"]},"vue":{"path":"/category/vue/","keys":["v-92639f26"]}}},"/en/":{"path":"/en/category/","map":{"个人信息":{"path":"/en/category/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF/","keys":["v-5aa3d8ba"]},"GitHub":{"path":"/en/category/github/","keys":["v-7a4be6f6"]},"vue":{"path":"/en/category/vue/","keys":["v-14cf5952"]}}}},"tag":{"/":{"path":"/tag/","map":{"信息":{"path":"/tag/%E4%BF%A1%E6%81%AF/","keys":["v-184f4da6"]},"个人":{"path":"/tag/%E4%B8%AA%E4%BA%BA/","keys":["v-184f4da6"]},"红":{"path":"/tag/%E7%BA%A2/","keys":["v-8f7378d6","v-7d911270","v-20d19a5c","v-1228cf66","v-464aa9b4","v-4495d115","v-42e0f876","v-412c1fd7"]},"小":{"path":"/tag/%E5%B0%8F/","keys":["v-7d911270","v-1228cf66"]},"圆":{"path":"/tag/%E5%9C%86/","keys":["v-8f7378d6","v-1228cf66","v-464aa9b4","v-4495d115","v-42e0f876","v-412c1fd7"]},"大":{"path":"/tag/%E5%A4%A7/","keys":["v-20d19a5c","v-464aa9b4","v-4495d115","v-42e0f876","v-412c1fd7"]},"黄":{"path":"/tag/%E9%BB%84/","keys":["v-57c4ebd6","v-5b2e9d14","v-5e984e52","v-6201ff90"]},"弯曲的":{"path":"/tag/%E5%BC%AF%E6%9B%B2%E7%9A%84/","keys":["v-57c4ebd6","v-5b2e9d14","v-5e984e52","v-6201ff90"]},"长":{"path":"/tag/%E9%95%BF/","keys":["v-57c4ebd6","v-5b2e9d14","v-5e984e52","v-6201ff90"]},"Git":{"path":"/tag/git/","keys":["v-38e9c58a"]},"deploy":{"path":"/tag/deploy/","keys":["v-38e9c58a"]}}},"/en/":{"path":"/en/tag/","map":{"信息":{"path":"/en/tag/%E4%BF%A1%E6%81%AF/","keys":["v-5aa3d8ba"]},"个人":{"path":"/en/tag/%E4%B8%AA%E4%BA%BA/","keys":["v-5aa3d8ba"]},"Git":{"path":"/en/tag/git/","keys":["v-7a4be6f6"]},"deploy":{"path":"/en/tag/deploy/","keys":["v-7a4be6f6"]}}}}}

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
