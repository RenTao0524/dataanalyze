<template>
  <div class="dashboard-sidebar">
    <div>
      <label>看板列表</label>
      <svg-icon icon-class="add" />
      <svg-icon icon-class="add" />
    </div>
    <div>
      <el-menu>
        <el-submenu v-for="item in AnalysisFolderList" :key="item.folderId" :index="item.folderName"
          @drop.native="drop($event)" @dragover.native="allowDrop($event)">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{item.folderName}}</span>
            <svg-icon icon-class="add" />
          </template>
          <el-menu-item-group>
            <el-menu-item v-for="itemChild in item.dashboard" :key="itemChild.dashboardId" :index="itemChild.dashboardName"
            :id="itemChild.dashboardName" draggable='true' @dragstart.native='drag($event)' class="white"
            style="background-color: white;!important">
              {{itemChild.dashboardName}}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
import dashBoard from '@/api/dashBoard'

export default {
  name: 'sideBar',
  data() {
    return {
      AnalysisFolderList: []
    }
  },
  created() {
    dashBoard.getAnalysisFolderList(22).then(res => {
      console.log(res)
      this.AnalysisFolderList = res
    })
  },
  methods: {
    drag(ev) {
      console.log(ev)
      ev.dataTransfer.setData('Text', ev.target.id)
      console.log(ev)
    },
    drop(ev) {
      ev.preventDefault()
      var data = ev.dataTransfer.getData('Text')
      console.log(data)
      ev.target.appendChild(document.getElementById(data))
    },
    allowDrop(ev) {
      console.log(ev)
      ev.preventDefault()
    }
  }
}
</script>

<style lang="scss">
  .dashboard-sidebar {
    .white {

    }
  }
</style>
