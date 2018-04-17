import request from '@/utils/request'

// 获取报表编辑中指标信息
function getAnalysisIndicator(projectGId) {
  const url = '/project/' + projectGId + '/analysis/indicator'
  return request({
    url,
    method: 'get'
  })
}

// 获取分析编辑页面维度与筛选条件选项信息
function getAnalysisEdit_option_list(projectGId) {
  const url = '/project/' + projectGId + '/analysis/edit_option_list'
  return request({
    url,
    method: 'get'
  })
}

export default({
  getAnalysisIndicator,
  getAnalysisEdit_option_list
})
