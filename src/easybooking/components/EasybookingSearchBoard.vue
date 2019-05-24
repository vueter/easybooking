<template>
	<v-form class="easybooking-search-board">
		<v-layout row wrap>
			<slot></slot>
			<v-flex md2 style="border: 1px solid blue">
				<slot name="activator"></slot>
			</v-flex>
		</v-layout>
	</v-form>
</template>
<script>
export default {
  name: 'easybooking-search-board'
}
</script>
