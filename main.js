const app = Vue.createApp({
  created() {
    this.$store.commit('generateSliderList');
  },
  data() {
    return {
      title: 'Localizador de Empresas',
    }
  },
  computed: Vuex.mapState(['companies', 'sliderList']),
})
