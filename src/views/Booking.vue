<template>
  <v-content>
    <easybooking-toolbar v-bind:languages="languages"/>
    <v-container>
      <v-layout row wrap>
        <v-flex md8 pr-2>
          <easybooking-buyer-card v-bind:codes="codes" ref="buyer"/>
          <easybooking-passanger-card v-bind:codes="codes" v-bind:ticket="ticket" ref="passangers"/>
          <easybooking-booking-card v-bind:book="onBook"/>
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
  methods: {
    onBook(){
      var data = this.$refs['buyer'].getBuyer()
      data.passengers = this.$refs['passangers'].getPassangers()
      data.request_id = this.$route.params.id
      data.buy_id = this.$route.params.buy_id
      this.$etm.createOrder(data, (error, result) => {
        if(error){
          this.$etm.alert('Could not create order')
        }
        else{
          this.$store.commit('setBooked', result.data)
          this.$router.push({ path: '/pay' })
        }
      })
    }
  },
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
