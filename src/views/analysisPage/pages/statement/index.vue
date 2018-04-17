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
  },
  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      vm.$store.dispatch('SET_INDICATOR')
      vm.$store.dispatch('SET_EDIT_OPTION_LIST')
    })
  }
}
</script>

<style lang="scss">
  .statement-container {
    padding: 0.5% 1%;
    box-sizing: border-box;
  }
</style>
