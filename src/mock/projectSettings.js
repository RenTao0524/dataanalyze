import Mock from 'mockjs'

const getProjectList = {
  'message': '获取项目列表成功',
  'data': [
    {
      'sourceId': 1,
      'sourceTable': 'T_BANK_SOURCE',
      'creatorID': 1,
      'creatorName': 'Bob YUAN',
      'lastModifierName': 'byuansh',
      'isFav': false,
      'userID': 1,
      'prjName': '项目1',
      'lastModifierDate': '2018-02-12 10:18:51',
      'enable': 'Y',
      'name': 'Bob YUAN',
      'nameId': '1',
      'sourceName': '银行数据源',
      'prjId': 121,
      'createDate': '2018-02-12 09:47:27'
    },
    {
      'sourceId': 1,
      'sourceTable': 'T_BANK_SOURCE',
      'creatorID': 1,
      'creatorName': 'Bob YUAN',
      'lastModifierName': 'byuansh',
      'isFav': true,
      'userID': 1,
      'prjName': '项目2',
      'lastModifierDate': '2018-02-11 14:42:46',
      'enable': 'Y',
      'name': 'Bob YUAN',
      'nameId': '1',
      'sourceName': '银行数据源',
      'prjId': 85,
      'createDate': '2018-02-04 12:58:11'
    }
  ],
  'error_code': 0
}

const createProject = {
  'data': {
    'projectId': 181,
    'projectGId': 159676745698643968,
    'projectName': '项目名',
    'sourceId': null,
    'creatorId': 1,
    'dsDataType': {
      'dataTypeId': 1,
      'dataTypeName': '客服对话',
      'dataTypeCode': 'CustomeConversation',
      'dataTypeDesc': '客服对话数据'
    },
    'refTemplateId': null,
    'creatorUserName': 'Bob YUAN',
    'createDate': '2018-04-04 14:44:24',
    'lastModifyDate': '2018-04-04 14:44:24',
    'shortDesc': '项目描述',
    'enable': true,
    'isPrjTemplate': 'N',
    'dataSourceId': null,
    'lastModifierId': 1,
    'lastModifierName': 'Bob YUAN'
  },
  'error_code': 0,
  'message': '项目创建成功'
}

const getProjectTemplateList = {
  'data': [
    {
      'field': '银行业',
      'list': [
        {
          'templateId': 1,
          'templateName': '银行客户分析',
          'templateImageUrl': Mock.Random.image('200x200', '#00405d', '#FFF', 'Mock.js')
        },
        {
          'templateId': 2,
          'templateName': '信用卡中心客户分析',
          'templateImageUrl': Mock.Random.image('200x200', '#00405d', '#FFF', 'Mock.js')
        },
        {
          'templateId': 3,
          'templateName': '贷款/理财产品分析',
          'templateImageUrl': Mock.Random.image('200x200', '#00405d', '#FFF', 'Mock.js')
        }
      ]
    },
    {
      'field': '电商/零售',
      'list': [
        {
          'templateId': 4,
          'templateName': '电商客户分析',
          'templateImageUrl': Mock.Random.image('200x200', '#00405d', '#FFF', 'Mock.js')
        },
        {
          'templateId': 5,
          'templateName': '线上分析',
          'templateImageUrl': Mock.Random.image('200x200', '#00405d', '#FFF', 'Mock.js')
        },
        {
          'templateId': 6,
          'templateName': '评论分析',
          'templateImageUrl': Mock.Random.image('200x200', '#00405d', '#FFF', 'Mock.js')
        },
        {
          'templateId': 7,
          'templateName': '线上分析',
          'templateImageUrl': Mock.Random.image('200x200', '#00405d', '#FFF', 'Mock.js')
        },
        {
          'templateId': 8,
          'templateName': '评论分析',
          'templateImageUrl': Mock.Random.image('200x200', '#00405d', '#FFF', 'Mock.js')
        }
      ]
    }
  ],
  'error_code': 0,
  'message': '项目模板列表获取成功'
}

