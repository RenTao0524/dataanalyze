<template>
  <div class="statement-container">
    <header-bar />
    <filter-part />
    <bottom-part />
  </div>
</template>

<script>
import headerBar from './component/headerBar'
import filterPart from './component/filterPart'
import bottomPart from './component/bottomPart'

export default {
  name: 'statement',
  components: {
    headerBar,
    filterPart,
    bottomPart
  }
}
</script>

<style lang="scss">
  .statement-container {
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
  }
</style>
