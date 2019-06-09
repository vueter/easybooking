<template>
  <v-content>
    <v-container>
      <v-layout row wrap>
        <v-flex md8 pr-2>
          <easybooking-buyer-card />
          <easybooking-passanger-card />
          <easybooking-next-passanger-card />
          <easybooking-booking-card />
        </v-flex>
        <v-flex md4 pl-2>
          <easybooking-offer-details-card />
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>
<script>
export default {
  name: 'Booking'
}
</script>
