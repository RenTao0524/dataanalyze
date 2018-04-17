<template>
  <div class="statement-header">
    <el-button>报表列表</el-button>
    <el-button>保存为报表</el-button>
    <el-button style="float: right;">导出数据</el-button>
    <el-button style="float: right;">刷新数据</el-button>
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
    border-bottom: 1px solid #e8e3e3;
    .el-button {
      margin: 0.4375rem 0 0.4375rem 0.5rem;
      padding: 0 10px;
      span {
        font-size: 0.75rem;
        line-height: 2.25;
        display: inline-block;
      }
    }
  }
</style>
