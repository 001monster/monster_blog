<template>
    <div class="theme-container no-sidebar has-toc">
        <Navbar/>
        
        <div class="page blog">
            <div class="blog-page-wrapper">
                <main class="blog-home" id="main-content">
                    <!-- 项目展示 -->
                    <div class="project-title">
                        <p class="title">项目展示</p>
                        <p>以下项目均由本人开发，均可自由使用，部分开源。</p>
                        <a href="">🔥 前往 Github 克隆项目</a>
                    </div>

                    <!-- 内容开始 -->
                    <div class="item-root">
                        <div class="item" v-for="(item, index) in projectData" :key="item">
                            <h2 class="item-title">{{index}}</h2>
                            <div class="project-item-root">
                                <div class="project-item" v-for="(projectItem, index) in item" :key="index">
                                    <div class="projectImg">
                                        <img @click="seeImg(projectItem.img)" :src="projectItem.img">
                                    </div>
                                    <div class="title-root">
                                        <div class="title">
                                            <b><a :href="projectItem.link" target="_blank">{{projectItem.title}}</a></b>
                                            <p v-if="projectItem.soureceCode">
                                                <i class="iconfont icon-suyuanmaguanli"></i>
                                                <a :href="projectItem.codeLink" target="_blank">源码</a>
                                            </p>
                                        </div>
                                        
                                        <p class="desc-root">{{projectItem.desc}}</p>

                                        <p class="lable-root">
                                            <span v-for="(lalbeItem, index) in projectItem.lable" :key="index">
                                                {{lalbeItem.lb}}<i :style="{backgroundColor: lalbeItem.bg}" class="icon"></i>
                                            </span>
                                        </p>
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
            <img :src="urlImg" alt="项目图片" @click.stop>
            <span @click="closeBtn" class="close">关闭</span>
        </div>
    </div>        
</template>

<script>
import Navbar from "@theme-hope/modules/navbar/components/Navbar.js";
import PageFooter from "@theme-hope/components/PageFooter.js";

export default{
    components: { Navbar, PageFooter },

    data() {
        return {
            projectData: [],
            urlImg: '',
            isImg: false
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
        }
    }
}
</script>

<style lang="scss" scoped>
@import './project.scss';
</style>