<template>
  <v-dialog v-model="dialog" persistent max-width="900px">
    
    <v-card class="e-ff">
      <div class="e-ff-title">
        <span>Выбор улучшенного тарифа</span>
        <v-btn flat @click="dialog = false" class="e-ff-close">
          <v-icon>close</v-icon>
        </v-btn>
      </div>
      <v-layout class="e-ff-list" row style="margin-left: -8px; margin-right:-8px">
        
        <v-flex
          md4
          sm12
          lg4
          ma-2
          v-for="(ff, index) in fareFamily"
          v-bind:key="index + (loadings[index] ? '_true' : '_false')"
        >
          <v-card class="e-ff-card">
            <v-toolbar card>
              <v-toolbar-title>{{ ff.components[0].name }}
                
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text class="e-ff-content">
              <div v-for="(item, i) in ff.components[0].services" :key="i" class="e-ff-services">
                  <img :src="'http://api.easybooking.uz/web/img/' + item.status + '.svg'" alt="">
                  <span>{{ item.name }}</span>
                </div>
            </v-card-text>
            <div class="e-ff-price">
              {{ formatPrice(ff.price.total_amount) }} {{ $etm.currency }}
            </div>
            <v-card-text>
              <v-btn
              class="e-ff-btn"
                block
                outline
                large
                color="primary"
                v-on:click="booking(ff, index)"
                v-bind:loading="loadings[index]"
              >Купить</v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-card>
  </v-dialog>
</template>
<script>
import utils from "@/easybooking/mixins/utils";
export default {
  name: "easybooking-ticket-ff",
  mixins: [utils],
  data: () => ({
    dialog: false,
    fareFamily: [],
    ticket: [],
    loadings: []
  }),
  methods: {
    open(fareFamily, ticket) {
      var loadings = [];
      for (const _ of fareFamily) {
        loadings.push(false);
      }
      this.loadings = loadings;
      this.fareFamily = fareFamily;
      this.dialog = true;
      this.ticket = ticket;
    },
    booking(segment, index) {
      this.loadings[index] = true;
      this.$forceUpdate();
      this.$etm.offersAvailability(segment.segments, (error, result) => {
        this.loadings[index] = false;
        if (result.availability) {
          this.$store.commit("setFareFamily", segment);
          this.$store.commit("setTicket", this.ticket);
          this.$router.push({
            path: "/booking/" + this.requestId + "/" + segment.segments
          });
        }
      });
    }
  },
  computed:{
    requestId(){
      return this.$store.state.request_id
    }
  }
};
</script>
<style lang="scss">
.e-ff {
  padding: 30px;
  &-title {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #4a4a4a;
    text-align: left;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
  }
  &-close {
    padding: 0;
    margin: 0;
    min-width: auto;
    height: auto;
  }
  &-list{
    overflow-x: auto;
    padding-bottom: 20px;
    &>.flex{
      min-width: 265px !important;
    }
    @media screen and (max-width:670px) {
      overflow-x: hidden;
      flex-direction: column;
      margin: 0 !important;
      padding: 0 10px;
      &>.flex{
        width: 100% !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
      }
    }
  }
  &-price {
    height: 48px;
    background: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #4a4a4a;
    margin-top: 15px;
  }
  &-content {
    height: 300px;
    overflow-y: auto;
    @media screen and (max-width:670px) {
      height: auto;
    }
  }
  &-btn {
    text-transform: initial;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    &:hover {
      background-color: #0fb8d3 !important;
      color: white !important;
    }
  }
  &-services {
    text-align: left;
    line-height: 1.2;
    margin-bottom: 13px;
    display: flex;
    align-items: flex-start;
    img {
      margin-right: 11px;
      min-width: 16px;
    }
  }
  .v-toolbar {
    background: #0fb8d3;
    &__title {
      font-weight: 400;
      text-align: center;
      display: block;
      font-size: 16px;
      line-height: 19px;
      color: #ffffff;
      margin: 0px auto;
    }
    &__content {
      height: 50px !important;
    }
  }
  &-card {
    box-shadow: 0px 5px 10px rgba(0, 8, 19, 0.15);
  }
}
</style>

