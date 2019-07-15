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
                    <v-flex md4>
                        <easybooking-subscribe-card/>
                    </v-flex>
                    <v-flex md8>
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
    routes: []
  }),
  methods: {
    search(){
      this.routes = this.$refs['search-board'].getFlights()
      this.$etm.search(this.routes, (error, result) => {
        if(error){
          console.error(error)
        }
        else{
          console.log(result)
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
          console.log(result)
        }
      })
    }
  },
  mounted(){
    console.log('getting oggers')
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
