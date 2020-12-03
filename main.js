const app = Vue.createApp({
  beforeCreate(){
    this.$store.commit('initializeStore');
  },
  created() {
    this.$store.commit('generateSliderList');
  },
  data() {
    return {
      title: 'Localizador de Empresas',
    }
  },
  computed: {
    ...Vuex.mapState([
      'companies',
      'sliderList'
    ]),
  },
  methods: {
    openMap(cnpj) {
      this.$store.dispatch('selectCompany', cnpj);
      this.$router.push('/location');
    }
  }
})
