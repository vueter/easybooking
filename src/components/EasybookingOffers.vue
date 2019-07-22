<template>
  <div class="easybooking-offers">
    <v-container>
      <h2 class="block-title">Популярные направления</h2>
      <v-layout row wrap style="margin-top: 25px">
        <v-flex
          v-for="(offer, index) in data"
          v-bind:pl-2="index % 2 != 0"
          v-bind:pr-2="index % 2 == 0"
          v-bind:key="index"
        >
          <v-card>
            <v-layout row>
              <v-flex md7 xs12>
                <v-layout wrap class="easybooking-offers-content">
                  <v-flex md12>
                    <h3 class="offers-city">Из {{ offer.from }}</h3>
                    <p cass="offers-county" style="color: #A2A2A2">Франция</p>
                  </v-flex>
                  <div class="offers-list">
                    <v-layout wrap>
                      <router-link
                        v-for="(to, index) in offer.data"
                        :key="'popular_' + index"
                        to="/"
                      >
                        <div class="offers-item">
                          <span>В {{ to.to }}</span>
                          <span class="right">от {{ to.price }} UZS</span>
                        </div>
                      </router-link>
                    </v-layout>
                  </div>
                </v-layout>
              </v-flex>
              <v-flex xs5 class="hide-on-sm">
                <img :src="'http://easybooking.uz/' + offer.image" style="float:right; width: 100%" />
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
  name: "EasybookingOffers",
  data: () => {
    return {
      data: []
    };
  },
  mounted() {
    this.$http.get("http://api.easybooking.uz/popular").then(response => {
      this.data = response.data;
    });
  }
};
</script>
<style>
.easybooking-offers {
  margin-top: 40px;
}
.block-title {
  font-weight: 500;
  font-size: 25px;
  line-height: 29px;
  text-align: center;
  color: #4a4a4a;
}
.easybooking-offers-content {
  text-align: left;
  padding: 10px !important;
}
.easybooking-offers-content .offers-city {
  color: #0fb8d3;
  font-size: 20px;
}
.easybooking-offers-content .offers-county {
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #a2a2a2 !important;
  font-family: "Roboto";
}
.offers-county {
  color: #a2a2a2 !important;
}
.offers-list {
  font-size: 12px;
  color: #4a4a4a;
  display: flex;
  justify-content: space-between;
  margin: 5px auto;
  width: 100%;
  float: left;
  position: block;
}
.offers-list a {
  text-decoration: none;
  color: #4a4a4a !important;
  width: 100%;
  float: left;
  margin-bottom: 12px;
}
.offers-list a:hover {
  color: #0fb8d3 !important;
}
.offers-item {
  width: 100%;
}
.offers-item span:last-child {
  float: right;
}
.right {
  float: right;
}
</style>
