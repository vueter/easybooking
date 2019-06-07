export default {
  methods: {
    changeWallet () {
      console.log('wallet')
    }
  },
  computed: {
    wallet () {
      return this.$store.state.wallets
    }
  }
}
