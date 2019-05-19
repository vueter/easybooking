<template>
    <div class="offers">
        <div class="offers-header">
            <EasybookingNavbar />
            <v-container>
                <EasybookingSearchboard />
            </v-container>
        </div>
        <v-container class="offers-body">
            <v-layout row wrap>
                <v-flex md3>
                    Filters
                </v-flex>
                <v-flex md9>
                    Offers
                </v-flex>
            </v-layout>
        </v-container>
        <EasybookingFooter />
    </div>
</template>
<script>
import EasybookingNavbar from '@/components/EasybookingNavbar'
import EasybookingSearchboard from '@/components/EasybookingSearchboard'
import EasybookingFooter from '@/components/EasybookingFooter'

export default {
  name: 'Offers',
  components: { EasybookingNavbar, EasybookingSearchboard, EasybookingFooter }
}
</script>
<style>
.offers{
    background-color: #F4F4F4;
}
.offers-header{
    background-color: white;
}
.offers-body{
    min-height: 700px;
}
</style>
