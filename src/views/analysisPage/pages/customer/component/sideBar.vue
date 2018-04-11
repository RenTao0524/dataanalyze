<template>
  <div class="customer-sidebar">
    <div>
      <label>客户分群</label>
      <svg-icon icon-class="add" />
    </div>
    <el-menu
      default-active="2"
      background-color="#409eff"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item v-for='item in getClusteringList' :index="item.clusteringName" :key="item.clusteringName">
        <span slot="title">{{item.clusteringName}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import customerGroup from '@/api/customerGroup'
export default {
  name: 'sideBar',
  data() {
    return {
      getClusteringList: []
    }
  },
  created() {
    customerGroup.getClusteringList(22).then(res => {
      console.log(res)
      this.getClusteringList = res
    })
  }
}
</script>

<style lang="scss">
  .customer-sidebar {
    height: 100%;
    width: 100%;
    background-color: #409eff;
    color: #ffffff;
    & > div {
      height: 40px;
      box-sizing: border-box;
      border-bottom: 1px solid #ffffff;
    }
  }
</style>
