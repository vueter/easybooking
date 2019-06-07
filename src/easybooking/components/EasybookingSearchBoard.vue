<template>
  <v-form class="easybooking-search-board">
    <v-layout row wrap>
      <slot>
        <v-flex md5 pr-1>
          <easybooking-double-combobox v-bind:filter="filter" />
        </v-flex>
        <v-flex md3 pl-1 pr-1>
          <easybooking-date-range />
        </v-flex>
        <v-flex md2 pl-1 pr-1>
          <easybooking-menu-passanger />
        </v-flex>
      </slot>
      <v-flex md2 pl-1>
        <slot name="activator"></slot>
      </v-flex>
    </v-layout>
  </v-form>
</template>
<script>
export default {
  name: 'easybooking-search-board',
  props: {
    filter: {
      type: null,
      default: () => {
        return null
      }
    }
  }
}
</script>
