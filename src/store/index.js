import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sideNavbarIsShow: false,
    footerIsShow: false
  },
  getters: {},
  mutations: {
    changeSideNavbarStatus(state) {
      state.sideNavbarIsShow = !state.sideNavbarIsShow
    },
    changeFooterStatus(state) {
      state.footerIsShow = !state.footerIsShow
    }
  },
  actions: {},
  modules: {}
})
