<template>
  <v-card class="easybooking-card">
    <v-card-title>
      Данные покупателя
    </v-card-title>
    <v-card-text>
      Введите действующий адрес электронной почты для отправки билета, а так же номер мобильного телефона для связи в случае изменений.
    </v-card-text>
    <v-card-text>
      <v-layout wrap>
        <v-flex md4 pa-1>
          <v-text-field v-model="full_name" box label="Полное имя" />
        </v-flex>
        <v-flex md4 pa-1>
          <v-text-field v-model="email" box label="E-mail" />
        </v-flex>
        <v-flex md4 pa-1>
          <v-text-field v-model="phonenumber" box label="Номер телефона" prefix="+998" />
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: 'easybooking-buyer-card',
  data: () => ({
    full_name: '',
    email: '',
    phonenumber: ''
  })
}
</script>
