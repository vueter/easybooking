<template>
  <div class="e-ticket-detail" v-if="is_open" v-on:click="taggle">
    <div>
      <div class="reys">
        <div class="reys-icon">
          <v-icon>flight_takeoff</v-icon>
          <v-icon>flight_land</v-icon>
        </div>
        <div class="reys-hour">
          <span>{{ detail.departure_local_time }}</span>
          <span>{{ detail.arrival_local_time }}</span>
        </div>
        <div class="reys-city">
          <span>{{ detail.departure_city }}</span>
          <span>{{ detail.arrival_city }}</span>
        </div>
        <div class="reys-date">
          <span>{{ formatDate(detail.departure_local_timestamp) }}</span>
          <span>{{ formatDate(detail.arrival_local_timestamp) }}</span>
        </div>
        <div class="reys-duration">{{ formatTime(detail.duration_minutes) }}</div>
        <div class="reys-logo">
          <img class :src="detail.marketing_airline_logo" :title="detail.marketing_airline_name" />
        </div>
      </div>

      <div class="e-ticket-data">
        <v-container pl-0 pr-0 pt-0 pb-0>
          <v-layout row>
            <v-flex md6>
              <div class="e-ticket-data-left">
                <span>Рейс:</span>
                {{ detail.flight_number_print }}
              </div>
              <div class="e-ticket-data-left">
                <span>Авиакомпания:</span>
                {{ detail.marketing_airline_name }}
              </div>
              <div class="e-ticket-data-left">
                <span>Самолет:</span>
                {{ detail.airplane_name }}
              </div>
              <div class="e-ticket-data-left">
                <span>Багаж:</span>
                {{ baggage }}
              </div>
            </v-flex>
            <v-flex md6>
              <div class="e-ticket-data-right">
                <span>Терминал:</span>
                {{ detail.departure_terminal }}
              </div>
              <div class="e-ticket-data-right">
                <span>Класс:</span>
                {{ clas }}
              </div>
              <div class="e-ticket-data-right">
                <span>Осталось мест:</span>
                {{ seats }}
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </div>

      <div v-if="detail.stop_time" class="e-ticket-stoptime">
        <v-icon>schedule</v-icon>
        {{ detail.stop_time }} пересадка
      </div>
    </div>
    
  </div>
</template>

<script>
export default {

  name: 'easybooking-ticket-detail',
  props: [
    'detail',
    'baggage',
    'clas',
    'seats',
    'is_open',
    'formatDate',
    'formatTime',
    'taggle'
  ],
};

</script>