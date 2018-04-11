<template>
  <el-container>
    <el-aside width='180px'>
      <side-bar />
    </el-aside>
    <el-container v-if="isEmpty">
      请添加分析看板
    </el-container>
    <el-container v-else>
      <el-header>
        
      </el-header>
      <el-main>
        <main-part />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import sideBar from './component/sideBar'
import mainPart from './component/mainPart'

export default {
  name: 'dashboard',
  components: {
    sideBar,
    mainPart
  },
  data() {
    return {
      isEmpty: false
    }
  },
  methods: {
    drag(event) {
      // dom = event.currentTarget
      console.log(event)
      event.dataTransfer.setData('Text', event.target.id)
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
