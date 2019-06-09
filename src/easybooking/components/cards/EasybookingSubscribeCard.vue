<template>
  <v-card class="easybooking-primary-card">
    <v-card-title>
      <div class="center"><img src="../../assets/icons/bell-ring.png"/>Обновление цен</div>
    </v-card-title>
    <v-card-text class="text--left">
      Подпишитесь на обновление цен, чтобы быть в курсе обо всех изменениях.
      <v-text-field placeholder="E-mail"/>
      <v-btn block color="primary">Подписаться</v-btn>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: 'easybooking-subscribe-card'
}
</script>
