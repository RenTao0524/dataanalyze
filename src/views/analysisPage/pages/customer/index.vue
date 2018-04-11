<template>
  <el-container class="customer-container">
    <el-aside>
      <side-bar></side-bar>
    </el-aside>
    <el-container>
      <el-header>
        <header-bar />
      </el-header>
      <el-main>
        <main-part />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import sideBar from './component/sideBar'
import headerBar from './component/headerBar'
import mainPart from './component/mainPart'

export default {
  name: 'customer',
  components: {
    sideBar,
    headerBar,
    mainPart
  }
}
</script>

<style lang="scss">
  .customer-container {
    height: 100%;
    .el-aside {
      height: 100%;
      width: 20%!important;
    }
  }
</style>

