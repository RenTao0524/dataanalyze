<template>
  <div class="defaultHomePage">
    <svg-icon icon-class="add" @click.native="handleCreate" />
    <br>
    创建项目
  </div>
</template>

<script>
export default {
  name: 'defaultHomePage'
}
</script>

<style lang="scss" scoped>
  div {
    height: 100%;
    vertical-align: middle;
    text-align: center;
  }
</style>
