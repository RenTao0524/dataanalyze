<template>
  <div class="headerBar">
    <el-dropdown trigger="click">
      <span>个人项目</span>
      <svg-icon icon-class="open" />
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item>双皮奶</el-dropdown-item>
        <el-dropdown-item>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-input placeholder="在个人项目中搜索" suffix-icon="el-icon-search">
    </el-input>

    <el-menu :default-active="activeIndex" mode="horizontal" router>
      <el-menu-item index="/homePage/analysisPage">
        <svg-icon icon-class="analysis" />分析
      </el-menu-item>
      <el-menu-item index="/homePage/modelingPage">
        <svg-icon icon-class="modeling" />建模
      </el-menu-item>
    </el-menu>

    <svg-icon icon-class="settings" />
    <svg-icon icon-class="clock" />
    <svg-icon icon-class="questionMark" />

    <el-dropdown trigger="click">
      <span>用户姓名</span>
      <svg-icon icon-class="open" />
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人设置</el-dropdown-item>
        <el-dropdown-item>修改密码</el-dropdown-item>
        <el-dropdown-item>注销</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'Headerbar',
  data() {
    return {
      activeIndex: ''
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  .headerBar {
    height: 100%;
    .el-input {
      width: 200px;
      border-radius: 25px;
    }
    .el-menu {
      display: inline-block;
      height: 100%;
    }
  }
</style>
