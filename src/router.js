import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Offers from './views/Offers.vue'
import Booking from './views/Booking.vue'
import Pay from './views/Pay.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/offers/:id', name: 'offers', component: Offers },
    { path: '/booking/:id/:buy_id', name: 'booking', component: Booking },
    { path: '/pay', name: 'pay', component: Pay }
  ]
})
