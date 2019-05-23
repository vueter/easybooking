import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  theme: {
    primary: '#0FB8D3',
    secondary: '#2C2C2C',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#0FB8D3',
    warning: '#FFC107'
  },
  options: {
    customProperties: true
  },
  iconfont: 'md'
})
