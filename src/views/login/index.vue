<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm">
      <img src="../../assets/images/logo.png" alt="logo">
      <el-input v-model="loginForm.username" class="userName" placeholder="用户名" clearable></el-input>
      <el-input v-model="loginForm.password" class="passWord" type="password" placeholder="密码"></el-input>
      <el-button @click="handleLogin">立即登录</el-button>
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
    text-align: center;
    position: absolute;
    top: 25%;
    left: 40%;
    width: 20%;
    img {
      height: 1.6rem;
      width: auto;
    }
    .el-input {
      input {
        font-size: 0.75rem;
        line-height: 3;
        height: 3em;
        color: #555555;
      }
    }
    .el-input.is-active .el-input__inner, .el-input__inner:focus {
      border-color: #dcdfe6;
      outline: 0;
    }
    .userName {
      margin-top: 4rem; 
    }
    .passWord {
      input {
        border-top: none;
      }
    }
    .el-button {
      margin-top: 0.75rem;
      width: 100%;
      border: none;
      background-color: #29b1ec;
      padding: 0;
      span {
        font-size: 0.75rem;
        color: #ffffff;
        display: inline-block;
        line-height: 3;
      }
    }
  }
}
</style>
