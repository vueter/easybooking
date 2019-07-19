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
                  <v-flex md12>
                    <easybooking-stepper-card />
                  </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex md4 class="e-sidebar">
                        <easybooking-subscribe-card />
                        <easybooking-filter-card v-if="filterOptions" v-bind:filter-options="filterOptions" v-bind:reset="reset"/>
                    </v-flex>
                    <v-flex md8>
                      <easybooking-ticket-ff ref="fareFamily"/>
                      <easybooking-ticket-rules ref="rules" />
                      <easybooking-ticket-card
                        v-for="ticket in tickets" 
                        v-bind:key="ticket.segment_id" 
                        v-bind:ticket="ticket" 
                        v-bind:ff="$refs['fareFamily']"
                        v-bind:rules="$refs['rules']"/>
                      <v-btn v-if="$easybooking.match.tickets && filterOptions && $easybooking.match.tickets.length > filterOptions.num_tickets" large color="primary" rounded block v-on:click="filterOptions.num_tickets += 10">Show more</v-btn>
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
          this.$etm.alert('Could not search results. Please try again.')
        }
        else{
          this.$router.push({ path: '/offers/' + result.request_id })
        }
      })
    },
    offers(){
      this.$etm.offers({ request_id: this.$route.params.id, sort: 'price', last_ow_variant: 0 }, (error, tickets) => {
        if(error){
          this.$etm.alert('Offers could not found')
        }
        else{
          if(JSON.stringify(this.$easybooking.match.tickets) !== JSON.stringify(tickets)){
            this.$easybooking.match = this.$easybooking.Filters(tickets, 'ru')
            this.filterOptions = this.$easybooking.match.options
            this.tickets = this.$easybooking.match.search()
          }
        }
      })
    },
    reset(){
      this.$easybooking.match = this.$easybooking.Filters(this.$easybooking.match.tickets, 'ru')
      this.filterOptions = this.$easybooking.match.options
      this.tickets = this.$easybooking.match.search()
    }
  },
  mounted(){
    this.offers()
  },
  watch:{
    filterOptions: {
      handler(){
        this.tickets = this.$easybooking.match.search()
      },
      deep: true
    }
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
  .e-sidebar{
    padding-right: 30px;
  }
</style>
