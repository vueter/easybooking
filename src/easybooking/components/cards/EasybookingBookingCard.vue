<template>
  <v-card class="easybooking-card">
    <v-card-title>
      Оплата
    </v-card-title>
    <v-card-text>
      Введите действующий адрес электронной почты для отправки билета, а так же номер мобильного телефона для связи в случае изменений.
      <v-checkbox label="Я принимаю условия" color="primary">
        <template v-slot:append>
          <router-link to="/" class="mt-1">Публичной оферты</router-link>
        </template>
      </v-checkbox>
      <v-layout row wrap>
        <v-flex md4>
          <v-btn block large color="primary">
            Забронировать
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: 'easybooking-booking-card'
}
</script>
