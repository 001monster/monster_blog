<template>
  <div class="theme-container no-sidebar has-toc">
    <Navbar />

    <div class="page blog">
      <div class="blog-page-wrapper">
        <main class="blog-home" id="main-content">
          <!-- 项目展示 -->
          <div class="project-title">
            <p class="title">作品集展示</p>
            <p>以下作品均由小王同学，制作，不可商用</p>
            <a href="">🔥 前往 Github 克隆项目</a>
          </div>

          <!-- 内容开始 -->
          <div class="item-root">
            <div class="item" v-for="(item, index) in projectData" :key="index">
              <div class="box" @click="seeImg(item.img)">
                <img :src="item.img" alt="小王同学" />
                <div class="auth">
                  <b class="item-title"
                    ><span>{{ item.title }}</span></b
                  >
                  <div class="center">{{ item.desc }}</div>

                  <div class="time">
                    <span>{{ item.date }}</span>
                    <span class="number">❤ 99+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>

    <PageFooter />

    <div class="seeimg-root" v-show="isImg" @click="mask">
      <img :src="urlImg" alt="项目图片" @click.stop />
      <span @click="closeBtn" class="close">关闭</span>
    </div>
  </div>
</template>

<script>
import Navbar from '@theme-hope/modules/navbar/components/Navbar.js'
import PageFooter from '@theme-hope/components/PageFooter.js'

export default {
  components: { Navbar, PageFooter },

  data() {
    return {
      projectData: [],
      urlImg: '',
      isImg: false,
    }
  },

  created() {
    this.projectData = this.$page.frontmatter.projectData
  },

  methods: {
    seeImg(img) {
      this.urlImg = img
      this.isImg = true
      console.log(img)
    },

    mask() {
      this.isImg = false
    },

    closeBtn() {
      this.isImg = false
    },
  },
}
</script>

<style lang="scss" scoped>
@import './wjWorks.scss';
</style>