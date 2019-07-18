<template>
  <v-card class="easybooking-card">
    <v-card-title>
      Данные бронирования
    </v-card-title>
    <v-card-text>
      <v-layout>
        <v-flex md5>
          <v-card flat>
            <b>Ташкент</b>
            <p>Взрослый - 1</p>
          </v-card>
        </v-flex>
        <v-flex md2>
          <center>
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.66683 16.5L7.33349 16.5L11.5002 9.83333L16.0835 9.83333C16.415 9.83333 16.733 9.70163 16.9674 9.46721C17.2018 9.23279 17.3335 8.91485 17.3335 8.58333C17.3335 8.25181 17.2018 7.93387 16.9674 7.69945C16.733 7.46503 16.415 7.33333 16.0835 7.33333L11.5002 7.33333L7.3335 0.666664L5.66683 0.666664L7.75016 7.33333L3.16683 7.33333L1.91683 5.66666L0.666828 5.66666L1.50016 8.58333L0.666828 11.5L1.91683 11.5L3.16683 9.83333L7.75016 9.83333L5.66683 16.5Z" fill="#0FB8D3" />
            </svg>
          </center>
        </v-flex>
        <v-flex md5 style="text-align: right">
          <v-card flat>
            <b>Москва</b>
            <p>1 349 278 UZS</p>
          </v-card>
        </v-flex>
      </v-layout>
      <b>1. Рейс: S7-978</b>
      {{ticket}}
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: 'easybooking-offer-details-card',
  props: {
    ticket: {
      type: Object
    }
  }
}
</script>
