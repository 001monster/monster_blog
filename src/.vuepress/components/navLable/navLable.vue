<template>
  <div class="theme-container no-sidebar has-toc">
    <Navbar />

    <div class="page blog">
      <div class="blog-page-wrapper">
        <main class="blog-home" id="main-content">
          <nav class="left-sidebar">
            <div id="sticky">
              <div class="nav-lable">导航分类</div>
              <ul>
                <li v-for="(item, index) in navDtaList" :key="index">
                  <a :href="`#${index}`">{{ index }}</a>
                </li>
              </ul>
            </div>
          </nav>

          <div class="reight-root">
            <div
              class="right-nav"
              v-for="(itemData, index) in navDtaList"
              :key="index"
            >
              <h2 :id="index">{{ index }}</h2>
              <div class="item-root">
                <div class="n-item" v-for="(item, i) in itemData" :key="i">
                  <div class="icon-img">
                    <img :src="item.img" />
                  </div>
                  <div class="text-root">
                    <b
                      ><a :href="item.link" target="_blank">{{
                        item.title
                      }}</a></b
                    >
                    <p>{{ item.desc }}</p>
                    <span class="toolip" ref="spanWidth">{{ item.desc }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
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
      navDtaList: [],
    };
  },

  created() {
    this.navDtaList = this.$page.frontmatter.navDtaList;
  },
};
</script>

<style lang="scss" scoped>
@import "./navLable.scss";
</style>