const getProjectTemplatePreview = {
  'data': {
    'templateId': 1,
    'templateAnalysisImgUrl': Mock.Random.image('400x400', '#00405d', '#FFF', 'Mock.js'),
    'templateModelList': [
      {
        'modelId': 1,
        'modelName': '模型1',
        'modelDesc': '模型1描述',
        'version': 'V1.0.1 2018.01.01'
      },
      {
        'modelId': 2,
        'modelName': '模型2',
        'modelDesc': '模型2描述',
        'version': 'V1.0.1 2018.01.01'
      },
      {
        'modelId': 3,
        'modelName': '模型3',
        'modelDesc': '模型3描述',
        'version': 'V1.0.1 2018.01.01'
      }
    ]
  },
  'error_code': 0,
  'message': '项目模板预览信息获取成功'
}

const createFromTemplateProject = {
  'data': {
    'projectId': 181,
    'projectGId': 159676745698643968,
    'projectName': '项目名',
    'sourceId': null,
    'creatorId': 1,
    'dsDataType': {
      'dataTypeId': 1,
      'dataTypeName': '客服对话',
      'dataTypeCode': 'CustomeConversation',
      'dataTypeDesc': '客服对话数据'
    },
    'refTemplateId': null,
    'creatorUserName': 'Bob YUAN',
    'createDate': '2018-04-04 14:44:24',
    'lastModifyDate': '2018-04-04 14:44:24',
    'shortDesc': '项目描述',
    'enable': true,
    'isPrjTemplate': 'N',
    'dataSourceId': null,
    'lastModifierId': 1,
    'lastModifierName': 'Bob YUAN'
  },
  'error_code': 0,
  'message': '项目创建成功'
}

const getProjectDetail = {
  'message': '数据查询成功',
  'data': {
    'userNum': 3,
    'reportNum': 10,
    'userList': [
      {
        'userId': 22,
        'userName': 'Charlie',
        'name': 'Charlie Wu',
        'createDate': '2017-07-19 14:17:57',
        'lastModifyDate': '2017-07-19 14:17:57',
        'seal': false,
        'enable': 'Y',
        'createUserName': 'byuansh',
        'lastModifyUserName': 'byuansh',
        'projectRoles': null,
        'admin': false
      },
      {
        'userId': 1,
        'userName': 'byuansh',
        'name': 'Bob YUAN',
        'createDate': '2017-05-24 00:00:00',
        'lastModifyDate': '2017-05-24 03:10:03',
        'seal': false,
        'enable': 'Y',
        'createUserName': '我自己',
        'lastModifyUserName': null,
        'projectRoles': null,
        'admin': true
      },
      {
        'userId': 4,
        'userName': 'haitun',
        'name': 'haitun',
        'createDate': '2017-06-18 22:24:41',
        'lastModifyDate': '2017-06-18 22:24:41',
        'seal': false,
        'enable': 'Y',
        'createUserName': 'byuansh',
        'lastModifyUserName': 'byuansh',
        'projectRoles': null,
        'admin': true
      }
    ],
    'modelNum': 10,
    'projectDesc': '测试模型描述',
    'projectName': 'testProject2',
    'isFav': true,
    'dataSource': {
      'sourceId': 1,
      'sourceName': '银行数据源',
      'sourceCode': 'BANK_SOURCE',
      'sourceTable': 'T_BANK_SOURCE',
      'createDate': '2018-02-09 00:00:00',
      'lastModifyDate': '2018-02-09 00:00:00'
    },
    'dsDtType': {
      'dataTypeId': 1,
      'dataTypeName': '客服对话',
      'dataTypeCode': 'CustomeConversation',
      'dataTypeDesc': '客服对话数据'
    },
    'createDate': '2018-02-04'
  },
  'error_code': 0
}

const getDatasourceList = {
  'message': '',
  'data': [
    {
      'sourceId': 2,
      'sourceName': '江苏银行数据源',
      'sourceCode': 'JiangsuBank',
      'sourceTable': 'T_JIANGSUBANK_DATA_SOURCE',
      'tableFields': [
        {
          'dataSourceTableDefinitionId': 1,
          'dataSourceId': 2,
          'fieldName': '数据内容',
          'columnName': 'CONTENT',
          'dataType': 1,
          'isIndexed': true,
          'indexName': 'IDX_CONTENT',
          'isList': true,
          'listValues': '你好, 开心,见到,你'
        },
        {
          'dataSourceTableDefinitionId': 2,
          'dataSourceId': 2,
          'fieldName': '创建时间',
          'columnName': 'CREATE_TIME',
          'dataType': 4,
          'isIndexed': false,
          'isList': false
        }
      ]
    }
  ],
  'error_code': 0
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
