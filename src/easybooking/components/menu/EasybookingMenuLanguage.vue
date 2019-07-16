<template>
  <v-menu offset-y v-bind:nudge-width="120" class="easybooking--menu-language">
    <template v-slot:activator="{ on }">
      <v-btn flat v-on="on" class="br-0 xs-width">
        <slot name="icon"></slot> RU
      </v-btn>
    </template>
    <v-list class="menu-dropdown-list">
      <v-list-tile v-for="(lang, index) in languages" v-bind:key="index" v-on:click="setLanguage(lang)">
        <v-list-tile-content>{{lang}}</v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>
<script>
export default {
  name: 'easybooking-menu-language',
  props: {
    languages: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>
<style lang="scss">
.xs-width{
  @media screen and (max-width: 600px){
      min-width: 40px;
      width: 50px;
  }
}
</style>

