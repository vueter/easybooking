<template>
  <v-content class="home" style="background-color:white">
    <easybooking-toolbar
      v-bind:languages="languages"
    />
    <v-container>
      <div class="home-page-header">

        <h1 class="home-page-header-title">Билеты на самолет. Экономьте на полете!</h1>
        <easybooking-search-board ref="search-board">
          <template v-slot:activator>
            <v-btn
              float
              block
              depressed
              color="primary"
              class="easybooking--search-btn"
              v-on:click="search"
              v-bind:loading="isLoading"
            >Search</v-btn>
          </template>
        </easybooking-search-board>
      </div>
    </v-container>
    <!--<v-container>
      <easybooking-stepper-card />
    </v-container>-->
    <!--<easybooking-footer>
      {{languages}}
    </easybooking-footer>-->
  </v-content>
</template>

<script>
import Languagable from "../mixins/language";

export default {
  name: "home",
  mixins: [Languagable],
  data: () => {
    return {
      routes: {},
      isLoading: false
    };
  },
  methods: {
    search() {
      this.routes = this.$refs["search-board"].getFlights();
      console.log(this.routes);
      if(this.routes){
        this.isLoading = true
        this.$etm.search(this.routes, (error, result) => {
          if (error) {
            this.$etm.alert('Could not search')
          } else {
            this.$router.push({ path: "/offers/" + result.request_id });
          }
        });
      }
    }
  }
};
</script>
<style lang="scss">
.container {
  max-width: 1140px !important;
}
.v-toolbar__content {
  max-width: 1140px;
  margin: auto;
}
.home-page-header{
  height: 370px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &-title{
    margin: 40px;
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;
    color: #2C2C2C;
  }
  @media screen and (max-width: 600px) {
    &-title{
      font-size: 25px;
    }  
  }
  @media screen and (max-width: 400px) {
    &-title{
      font-size: 20px;
    }  
  }
}

</style>
