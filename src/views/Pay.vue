<template>
  <v-content>
    <easybooking-toolbar v-bind:languages="languages"/>
    <v-container>
      {{booked}}
      <v-layout>
        <v-flex md8>
          <easybooking-pay-card/>
          <easybooking-additional-services-card/>
        </v-flex>
        <v-flex md4>
          <easybooking-offer-details-card />
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>
<script>
export default {
  name: 'Pay',
  computed: {
    booked(){
      return this.$store.state.booked
    }
  }
}
</script>

