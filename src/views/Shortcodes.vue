<template>
  <div>
    <div id="content">
      <h3 class="title">Charts</h3>
      <div class="chart">
      <span>
        <el-progress type="circle" :percentage="86" color="#9eb74e" :stroke-width="5"></el-progress>
        <h3>HTML</h3>
      </span>
        <span>
        <el-progress type="circle" :percentage="56" color="#e0af50" :stroke-width="5"></el-progress>
        <h3>CSS</h3>
      </span>
        <span>
        <el-progress type="circle" :percentage="36" color="#ff7a73" :stroke-width="5"></el-progress>
        <h3>jQuery</h3>
      </span>
      </div>
      <hr>
      <h3 class="title">Buttons</h3>
      <div class="btn">
        <el-button type="primary" size="mini">Button</el-button>
        <el-button type="danger" size="mini">Button</el-button>
        <el-button type="success" size="mini">Button</el-button>
        <el-button type="warning" size="mini">Button</el-button>
      </div>
      <h4 class="title">Big buttons</h4>
      <div class="btn">
        <el-button type="primary">Button</el-button>
        <el-button type="danger">Button</el-button>
        <el-button type="success">Button</el-button>
        <el-button type="warning">Button</el-button>
      </div>
      <hr>
      <h3 class="title">Notifications</h3>
      <div class="notifications">
        <el-alert title="Success - your request was successful" type="success" :closable="false"></el-alert>
        <el-alert title="Error - your request was unsuccessful" type="error" :closable="false"></el-alert>
        <el-alert title="Warning - there is no turn back" type="warning" :closable="false"></el-alert>
        <el-alert title="Info - Information" type="info" :closable="false"></el-alert>
      </div>
      <hr>
      <h1>H1 - Header one</h1>
      <h2>H2 - Header two</h2>
      <h3>H3 - Header three</h3>
      <h4>H4 - Header four</h4>
      <h5>H5 - Header five</h5>
      <h6>H6 - Header six</h6>
      <p>P - Paragraph</p>
      <hr>
      <h3 class="title">Columns</h3>
      <div class="columns twelve">
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
      </div>
      <hr>
      <div class="row">
        <div class="mobile-two">
          <h4 class="title">1/2</h4>
          Lorem Ipsum has been the standard dummy text.
        </div>
        <div class="mobile-two">
          <h4 class="title">1/2</h4>
          Lorem Ipsum has been the standard dummy text.
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="mobile-three">
          <h4 class="title">3/4</h4>
          Lorem Ipsum has been the industry's standard dummy text.
        </div>
        <div class="mobile-one">
          <h4 class="title">1/4</h4>
          Dummy text.
        </div>
      </div>
      <hr>
      <h3 class="title">Social icons</h3>
      <div class="socialMedia">
        <SocialLink />
        <SocialLink :dark="true"/>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import SocialLink from '../components/SocialLink'
import Footer from '../components/Footer'
export default {
  components: {
    SocialLink,
    Footer
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  #content {
    padding: 10px;
    .title {
      border-bottom:1px solid #eee;
      padding-bottom:10px;
    }
    .chart {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .el-progress.el-progress--circle {
        margin: 18px 2px 0 2px;
      }
      /deep/ .el-progress-circle {
        height: 85px!important;
        width: 85px!important;
      }
      span {
        h3 {
          text-align: center;
        }
      }
    }
    .btn {
      height: 42px;
    }
    .notifications {
      .el-alert {
        padding: 20px;
        margin: 0 0 20px;
      }
    }
  }
</style>
