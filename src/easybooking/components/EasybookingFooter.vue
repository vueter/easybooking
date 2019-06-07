<template>
  <v-footer dark height="auto">
    <v-card flat tile class="easybooking--footer white--text text-xs-center">
      <v-card-text class="white--text pt-0">
        <v-container>
          <slot></slot>
        </v-container>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text class="white--text">
        <slot name="footer"> &copy;2018 — <strong>Easybooking</strong> </slot>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  name: 'easybooking-footer'
}
</script>
