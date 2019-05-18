import Vue from 'vue'
import './plugins/vuetify'
import './plugins/axiso'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/main.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
