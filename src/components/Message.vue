<template>
  <el-form ref="form" :model="input" :rules="rules">

    <el-form-item label="Full Name" prop="name">
      <el-input placeholder="Name" v-model="input.name"></el-input>
    </el-form-item>

    <el-form-item label="Email" prop="email">
      <el-input placeholder="Email" v-model="input.email"></el-input>
    </el-form-item>

    <el-form-item label="Message" prop="message">
      <el-input type="textarea" rows="4" placeholder="Message" v-model="input.message"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submit">
        <slot name="submit">SEND</slot>
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'Message',
  data () {
    const checkName = (rule, value, callback) => {
      if (value.trim().length === 0) {
        setTimeout(() => {
          callback(this.$message.error('请输入您的用户名'))
        }, 0)
      }
      return callback()
    }
    // 验证邮箱的规则
    const checkEmail = (rule, value, callback) => {
      if (value.trim().length === 0) {
        setTimeout(() => {
          callback(this.$message.error('请输入您的邮箱'))
        }, 0)
      } else {
        // 验证邮箱的正则表达式
        const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/

        if (regEmail.test(value)) {
          // 合法的邮箱
          return callback()
        }
        setTimeout(() => {
          callback(this.$message.error('请输入合法的邮箱'))
        }, 0)
      }
    }
    const checkMessage = (rule, value, callback) => {
      if (value.trim().length === 0) {
        setTimeout(() => {
          callback(this.$message.error('说点什么吧...'))
        }, 0)
      }
      return callback()
    }
    return {
      input: {
        name: '',
        email: '',
        message: ''
      },
      rules: {
        name: [
          { validator: checkName, trigger: 'blur' },
          { required: true, message: '请输入您的用户名', trigger: 'blur' }
        ],
        email: [
          { validator: checkEmail, trigger: 'blur' },
          { required: true, message: '请输入您的邮箱', trigger: 'blur' }
        ],
        message: [
          { validator: checkMessage, trigger: 'blur' },
          { required: true, message: '说点什么吧...', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$emit('submitComment', this.input)
          this.resetForm()
        } else {
          return false
        }
      })
    },
    resetForm () {
      this.input = {
        name: '',
        email: '',
        message: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
</style>
