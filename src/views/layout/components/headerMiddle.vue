<template>
  <div class="headerMiddle">
    <el-menu mode="horizontal" router>
      <el-menu-item index="/homePage/analysisPage">
        <svg-icon icon-class="analysis" />分析
      </el-menu-item>
      <el-menu-item index="/homePage/modelingPage">
        <svg-icon icon-class="modeling" />建模
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'headerMiddle'
}
</script>

<style lang="scss">
  .headerMiddle {
    flex: 1
  }
</style>
