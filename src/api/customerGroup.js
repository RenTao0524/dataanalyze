import request from '@/utils/request'

// 查看用户分群定义列表
function getClusteringList(projectGId) {
  const url = '/project/' + projectGId + '/analysis/clustering/list'
  return request({
    url,
    method: 'get'
  })
}

// 用户分群结果数据查询
function getClusteringResult(projectGId, clusteringGId) {
  const url = '/project/' + projectGId + '/analysis/clustering/' + clusteringGId + '/result'
  return request({
    url,
    method: 'get'
  })
}

export default {
  getClusteringList,
  getClusteringResult
}
