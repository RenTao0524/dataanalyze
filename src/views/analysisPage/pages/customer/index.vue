<template>
  <div class="customer-container">
    <side-bar/>
    <div class="customer-main-view">
      <header-bar />
      <router-view style="height: 92.61%;"/>
    </div>
  </div>
</template>

<script>
import sideBar from './component/sideBar'
import headerBar from './component/headerBar'

export default {
  name: 'customer',
  components: {
    sideBar,
    headerBar
  }
}
</script>

<style lang="scss">
  .customer-container {
    height: 100%;
    display: flex;
    .customer-main-view {
      width: 81.67%;
      height: 100%;
      padding: 1%;
      box-sizing: border-box;
    }
  }
</style>

