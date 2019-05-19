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
                <v-flex md4 pa-3>
                    <EasybookingSubscribeCard />
                    <EasybookingFiltersCard />
                </v-flex>
                <v-flex md8 pa-3>
                    <div v-if="offers !== null && offers.status === 'Ready'">
                        <EasybookingOfferCard v-for="(offer, index) in offers.offers" v-bind:key="index" v-bind:offer="offer"/>
                    </div>
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

// Cards
import EasybookingSubscribeCard from '@/components/search/EasybookingSubscribeCard'
import EasybookingFiltersCard from '@/components/search/EasybookingFiltersCard'
import EasybookingOfferCard from '@/components/search/EasybookingOfferCard'

// Communicator
import Communicator from '@/communicator'
export default {
  name: 'Offers',
  components: {
    EasybookingNavbar,
    EasybookingSearchboard,
    EasybookingFooter,
    EasybookingSubscribeCard,
    EasybookingFiltersCard,
    EasybookingOfferCard
  },
  data: () => {
    return {
      offers: null,
      results: []
    }
  },
  mounted () {
    const comm = new Communicator()
    comm.getOffers({ request_id: this.$route.params.id, sort: 'profit' }, result => {
      this.offers = result
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
