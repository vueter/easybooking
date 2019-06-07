<template>
	<v-menu v-bind:close-on-content-click="false" offset-y class="easybooking--passanger">
		<template v-slot:activator="{ on }">
			<v-btn v-on="on" block depressed class="easybooking--passanger-btn" v-bind:ripple="false">1 человек, эконом</v-btn>
		</template>
		<v-card>
			<v-card-text>
				Hello
			</v-card-text>
		</v-card>
	</v-menu>
</template>
<script>
export default {
  name: 'easybooking-menu-passanger'
}
</script>
