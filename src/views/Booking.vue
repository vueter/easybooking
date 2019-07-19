<template>
  <v-content>
    <easybooking-toolbar
      v-bind:languages="languages"
    />
    <v-container>
      <v-layout row wrap>
        <v-flex md8 pr-2>
          <easybooking-buyer-card />
          <!--<easybooking-passanger-card />
          <easybooking-next-passanger-card />
          <easybooking-booking-card />-->
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
export default {
  name: 'Booking',
  mixins: [Languagable],
  mounted(){
    if(this.ticket == null){
      this.$router.push({ path: '/offers/' + this.$route.params.id })
    }
  },
  computed: {
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
