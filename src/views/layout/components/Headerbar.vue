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

<style lang="scss">
  .layout-headerBar {
    height: 8%;
    padding: 0 2%;
    box-sizing: border-box;
    display: flex;
  }
</style>
