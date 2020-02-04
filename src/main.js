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
  mounted() {
    // add loading end class for animation end
    const loadingImage = document.getElementById('loading-image')
    loadingImage.classList.add('loading-end')
    // change background color of whole container
    const loadingContainer = document.getElementById('loading-container')
    loadingContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.1)'
    // init AOS for synchronous animations
    // remove loadingContainer
    setTimeout(function() {
      AOS.init()
      loadingContainer.parentNode.removeChild(loadingContainer)
    }, 1000)
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
