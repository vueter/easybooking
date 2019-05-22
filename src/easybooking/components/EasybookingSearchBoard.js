import { VForm, VLayout, VFlex } from 'vuetify/lib'

export default {
  name: 'easybooking-search-board',
  props: {
    multiRoutes: {
      type: Boolean,
      default: false
    }
  },
  components: { VForm, VLayout, VFlex },
  render (h) {
    const simpleRoute = h('v-form', { staticClass: 'easybooking--search-board' }, [h('v-layout', [
      h('v-flex', { staticClass: 'easybooking--location' }, this.$slots.location),
      h('v-flex', { staticClass: 'easybooking--date' }, this.$slots.date),
      h('v-flex', { staticClass: 'easybooking--passanger' }, this.$slots.passanger),
      h('v-flex', { staticClass: 'easybooking--passanger' }, this.$slots.button)
    ])])
    const multiRoutes = h('v-form')
    if (this.multiRoutes === true) {
      return multiRoutes
    }
    return simpleRoute
  }
}
