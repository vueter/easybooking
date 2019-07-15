<template>
  <v-form class="easybooking-search-board">
    <v-layout row wrap>
      <slot>
        <v-flex md5 pr-1>
          <easybooking-double-combobox ref="location" />
        </v-flex>
        <v-flex md3 pl-1 pr-1>
          <easybooking-date-range ref="dates" />
        </v-flex>
        <v-flex md2 pl-1 pr-1>
          <easybooking-menu-passanger ref="passengers" />
        </v-flex>
      </slot>
      <v-flex md2 pl-1>
        <slot name="activator"></slot>
      </v-flex>
    </v-layout>
  </v-form>
</template>
<script>
export default {
  name: 'easybooking-search-board',
  data: () => ({
    flexible: false,
  }),
  methods: {
    getFlights () {
      var direction = this.$refs['location'].getDirection()
      var dates = this.$refs['dates'].getDates()
      var directions = []
      if(dates.departure){
        directions.push({
          departure_code: direction.departure_code,
          arrival_code: direction.arrival_code,
          date: dates.departure,
          time: ''
        })
        if(dates.arrival){
          directions.push({
            departure_code: direction.arrival_code,
            arrival_code: direction.departure_code,
            date: dates.arrival,
            time: ''
          })
        }
      }
      var passengers = this.$refs['passengers'].getPassengers()
      var flights = { directions, direct: false, flexible: this.flexible, max_price: '', airlines: [], fare_types: ['PUB', 'NEG'] }
      
      return Object.assign(flights, passengers)
    }
  }
}
</script>
