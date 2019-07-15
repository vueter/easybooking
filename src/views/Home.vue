<template>
  <v-content class="home">
    <easybooking-toolbar v-bind:languages="languages" v-bind:actions="actions" v-bind:statics="statics"/>
    <v-container>
      <easybooking-search-board ref="search-board">
        <template v-slot:activator>
          <v-btn float block depressed color="primary" class="easybooking--search-btn" v-on:click="search">Search</v-btn>
        </template>
      </easybooking-search-board>
    </v-container>
    <!--<v-container>
      <easybooking-stepper-card />
    </v-container>-->
    <!--<easybooking-footer>
      {{languages}}
    </easybooking-footer>-->
  </v-content>
</template>

<script>
import Languagable from '../mixins/language'

export default {
  name: 'home',
  mixins: [Languagable],
  data: () => {
    return {
      actions: [
        { text: 'About US', to: '/about' },
        { text: 'Blog', to: '/blog' },
        { text: 'Our address', to: '/address' }
      ],
      statics: [
        '+998933363933', '+998933363933'
      ],
      routes: {}
    }
  },
  methods: {
    search(){
      this.routes = this.$refs['search-board'].getFlights()
    }
  }
}
</script>
<style>
.container{
  max-width: 1140px !important;
}
.v-toolbar__content{
  max-width: 1140px;
  margin: auto;
}
</style>
