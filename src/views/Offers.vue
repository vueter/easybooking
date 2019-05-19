<template>
    <div class="offers">
        <div class="offers-header">
            <EasybookingNavbar />
            <v-container>
                <EasybookingSearchboard />
            </v-container>
        </div>
        <v-container class="offers-body">
            <v-layout row wrap>
                <v-flex md3>
                    Filters
                </v-flex>
                <v-flex md9 v-if="offers !== null && offers.status === 'ok'">
                    {{ offers }}
                    <v-layout v-for="offer in offers.data" v-bind:key="offer.id">
                        <v-flex pa-2>
                            <v-card>
                                {{ offer }}
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>
        <EasybookingFooter />
    </div>
</template>
<script>
import EasybookingNavbar from '@/components/EasybookingNavbar'
import EasybookingSearchboard from '@/components/EasybookingSearchboard'
import EasybookingFooter from '@/components/EasybookingFooter'

import Communicator from '@/communicator'

export default {
  name: 'Offers',
  components: { EasybookingNavbar, EasybookingSearchboard, EasybookingFooter },
  data:() => {
      return {
          offers: null,
          results: []
      }
  },
  mounted(){
      const comm = new Communicator()
      comm.getOrders({ request_id: this.$route.params.id}, result => {
          this.offers = result
          if(result.status === 'ok'){
              for(const order of result.data){
                  comm.getOrderById({ order_id : order.id }, orderInfo => {
                      console.log(orderInfo)
                  })
              }
          }
      })
  }
}
</script>
<style>
.offers{
    background-color: #F4F4F4;
}
.offers-header{
    background-color: white;
}
.offers-body{
    min-height: 700px;
}
</style>
