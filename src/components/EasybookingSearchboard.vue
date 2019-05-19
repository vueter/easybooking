<template>
  <v-form>
    <v-layout wrap v-if="!isMulti">
      <v-flex md5 class="locatable">
        <EasybookingCombobox target="location" ref="location" />
      </v-flex>
      <v-flex md3 class="locatable">
        <EasybookingCombobox target="date" ref="date" />
      </v-flex>
      <v-flex class="locatable">
        <EasybookingPassangerBox />
      </v-flex>
      <v-flex class="locatable-on-sm">
        <v-btn block color="#0FB8D3" class="search-btn" v-on:click="search()">Поиск</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex md2 class="search-tools-multi-routes">
        <img src="../assets/images/multi-routes.svg" class="search-tools-icon">
        <font class="search-tools-text clickable">Сложный маршрут</font>
      </v-flex>
      <v-flex md2>
        <v-checkbox color="#0FB8D3" label="+/- 1 день"></v-checkbox>
      </v-flex>
    </v-layout>
  </v-form>
</template>
<script>
import EasybookingCombobox from '@/components/core/EasybookingCombobox'
import EasybookingPassangerBox from '@/components/core/EasybookingPassangerBox'

import Communicator from '@/communicator'
export default {
  name: 'EasybookingSearchboard',
  components: {
    EasybookingCombobox,
    EasybookingPassangerBox
  },
  data: () => {
    return {
      isMulti: false
    }
  },
  methods: {
    search () {
      var directives = [this.$refs['location'].getCodes()]
      var dates = this.$refs['date'].getDates()
      directives[0]['date'] = dates[0]
      directives[0]['time'] = 'M'
      if (dates.length > 1) {
        directives.push({
          departure_code: directives[0].arrival_code,
          arrival_code: directives[0].departure_code,
          date: dates[1],
          time: 'M'
        })
      }
      var request = {
        directions: directives,
        adult_qnt: 1,
        child_qnt: 0,
        infant_qnt: 0,
        class: 'E',
        direct: false,
        flexible: false,
        airlines: [],
        fare_types: [
          'PUB', 'NEG'
        ]
      }
      const comm = new Communicator()
      comm.search(request, result => {
        if (result['status'] === 'ok') {
          this.$router.push({
            path: '/offers/' + result.request_id
          })
        }
      })
    }
  }
}
</script>
