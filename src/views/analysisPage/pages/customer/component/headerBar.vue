<template>
  <div class="customer-headerBar">
    <label>当前分群名称：{{clusteringName}}</label>
  </div>
</template>

<script>
export default {
  name: 'headerBar',
  data() {
    return {
      clusteringName: '分群1'
    }
  }
}
</script>

<style lang="scss">
  .customer-headerBar {
    height: 7.39%;
    background-color: #ffffff;
  }
</style>
