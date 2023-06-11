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
            <a href="">🧡 喜欢小王同学 🧡</a>
          </div>

          <!-- 内容开始 -->
          <div class="item-root" ref="rootWith">
            <div v-for="(data, index) in projectData" :key="index">
              <h3>{{ index }}</h3>
              <div class="type-root">
                <div class="item" v-for="(item, index) in data" :key="index">
                  <div class="box" @click="seeImg(item.img)">
                    <img :src="item.img" alt="小王同学" />
                    <div class="auth">
                      <b class="item-title"
                        ><span>{{ item.title }}</span></b
                      >
                      <div class="center">{{ item.desc }}</div>

                      <div class="time">
                        <span>原创</span>
                        <span class="number">❤ 99+</span>
                      </div>
                    </div>
                  </div>
              </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>

    <PageFooter />

    <div class="seeimg-root" :class="{'seeimg-root-active': isImg}" @click="mask">
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
      screenWidth: 0,
      imageWith: 280
    }
  },

  created() {
    this.projectData = this.$page.frontmatter.projectData
    
  },

  async mounted() {
    this.setPosition()

    window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth
      })();
    };
  },

  methods: {
    seeImg(img) {
      this.urlImg = img
      this.isImg = true
    },

    mask() {
      this.isImg = false
    },

    closeBtn() {
      this.isImg = false
    },

    // 计算列数
    cal() {

      return new Promise((resolve, reject) => {
        let containerWidth = (this.$refs.rootWith).clientWidth // 容器的宽度

        // 计算列数
        let columns = Math.floor(containerWidth / this.imageWith) 

        // 计算间隙
        let spaceNumber = columns + 1 // 间隙数量
        let leftSpace = containerWidth - columns * this.imageWith

        // 计算剩余空间
        let space = leftSpace / spaceNumber

        resolve(
          {
          space: space,
          columns: columns
        }
        )
        
      })
    },

    async setNewPosition(rootBit, j) {
      let info = await this.cal() // 得到列数 和 间隙的空间
      let nextTops = new Array(info.columns) // 改数据的长度为列数,每一项表示该列的下一个图片的纵坐标
      let dataLen = Object.values(this.projectData)
      nextTops.fill(0) // 将数组的每一项填充为

      for(let i = 0; i < dataLen[j].length; i++) {
        let img = rootBit.children[1].children[i] // 获取元素高度
        
        let mainTop = Math.min.apply(null, nextTops) // 找到最小的值作为纵坐标
        img.style.top = mainTop + 'px'

        let index = nextTops.indexOf(mainTop)

        nextTops[index] += img.clientHeight + info.space

        let left  = (index + 1) * info.space + index * this.imageWith
        img.style.left = left + 'px'
        
      }
      return Math.max.apply(null, nextTops)
    },

    // 计算图片位置
    async setPosition() {
      let divContainer = this.$refs.rootWith // 获取根元素
      let dataLen = Object.values(this.projectData)
      
      for(let j = 0; j < dataLen.length; j++) {
        let rootBit = divContainer.children[j]
        let max = await this.setNewPosition(rootBit, j)
        rootBit.children[1].style.height = max + 'px'
      }
    }
  },

  watch: {
    screenWidth() {
      this.setPosition()
    }
  }
}
</script>

<style lang="scss" scoped>
@import './wjWorks.scss';
</style>