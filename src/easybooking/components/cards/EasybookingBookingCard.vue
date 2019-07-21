<template>
  <v-card class="easybooking-card">
    <v-card-title>
      Оплата
    </v-card-title>
    <v-card-text>
      Введите действующий адрес электронной почты для отправки билета, а так же номер мобильного телефона для связи в случае изменений.
      <v-checkbox v-model="allows" label="Я принимаю условия" color="primary">
        <template v-slot:append>
          <router-link to="/" class="mt-1">Публичной оферты</router-link>
        </template>
      </v-checkbox>
      <v-layout row wrap>
        <v-flex md4>
          <v-btn v-bind:disabled="!allows" v-bind:loading="isLoading" block large color="primary" v-on:click="onBook">
            Забронировать
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: 'easybooking-booking-card',
  props: {
    book: Function
  },
  data: () => ({
    allows: false,
    isLoading: false
  }),
  methods: {
    onBook(){
      this.isLoading = true
      this.book()
    }
  }
}
</script>
