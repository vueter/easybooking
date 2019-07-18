<template>
  <v-card class="easybooking-primary-card e-subscribe">
    <v-card-title>
      <div class="center"><img src="../../assets/icons/bell-ring.png"/>Обновление цен</div>
    </v-card-title>
    <v-card-text class="text--left">
      Подпишитесь на обновление цен, чтобы быть в курсе обо всех изменениях.
      <v-text-field class="e-subscribe-input" placeholder="E-mail"/>
      <v-btn block color="primary" class="e-subscribe-btn">Подписаться</v-btn>
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
    box-shadow: 0px 5px 10px rgba(0, 8, 19, 0.15);
    border-radius: 4px;
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
    &-input{
      input{
        border: 1px solid #DBDBDB;
        box-sizing: border-box;
        border-radius: 4px;
        height: 40px !important;
        max-height: 40px !important;
        padding: 12px;
        font-size: 14px;
        line-height: 16px;
      }
      .v-input__slot{
        &::after, &::before{
          display: none;
        }
      }
    }
    &-btn{
      height: 40px;
      box-shadow: none !important;
      margin: 0;
    }
  }
</style>
