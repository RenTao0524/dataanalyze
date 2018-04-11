import request from '@/utils/request'

// 查看看板分组和看板列表信息
function getAnalysisFolderList(projectGId) {
  const url = '/project/' + projectGId + '/analysis/folder/list'
  return request({
    url,
    method: 'get'
  })
}

export default({
  getAnalysisFolderList
})
