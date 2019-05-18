<template>
  <div class="home">
    <EasybookingNavbar />
    <EasybookingSearchThumbnail />
    <EasybookingCarousel />
    <EasybookingOffers />
    <EasybookingSupportBlock />
  </div>
</template>

<script>
import EasybookingNavbar from '@/components/EasybookingNavbar'
import EasybookingSearchThumbnail from '@/components/EasybookingSearchThumbnail'
import EasybookingCarousel from '@/components/EasybookingCarousel'
import EasybookingOffers from '@/components/EasybookingOffers'
import EasybookingSupportBlock from '@/components/EasybookingSupportBlock'

export default {
  name: 'home',
  components: {
    EasybookingNavbar, EasybookingSearchThumbnail, EasybookingCarousel, EasybookingOffers, EasybookingSupportBlock
  }
}
</script>
