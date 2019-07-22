<template>
  <v-container>
    <v-carousel class="e-carousel" height="320px">
      <v-carousel-item src="https://raw.githubusercontent.com/vueter/easybooking/master/src/assets/image/slide.png"></v-carousel-item>
      <v-carousel-item src="https://raw.githubusercontent.com/vueter/easybooking/master/src/assets/image/slide.png"></v-carousel-item>
      <v-carousel-item src="https://raw.githubusercontent.com/vueter/easybooking/master/src/assets/image/slide.png"></v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  name: 'EasybookingCarousel',
  data: () => {
    return {
    }
  }
}
</script>
<style lang="scss">
.e-carousel{
  box-shadow: none;
  border-radius: 4px;
}
</style>
