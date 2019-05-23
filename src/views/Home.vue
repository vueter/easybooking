<template>
  <v-content class="home">
    <easybooking-toolbar>
      <template v-slot:brand>
        <img src="../assets/svg/logo.svg" />
      </template>
      <easybooking-menu-wallet>
        <template v-slot:icon><img src="../assets/icons/wallet.png"></template>
      </easybooking-menu-wallet>
      <easybooking-menu-language v-bind:languages="languages">
        <template v-slot:icon><img src="../assets/icons/web.png"></template>
      </easybooking-menu-language>
      <v-btn icon><img src="../assets/icons/account-circle.png"></v-btn>
      <easybooking-menu-controller v-bind:actions="actions" v-bind:statics="statics">
        <template v-slot:icon><img src="../assets/icons/xbox-controller-menu.png"></template>
      </easybooking-menu-controller>
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
      actions: [
        { text: 'About US', to: '/about' },
        { text: 'Blog', to: '/blog' },
        { text: 'Our address', to: '/address' }
      ],
      statics: [
        '+998933363933', '+998933363933'
      ]
    }
  }
}
</script>
