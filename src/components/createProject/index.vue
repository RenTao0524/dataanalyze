<template>
  <div class="createProjectDialog">

  </div>
</template>

<script>
export default {
  name: 'createProjectDialog',
  props: ['createStatus'],
  created() {
    console.log(this.createStatus)
  }
}
</script>
