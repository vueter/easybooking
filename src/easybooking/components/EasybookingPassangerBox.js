import { VOverflowBtn } from 'vuetify/lib'

export default {
  name: 'easybooking-passanger-box',
  components: {
    VOverflowBtn
  },
  render (h) {
    return h('v-overflow-btn', { staticClass: 'easybooking--overflow-btn' }, 'Hello world')
  }
}
