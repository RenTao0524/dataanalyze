<template>
  <div class="layout-container">
    <Headerbar />
    <router-view />
  </div>
</template>

<script>
import Headerbar from './components/Headerbar'

export default {
  name: 'layout',
  components: {
    Headerbar
  }
}
</script>

<style lang="scss" scoped>
  .layout-container {
    height: 100%;
  }
</style>
