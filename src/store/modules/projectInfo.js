// 项目
import projectSettings from '@/api/projectSettings'

const projectInfo = {
  state: {
    projectChecked: {},
    projectList: [],
    createDialogVisible: false
  },
  mutations: {
    SET_PROJECTCHECKED: (state, projectChecked) => {
      state.projectChecked = projectChecked
    },
    SET_PROJECTLIST: (state, projectList) => {
      state.projectList = projectList
    },
    SET_createDialogVisible: (state, createDialogVisible) => {
      state.createDialogVisible = createDialogVisible
    }
  },
  actions: {
    setProjectList({ commit }) {
      return new Promise(resolve => {
        projectSettings.getProjectList().then(res => {
          if (res.length) {
            commit('SET_PROJECTCHECKED', res[0])
            commit('SET_PROJECTLIST', res)
            resolve()
          } else {
            resolve('defaultHomePage')
          }
        })
      })
    }
  }
}

export default projectInfo
