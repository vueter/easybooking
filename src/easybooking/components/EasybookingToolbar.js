import { VToolbar } from 'vuetify/lib'
import { createSimpleFunctional } from 'vuetify/lib/util/helpers'

var VToolbarItems = createSimpleFunctional('v-toolbar__items')
var VToolbarTitle = createSimpleFunctional('v-toolbar__title')
var VSpacer = (0, createSimpleFunctional)('spacer', 'div', 'v-spacer')

export default {
  name: 'easybooking-toolbar',
  props: {
    logo: {
      type: String
    }
  },
  components: { VToolbar, VToolbarTitle, VSpacer, VToolbarItems },
  render (h) {
    return h('v-toolbar', { props: { flat: true, color: 'white' } }, [
      h('v-toolbar-title', {}, this.$slots.brand),
      h('v-spacer'),
      h('v-toolbar-items', {}, this.$slots.default)
    ])
  }
}
