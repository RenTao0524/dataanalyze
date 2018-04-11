import request from '@/utils/request'

// 获取项目列表
function getProjectList() {
  return request({
    url: '/project/list',
    method: 'get'
  })
}

// 创建项目
function createProject(data) {
  return request({
    url: '/project/create',
    method: 'post',
    data
  })
}

// 获取项目模板数据
function getProjectTemplateList() {
  return request({
    url: '/project/template/list',
    method: 'get'
  })
}

// 项目模板预览查看
function getProjectTemplatePreview(templateId) {
  const url = '/project/template/' + templateId + '/preview'
  return request({
    url,
    method: 'get'
  })
}

// 基于项目模板创建项目
function createFromTemplateProject(data) {
  return request({
    url: '/project/mgr/create_from_template',
    method: 'post',
    data
  })
}

// 项目设置的数据查询接口
function getProjectDetail(projectGId) {
  const url = '/project/' + projectGId + '/detail'
  return request({
    url,
    method: 'get'
  })
}

// 获取数据源的列表
function getDatasourceList() {
  return request({
    url: '/datasource/list',
    method: 'get'
  })
}

export default {
  getProjectList,
  createProject,
  getProjectTemplateList,
  getProjectTemplatePreview,
  createFromTemplateProject,
  getProjectDetail,
  getDatasourceList
}
