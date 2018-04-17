<template>
  <div>
    <img src="../../assets/images/add_newproject.png" alt="创建新项目" @click="handleCreate">
    <span>
      创建新项目
    </span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'defaultHomePage',
  computed: {
    ...mapGetters([
      'createDialogVisible'
    ])
  },
  created() {
  },
  methods: {
    handleCreate() {
      this.$store.commit('SET_createDialogVisible', true)
    }
  }
}
</script>

<style lang="scss" scoped>
  div {
    height: 92%;
    text-align: center;
    img {
      margin-top: 13rem;
      height: 2.7rem;
      width: auto;
    }
    span {
      display: block;
      margin-top: 1.125rem;
      font-size: 0.875rem;
      color: #222222;
    }
  }
</style>
