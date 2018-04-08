<template>
  <el-container>
    <el-aside width='180px'>
      <el-menu
      default-active="2"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b" @ondrop="drop(event)" @ondragover="allowDrop(event)">
        <el-menu-item index="2" draggable="true" @dragstart="drag($event)">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" draggable="true" @dragstart="drag($event)">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4" draggable="true" @dragstart="drag($event)">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container v-if="isEmpty">
      请添加分析看板
    </el-container>
    <el-container v-else>
      <el-header></el-header>
      <el-main></el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'dashboard',
  data() {
    return {
      isEmpty: false
    }
  },
  methods: {
    drag(ev) {
      console.log(ev)
      ev.dataTransfer.setData('Text', ev.target.id)
    },
    drop(ev) {
      ev.preventDefault()
      var data = ev.dataTransfer.getData('Text')
      ev.target.appendChild(document.getElementById(data))
    },
    allowDrop(ev) {
      ev.preventDefault()
    }
  }
}
</script>
