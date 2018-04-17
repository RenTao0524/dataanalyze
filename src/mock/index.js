import Mock from 'mockjs'
import loginAPI from './login'
import projectSettingsAPI from './projectSettings'
import dashBoardAPI from './dashBoard'
// 分析报表
import analysisReportAPI from './analysisReport'
// 客户分群
import customerGroupAPI from './customerGroup'

Mock.setup({
  timeout: '350-600'
})

// 登录相关
Mock.mock(/\/login\/login/, 'post', loginAPI.loginByUsername)
Mock.mock(/\/login\/logout/, 'post', loginAPI.logout)
Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getUserInfo)

// 项目设置相关
// 获取项目列表
Mock.mock(/\/project\/list/, 'get', projectSettingsAPI.getProjectList)
// 创建项目
Mock.mock(/\/project\/create/, 'post', projectSettingsAPI.createProject)
// 获取项目模板数据
Mock.mock(/\/project\/template\/list/, 'get', projectSettingsAPI.getProjectTemplateList)
// 项目模板预览查看
Mock.mock(/\/project\/template\/[0-9]{1,2}\/preview/, 'get', projectSettingsAPI.getProjectTemplatePreview)
// 基于项目模板创建项目
Mock.mock(/\/project\/mgr\/create_from_template/, 'post', projectSettingsAPI.createFromTemplateProject)
// 项目设置的数据查询接口
Mock.mock(/\/project\/[0-9]{1,2}\/detail/, 'get', projectSettingsAPI.getProjectDetail)

// 获取数据源的列表
Mock.mock(/\/datasource\/list/, 'get', projectSettingsAPI.getDatasourceList)

// 分析看板
Mock.mock(/\/project\/[0-9]{1,2}\/analysis\/folder\/list/, 'get', dashBoardAPI.getAnalysisFolderList)

// 分析报表相关
// 获取报表编辑中指标信息
Mock.mock(/\/project\/[0-9]{1,2}\/analysis\/indicator/, 'get', analysisReportAPI.getAnalysisIndicator)
// 获取分析编辑页面维度与筛选条件选项信息
Mock.mock(/\/project\/[0-9]{1,2}\/analysis\/edit_option_list/, 'get', analysisReportAPI.getAnalysisEdit_option_list)

// 客户分群相关
// 查看用户分群定义列表
Mock.mock(/\/project\/[0-9]{1,2}\/analysis\/clustering\/list/, 'get', customerGroupAPI.getClusteringList)
// 用户分群结果数据查询
Mock.mock(/\/project\/[0-9]{1,2}\/analysis\/clustering\/[0-9]{1,2}\/result/, 'get', customerGroupAPI.getClusteringResult)

export default Mock
