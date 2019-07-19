<template>
  <v-card class="e-filter">
    <v-card-title>Сортировка</v-card-title>
    <v-card-text>
      <v-overflow-btn
        class="e-filter-sort"
        v-bind:items="filterOptions.sorts"
        v-model="filterOptions.sorting"
      ></v-overflow-btn>
    </v-card-text>
    <v-card-title>Пересадки</v-card-title>
    <v-list class="e-filter-checkbox">
      <v-list-tile
        v-on:click="() => {}"
        v-for="(stop, index) in filterOptions.stops"
        v-bind:key="'stop_' + index"
      >
        <v-list-tile-content>
          <v-checkbox
            color="primary"
            v-model="stop.value"
            v-bind:ripple="false"
            v-bind:label="stop.number ? ('Пересадки: ' + stop.number) : 'Прямой'"
          />
        </v-list-tile-content>
        <v-list-tile-action>{{ formatPrice(stop.price) }} {{ $etm.currency }}</v-list-tile-action>
      </v-list-tile>
    </v-list>
    <v-card-title>Цена</v-card-title>
    <v-card-text>
      <v-layout row class="e-filter-range-label">
        <v-flex xs12>{{ formatPrice(filterOptions.price.value[0]) }} {{ $etm.currency }}</v-flex>
        <v-flex xs12>{{ formatPrice(filterOptions.price.value[1]) }} {{ $etm.currency }}</v-flex>
      </v-layout>
      <v-range-slider
        class="e-filter-range"
        v-bind:min="filterOptions.price.min"
        v-bind:max="filterOptions.price.max"
        v-model="filterOptions.price.value"
      />
    </v-card-text>
    <v-card-title>Время вылета/прибытия</v-card-title>
    <v-card-text
      v-for="(flight, index) in filterOptions.flightTime"
      v-bind:key="'flight_time_' + index"
    >
      <span
        class="e-filter-route"
      >{{ $etm.directions[index].departure_name }} - {{ $etm.directions[index].arrival_name }}</span>
      <span class="text-left">Вылет из {{ $etm.directions[index].departure_name }}:</span>
      <v-layout row class="e-filter-range-label">
        <v-flex xs12>{{ formatFilterDate(flight.departure_value[0]) }}</v-flex>
        <v-flex xs12>{{ formatFilterDate(flight.departure_value[1]) }}</v-flex>
      </v-layout>
      <v-range-slider
        class="e-filter-range"
        v-if="flight.departure_min !== flight.departure_max"
        v-bind:min="flight.departure_min"
        v-bind:max="flight.departure_max"
        v-model="flight.departure_value"
      />
      <span class="text-left">Вылет из {{ $etm.directions[index].arrival_name }}:</span>
      <v-layout row class="e-filter-range-label">
        <v-flex xs12>{{ formatFilterDate(flight.arrival_value[0]) }}</v-flex>
        <v-flex xs12>{{ formatFilterDate(flight.arrival_value[1]) }}</v-flex>
      </v-layout>
      <v-range-slider
        class="e-filter-range"
        v-if="flight.arrival_min !== flight.arrival_max"
        v-bind:min="flight.arrival_min"
        v-bind:max="flight.arrival_max"
        v-model="flight.arrival_value"
      />
    </v-card-text>
    <v-card-title>Время в пути</v-card-title>
    <template v-for="(duration, index) in filterOptions.durationTime">
      <v-card-text :key="index">
        <span
        class="e-filter-route mb-1"
      >{{ $etm.directions[index].departure_name }} - {{ $etm.directions[index].arrival_name }}</span>
        <v-layout row class="e-filter-range-label">
          <v-flex xs12>{{ formatTime(duration.value[0]) }}</v-flex>
          <v-flex xs12>{{ formatTime(duration.value[1]) }}</v-flex>
        </v-layout>
        <v-range-slider
          class="e-filter-range"
          v-bind:key="'duration_' + index"
          v-bind:min="duration.min"
          v-bind:max="duration.max"
          v-model="duration.value"
        />
      </v-card-text>
    </template>
    <v-card-title>Авиакомпании</v-card-title>
    <v-list class="e-filter-checkbox">
      <v-list-tile
        v-on:click="() => {}"
        v-for="(aviacompany, index) in filterOptions.aviacompanies"
        v-bind:key="'aeroports_' + index"
      >
        <v-list-tile-content>
          <v-checkbox
            v-model="aviacompany.value"
            color="primary"
            v-bind:ripple="false"
            v-bind:label="aviacompany.name.substr(0, 15)"
          />
        </v-list-tile-content>
        <v-list-tile-action>{{ formatPrice(aviacompany.price) }} {{ $etm.currency }} </v-list-tile-action>
      </v-list-tile>
    </v-list>
    <v-card-text>
      <v-btn block class="btn-outline mb-4 mt-2" outline color="primary" type="button" v-on:click="reset">Сбросить фильтр</v-btn>
      <br>
    </v-card-text>
  </v-card>
</template>
<script>
import utils from "@/easybooking/mixins/utils";
export default {
  name: "easybooking-filter-card",
  props: {
    filterOptions: {
      type: Object
    },
    filter: {
      type: Function,
      default: () => {}
    },
    reset: Function
  },
  mixins: [utils],
  data: () => ({
    sorts: [
      { text: "Price" },
      { text: "Travel time" },
      { text: "Early time" },
      { text: "Late time" }
    ]
  })
};
</script>




<style lang="scss">
.btn-outline{
  box-sizing: border-box;
  border-radius: 4px;
  font-weight: 400 !important;
  font-size: 15px;
  line-height: 18px;
  height: 40px;
  box-shadow: none !important;
  margin-bottom: 0 !important;
  .v-btn__content{
    text-transform: initial;
  }
}
.e-filter {
  margin-top: 20px;
  box-shadow: 0px 5px 10px rgba(0, 8, 19, 0.15);
  border-radius: 4px;
  .v-card__title {
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #4a4a4a;
    margin-bottom: 0;
  }
  .v-card__text {
    padding-top: 0;
    padding-bottom: 0;
  }
  &-sort {
    padding: 0;
    margin: 0;
    .v-input__slot {
      margin: 0;
      padding: 0;
      &::before {
        display: none;
      }
    }
    .v-input__control {
      &::before {
        display: none;
      }
    }
    .v-text-field__details {
      display: none;
    }
    .v-select__slot {
      height: 40px;
      border: 1px solid #0fb8d3;
      box-sizing: border-box;
      border-radius: 4px;
    }
  }
  &-checkbox {
    margin: 0;
    padding: 0;
    .v-list__tile {
      height: 38px !important;
      border-left: 0;
      font-size: 14px;
      line-height: 16px;
      overflow: hidden;
      white-space: nowrap;
      &:hover {
        border-left: 0 !important;
        background: white !important;
      }
    }
    .v-input--selection-controls {
      margin-top: 0 !important;
    }
    label{
      font-size: 14px;
      line-height: 16px;
      overflow: hidden;
      white-space: nowrap;
    }
  }
  &-range {
    margin-top: 0;
    padding: 0px 6px;
    .v-messages {
      display: none;
    }
    .v-input__slot {
      margin-bottom: 0;
    }
    &-label {
      .flex {
        font-size: 13px;
        line-height: 15px;
        color: #4a4a4a;
        &:first-child {
          text-align: left;
        }
        &:last-child {
          text-align: right;
        }
      }
    }
  }
  &-route {
    display: block;
    color: #0fb8d3;
    text-align: left;
  }
}
.text-left {
  text-align: left !important;
  display: block;
  margin-bottom: 10px;
  margin-top: 10px;
}
</style>
