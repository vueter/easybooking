<template>
  <v-stepper alt-labels class="e-stepper">
    <v-stepper-header>
      <v-stepper-step
        v-bind:complete="step > 0"
        :step="step === 1 ? step : ''"
      >Поиск</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step
        v-bind:complete="step > 1"
        :step="step === 2 ? step : ''"
        :class="step < 2 ? 'e-stepper-lock' : ''"
      >Выбор билета</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step
        v-bind:complete="step > 2"
        :step="step === 3 ? step : ''"
        :class="step < 3 ? 'e-stepper-lock' : ''"
      >Бронирование</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step
        v-bind:complete="step > 3"
        :step="step === 4 ? step : ''"
        :class="step < 4 ? 'e-stepper-lock' : ''"
      >Оплата</v-stepper-step>
    </v-stepper-header>
  </v-stepper>
</template>
<script>

export default {
  name: "easybooking-stepper-card",
  props: {
    step: {
      type: Number,
      default: 2
    }
  }
};
</script>
<style lang="scss">
.e-stepper {
  margin-bottom: 30px !important;
  box-shadow: 0px 5px 10px rgba(0, 8, 19, 0.15);
  border-radius: 4px;
  margin-top: 6px;
  .v-stepper__step {
    .v-stepper__label {
      font-size: 14px;
      line-height: 16px;
      color: #777777 !important;
    }
  }
  .v-stepper__step--inactive {
    .v-stepper__label {
      color: #0fb8d3 !important;
    }
    i {
      border: 1px solid white;
      background: white;
      font-size: 6px;
      border-radius: 10px;
    }
  }
  &-lock {
    .v-stepper__step__step {
      width: 8px;
      min-width: 8px;
      height: 8px;
      background: #0fb8d3 !important;
      margin-top: 7px;
      margin-bottom: 20px;
    }
    .v-stepper__label {
      color: #a2a2a2 !important;
    }
  }
}
.v-stepper__step--inactive {
  .v-stepper__label {
    color: #0fb8d3 !important;
  }
}
</style>

