import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// font awesome
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('v-icon', Icon)

// loading spinners
import { VueSpinners } from '@saeris/vue-spinners'
Vue.use(VueSpinners)

// vue-fullpage
import VueFullPage from 'vue-fullpage.js'
Vue.use(VueFullPage)

// aos
import AOS from 'aos'
import 'aos/dist/aos.css'

new Vue({
  created() {
    AOS.init()
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
