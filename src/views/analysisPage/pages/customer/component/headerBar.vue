<template>
  <div>
    <div>
      <label>当前分群名称：{{clusteringName}}</label>
    </div>
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
