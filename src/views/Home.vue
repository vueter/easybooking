<template>
  <v-content class="home">
    <!--<easybooking-toolbar v-bind:languages="languages" v-bind:actions="actions" v-bind:statics="statics"/>-->
    <!--<v-container>
      <v-layout row>
        <v-flex md8 offset-md2>
          <easybooking-search-board v-bind:filter="filter">
            <template v-slot:activator>
              <v-btn float block color="primary" class="easybooking--search-btn">Search</v-btn>
            </template>
          </easybooking-search-board>
        </v-flex>
      </v-layout>
    </v-container>-->
    <v-container>
      <v-layout row>
        <v-flex md8 offset-md2>
          <easybooking-stepper-card />
        </v-flex>
      </v-layout>
    </v-container>
    <!--<easybooking-footer>
      {{languages}}
    </easybooking-footer>-->
  </v-content>
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
  name: 'home',
  mixins: [Languagable],
  data: () => {
    return {
      actions: [
        { text: 'About US', to: '/about' },
        { text: 'Blog', to: '/blog' },
        { text: 'Our address', to: '/address' }
      ],
      statics: [
        '+998933363933', '+998933363933'
      ],
      routes: []
    }
  },
  methods: {
    filter(name, done){
      done(items)
    }
  }
}
</script>
