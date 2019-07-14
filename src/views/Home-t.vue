<template>
  <div class="home">
    <EasybookingNavbar />
    <EasybookingSearchThumbnail />
    <EasybookingCarousel />
    <EasybookingOffers />
    <EasybookingSupportBlock />
    <EasybookingReviewsBlock />
    <EasybookingFooter />
  </div>
</template>

<script>
import EasybookingNavbar from '@/components/EasybookingNavbar'
import EasybookingSearchThumbnail from '@/components/EasybookingSearchThumbnail'
import EasybookingCarousel from '@/components/EasybookingCarousel'
import EasybookingOffers from '@/components/EasybookingOffers'
import EasybookingSupportBlock from '@/components/EasybookingSupportBlock'
import EasybookingFooter from '@/components/EasybookingFooter'
import EasybookingReviewsBlock from '@/components/EasybookingReviewsBlock'
export default {
  name: 'home',
  data: () => {
    return {
      response: null
    }
  },
  components: {
    EasybookingNavbar,
    EasybookingSearchThumbnail,
    EasybookingCarousel,
    EasybookingOffers,
    EasybookingSupportBlock,
    EasybookingFooter,
    EasybookingReviewsBlock
  }
}
</script>
