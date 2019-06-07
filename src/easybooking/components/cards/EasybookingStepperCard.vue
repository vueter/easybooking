<template>
	<v-stepper alt-labels>
		<v-stepper-header>
			<v-stepper-step v-bind:complete="step > 1" step="1">Поиск</v-stepper-step>
			<v-divider></v-divider>
			<v-stepper-step v-bind:edit="step > 2" step="2">Выбор билета</v-stepper-step>
			<v-divider></v-divider>
			<v-stepper-step v-bind:complete="step > 3" step="3">Бронирование</v-stepper-step>
			<v-divider></v-divider>
			<v-stepper-step v-bind:complete="step > 4" step="4">Оплата</v-stepper-step>
		</v-stepper-header>
	</v-stepper>
</template>
<script>
export default {
  name: 'easybooking-stepper-card',
  props: {
    step: {
      type: Number,
      default: 2
    }
  }
}
</script>
