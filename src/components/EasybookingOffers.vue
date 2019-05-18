<template>
  <div class="easybooking-offers">
    <v-container>
      <h2>Популярные направления</h2>
      <v-layout row wrap style="margin-top: 100px">
        <v-flex md6 pa-3 v-for="(offer, index) in offers" v-bind:key="index">
          <v-card>
            <v-layout row>
              <v-flex xs7>
                Something
              </v-flex>
              <v-flex xs5>
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
</style>