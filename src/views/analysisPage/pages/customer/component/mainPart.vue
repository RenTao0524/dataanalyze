<template>
  <div>
    <div>
      <label>用户分群列表 | 更新时间：{{updateTime}} 总人数：{{totalNum}}</label>
    
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          列目显示<svg-icon icon-class="open" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <label>刷新</label>
      <label>|</label>
      <label>导出数据</label>
    </div>
    <div>
      <el-table
    :data="tableData"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
    <el-table-column
      prop="客户ID"
      label="客户ID"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="客户姓名"
      label="客户姓名"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="客户等级"
      label="客户等级"
      :formatter="formatter">
    </el-table-column>
  </el-table>
    </div>
  </div>
</template>

<script>
import customerGroup from '@/api/customerGroup'

export default {
  name: 'mainPart',
  data() {
    return {
      totalNum: 4,
      updateTime: '2018-03-30 15:00:00',
      tableData: []
    }
  },
  created() {
    customerGroup.getClusteringResult(1, 2).then(res => {
      console.log(res)
      this.tableData = res.customerList
    })
  }
}
</script>
