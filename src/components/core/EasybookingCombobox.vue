<template>
  <v-layout row wrap>

    <v-layout row class="easybooking-combobox">
      <v-flex class="easybooking-combobox-field">
        <input type="text" :placeholder="from" class="first" ref="from" :value="value_from">
      </v-flex>
      <v-btn icon class="combobox-icon-btn" :ripple="false">
        <v-icon color="#0FB8D3">{{icon}}</v-icon>
      </v-btn>
      <v-flex class="easybooking-combobox-field">
        <input type="text" :placeholder="to" class="last" ref="to" :value="value_to">
      </v-flex>
      <LocationList v-if="target == 'location'" />
    </v-layout>
  </v-layout>
</template>

<script>
import LocationList from '@/components/core/combobox/LocationList'
import Communicator from '@/communicator'
export default {
  name: 'EasybookingCombobox',
  components: { LocationList },
  props: {
    target: {
      type: String,
      default: () => {
        return 'location'
      }
    }
  },
  data: () => {
    return {
      icon: 'swap_horiz',
      from: 'Прибытие',
      to: 'Прибытие',
      response: '',
      value_from: '',
      value_to: ''
    }
  },
  methods: {
    search (target) {
      var input = this.$refs[target]
      if (input.value.length > 2) {
        const comm = new Communicator()
        comm.getDirectives(input.value, result => {
          console.log(result)
        })
      }
    },
    getCodes () {
      return {
        'departure_code': this.$refs['from'].value,
        'arrival_code': this.$refs['to'].value
      }
    },
    getDates (asArray = false) {
      if (this.$refs['to'].value.length > 0) {
        return [this.$refs['from'].value, this.$refs['to'].value]
      }
      return [this.$refs['from'].value]
    }
  },
  mounted () {
    if (this.target === 'date') {
      this.icon = 'date_range'
      this.from = 'Туда'
      this.to = 'Обратно'
      this.value_from = '2019-05-25'
    } else {
      this.value_from = 'DXB'
      this.value_to = 'RUH'
    }
  }
}
</script>

<style>
  .easybooking-combobox {
    display: flex;
    border: 1px solid #0FB8D3;
    box-sizing: border-box;
    border-radius: 4px;
    margin-top: 6px;
  }

  .easybooking-combobox-field input {
    border: 0 !important;
    padding-right: 16px !important;
    padding-left: 16px !important;
    color: #4A4A4A;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color: white;
    border: 1px solid #CDCDCD;
    border-radius: 4px;
    outline: none;
    height: 100%;
    width: 100%;
    font-size: 14px;
    box-sizing: border-box;
    padding: 0 0px;
    box-shadow: none;
    transition: box-shadow .3s, border .3s;
    font-family: "Roboto";
    padding-right: 36px;
  }

  .easybooking-combobox-field .first {
    padding-right: 5px !important;
  }

  .easybooking-combobox-field .last {
    text-align: right;
    padding-left: 5px !important;
  }

  .combobox-icon-btn {
    height: 30px;
    width: 30px;
  }
</style>
