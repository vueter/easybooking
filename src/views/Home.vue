<template>
  <div class="home">
    <EasybookingNavbar />
    <EasybookingSearchThumbnail />
    <EasybookingCarousel />
  </div>
</template>

<script>
import EasybookingNavbar from '@/components/EasybookingNavbar'
import EasybookingSearchThumbnail from '@/components/EasybookingSearchThumbnail'
import EasybookingCarousel from '@/components/EasybookingCarousel'

export default {
  name: 'home',
  components: {
    EasybookingNavbar, EasybookingSearchThumbnail, EasybookingCarousel
  }
}
</script>
