<template>
  <v-content class="home">
    <!--<easybooking-toolbar>
      <template v-slot:brand>
        <img src="../assets/svg/logo.svg">
      </template>
      <v-btn flat icon><img src="../assets/svg/lang.svg"></v-btn>
      <v-btn flat icon><img src="../assets/svg/profile.svg"></v-btn>
      <v-btn flat icon><img src="../assets/svg/menu.svg"></v-btn>
    </easybooking-toolbar>-->
    <!--<v-container>
      <h1>Билеты на самолет. Экономьте на полете!</h1>
    </v-container>-->
    <!-- Search board -->
    <v-container>
      <v-layout row>
        <v-flex md10 offset-md1>
          <easybooking-search-board>
            <template v-slot:location>
              <easybooking-double-combobox>
                <template v-slot:departure>
                  <v-text-field/>
                </template>
                <template v-slot:arrival>
                  <v-text-field/>
                </template>
              </easybooking-double-combobox>
            </template>
            <template v-slot:date>
              <easybooking-double-date>
                <template v-slot:departure>
                  <v-text-field/>
                </template>
                <template v-slot:arrival>
                  <v-text-field/>
                </template>
              </easybooking-double-date>
            </template>
            <template v-slot:passanger>
              <easybooking-passanger-box/>
            </template>
            <template v-slot:button>
              <v-btn>SEARCH</v-btn>
            </template>
          </easybooking-search-board>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- End search board -->

    <!--<EasybookingSearchThumbnail />
    <EasybookingCarousel />
    <EasybookingOffers />
    <EasybookingSupportBlock />
    <EasybookingReviewsBlock />
    <EasybookingFooter />-->
  </v-content>
</template>

<script>
export default {
  name: 'home',
  data: () => {
    return {
      response: null
    }
  }
}
</script>
