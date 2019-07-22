<template>
  <div class="bg-white">
    <easybooking-toolbar
      v-bind:languages="languages"
      v-bind:actions="actions"
      v-bind:statics="statics"
    />
    <v-container>
      <easybooking-search-board ref="search-board" />
    </v-container>
    <v-layout class="offers">
      <v-container>
        <v-layout row>
          <v-flex md12>
            <easybooking-stepper-card />
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12 md4 lg4 class="e-sidebar">
            <easybooking-subscribe-card />
            <easybooking-filter-card
              v-if="filterOptions"
              v-bind:filter-options="filterOptions"
              v-bind:reset="reset"
            />
          </v-flex>
          <v-flex xs12 md8 lg8>
            <easybooking-ticket-ff ref="fareFamily" />
            <easybooking-ticket-rules ref="rules" />
            <easybooking-ticket-card
              v-for="ticket in tickets"
              v-bind:key="ticket.segment_id"
              v-bind:ticket="ticket"
              v-bind:ff="$refs['fareFamily']"
              v-bind:rules="$refs['rules']"
            />
            <v-btn
              class="e-show-more"
              v-if="$easybooking.match.tickets && filterOptions && $easybooking.match.tickets.length > filterOptions.num_tickets && tickets.length > 9"
              large
              color="primary"
              rounded
              block
              v-on:click="filterOptions.num_tickets += 10"
            >Показать еще</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
    <easybooking-footer>{{languages}}</easybooking-footer>
  </div>
</template>
<script>
import Languagable from "../mixins/language";
export default {
  name: "Offers",
  mixins: [Languagable],
  data: () => ({
    actions: [
      { text: "About US", to: "/about" },
      { text: "Blog", to: "/blog" },
      { text: "Our address", to: "/address" }
    ],
    statics: ["+998933363933", "+998933363933"],
    tickets: [],
    filters: null,
    filterOptions: null,
    isLoading: false
  }),
  methods: {
    decode(){
      var params = this.$route.params.id.split('-')
      var directions = params.slice(0, params.length - 1)
      var options = params[params.length - 1]
      var routes = {
        direct: false,
        max_price: '',
        airlines: [],
        fare_types: ["PUB", "NEG"]
      }
      for(const index in directions){
        var departure_code = directions[index].substr(0, 3)
        var year = directions[index].substr(3, 4)
        var month = directions[index].substr(7, 2)
        var day = directions[index].substr(9, 2)
        var arrival_code = directions[index].substr(11)
        directions[index] = {
          departure_code: departure_code,
          arrival_code: arrival_code,
          date: `${year}-${month}-${day}`
        }
      }
      var adult_qnt = parseInt(options.substr(0, 1)), 
          child_qnt = parseInt(options.substr(1, 1)),
          infant_qnt = parseInt(options.substr(2, 1)),
          _class = options.substr(3, 1),
          flexible = parseInt(options.substr(4, 1))
      return Object.assign(routes, {
        directions, adult_qnt, child_qnt, infant_qnt, class: _class, flexible
      })
    },
    offers() {
      this.isLoading = true
      this.$etm.search(this.decode(this.$route.params.id), (error, result) => {
        if (error) {
          this.$etm.alert("Could not search");
        } else {
          this.$store.commit('setRequestId', result.request_id)
          this.$etm.offers(
            {
              request_id: result.request_id,
              sort: "price",
              last_ow_variant: 0
            },
            (error, tickets) => {
              if (error) {
                this.$etm.alert("Offers could not found");
              } else {
                if (
                  JSON.stringify(this.$easybooking.match.tickets) !==
                  JSON.stringify(tickets)
                ) {
                  this.$easybooking.match = this.$easybooking.Filters(
                    tickets,
                    "ru"
                  );
                  this.filterOptions = this.$easybooking.match.options;
                  this.tickets = this.$easybooking.match.search();
                }
              }
            }
          );
        }
      });
    },
    reset() {
      this.$easybooking.match = this.$easybooking.Filters(
        this.$easybooking.match.tickets,
        "ru"
      );
      this.filterOptions = this.$easybooking.match.options;
      this.tickets = this.$easybooking.match.search();
    }
  },
  mounted() {
    this.offers();
  },
  watch: {
    filterOptions: {
      handler() {
        this.tickets = this.$easybooking.match.search();
      },
      deep: true
    },
    '$route.params.id': {
      handler(){
        this.offers();
      }
    }
  }
};
</script>
<style lang="scss">
.offers {
  background-color: #f4f4f4;
}
.offers-header {
  background-color: white;
}
.offers-body {
  min-height: 700px;
}
.e-sidebar {
  padding-right: 30px;
}
.e-show-more{
  height: 40px;
  box-shadow: none !important;
  .v-btn__content{
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
    text-transform: initial;
  }
}
</style>
