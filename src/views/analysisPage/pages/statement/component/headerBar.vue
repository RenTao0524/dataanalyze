<template>
  <div class="statement-header">
    <div>
      <el-button>报表列表</el-button>
      <el-button>保存为报表</el-button>
      <el-button style="float: right;">导出数据</el-button>
      <el-button style="float: right;">刷新数据</el-button>
    </div>
    <div style="text-align: center;">
      <span>
        收起
        <svg-icon icon-class="close" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headerBar'
}
</script>

<style lang="scss">
  .statement-header {
    background-color: #ffffff;
    & > div {
      height: 40px;
      border-bottom: 1px solid #e8e3e3;
      box-sizing: border-box;
    }
  }
</style>
