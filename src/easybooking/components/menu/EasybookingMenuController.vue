<template>
	<v-menu offset-y v-bind:nudge-width="120" class="easybooking--menu-controller">
		<template v-slot:activator="{ on }">
			<v-btn icon v-on="on"><slot name="icon"></slot></v-btn>
		</template>
		<v-list>
			<v-list-tile v-for="(action, index) in actions" v-bind:key="'action_' + index" v-on:click="onItemClicked(action)">
				<v-list-tile-content>{{ action.text }}</v-list-tile-content>
			</v-list-tile>
			<v-list-tile v-for="(text, index) in statics" v-bind:key="'static_' + index">
				<v-list-tile-content>{{ text }}</v-list-tile-content>
			</v-list-tile>
		</v-list>
	</v-menu>
</template>
<script>
export default {
  name: 'easybooking-menu-controller',
  props: {
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
  },
  methods: {
    onItemClicked (action) {
      this.$router.push({ path: action.to })
    }
  }
}
</script>
