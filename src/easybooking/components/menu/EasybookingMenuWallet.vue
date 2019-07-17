<template>
  <v-menu offset-y v-bind:nudge-width="120" class="easybooking--menu-wallet">
    <template v-slot:activator="{ on }">
      <v-btn flat ripple v-on="on" class="br-0">
        <slot name="icon"></slot> UZS
      </v-btn>
    </template>
    <v-list class="menu-dropdown-list">
      <v-list-tile v-on:click="setWalet()">
        <v-list-tile-content>UZB (Uzbek so'mi)</v-list-tile-content>
      </v-list-tile>
      <v-list-tile v-on:click="setWalet()">
        <v-list-tile-content>USD (US Dollar)</v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "easybooking-menu-wallet",
  props: {
    wallets: {
      type: Object,
      default: () => {
        return {};
      }
    }
  }
};
</script>
<style lang="scss">
.br-0 {
  border-radius: 0 !important;
}
  .menu-dropdown-list {
    padding: 0 !important;
    .v-list__tile {
      height: 40px !important;
      .v-list__tile__content {
        font-size: 14px;
        line-height: 16px;
        color: #4a4a4a;
      }
    }
  }
</style>
