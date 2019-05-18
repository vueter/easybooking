<template>
  <div class="easybooking-offers">
    <v-container>
      <h2>Популярные направления</h2>
      <v-layout row wrap style="margin-top: 100px">
        <v-flex md6 pa-3 v-for="(offer, index) in offers" v-bind:key="index">
          <v-card>
            <v-layout row>
              <v-flex md7 xs12>
                <v-layout wrap class="easybooking-offers-content">
                  <v-flex md12>
                    <h3 class="offers-city">Из Парижа</h3>
                    <p cass="offers-county" style="color: #A2A2A2">Франция</p>
                  </v-flex>
                  <div class="offers-list">
                    <v-layout wrap>
                      <router-link to="/">
                        <div class="offers-item">
                          <span>В Ташкент</span>
                          <span class="right">от 1 250 000 UZS</span>
                        </div>
                      </router-link>
                      <router-link to="/">
                        <div class="offers-item">
                          <span>В Ташкент</span>
                          <span class="right">от 1 250 000 UZS</span>
                        </div>
                      </router-link>
                      <router-link to="/">
                        <div class="offers-item">
                          <span>В Ташкент</span>
                          <span class="right">от 1 250 000 UZS</span>
                        </div>
                      </router-link>
                      <router-link to="/">
                        <div class="offers-item">
                          <span>В Ташкент</span>
                          <span class="right">от 1 250 000 UZS</span>
                        </div>
                      </router-link>
                      <router-link to="/">
                        <div class="offers-item">
                          <span>В Ташкент</span>
                          <span class="right">от 1 250 000 UZS</span>
                        </div>
                      </router-link>
                    </v-layout>
                  </div>
                </v-layout>
              </v-flex>
              <v-flex xs5 class="hide-on-sm">
                <img src="../assets/images/moscow.png" style="float:right; width: 100%"/>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'EasybookingOffers',
  data: () => {
    return {
      offers: [
        { image: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png' },
        { image: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png' }
      ]
    }
  }
}
</script>
<style>
.easybooking-offers{
  margin-top: 50px;
}
.easybooking-offers-content{
  text-align:left;
  padding: 10px !important;
}
.easybooking-offers-content .offers-city{
  color: #0FB8D3;
  font-size: 20px;
}
.easybooking-offers-content .offers-county{
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #A2A2A2 !important;
  font-family: "Roboto";
}
.offers-county{
  color: #A2A2A2 !important;
}
.offers-list{
  font-size: 12px;
  color: #4A4A4A;
  display: flex;
  justify-content: space-between;
  margin: 5px auto;
  width: 100%;
  float: left;
  position: block;
}
.offers-list a{
  text-decoration: none;
  color: #4A4A4A !important;
  width: 100%;
  float: left;
  margin-bottom: 12px;
}
.offers-list a:hover{
  color: #0FB8D3 !important;
}
.offers-item{
  width: 100%;
}
.offers-item span:last-child{
  float: right;
}
.right{
  float: right;
}
</style>
