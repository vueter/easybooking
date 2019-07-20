<template>
  <v-content>
    <easybooking-toolbar v-bind:languages="languages"/>
    <v-container>
      <v-layout row wrap>
        <v-flex md8 pr-2>
          {{searchParameters}}
          <easybooking-buyer-card v-bind:codes="codes"/>
          <easybooking-passanger-card v-bind:codes="codes"/>
          <!--<easybooking-next-passanger-card />
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
import Easybooking from '@/easybooking/mixins/easybooking';
export default {
  name: 'Booking',
  mixins: [Languagable, Easybooking],
  data: () => ({
    codes: []
  }),
  mounted(){
    /*if(this.ticket == null){
      this.$router.push({ path: '/offers/' + this.$route.params.id })
    }*/
    this.getPhoneCodes((error, result) => {
      if(error){
        this.$etm.alert('Could not get phene codes')
      }
      else{
        this.codes = result.data
      }
    })
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
    },
    searchParameters(){
      return this.$store.state.searchParameters
    }
  }
}
</script>
