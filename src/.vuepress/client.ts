import { defineClientConfig } from '@vuepress/client'
import Project from './components/project/project.vue'
import NavLable from './components/navLable/navLable.vue'
import WjWorks from './components/wjWorks/wjWorks.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }) { },
  setup() { },
  layouts: {
    Project,           // 自定义项目路径
    NavLable,          // 导航标签
    WjWorks,           // 小王同学作品集
  },
  rootComponents: [],
})