import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sideNavbarIsShow: false,
    footerIsShow: false,
    whoYouAreIsAnimate: false,
    whoWeAreIsAnimate: false,
    whatWeDoIsAnimate: false,
    howWeDoItIsAnimate: false
  },
  getters: {},
  mutations: {
    changeSideNavbarStatus(state) {
      state.sideNavbarIsShow = !state.sideNavbarIsShow
    },
    changeFooterStatus(state) {
      state.footerIsShow = !state.footerIsShow
    },
    changeWhoYouAreStatus(state) {
      state.whoYouAreIsAnimate = true
    },
    changeWhoWeAreStatus(state) {
      state.whoWeAreIsAnimate = true
    },
    changeWhatWeDoStatus(state) {
      state.whatWeDoIsAnimate = true
    },
    changeHowWeDoItStatus(state) {
      state.howWeDoItIsAnimate = true
    }
  },
  actions: {},
  modules: {}
})
