<template>
  <div>
    <div id="content">
      <h2 class="title">Contact us</h2>

      <Message @submitComment="submitComment">
        <template v-slot:submit>SEND</template>
      </Message>

      <h2 class="title">Contact us</h2>
      <p>
        New York USA <br>
        5 Ave 128 St. <br>
        10000
      </p>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer'
import Message from '../components/Message'
export default {
  components: {
    Footer,
    Message
  },
  data () {
    return {
    }
  },
  methods: {
    submitComment (input) {
      alert('name: ' + input.name + '\nemail: ' + input.email + '\nmessage: ' + input.message)
    }
  }
}
</script>

<style lang="scss" scoped>
  div {
    #content {
      padding: 10px;
      .title {
        font-weight: bold;
        margin-bottom: 20px;
      }
      .el-form {
        /deep/ .el-form-item__label {
          line-height: 20px;
        }
      }
      .el-form-item {
        margin-bottom: 15px;
        /deep/ .el-textarea__inner {
          margin-bottom: 4px;
        }
        /deep/ .el-input__inner {
          margin: 0;
        }
        /deep/ .el-form-item__error {
          padding-top: 0;
        }
      }
    }
    .subFooter {
      position: fixed;
      bottom: 0;
    }
  }
</style>
