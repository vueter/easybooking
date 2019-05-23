<template>
	<v-toolbar flat color="white" class="easybooking--toolbar">
    <v-toolbar-title>
			<slot name="brand"></slot>
		</v-toolbar-title>
		<slot name="container">
			<v-spacer></v-spacer>
		</slot>
    <v-toolbar-items>
      <slot></slot>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'easybooking-toolbar'
}
</script>
