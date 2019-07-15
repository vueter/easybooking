<template>
  <v-menu v-bind:close-on-content-click="false" offset-y ref="date-range" max-width="810px" class="easybooking--double-datepicker">
    <template v-slot:activator="{ on }">
      <v-layout row class="easybooking--double-combobox">
        <v-flex class="easybooking--double-combobox-field" v-on:click="open('departure')">
          <input type="text" class="first" v-model="result.departure" readonly>
        </v-flex>
        <v-btn icon class="easybooking--double-combobox-icon-btn" v-bind:ripple="false">
          <v-icon color="primary">date_range</v-icon>
        </v-btn>
        <v-flex class="easybooking--double-combobox-field" v-on:click="open('arrival')">
          <input type="text" class="last" v-model="result.arrival" readonly>
        </v-flex>
      </v-layout>
    </template>
    <v-card>
      <v-card-text>
        <v-date-picker no-title v-model="result[activeTarget]" v-bind:min="min"/>
      </v-card-text>
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
    type: {
      type: Boolean,
      default: true
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
    }
  },
  computed: {
    min () {
      return this.activeTarget !== 'departure' ? (this.result.departure !== null ? this.result.departure : this.now) : this.now
    }
  }
}
</script>
