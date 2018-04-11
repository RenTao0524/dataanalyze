<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm">
      <label>chimarea</label>
      <el-form-item>
        <el-input v-model="loginForm.username" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="loginForm.password" type="password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="handleLogin" type="primary">立即登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: '1111111'
      }
    }
  },
  created() {
    // window.addEventListener('hashchange', this.afterQRScan)
  },
  methods: {
    handleLogin() {
      this.$router.push({ path: '/homePage/analysisPage/dashboard' })
    }
  },
  destroyed() {
    // window.removeEventListener('hashchange', this.afterQRScan)
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.login-container {
  height: 100%;
  .el-form {
    position: absolute;
    left: 40%;
    top: 35%;
    width: 20%;
    height: 30%;
    label {
      width: 100%;
      display: inline-block;
      text-align: center;
      color: #409EFF;
      font-size: 1rem;
    }
    .el-button {
      width: 100%;
    }
  }
}
</style>
