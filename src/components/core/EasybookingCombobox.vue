<template>
  <v-layout row class="easybooking-combobox">
    <v-flex class="easybooking-combobox-field">
      <input type="text" :placeholder="from" class="first">
    </v-flex>
    <v-btn icon class="combobox-icon-btn">
      <v-icon color="#0FB8D3">{{icon}}</v-icon>
    </v-btn>
    <v-flex class="easybooking-combobox-field">
      <input type="text" :placeholder="to" class="last">
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'EasybookingCombobox',
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
      to: 'Прибытие'
    }
  },
  mounted () {
    if (this.target === 'date') {
      this.icon = 'date_range'
      this.from = 'Туда'
      this.to = 'Обратно'
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
  }
</style>
