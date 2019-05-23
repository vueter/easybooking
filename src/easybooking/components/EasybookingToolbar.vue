<template>
	<v-toolbar flat color="white" class="easybooking--toolbar">
    <v-toolbar-title>
			<slot name="brand"><img src="../assets/images/logo.png" /></slot>
		</v-toolbar-title>
		<slot name="container">
			<v-spacer></v-spacer>
		</slot>
    <v-toolbar-items>
      <slot>
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
        return []
      }
    },
    statics: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>
