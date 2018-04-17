<template>
  <div class="customer-sidebar">
    <div>
      <label>客户分群</label>
      <img src="../../../../../assets/images/add_customer.png" alt="添加客户分群">
    </div>
    <el-menu
      default-active="2"
      background-color="#1b80b3"
      text-color="#7ACDF2">
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
    width: 18.33%;
    background-color: #1b80b3;
    color: #7ACDF2;
    & > div {
      height: 7.21%;
      padding: 0 5%;
      box-sizing: border-box;
      border-bottom: 1px solid #7ACDF2;
      label {
        position: relative;
        top: 29.27%;
        font-size: 1.0625rem;
        line-height: 1;
        display: inline-block;
      }
      img {
        float: right;
        position: relative;
        top: 22.5%;
        height: 55%;
        width: auto;
      }
    }
    .el-menu {
      // width: 100%!important;
      border: none;
      height: 92.79%;
    }
  }
</style>
