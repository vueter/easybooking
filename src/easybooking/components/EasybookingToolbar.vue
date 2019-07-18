<template>
  <v-toolbar flat color="white" class="easybooking--toolbar">
    <v-toolbar-title >
      <slot name="brand">
        <router-link to="/">
          <img src="../assets/images/logo.png" />
        </router-link>
        </slot>
    </v-toolbar-title>
    <slot name="container">
      <v-spacer></v-spacer>
    </slot>
    <v-toolbar-items>
      <slot>
        <easybooking-menu-wallet>
          <template v-slot:icon><img src="../assets/icons/wallet.png" class="mr-1"></template>
        </easybooking-menu-wallet>
        <easybooking-menu-language v-bind:languages="languages">
          <template v-slot:icon><img src="../assets/icons/web.png" class="mr-1"></template>
        </easybooking-menu-language>
        <v-btn flat class="br-0 header-menu-width"><img src="../assets/icons/account-circle.png"></v-btn>
        <easybooking-menu-controller v-bind:actions="actions" v-bind:statics="statics">
          <template v-slot:icon><img src="../assets/icons/xbox-controller-menu.png"></template>
        </easybooking-menu-controller>
      </slot>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'easybooking-toolbar',
  props: {
    languages: {
      type: Object,
      default: () => {
        return {}
      }
    },
    actions: {
      type: Array,
      default: () => {
        return [
          { text: "About US", to: "/about" },
          { text: "Blog", to: "/blog" },
          { text: "Our address", to: "/address" }
        ]
      }
    },
    statics: {
      type: Array,
      default: () => {
        return ["+998933363933", "+998933363933"]
      }
    }
  }
}
</script>
