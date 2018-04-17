<template>
  <div class="headerMiddle">
    <el-menu mode="horizontal" default-active="/homePage/analysisPage" router>
      <el-menu-item index="/homePage/analysisPage">
        <svg-icon icon-class="analysis" />
        分析
      </el-menu-item>
      <el-menu-item index="/homePage/modelingPage">
        <svg-icon icon-class="modeling" />
        建模
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
    flex: 1;
    position: relative;
    .el-menu {
      position: absolute;
      top: 18%;
      left: 26.3%;
      box-sizing: border-box;
      width: 47.4%;
      height: 64%;
      border: 2px solid #29b8f3;
      .el-menu-item {
        height: 100%;
        width: 50%;
        padding: 0;
        font-size: 0.875rem;
        color: #555555;
        line-height: 2.286;
        border-bottom: none;
        text-align: center;
        svg {
          margin-right: 8px;
        }
      }
      .is-active {
        background-color: #29b8f3;
        color: #ffffff;
      }
    }
  }
</style>
