export const categoryMap = {"category":{"/":{"path":"/category/","map":{"个人信息":{"path":"/category/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF/","keys":["v-184f4da6"]},"GitHub":{"path":"/category/github/","keys":["v-38e9c58a"]},"父亲":{"path":"/category/%E7%88%B6%E4%BA%B2/","keys":["v-64dfef98"]},"教导":{"path":"/category/%E6%95%99%E5%AF%BC/","keys":["v-64dfef98"]}}},"/en/":{"path":"/en/category/","map":{"使用指南":{"path":"/en/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","keys":["v-0e4acecb","v-70eda030","v-3777b6d3","v-4a2a37eb","v-395cd082"]},"樱桃":{"path":"/en/category/%E6%A8%B1%E6%A1%83/","keys":["v-fb852992"]},"火龙果":{"path":"/en/category/%E7%81%AB%E9%BE%99%E6%9E%9C/","keys":["v-4fd051a1"]},"水果":{"path":"/en/category/%E6%B0%B4%E6%9E%9C/","keys":["v-57615dc1","v-4fd051a1","v-e3de7730","v-e748286e","v-4e6ceffa","v-51d6a138"]},"草莓":{"path":"/en/category/%E8%8D%89%E8%8E%93/","keys":["v-57615dc1"]},"蔬菜":{"path":"/en/category/%E8%94%AC%E8%8F%9C/","keys":["v-285adf66"]},"苹果":{"path":"/en/category/%E8%8B%B9%E6%9E%9C/","keys":["v-4e6ceffa","v-51d6a138","v-55405276","v-58aa03b4"]},"香蕉":{"path":"/en/category/%E9%A6%99%E8%95%89/","keys":["v-dd0b14b4","v-e074c5f2","v-e3de7730","v-e748286e"]}}}},"tag":{"/":{"path":"/tag/","map":{"信息":{"path":"/tag/%E4%BF%A1%E6%81%AF/","keys":["v-184f4da6"]},"个人":{"path":"/tag/%E4%B8%AA%E4%BA%BA/","keys":["v-184f4da6"]},"Git":{"path":"/tag/git/","keys":["v-38e9c58a"]},"deploy":{"path":"/tag/deploy/","keys":["v-38e9c58a"]},"名言":{"path":"/tag/%E5%90%8D%E8%A8%80/","keys":["v-64dfef98"]}}},"/en/":{"path":"/en/tag/","map":{"禁用":{"path":"/en/tag/%E7%A6%81%E7%94%A8/","keys":["v-70eda030"]},"文章加密":{"path":"/en/tag/%E6%96%87%E7%AB%A0%E5%8A%A0%E5%AF%86/","keys":["v-3777b6d3"]},"Markdown":{"path":"/en/tag/markdown/","keys":["v-4a2a37eb"]},"页面配置":{"path":"/en/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/","keys":["v-0e4acecb"]},"使用指南":{"path":"/en/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","keys":["v-0e4acecb"]},"红":{"path":"/en/tag/%E7%BA%A2/","keys":["v-285adf66","v-57615dc1","v-4fd051a1","v-fb852992","v-4e6ceffa","v-51d6a138","v-55405276","v-58aa03b4"]},"小":{"path":"/en/tag/%E5%B0%8F/","keys":["v-57615dc1","v-fb852992"]},"圆":{"path":"/en/tag/%E5%9C%86/","keys":["v-285adf66","v-fb852992","v-4e6ceffa","v-51d6a138","v-55405276","v-58aa03b4"]},"大":{"path":"/en/tag/%E5%A4%A7/","keys":["v-4fd051a1","v-4e6ceffa","v-51d6a138","v-55405276","v-58aa03b4"]},"黄":{"path":"/en/tag/%E9%BB%84/","keys":["v-dd0b14b4","v-e074c5f2","v-e3de7730","v-e748286e"]},"弯曲的":{"path":"/en/tag/%E5%BC%AF%E6%9B%B2%E7%9A%84/","keys":["v-dd0b14b4","v-e074c5f2","v-e3de7730","v-e748286e"]},"长":{"path":"/en/tag/%E9%95%BF/","keys":["v-dd0b14b4","v-e074c5f2","v-e3de7730","v-e748286e"]}}}}}

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
