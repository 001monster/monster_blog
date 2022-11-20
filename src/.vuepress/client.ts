import { defineClientConfig } from '@vuepress/client'
import Project from './components/project.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }){},
  setup(){},
  layouts: {
    Project,           // 自定义项目路径
  },
  rootComponents: [],
})