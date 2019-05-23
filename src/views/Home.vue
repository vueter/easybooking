<template>
  <v-content class="home">
    <easybooking-toolbar>
      <template v-slot:brand>
        <img src="../assets/svg/logo.svg" />
      </template>
      <v-menu offset-y :nudge-width="120">
        <template v-slot:activator="{ on }">
          <v-btn flat v-on="on"><img src="../assets/icons/wallet.png"> UZS</v-btn>
        </template>
        <v-list>
          <v-list-tile v-on:click="">
            <v-list-tile-content>UZB (Uzbek sum)</v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-menu offset-y :nudge-width="120">
        <template v-slot:activator="{ on }">
          <v-btn flat v-on="on"><img src="../assets/icons/web.png"> RU</v-btn>
        </template>
        <v-list>
          <v-list-tile v-for="(lang, index) in languages" v-bind:key="index" v-on:click="setLanguage(lang)">
            <v-list-tile-content>{{lang}}</v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-btn icon><img src="../assets/icons/account-circle.png"></v-btn>
      <v-btn icon><img src="../assets/icons/xbox-controller-menu.png"></v-btn>
    </easybooking-toolbar>
    <easybooking-footer>
      {{languages}}
    </easybooking-footer>
  </v-content>
</template>

<script>
import Languagable from '../mixins/language'

export default {
  name: 'home',
  mixins: [Languagable],
  data: () => {
    return {
      response: null
    }
  }
}
</script>
