<template>
  <v-card class="review-card">
    <v-container fill-height fluid>
      <v-layout fill-height>
        <v-flex md3>
          <img class="review-avotar" src="../../assets/image/user.png" alt="">
        </v-flex>
        <v-flex md9>
          <div class="reviewer">
            Серсея Иванова
          </div>
          <div class="review-text">
            Для меня очень важен интерфейс сайта. Обычно я очень импульсивна при покупке билетов- здесь и сейчас, либо откладываю идею в долгий ящик...
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>
<style>
  .reviewer,
  .review-text {
    text-align: left;
  }

  .reviewer {
    font-size: 16px;
    line-height: 19px;
    color: #777777;
    margin-bottom: 15px;
  }

  .review-text {
    font-size: 14px;
    color: #4A4A4A;
    cursor: pointer;
  }

  .review-card {
    margin-top: 20px;
  }

  .review-avotar {
    margin-top: calc(100% - 110px);
  }
</style>
