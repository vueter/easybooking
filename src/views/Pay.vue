<template>
  <v-content>
    <easybooking-toolbar v-bind:languages="languages"/>
    <v-container>
      {{booked}}
      <v-layout>
        <v-flex md8 pr-2>
          <easybooking-additional-services-card/>
          <easybooking-pay-card v-bind:booked="booked"/>
        </v-flex>
        <v-flex md4 pl-2>
          {{fareFamily}}
          <easybooking-offer-details-card v-bind:ticket="ticket" />
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>
<script>
import Languagable from "../mixins/language";
import Easybooking from '@/easybooking/mixins/easybooking';
export default {
  name: 'Pay',
  mixins: [Languagable, Easybooking],
  computed: {
    booked(){
      return this.$store.state.booked
    },
    isFareFamily(){
      return this.$store.state.isFareFamily
    },
    fareFamily(){
      return this.$store.state.fareFamily
    },
    ticket(){
      return this.$store.state.ticket
    }
  }
}
</script>

