<template>
  <v-content class="home">
    <!--<easybooking-toolbar v-bind:languages="languages" v-bind:actions="actions" v-bind:statics="statics"/>-->
    <v-container>
      <easybooking-search-board v-model="routes">
        <v-layout row>
          <v-flex md5 pr-1>
            <easybooking-double-combobox v-bind:filter="filter"/>
          </v-flex>
          <v-flex md4 pl-1 pr-1>
            <easybooking-date-range />
          </v-flex>
          <v-flex md3 p1-1 pr-1>
            Passanger Box
          </v-flex>
        </v-layout>
        <template v-slot:activator>
          <v-btn float>Search</v-btn>
        </template>
      </easybooking-search-board>
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
