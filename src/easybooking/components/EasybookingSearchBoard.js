import { VForm, VLayout } from 'vuetify/lib'


export default {
    name: 'easybooking-search-board',
    props: {
        multiRoutes: {
            type: Boolean,
            default: false
        }
    },
    components: { VForm, VLayout },
    render(h){
        const simpleRoute = h('v-form', h('v-layout', [
            h('v-flex', this.$slots.location),
            h('v-flex', this.$slots.date),
            h('v-flex', this.$slots.passanger),
            h('v-flex', this.$slots.button)
        ]))
        const multiRoutes = h('v-form')
        if(this.multiRoutes === true){
            return multiRoutes
        }
        return simpleRoute
    }
}