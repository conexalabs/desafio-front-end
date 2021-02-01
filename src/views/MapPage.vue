<template>
  <div class="map-page">
    <BusinessCard
      hasBackfowardButton
      class="float-card"
    />
    <iframe
      :width="$vuetify.breakpoint.width"
      :height="$vuetify.breakpoint.height"
      frameborder="0" style="border:0"
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBBa-3HeIg11kR6qZMmcySAqnAtNfAn-R0
        &q=Space+Needle,Seattle+WA" allowfullscreen>
    </iframe>
  </div>
</template>

<script>
import { mask } from 'vue-the-mask'
import { mapActions, mapState } from 'vuex'
import BusinessCard from '@/components/cards/BusinessCard.vue'

export default {
  name: 'Home',
  data: () => ({
    mapQuerySearch: ''
  }),
  directives: { mask },
  components: { BusinessCard },
  computed: {
    ...mapState({
      businessList: state => state.businessList
    })
  },
  mounted () {
    if (!this.$route.params.business) this.$router.push({ name: 'Home' })
    const {
      logradouro,
      numero,
      municipio,
      uf
    } = this.$route.params.business
    this.mapQuerySearch = `${logradouro} ${numero}, ${municipio} ${uf}`
  },
  methods: {
    ...mapActions([
      'addBusinessToListAction'
    ])
  }
}
</script>

<style lang="sass" scoped>
.map-page
  height: 100%
  .float-card
    position: fixed
    left: 0
    top: 0
</style>
