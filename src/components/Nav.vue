<template>
  <el-container>
    <el-header class="header" height="51px">
      <a href="void:javascript(0)" @click="showSideBar"></a>
      <span id="Logo" class="svg">
        <img src="../assets/images/logo.svg" />
      </span>
      <a class="backBtn" href="javascript:history.back();"></a>
    </el-header>
    <el-header class="subHeader" height="40px">
      <i :class="['i-' + name, 'i-small']"></i>
      <span v-if="name === 'Home'">Welcome friend!</span>
      <span v-else>Ocean / {{ name }}</span>
    </el-header>
  </el-container>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: ['name'],
  name: 'Nav',
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    ...mapMutations({
      switchSideBar: 'header/switchSideBar'
    }),
    showSideBar () {
      this.switchSideBar(this.drawer)
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-container {
    .header {
      background: #587eac;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
      text-align: center;
      line-height: 51px;
      height: 51px;
      padding: 0 50px;
      a {
        background: url('../assets/font/icons.svg') no-repeat -21px -303px;
        display: block;
        width: 40px;
        height: 40px;
        position: absolute;
        top: 5px;
        left: 10px;
        &.backBtn
        {
          background: url('../assets/font/icons.svg') no-repeat -97px -303px;
          display: block;
          width: 40px;
          height: 40px;
          position: absolute;
          top: 5px;
          right: 0;
          left: inherit;
        }
      }
      #Logo {
        height: 41px;
        display: inline-block;
        padding-top: 10px;
        line-height: 40px;

        img {
          max-height:40px;
        }

        &.svg {
          padding:0px;

          img {
            max-height: 70px;
            top: -9px;
            position: relative;
          }
        }
      }
    }
    .subHeader {
      background-color:#233241;
      font-size: 15px;
      color: #fff;
      text-align: center;
      line-height: 40px;
      height: 40px;
      padding: 0 10px;
      position:relative;
      width: 100%;
      i.i-home {
        width:72px;
        height:72px;
        background-position: 0px -72px;
        top: 50%;
        left:50%;
        margin: -36px 0px 0px -65px;
      }
      i.i-small {
        position: absolute;
        left: 16px !important;
        top: 11px !important;
        margin: 0;
      }
      i.i-home.i-small {
        width:19px;
        height:19px;
        background-position: -9px -225px;
        top: 3px;
      }
    }
  }
</style>
