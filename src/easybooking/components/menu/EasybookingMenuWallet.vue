<template>
  <v-menu offset-y v-bind:nudge-width="120" class="easybooking--menu-wallet">
		<template v-slot:activator="{ on }">
			<v-btn flat v-on="on"><slot name="icon"></slot> UZS</v-btn>
		</template>
		<v-list>
			<v-list-tile v-on:click="setWalet()">
				<v-list-tile-content>UZB (Uzbek sum)</v-list-tile-content>
			</v-list-tile>
		</v-list>
	</v-menu>
</template>

<script>
export default {
  name: 'easybooking-menu-wallet',
  props: {
    wallets: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>
