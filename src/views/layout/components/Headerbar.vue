<template>
  <div class="layout-headerBar">
    <header-left />
    <header-middle />
    <header-right/>
  </div>
</template>

<script>
import headerLeft from './headerLeft'
import headerMiddle from './headerMiddle'
import headerRight from './headerRight'

export default {
  name: 'Headerbar',
  components: {
    headerLeft,
    headerMiddle,
    headerRight
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  .layout-headerBar {
    height: 100%;
    border-bottom: 2px solid #afb1b3;
    box-sizing: border-box; 
    display: flex;
  }
</style>
