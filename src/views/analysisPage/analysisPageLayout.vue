<template>
  <div class="analysis-container">
    <el-menu default-active="/homePage/analysisPage/dashboard" mode="horizontal" class="main_nav" router>
      <el-menu-item index="/homePage/analysisPage/dashboard">分析看板</el-menu-item>
      <el-menu-item index="/homePage/analysisPage/statement">分析报表</el-menu-item>
      <el-menu-item index="/homePage/analysisPage/customer">客户分群</el-menu-item>
    </el-menu>
  
    <router-view style="height: 94%;" />

    <el-dialog title="创建项目" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item>
          <el-input v-model="form.name" auto-complete="off" placeholder="项目名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.description" auto-complete="off" placeholder="项目简介（选填）"></el-input>
        </el-form-item>
        <el-form-item>
          <el-select v-model="form.region" placeholder="数据类型">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleComplete">完成并创建</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleCreateModule">从模板创建项目</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <el-dialog title="从模板中创建项目" :visible.sync="moduleDialogFormVisible">
      <el-container>
        <el-aside>
          <el-menu
      default-active="2">
            <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">我的模板</span>
      </el-menu-item>
            <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">银行业</span>
      </el-menu-item>
            <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title">电商/零售</span>
      </el-menu-item>
            <el-menu-item index="4">
        <i class="el-icon-menu"></i>
        <span slot="title">教育行业</span>
      </el-menu-item>
            <el-menu-item index="5">
        <i class="el-icon-menu"></i>
        <span slot="title">直销</span>
      </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main></el-main>
      </el-container>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'analysisPage',
  data() {
    return {
      isEmpty: false,
      activeIndex: '',
      dialogFormVisible: false,
      moduleDialogFormVisible: false,
      form: {
        name: '',
        description: ''
      }
    }
  },
  methods: {
    handleCreate() {
      this.dialogFormVisible = true
    },
    handleComplete() {
    },
    handleCreateModule() {
      this.moduleDialogFormVisible = true
    }
  }
}
</script>

<style lang="scss">
  .analysis-container {
    height: 92%;
    .el-menu.main_nav {
      height: 6%;
      width: 100%;
      padding: 0 35%;
      box-sizing: border-box;
      display: flex;
      .el-menu-item {
        padding: 0;
        text-align: center;
        height: 100%;
        flex: 1;
        font-size: 0.8125rem;
        line-height: 2.69;
      }
      .is-active {
        color: #29B1EC;
        border-bottom: 2px solid #29B1EC;
      }
    }
  }
</style>
