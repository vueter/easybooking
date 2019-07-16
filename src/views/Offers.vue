<template>
    <div class="bg-white">
        <easybooking-toolbar v-bind:languages="languages" v-bind:actions="actions" v-bind:statics="statics"/>
        <v-container>
            <easybooking-search-board ref="search-board">
              <template v-slot:activator>
                <v-btn float block depressed color="primary" class="easybooking--search-btn" v-on:click="search">Search</v-btn>
              </template>
            </easybooking-search-board>
        </v-container>
        <v-layout class="offers">
            <v-container>
                <v-layout row>
                    <v-flex md4 mr-1>
                        <easybooking-subscribe-card />
                        <easybooking-filter-card v-if="filterOptions" v-bind:filter-options="filterOptions" />
                    </v-flex>
                    <v-flex md8 ml-3>
                      <easybooking-ticket-card v-for="ticket in tickets" v-bind:key="ticket.segment_id" v-bind:ticket="ticket"/>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-layout>
        <easybooking-footer>
            {{languages}}
        </easybooking-footer>
    </div>
</template>
<script>
import Languagable from '../mixins/language'
export default {
  name: 'Offers',
  mixins: [Languagable],
  data: () => ({
    actions: [
      { text: 'About US', to: '/about' },
      { text: 'Blog', to: '/blog' },
      { text: 'Our address', to: '/address' }
    ],
    statics: [
      '+998933363933', '+998933363933'
    ],
    routes: [],
    tickets: [],
    filters: null,
    filterOptions: null
  }),
  methods: {
    search(){
      this.routes = this.$refs['search-board'].getFlights()
      this.$etm.search(this.routes, (error, result) => {
        if(error){
          console.error(error)
        }
        else{
          this.$router.push({ path: '/offers/' + result.request_id })
        }
      })
    },
    offers(){
      this.$etm.offers({ request_id: this.$route.params.id, sort: 'price', last_ow_variant: 0 }, (error, result) => {
        if(error){
          console.error(error)
        }
        else{
          this.tickets = result
          this.$easybooking.match = this.$easybooking.Filters(this.tickets)
          this.filterOptions = this.$easybooking.match.options
        }
      })
    }
  },
  mounted(){
    this.offers()
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
