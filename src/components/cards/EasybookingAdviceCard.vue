<template>
  <v-card class="review-card advice-card">
    <v-container fill-height fluid>
      <v-layout fill-height>
        <v-flex md3>
          <img class="review-avotar" src="../../assets/images/web.png" alt="">
        </v-flex>
        <v-flex md8>
          <div class="advice-text">Почему мы гарантируем самые низкие цены на авиабилеты?</div>
        </v-flex>
        <v-flex md1>
          <v-icon>arrow_drop_down</v-icon>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>
<script>
export default {
  name: 'EasybookingAdviceCard'
}
</script>
<style>
.advice-card{
  cursor: pointer;
}
.advice-text{
  font-size: 18px;
  line-height: 22px;
  color: #4A4A4A;
  padding-right: 30px;
  user-select: none;
  text-align: left;
  margin-top: 10px;
}
</style>
