<template>
  <v-form class="easybooking-search-board">
    <v-layout row wrap class="easybooking-search-board-responsive" >
      <slot>
        <v-flex md5 sm12>
          <easybooking-double-combobox ref="location" />
        </v-flex>
        <v-flex md3 sm6>
          <easybooking-date-range ref="dates" />
        </v-flex>
        <v-flex md2 sm6 xs12>
          <easybooking-menu-passanger ref="passengers" />
        </v-flex>
      </slot>
      <v-flex md2 xs12>
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
        if (dates.arrival) {
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
<style lang="scss">
.easybooking-search-board{
  &-responsive{
    margin-left: -5px;
    margin-right: -5px;
    &>*{
      padding: 5px 5px;
      margin: 0;
    }
  }
  .easybooking--double-combobox{
    margin-top: 0;
  }
  .v-btn--block{
    margin: 0;
  }
}
</style>
