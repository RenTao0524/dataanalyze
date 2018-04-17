<template>
  <div class="headerRight">
    <el-dropdown trigger="click">
      <span>
        {{userName}}
        <svg-icon icon-class="open" />
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人设置</el-dropdown-item>
        <el-dropdown-item>修改密码</el-dropdown-item>
        <el-dropdown-item divided>注销</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <img src="../../../assets/images/avatar.png" class="avatar" alt="头像">
    <img src="../../../assets/images/help.png" alt="帮助图标">
    <img src="../../../assets/images/messages.png" alt="消息提示图标">
    <img src="../../../assets/images/settings.png" @click="handelSetting" alt="项目设置图标">

    <el-dialog title="项目设置" :visible.sync="dialogVisible" width="50%">
      <div>
        <label>{{projectDetail.projectName}}</label>
        <br>
        <label>成员：</label>
        <label>{{projectDetail.userNum}}</label>
        <label>模型：</label>
        <label>{{projectDetail.modelNum}}</label>
        <label>看板：</label>
        <label>{{projectDetail.reportNum}}</label>
        <br>
        <label>更新时间</label>
        <label>{{projectDetail.createDate}}</label>
      </div>
      <el-tabs @tab-click="handleClick">
        <el-tab-pane label="基本信息" name="first">
          <el-form ref="form" :model="form">
            <el-form-item>
              <el-input v-model="form.projectName"></el-input>
            </el-form-item>
            <el-form-item>
              <el-select v-model="form.dsDtType" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.projectDesc" type="textarea"></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="成员管理" name="second">
          <div v-for="item in projectDetail.userList" :key="item.userId">
            {{item.name}}
          </div>
        </el-tab-pane>
        <el-tab-pane label="数据源" name="third">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-tab-pane>
      </el-tabs>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import projectSettings from '@/api/projectSettings'

export default {
  name: 'headerRight',
  data() {
    return {
      activeIndex: '',
      avatarUrl: '',
      userName: '张三李四sssssss',
      dialogVisible: false,
      form: {
        projectName: '',
        dsDtType: '',
        projectDesc: ''
      },
      activeName: '',
      projectDetail: {}
    }
  },
  methods: {
    // 项目设置
    handelSetting() {
      projectSettings.getProjectDetail(22).then(res => {
        console.log(res)
        this.form.projectName = res.projectName
        this.form.dsDtType = res.dsDtType.dataTypeName
        this.form.projectDesc = res.projectDesc
        this.projectDetail = res
        this.dialogVisible = true
      })
    },
    handleClick(tab, event) {
      console.log(tab, event)
      projectSettings.getDatasourceList().then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss">
  .headerRight {
    flex: 1;
    & > img {
      cursor: pointer;
      float: right;
      position: relative;
      top: 34%;
      height: 32%;
      width: auto;
      padding-left: 3%;
    }
    .avatar {
      top: 16%;
      height: 64%;
      width: auto;
      border-radius: 50%;
    }
    .el-dropdown {
      float: right;
      position: relative;
      top: 37%;
      padding-left: 3%;
      font-size: 0.8125rem;
      line-height: 1;
      .el-dropdown-selfdefine {
        color: #555555;
        display: inline-block;
      }
    }
  }
</style>
