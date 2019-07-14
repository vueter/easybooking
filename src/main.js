import Vue from 'vue'
import './plugins/vuetify'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store/index'

import Easybooking from './easybooking'
import './easybooking/easybooking.scss'

Vue.config.productionTip = false

Vue.use(Easybooking)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
