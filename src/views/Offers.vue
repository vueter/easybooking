<template>
    <div class="bg-white">
        <easybooking-toolbar v-bind:languages="languages" v-bind:actions="actions" v-bind:statics="statics"/>
        <v-container>
            <easybooking-search-board v-bind:filter="filter">
                <template v-slot:activator>
                  <v-btn float block color="primary" class="easybooking--search-btn">Search</v-btn>
                </template>
            </easybooking-search-board>
        </v-container>
        <v-layout class="offers">
            <v-container>
                <v-layout row>
                    <v-flex md4>
                        <easybooking-subscribe-card/>
                    </v-flex>
                    <v-flex md8>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-layout>
        <easybooking-footer>
            {{languages}}
        </easybooking-footer>
    </div>
</template>
<script>
import Languagable from '../mixins/language'
const items = [
  { city: 'Tashkent', name: 'Uzbekistan', code: 'TAS' },
  { city: 'Tashkent', name: 'Uzbekistan', code: 'TAS' },
  { city: 'Tashkent', name: 'Uzbekistan', code: 'TAS' },
  { city: 'Tashkent', name: 'Uzbekistan', code: 'TAS' },
  { city: 'Tashkent', name: 'Uzbekistan', code: 'TAS' }
]
export default {
  name: 'Offers',
  mixins: [Languagable],
  data: () => ({
    actions: [
      { text: 'About US', to: '/about' },
      { text: 'Blog', to: '/blog' },
      { text: 'Our address', to: '/address' }
    ],
    statics: [
      '+998933363933', '+998933363933'
    ],
    routes: []
  }),
  methods: {
    filter (name, done) {
      done(items)
    }
  }
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
