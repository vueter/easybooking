<template>
  <div class="home">
    <EasybookingNavbar />
    <EasybookingSearchThumbnail />
  </div>
</template>

<script>
import EasybookingNavbar from '@/components/EasybookingNavbar'
import EasybookingSearchThumbnail from '@/components/EasybookingSearchThumbnail'

export default {
  name: 'home',
  components: {
    EasybookingNavbar, EasybookingSearchThumbnail
  }
}
</script>
