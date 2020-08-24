<template>
  <div>
    <div class="block">
      Explore our site
    </div>
    <div class="exploreSiteFullPane">
      <a href="#"
         :class="['explorePane', name === site.name ? 'active' : '',index === 1 || index === 4 ? 'middle' : '']"
         v-for="(site, index) in siteList" :key="site.id">
        <span class="i-pane i-blue">
          <i :class="site.icon"></i>
        </span>
        <h4>{{ site.name }}</h4>
      </a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'exploreSiteFullPane',
  props: ['name'],
  data () {
    return {
      siteList: []
    }
  },
  created () {
    this.getSiteList()
  },
  methods: {
    async getSiteList () {
      try {
        const res = await axios.get('/api/sites')
        if (res.status !== 200) {
          this.$message.error('site列表获取失败')
        } else {
          this.siteList = res.data
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .block {
    font-size: 14px;
    font-weight: bold;
    background-color: #f1f2f4;
    text-align: center;
    padding: 15px;
    border-top: 1px solid #ccd2d8;
    border-bottom: 1px solid #ccd2d8;
    color: #233241;
  }
  .exploreSiteFullPane {
    padding: 5px;

    a.explorePane {
      text-decoration: none;
    }

    .explorePane {
      width: 33.3333%;
      float: left;
      padding: 1%;
      border-bottom: 1px solid #DDD;
      text-align: center;
      text-decoration: none;
      &.middle {
        border-left: 1px solid #DDD;
        border-right: 1px solid #DDD;
      }

      .i-pane {
        float: none;
        margin: 0px;
        display: inline-block;
      }

      &:active .i-pane, &:focus .i-pane, &:hover .i-pane, &.active .i-pane {
        background-color: #233241;
      }

      &:active, &:focus, &:hover {
        cursor: pointer;
      }

      .block {
        font-size: 14px;
        font-weight: bold;
        background-color: #f1f2f4;
        text-align: center;
        padding: 15px;
        border-top: 1px solid #ccd2d8;
        border-bottom: 1px solid #ccd2d8;
        color: #233241;
      }
    }
  }
</style>
