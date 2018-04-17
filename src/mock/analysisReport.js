const getAnalysisIndicator = {
  'error_code': 0,
  'message': '获取指标数据成功',
  'data': [
    {
      'LEVEL': 2,
      'firstLevelName': '文档数',
      'firstLevelCode': 'CONTENT_NUM',
      'secondLevel': [
        {
          'secondLevelName': '总数',
          'secondLevelCode': 'TOTAL'
        },
        {
          'secondLevelName': '占比',
          'secondLevelCode': 'PCT'
        }
      ]
    },
    {
      'LEVEL': 2,
      'firstLevelName': '用户数',
      'firstLevelCode': 'CUSTOMER_NUM',
      'secondLevel': [
        {
          'secondLevelName': '总数',
          'secondLevelCode': 'TOTAL'
        },
        {
          'secondLevelName': '占比',
          'secondLevelCode': 'PCT'
        }
      ]
    },
    {
      'LEVEL': 1,
      'firstLevelName': '情感得分',
      'firstLevelCode': 'SENTIMENT_SCORE'
    },
    {
      'LEVEL': 1,
      'firstLevelName': '词云',
      'firstLevelCode': 'WORD_CLOUD'
    }
  ]
}

const getAnalysisEdit_option_list = {
  'message': '数据获取成功。',
  'data': {
    'classifyModels': [
      {
        'modelName': '模型1',
        'modelId': 1,
        'modelGId': 84235892247905,
        'nodeLevel': '3',
        'firstLevelNodeList': [
          '节点A',
          '节点B',
          '节点C',
          '节点D'
        ],
        'secondLevelNodeList': [
          '节点E',
          '节点F',
          '节点G',
          '节点H'
        ],
        'thirdLevelNodeList': [
          '节点I',
          '节点J',
          '节点K',
          '节点L'
        ]
      },
      {
        'modelName': '模型2',
        'modelId': 2,
        'modelGId': 842358922453405,
        'nodeLevel': '2',
        'firstLevelNodeList': [
          '节点M',
          '节点N',
          '节点O',
          '节点P'
        ],
        'secondLevelNodeList': [
          '节点Q',
          '节点R',
          '节点S',
          '节点T'
        ]
      }
    ],
    'sentiment': [
      {
        'name': '情感倾向',
        'valueList': [
          {
            'valueName': '正面',
            'valueCode': 'POSITIVE'
          },
          {
            'valueName': '中性',
            'valueCode': 'NEUTRAL'
          },
          {
            'valueName': '负面',
            'valueCode': 'NEGATIVE'
          }
        ]
      },
      {
        'name': '情感分段',
        'columnName': 'SENTIMENT_SCORE',
        'fieldType': 'NUMBER',
        'isList': false
      }
    ],
    'sourceFields': [
      {
        'fieldName': '业务类型',
        'columnName': 'BUSINESS_TYPE',
        'fieldType': 'STRING',
        'isList': true,
        'listValue': [
          '开户',
          '查询',
          '咨询'
        ]
      },
      {
        'fieldName': '通话时长',
        'columnName': 'CALL_DURATION',
        'fieldType': 'NUMBER',
        'isList': false
      },
      {
        'fieldName': '通话日期',
        'columnName': 'CALL_DATE',
        'fieldType': 'DATE',
        'isList': false
      }
    ],
    'customerFields': [
      {
        'fieldName': '用户等级',
        'columnName': 'CUSTOMER_LEVEL',
        'fieldType': 'STRING',
        'isList': true,
        'listValue': [
          '钻石',
          '铂金',
          '黄金',
          '青铜'
        ]
      },
      {
        'fieldName': '用户年龄',
        'columnName': 'AGE',
        'fieldType': 'NUMBER',
        'isList': false
      },
      {
        'fieldName': '注册日期',
        'columnName': 'REGISTRATION _DATE',
        'fieldType': 'DATE',
        'isList': false
      }
    ]
  },
  'error_code': 0
}

export default({
  getAnalysisIndicator,
  getAnalysisEdit_option_list
})
