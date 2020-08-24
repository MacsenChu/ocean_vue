<template>
  <nav id="menu">
    <el-drawer
      :visible="drawer"
      direction="ltr"
      :with-header="false"
      :before-close="closeSideBar"
      size="300px">
      <el-input v-model="input" placeholder="Search"></el-input>
      <el-menu
        :default-active="activeIndex"
        background-color="#1f2d39"
        text-color="#FFFFFF"
        @select="closeSideBar"
        router>
        <el-menu-item :index="menu.path" v-for="menu in filerMenuInfo" :key="menu.id">
          <i :class="['i-' + menu.name, 'i-small']"></i>
          <span>{{ menu.name }}</span>
        </el-menu-item>
      </el-menu>
    </el-drawer>
  </nav>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'SideBar',
  data () {
    return {
      input: ''
    }
  },
  created () {
    this.$store.dispatch('header/getMenuInfo')
  },
  computed: {
    ...mapState({
      drawer: state => state.header.drawer,
      menuInfo: state => state.header.menuInfo
    }),
    activeIndex () {
      return this.$route.path === '/home' ? '/' : this.$route.path
    },
    filerMenuInfo () {
      return this.menuInfo.filter(_ => _.name.indexOf(this.input) !== -1)
    }
  },
  methods: {
    ...mapMutations({
      switchSideBar: 'header/switchSideBar'
    }),
    closeSideBar () {
      this.switchSideBar(this.drawer)
    }
  }
}
</script>

<style lang="scss" scoped>
  #menu {
    .el-menu {
      border: none;
      /deep/ .el-menu-item .search {
        background-color: #0D1419;
      }
    }
    /deep/ .el-drawer__body {
      background-color: #0D1419;
    }
    /deep/ .el-input__inner {
      color: #FFFFFF;
      height: 50px;
      border-radius: 0;
      border-color: #0D1419;
      margin: 0;
      padding: 10px 10px 10px 20px;
      background-color: #0D1419;
    }
    /deep/ .el-menu-item {
      height: 50px;
      display: flex;
      align-items: center;
    }
    li.el-menu-item.is-active {
      &.i {
        color: #0e1419 !important;
      }
      background: #587ea9 !important;
      color: #0e1419;
    }
  }
</style>
