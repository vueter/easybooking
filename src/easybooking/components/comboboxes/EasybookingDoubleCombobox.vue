<template>
	<v-menu offset-y ref="location-combobox">
		<template v-slot:activator="{ on }">
			<v-layout row class="easybooking--double-combobox">
				<v-flex class="easybooking--double-combobox-field">
					<input type="text" class="main-field first" ref="departure" v-on:input="typing('departure')">
				</v-flex>
				<font class="easybooking--double-combobox-code">MOW</font>
				<v-btn icon class="easybooking--double-combobox-icon-btn" v-bind:ripple="false">
					<v-icon color="primary">swap_horiz</v-icon>
				</v-btn>
				<font class="easybooking--double-combobox-code">MOW</font>
				<v-flex class="easybooking--double-combobox-field">
					<input type="text" class="main-field last" ref="arrival" v-on:input="typing('arrival')">
				</v-flex>
			</v-layout>
		</template>
		<v-list>
			<v-list-tile v-for="(item, index) in items" v-bind:key="index">
				<v-list-tile-content>
					<v-list-tile-title>{{ item.city }}</v-list-tile-title>
					<v-list-tile-sub-title>{{ item.name }}</v-list-tile-sub-title>
				</v-list-tile-content>
				<v-list-tile-action>
					<v-list-tile-action-text>{{ item.code }}</v-list-tile-action-text>
				</v-list-tile-action>
			</v-list-tile>
		</v-list>
	</v-menu>
</template>
<script>
export default {
  name: 'easybooking-double-combobox',
  props: {
    filter: { type: null },
    items: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    typing (target) {
      const input = this.$refs[target]
      const menu = this.$refs['location-combobox']
      if (input.value.length > 2) {
        if (this.filter !== undefined && this.filter !== null) {
          this.filter(input.value, (items) => {
            this.items = items
            if (menu.isActive === false) {
              menu.runDelay('open', () => {
                menu.isActive = true
              })
            }
          })
        }
      } else {
        menu.runDelay('close', () => {
          menu.isActive = false
        })
      }
    }
  }
}
</script>
