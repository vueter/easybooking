<template>
  <v-form class="easybooking-search-board">
    <template v-if="isMulti">
      <v-layout row wrap class="easybooking-search-board-responsive" v-for="i in num_routes" v-bind:key="'routes_' + i">
        <v-flex md9 sm12>
          <easybooking-double-combobox ref="location" />
        </v-flex>
        <v-flex md3 sm12>
          <easybooking-date-range ref="dates" single/>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex md6 pr-1>
          <easybooking-menu-passanger ref="passengers" />
        </v-flex>
        <v-flex md3 pr-1 pl-2>
          <v-btn
              float
              block
              depressed
              color="primary"
              outline
              class="easybooking--search-btn"
              v-on:click="num_routes < 4 ? num_routes = num_routes + 1 : num_routes = num_routes"
            >Продолжить маршрут</v-btn>
        </v-flex>
        <v-flex md3 pl-2>
          <slot name="activator"></slot>
        </v-flex>
      </v-layout>
    </template>
    <v-layout v-else row wrap class="easybooking-search-board-responsive" >
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
    <v-layout row>
      <v-flex md3>
        <v-checkbox label="Сложный маршрут" v-model="isMulti" color="primary"/>
      </v-flex>
      <v-flex md9>
        <v-checkbox label="+/- 1 день" v-model="flexible" color="primary"/>
      </v-flex>
    </v-layout>
  </v-form>
</template>
<script>
export default {
  name: 'easybooking-search-board',
  data: () => ({
    flexible: false,
    isMulti: false,
    num_routes: 1
  }),
  methods: {
    getFlights () {
      if(this.isMulti){
        var directions = []
        for(const i in this.$refs['location']){
          var direction = this.$refs['location'][i].getDirection()
          var dates = this.$refs['dates'][i].getDates()
          directions.push({
            departure_code: direction.departure_code,
            arrival_code: direction.arrival_code,
            date: dates.departure
          })
        }
      }
      else{
        var direction = this.$refs['location'].getDirection()
        var dates = this.$refs['dates'].getDates()
        var directions = []
        if(dates.departure){
          directions.push({
            departure_code: direction.departure_code,
            arrival_code: direction.arrival_code,
            date: dates.departure
          })
          if (dates.arrival) {
            directions.push({
              departure_code: direction.arrival_code,
              arrival_code: direction.departure_code,
              date: dates.arrival
            })
          }
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
