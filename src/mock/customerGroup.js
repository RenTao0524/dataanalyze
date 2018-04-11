const getClusteringList = {
  'data': [
    {
      'clusteringId': 683428,
      'clusteringGId': 157790288490926080,
      'projectId': 61,
      'clusteringName': '分群1',
      'creatorId': 1,
      'enable': true,
      'createTime': '2018-03-30 09:48:17',
      'lastModifyTime': '2018-03-30 09:48:17'
    },
    {
      'clusteringId': 683429,
      'clusteringGId': 157790978235830272,
      'projectId': 61,
      'clusteringName': '分群2',
      'creatorId': 1,
      'enable': true,
      'createTime': '2018-03-30 09:51:01',
      'lastModifyTime': '2018-03-30 09:51:01'
    }
  ],
  'error_code': 0,
  'message': '获取客户分群列表成功'
}

const getClusteringResult = {
  'data': {
    'totalNum': 4,
    'customerList': [
      {
        '客户等级': '2',
        '客户ID': '1',
        '客户姓名': 'Charlie Wu'
      },
      {
        '客户等级': '2',
        '客户ID': '3',
        '客户姓名': 'Sky Miao'
      },
      {
        '客户等级': '1',
        '客户ID': '2',
        '客户姓名': 'Anna'
      },
      {
        '客户等级': '3',
        '客户ID': '4',
        '客户姓名': 'TD Wu'
      }
    ],
    'updateTime': '2018-03-30 15:00:00'
  },
  'error_code': 0,
  'message': '客户分数据结果查询成功'
}

export default {
  getClusteringList,
  getClusteringResult
}
