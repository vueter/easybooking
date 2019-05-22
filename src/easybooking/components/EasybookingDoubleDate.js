import { VLayout, VFlex } from 'vuetify/lib'

export default {
  name: 'easybooking-double-date',
  components: { VLayout, VFlex },
  render (h) {
    return h('v-layout', { props: { row: true, wrap: true } }, [
      h('v-layout', { props: { row: true }, staticClass: 'easybooking--double-date' }, [
        h('v-flex', { staticClass: 'easybooking--double-date-field easybooking--departure' }, this.$slots.departure),
        h('v-flex', { staticClass: 'easybooking--double-date-field easybooking--arrival' }, this.$slots.arrival)
      ])
    ])
  }
}
