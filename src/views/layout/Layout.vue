<template>
  <el-container class="layout-container">
    <el-header>
      <Headerbar></Headerbar>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
import Headerbar from './components/Headerbar'

export default {
  name: 'layout',
  components: {
    Headerbar
  }
}
</script>

<style lang="scss">
  .layout-container {
    .el-header {
      height: 10%!important;
    }
    .el-main {
      height: 90%;
    }
  }
</style>
