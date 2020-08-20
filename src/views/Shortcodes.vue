<template>
  <div id="content">
    111
    <h3 class="title">Charts</h3>
    <span>
      <el-progress type="circle" :percentage="86"></el-progress>
      <h3>HTML</h3>
    </span>
    <span>
      <el-progress type="circle" :percentage="56" status="warning"></el-progress>
      <h3>CSS</h3>
    </span>
    <span>
      <el-progress type="circle" :percentage="36" status="exception"></el-progress>
      <h3>jQuery</h3>
    </span>
  </div>
</template>

<script>
export default {
  data () {

  }
}
</script>

<style lang="scss" scoped>
  #content {
    padding: 10px;
  }
</style>
