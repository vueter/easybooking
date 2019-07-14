<template>
  <v-content class="home">
    <easybooking-toolbar v-bind:languages="languages" v-bind:actions="actions" v-bind:statics="statics"/>
    <v-container>
      <easybooking-search-board v-bind:filter="searchLocation">
        <template v-slot:activator>
          <v-btn float block color="primary" class="easybooking--search-btn">Search</v-btn>
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
import Easybooking from '../easybooking/mixins/easybooking'

export default {
  name: 'home',
  mixins: [Languagable, Easybooking],
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
      routes: []
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
