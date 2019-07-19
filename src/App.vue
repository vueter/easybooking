<template>
  <v-app id="app">
    <router-view/>
    <v-snackbar v-model="snackbar" top v-bind:timeout="6000">
      {{ message }}
      <v-btn color="pink" flat v-on:click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    etm_user: null,
    snackbar: false,
    message: ''
  }),
  mounted(){
    this.$etm.registerAlert((message) => {
      this.message = message
      this.snackbar = true
    })
    this.$etm.auth({ login: 'Vue', password: 'w2Uq8VRlia' }, (error, result) => {
      if(error){
        this.$etm.alert('Error on connection to server')
      }
      else{
        this.etm_user = result
      }
    })
  }
}
</script>
<style lang="scss">
#app {
  font-family: "Roboto";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
