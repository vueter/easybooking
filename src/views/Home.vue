<template>
  <v-content class="home">
    <easybooking-toolbar>
      <template v-slot:brand>
        <img src="../assets/svg/logo.svg">
      </template>
      <v-btn flat icon><img src="../assets/svg/lang.svg"></v-btn>
      <v-btn flat icon><img src="../assets/svg/profile.svg"></v-btn>
      <v-btn flat icon><img src="../assets/svg/menu.svg"></v-btn>
    </easybooking-toolbar>
    <v-container>
      <h1>Билеты на самолет. Экономьте на полете!</h1>
    </v-container>
    <v-container>
      <v-layout row>
        <v-flex md10 offset-md1>
        </v-flex>
      </v-layout>
    </v-container>
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
