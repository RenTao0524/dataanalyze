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
    <img src="../../../assets/404_images/avatar.jpg" alt="头像">
    <svg-icon icon-class="questionMark" />
    <svg-icon icon-class="clock" />
    <svg-icon @click.native="handelSetting" icon-class="settings" />

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
      userName: '张三李四',
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
    img {
      height: 60px;
      width: 60px;
      border-radius: 50%;
    }
    svg, img, .el-dropdown {
      float: right;
      cursor: pointer;
    }
  }
</style>
