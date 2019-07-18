<template>
  <v-card class="easybooking-primary-card e-subscribe">
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
<style lang="scss">
  .e-subscribe{
    padding: 20px;
    .v-card__title{
      padding: 0;
      font-size: 15px;
      line-height: 18px;
    }
    .v-card__text{
      padding: 0;
      padding-top: 20px;
      font-size: 14px;
      line-height: 20px;
      column-rule: #777777;
    }
  }
</style>
