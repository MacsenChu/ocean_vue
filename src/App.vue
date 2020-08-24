<template>
  <div id="app">
    <Nav :name="this.$route.name" />
    <router-view />
  </div>
</template>

<script>
import Nav from './components/Nav'
export default {
  components: {
    Nav
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
