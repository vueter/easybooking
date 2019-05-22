import { VLayout, VFlex } from 'vuetify/lib'

export default {
  name: 'easybooking-double-combobox',
  components: { VLayout, VFlex },
  render (h) {
    return h('v-layout', { props: { row: true, wrap: true } }, [
      h('v-layout', { props: { row: true }, staticClass: 'easybooking--double-combobox' }, [
        h('v-flex', { staticClass: 'easybooking--double-combobox-field easybooking--departure' }, this.$slots.departure),
        h('v-flex', { staticClass: 'easybooking--double-combobox-field easybooking--arrival' }, this.$slots.arrival)
      ])
    ])
  }
}
