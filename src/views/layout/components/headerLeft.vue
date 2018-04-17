<template>
  <div class="headerLeft"> 
    <el-dropdown trigger="click">
      <span>{{projectChecked.prjName}}
        <svg-icon icon-class="open" />
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <el-input placeholder="搜索" suffix-icon="el-icon-search" style="width: 200px;">
          </el-input>
        </el-dropdown-item>
        <el-dropdown-item v-for="item in projectList" :key="item.prjId" @click.native="checkPorject(item)">{{item.prjName}}</el-dropdown-item>
        <el-dropdown-item divided @click.native="handleCreate">
          <svg-icon icon-class="add_1" />创建新项目
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-input placeholder="在个人项目中搜索" class="search_input" suffix-icon="el-icon-search">
    </el-input>

    <el-dialog title="创建项目" :visible.sync="createDialogVisible" class="createProjectDialog" width="30%" center>
      <div>
        <img src="../../../assets/images/createProject.png" alt="">
        <p>为不同的分析建立你的项目</p>
      </div>
      <el-form :model="projectForm">
        <el-input v-model="projectForm.projectName" auto-complete="off" placeholder="项目名称"/>
        <el-input v-model="projectForm.projectDesc" type="textarea" auto-complete="off" placeholder="项目简介（选填）"/>
        <el-select v-model="projectForm.dataTypeId" placeholder="数据类型" style="width: 100%;">
          <el-option v-for="item in dataTypeIdOptions" :key="item.value" :label="item.label" :value="item.value"/>
        </el-select>
        <el-button type="primary" @click="handleCreate">完成并创建</el-button>
        <el-button @click="handleCreateModule">从模板创建项目</el-button>
      </el-form>
    </el-dialog>

    <el-dialog title="从模板中创建项目" :visible.sync="createModuleDialogVisible" width="70%" center>
      <el-tabs tab-position="left" style="height: 200px;">
        <el-tab-pane v-for="item in tabPaneList" :key="item.field">
          <span slot="label"><i class="el-icon-date"></i>{{item.field}}</span>
          <img v-for='itemCHild in item.list' :key="itemCHild.templateId" :src="itemCHild.templateImageUrl" alt="图挂了"
           @click="handleClickImg(itemCHild.templateId)">
        </el-tab-pane>
      </el-tabs>
    </el-dialog>

    <el-dialog title="模板预览" :visible.sync="createModulePreviewDialogVisible" width="70%">
      <el-tabs>
        <el-tab-pane label="分析">
          <img :src="modulePreviewList.templateAnalysisImgUrl" height="200" width="200" alt="模板预览">
        </el-tab-pane>
        <el-tab-pane label="模型">
          <el-table ref="multipleTable" :data="modulePreviewList.templateModelList" tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column prop="modelName" label="模型" width="120">
            </el-table-column>
            <el-table-column prop="modelDesc" label="内容描述" width="120">
            </el-table-column>
            <el-table-column prop="version" label="版本">
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
      <el-button type="primary" @click="handleModuleCreate">完成创建</el-button>
    </el-dialog>

    <el-dialog title="执行模型" :visible.sync="executeModuleDialogVisible" width="50%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="executeModuleDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="executeModuleDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import projectSettings from '@/api/projectSettings'
export default {
  name: 'headerLeft',
  data() {
    return {
      dataTypeIdOptions: [
        {
          label: '数据类型1',
          value: 1
        },
        {
          label: '数据类型2',
          value: 2
        }
      ],
      // createDialogVisible: false,
      createModuleDialogVisible: false,
      createModulePreviewDialogVisible: false,
      executeModuleDialogVisible: false,
      projectForm: {
        projectName: '',
        projectDesc: '',
        dataTypeId: undefined
      },
      tabPaneList: [],
      modulePreviewList: {},
      templateId: undefined
    }
  },
  computed: {
    ...mapGetters([
      'projectChecked',
      'projectList',
      'createDialogVisible'
    ])
  },
  created() {
  },
  methods: {
    handleCreate() {
      console.log(this.projectForm)
      this.$store.commit('SET_createDialogVisible', true)
      // projectSettings.createProject(this.projectForm).then(res => {
      //   console.log(res)
      //   this.$message({
      //     message: '项目创建成功',
      //     type: 'success'
      //   })
      // })
    },
    checkPorject(project) {
      console.log(project)
    },
    handleCreateModule() {
      this.createModuleDialogVisible = true
      projectSettings.getProjectTemplateList().then(res => {
        console.log(res)
        this.tabPaneList = res
      })
    },
    handleClickImg(templateId) {
      console.log(templateId)
      this.templateId = templateId
      this.createModulePreviewDialogVisible = true
      projectSettings.getProjectTemplatePreview(templateId).then(res => {
        console.log(res)
        this.modulePreviewList = res
      })
    },
    handleSelectionChange() {
    },
    handleModuleCreate() {
      this.executeModuleDialogVisible = true
      const data = {
        templateId: this.templateId,
        modelIdList: [1, 2, 3, 6, 7],
        projectName: this.projectForm.name,
        projectDesc: this.projectForm.projectDesc
      }
      console.log(data)
      projectSettings.createFromTemplateProject(data).then(res => console.log(res))
    }
  }
}
</script>

<style lang="scss">
  .headerLeft {
    flex: 1;
    .el-dropdown {
      position: relative;
      top: 20%;
      font-size: 1rem;
      line-height: 1;
      .el-dropdown-selfdefine {
        color: #555555;
        display: inline-block;
      }
    }
    .el-tab-pane {
      height: 150px;
      overflow-y: auto;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      img {
        padding: 20px;
        width: 100px;
        height: 100px;
      }
    }
    .search_input {
      position: relative;
      top: 18%;
      padding-left: 8.85%;
      width: 60.42%;
      input {
        font-size: 0.75rem;
        height: 2rem;
        border-radius: 2rem;
      }
    }
    .createProjectDialog {
      .el-dialog__body {
        padding: 10px;
        & > div {
          text-align: center;
          img {
            height: 3rem;
            width: auto;
            line-height: 1;
          }
          p {
            font-size: 0.875rem;
            margin: 0;
            line-height: 1.75rem;
          }
        }
        .el-form {
          .el-input {
            .el-input__inner {
              font-size: 0.875rem;
              line-height: 3em;
              height: 3em;
              margin: 0.5rem 0; 
            }
          }
          .el-textarea {
            .el-textarea__inner {
              font-size: 0.875rem;
              height: 6em;
              margin: 0.5rem 0;
            }
          }
          .el-button {
            width: 100%;
          }
          .el-button+.el-button {
            margin-left: 0;
          }
        }
      }
    }
  }
</style>
