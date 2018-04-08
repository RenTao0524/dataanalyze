<template>
  <el-container>
    <el-header>
      <Headerbar></Headerbar>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
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
