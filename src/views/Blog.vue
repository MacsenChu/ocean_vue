<template>
  <div id="content">
    <article v-for="article in articleList" :key="article.id">
      <img :src="article.image" />
      <h2><a href="#">{{ article.title }}</a></h2>
      <p v-html="article.desc">
      </p>
      <div class="a-meta">
        <a href="#"><i class="i-comments i-small"></i>{{ article.comments }}</a>
        <a href="#"><i class="i-author i-small"></i>{{ article.author }}</a>
        <a href="#"><i class="i-calendar i-small"></i>{{ article.date }}</a>
      </div>
    </article>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      articleList: []
    }
  },
  created () {
    this.getArticleList()
  },
  methods: {
    async getArticleList () {
      const res = await axios.get('/api/articles')
      if (res.status !== 200) {
        this.$message.error('文章列表获取失败')
      } else {
        this.articleList = res.data
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  #content {
    padding: 10px;
  }
  article {
    padding-top:30px;
    margin-bottom:30px;
    border-top:1px solid #eee;
    &:first-child {
      border-top: 0;
      margin-top: 0;
      padding-top: 0;
    }
    h3 a, h2 a {
      text-decoration: none !important;
      font-weight: bold;
    }
    h3 a:hover, article h2 a:hover {
      text-decoration: none;
    }
    div.a-meta {
      font-size:11px;
    }
    div.a-meta > a {
      text-decoration:none;
    }
    img {
      width:100%;
    }
  }
</style>
