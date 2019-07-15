import Vue from 'vue'
import './plugins/vuetify'
import './plugins/axios'
import './plugins/etm'
import App from './App.vue'
import router from './router'
import store from './store/index'

import Easybooking from './easybooking'
import './easybooking/easybooking.scss'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(Easybooking)

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
