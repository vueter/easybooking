<template>
  <v-menu v-bind:close-on-content-click="false" offset-y ref="date-range" max-width="310px" class="easybooking--double-datepicker">
    <template v-slot:activator="{ on }">
      <v-layout row class="easybooking--double-combobox" v-on:click="open">
        <v-flex class="easybooking--double-combobox-field">
          <input type="text" class="first" ref="departure" readonly>
        </v-flex>
        <v-btn icon class="easybooking--double-combobox-icon-btn" v-bind:ripple="false">
          <v-icon color="primary">date_range</v-icon>
        </v-btn>
        <v-flex class="easybooking--double-combobox-field">
          <input type="text" class="last" ref="arrival" readonly>
        </v-flex>
      </v-layout>
    </template>
    <v-card>
      <v-card-text>
        <v-layout row>
          <v-flex>
            <font class="date-switch-label" v-bind:class="type ? '' : 'active-date-swwitch-label'">В одну сторону</font>
          </v-flex>
          <v-switch v-model="type" class="date-switch" success color="primary"></v-switch>
          <v-flex>
            <font class="date-switch-label" v-bind:class="type ? 'active-date-swwitch-label' : ''">Туда-обратно</font>
          </v-flex>
        </v-layout>
        <v-date-picker no-title />
        <v-date-picker no-title v-if="type" />
      </v-card-text>
    </v-card>
  </v-menu>
</template>
<script>
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
  methods: {
    open () {
      const menu = this.$refs['date-range']
      menu.runDelay('open', () => {
        menu.isActive = true
      })
    }
  }
}
</script>
