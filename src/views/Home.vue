<template>
  <v-content class="home" style="background-color:white">
    <easybooking-toolbar
      v-bind:languages="languages"
    />
    <v-container>
      <div class="home-page-header">

        <h1 class="home-page-header-title">Билеты на самолет. Экономьте на полете!</h1>
        <easybooking-search-board ref="search-board" />
      </div>
    </v-container>
      <EasybookingCarousel />
      <EasybookingOffers />
      <EasybookingSupportBlock />
      <EasybookingReviewsBlock />
    <!--<v-container>
      <easybooking-stepper-card />
    </v-container>-->
    <easybooking-footer>
      {{languages}}
    </easybooking-footer>
  </v-content>
</template>

<script>
import Languagable from "../mixins/language";
import EasybookingCarousel from '@/components/EasybookingCarousel'
import EasybookingOffers from '@/components/EasybookingOffers'
import EasybookingSupportBlock from '@/components/EasybookingSupportBlock'
import EasybookingReviewsBlock from '@/components/EasybookingReviewsBlock'

export default {
  name: "home",
  mixins: [Languagable],
  components: {
    EasybookingCarousel,
    EasybookingOffers,
    EasybookingSupportBlock,
    EasybookingReviewsBlock
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
