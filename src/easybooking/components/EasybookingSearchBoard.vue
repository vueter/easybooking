<template>
  <v-form class="easybooking-search-board">
    <template v-if="isMulti">
      <v-layout
        row
        wrap
        class="easybooking-search-board-responsive e-muti-form"
        v-for="i in num_routes"
        v-bind:key="'routes_' + i"
      >
        <v-flex md9 sm8>
          <easybooking-double-combobox ref="location" />
        </v-flex>
        <v-flex md3 sm4>
          <easybooking-date-range ref="dates" single />
        </v-flex>

        <v-btn
          v-if="i === num_routes && i > 1"
          icon
          class="e-muti-form-remove"
          @click="num_routes--"
        >
          <v-icon>close</v-icon>
        </v-btn>
      </v-layout>
      <v-layout class="easybooking-search-board-responsive fd-column" row>
        <v-flex xs12 md6 lg6>
          <easybooking-menu-passanger ref="passengers" />
        </v-flex>
        <v-flex xs12 md3 lg3>
          <v-btn
            float
            block
            depressed
            color="primary"
            outline
            class="easybooking--search-btn search-form-alt-btn"
            v-on:click="num_routes < 4 ? num_routes = num_routes + 1 : num_routes = num_routes"
          >Продолжить маршрут</v-btn>
        </v-flex>
        <v-flex xs12 md3 lg3>
          <v-btn
            float
            block
            depressed
            color="primary"
            class="easybooking--search-btn h-44"
            v-on:click="search"
            v-bind:loading="isLoading"
          >Поиск</v-btn>
        </v-flex>
      </v-layout>
    </template>
    <v-layout v-else row wrap class="easybooking-search-board-responsive pb-47">
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
      <v-flex md2 xs12 class="search-form-btn">
        <v-btn
          float
          block
          depressed
          color="primary"
          class="easybooking--search-btn h-44"
          v-on:click="search"
          v-bind:loading="isLoading"
        >Поиск</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row :class="isMulti ? '' : 'search-form-items'">
      <v-flex sm4 md3 class="text-left">
        <v-btn v-if="isMulti" class="e-ctrip" flat @click="isMulti = !isMulti">
          <img src="@/assets/image/triangle.png" /> Вернуться к обычному поиску
        </v-btn>
        <v-btn v-else class="e-ctrip" flat @click="isMulti = !isMulti">
          <img src="@/assets/image/triangle.png" /> Сложный маршрут
        </v-btn>
      </v-flex>
      <v-flex sm4 md9 class="text-left" v-if="!isMulti">
        <v-checkbox class="e-checkbox" label="+/- 1 день" v-model="flexible" color="primary" />
      </v-flex>
    </v-layout>
  </v-form>
</template>
<script>
export default {
  name: "easybooking-search-board",
  data: () => ({
    flexible: false,
    isMulti: false,
    num_routes: 1,
    routes: {},
    isLoading: false
  }),
  methods: {
    encode(routes){
      var query = []
      for(const direction of routes.directions){
        query.push(`${direction.departure_code}${direction.date.split('-').join('')}${direction.arrival_code}`)
      }
      query.push(`${routes.adult_qnt}${routes.child_qnt}${routes.infant_qnt}${routes.class}${routes.flexible ? 1 : 0}`)
      return query.join('-')
    },
    search() {
      this.routes = this.getFlights();
      if (this.routes) {
        this.isLoading = true;
        this.$store.commit("setSearchParameters", this.routes);
        this.$router.push({ path: "/offers/" + this.encode(this.routes) })
      }
    },
    getFlights() {
      if (this.isMulti) {
        var directions = [];
        for (const i in this.$refs["location"]) {
          var direction = this.$refs["location"][i].getDirection();
          var dates = this.$refs["dates"][i].getDates();
          directions.push({
            departure_code: direction.departure_code,
            arrival_code: direction.arrival_code,
            date: dates.departure
          });
        }
      } else {
        var direction = this.$refs["location"].getDirection();
        var dates = this.$refs["dates"].getDates();
        var directions = [];
        if (dates.departure) {
          directions.push({
            departure_code: direction.departure_code,
            arrival_code: direction.arrival_code,
            date: dates.departure
          });
          if (dates.arrival) {
            directions.push({
              departure_code: direction.arrival_code,
              arrival_code: direction.departure_code,
              date: dates.arrival
            });
          }
        }
      }
      var passengers = this.$refs["passengers"].getPassengers();
      var flights = {
        directions,
        direct: false,
        flexible: this.flexible,
        max_price: "",
        airlines: [],
        fare_types: ["PUB", "NEG"]
      };

      return Object.assign(flights, passengers);
    }
  }
};
</script>
<style lang="scss">
.e-ctrip {
  padding: 0 !important;
  margin: 0 !important;
  text-transform: initial;
  font-size: 13px;
  line-height: 15px;
  color: #777777 !important;
  font-weight: 400;
  height: auto;

  &:before {
    display: none;
  }
  &:hover,
  &:focus {
    background-color: white;
  }
  img {
    margin-right: 5px;
  }
  .v-ripple__container {
    display: none;
  }
}
.e-multi-form {
  margin-bottom: 15px !important;
  position: relative;
}
.e-muti-form-remove {
  position: absolute;
  right: -3px;
  top: -3px;
  background: #ff5d5d;
  border-radius: 20px !important;
  width: 17px;
  height: 17px;
  padding: 0 !important;
  i {
    font-size: 10px;
    color: white !important;
  }
  &:hover {
    position: absolute !important;
  }
}
.h-44 {
  height: 44px !important;
  .v-btn__content {
    text-transform: initial;
    font-size: 15px;
    line-height: 18px;
    font-weight: 400;
  }
}
.e-checkbox {
  margin: 0;
  padding: 0;
  label {
    font-size: 13px;
    line-height: 15px;
    color: #777777;
  }
  i {
    font-size: 22px;
    color: #0fb8d3 !important;
  }
  .v-input__slot {
    margin-bottom: 0 !important;
  }
  .v-messages {
    display: none;
  }
}
.search-form-alt-btn {
  height: 44px !important;
  .v-btn__content {
    text-transform: initial;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
  }
}
.easybooking-search-board {
  position: relative;
  &-responsive {
    margin-left: -5px;
    margin-right: -5px;
    position: relative;
    & > * {
      padding: 5px 5px;
      margin: 0;
    }
  }
  .easybooking--double-combobox {
    margin-top: 0;
  }
  .v-btn--block {
    margin: 0;
  }
}
.search-form-btn {
  .v-btn__content {
    text-transform: initial;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
  }
}
@media screen and (max-width: 959px) {
  .search-form-btn {
    margin-top: 47px;
  }
  .search-form-items {
    position: absolute;
    bottom: 53px;
    width: 100%;
  }
}
@media screen and (max-width: 700px) {
  .fd-column {
    flex-direction: column !important;
  }
}
@media screen and (max-width: 600px) {
  .e-muti-form {
    margin-bottom: 10px;
  }
}
</style>
