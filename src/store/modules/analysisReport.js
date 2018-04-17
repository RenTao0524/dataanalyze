// 分析报表
import analysisReportAPI from '@/api/analysisReport'

const analysisReport = {
  state: {
    // 报表编辑中指标信息
    indicator: [],
    // 分析编辑页面维度与筛选条件选项信息
    edit_option_list: {}
  },
  mutations: {
    SET_INDICATOR: (state, indicator) => {
      state.indicator = indicator
    },
    SET_EDIT_OPTION_LIST: (state, edit_option_list) => {
      state.edit_option_list = edit_option_list
    }
  },
  actions: {
    SET_INDICATOR({ commit }) {
      return new Promise((resolve, reject) => {
        analysisReportAPI.getAnalysisIndicator(22).then(res => {
          var list = []
          res.forEach(element => {
            var item = {}
            if (element.LEVEL === 1) {
              item.value = element.firstLevelCode
              item.label = element.firstLevelName
            } else if (element.LEVEL === 2) {
              item.value = element.firstLevelCode
              item.label = element.firstLevelName
              item.children = []
              element.secondLevel.forEach(elementChild => {
                var itemChild = {}
                itemChild.value = elementChild.secondLevelCode
                itemChild.label = elementChild.secondLevelName
                item.children.push(itemChild)
              })
            }
            list.push(item)
          })
          commit('SET_INDICATOR', list)
        })
      })
    },
    SET_EDIT_OPTION_LIST({ commit }) {
      return new Promise((resolve, reject) => {
        analysisReportAPI.getAnalysisEdit_option_list(22).then(res => {
          commit('SET_EDIT_OPTION_LIST', res)
        })
      })
    }
  }
}

export default analysisReport
