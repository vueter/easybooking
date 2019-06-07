export default {
  methods: {
    setLanguage (lang) {
      console.log(lang)
    }
  },
  computed: {
    languages () {
      return this.$store.state.languages
    }
  }
}
