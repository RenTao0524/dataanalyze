import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import projectInfo from './modules/projectInfo'
import analysisReport from './modules/analysisReport'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    projectInfo,
    analysisReport
  },
  getters
})

export default store
