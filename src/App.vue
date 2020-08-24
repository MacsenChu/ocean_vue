<template>
  <div id="app">
    <Nav :name="this.$route.name" />
    <SideBar />
    <router-view />
  </div>
</template>

<script>
import Nav from './components/Nav'
import SideBar from './components/SideBar'
export default {
  components: {
    Nav,
    SideBar
  },
  data () {
    return {
      show: true
    }
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
  #app {
  }
</style>
