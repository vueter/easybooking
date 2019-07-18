<template>
  <v-menu v-bind:close-on-content-click="true" offset-y ref="date-range" max-width="810px" class="easybooking--double-datepicker">
    <template v-slot:activator="{ on }">
      <v-layout row class="easybooking--double-combobox">
        <v-flex class="easybooking--double-combobox-field" v-on:click="open('departure')">
          <input type="text" class="first" v-model="result.departure" readonly placeholder="Туда">
        </v-flex>
        <v-btn icon class="easybooking--double-combobox-icon-btn" v-bind:ripple="false">
          <v-icon color="primary">date_range</v-icon>
        </v-btn>
        <v-flex v-if="!single" class="easybooking--double-combobox-field return-date-input" v-on:click="open('arrival')">
          <input type="text" class="last" v-model="result.arrival" placeholder="Обратно" readonly>
        </v-flex>
      </v-layout>
    </template>
    <v-card>
        <v-date-picker class="easy-datepicker" color="#0FB8D3" first-day-of-week="1" no-title v-model="result[activeTarget]" v-bind:min="min"/>
    </v-card>
  </v-menu>
</template>
<script>
Date.prototype.addHours = function (h) {
  this.setHours(this.getHours() + h)
  return this
}
export default {
  name: 'easybooking-date-range',
  props: {
    placeholder: {
      type: Array,
      default: () => {
        return ['', '']
      }
    },
    single: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    activeTarget: 'departure',
    now: new Date().addHours(24).toISOString().substr(0, 10),
    result: {
      departure: null,
      arrival: null
    }
  }),
  methods: {
    open (target) {
      const menu = this.$refs['date-range']
      this.activeTarget = target
      menu.runDelay('open', () => {
        menu.isActive = true
      })
    },
    getDates(){
      return Object.assign({}, this.result)
    },
    returnClear(){
      this.result.arrival = null
    }
  },
  computed: {
    min () {
      return this.activeTarget !== 'departure' ? (this.result.departure !== null ? this.result.departure : this.now) : this.now
    }
  }
}
</script>
<style lang="scss">
  .easy-datepicker{
    padding-top: 15px;
    .accent--text button{
      color: #0FB8D3 !important;
      font-weight: 500;
    }
    .v-date-picker-header .v-btn__content{
      color: #0FB8D3;
      &:disabled{
        color: #0FB8D3 !important;
      }
    }
    .v-date-picker-table .v-btn.v-btn{
      border-radius: 30px;
    }
  }

</style>
