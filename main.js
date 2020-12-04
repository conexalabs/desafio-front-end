const app = Vue.createApp({
  beforeCreate(){
    this.$store.dispatch('initialize');
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.$store.dispatch('updateViewportWidth', window.innerWidth);
    },
  }
})
