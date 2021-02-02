<template>
  <div class="map-page" v-if="business">
    <BusinessCard
      :companyName="business.nome"
      :cnpj="business.cnpj"
      :address="`
        ${business.logradouro} ${business.numero}, ${business.bairro}, ${business.municipio} ${business.uf}
      `"
      hasBackfowardButton
      class="float-card"
    />
    <iframe
      :width="$vuetify.breakpoint.width"
      :height="$vuetify.breakpoint.height"
      frameborder="0" style="border:0"
      :src="`https://www.google.com/maps/embed/v1/search?key=AIzaSyBBa-3HeIg11kR6qZMmcySAqnAtNfAn-R0
        &q=${mapQuerySearch}`" allowfullscreen>
    </iframe>
  </div>
</template>

<script>
import { mask } from 'vue-the-mask'
import BusinessCard from '@/components/cards/BusinessCard.vue'

export default {
  name: 'Home',
  data: () => ({
    mapQuerySearch: '',
    business: null
  }),
  directives: { mask },
  components: { BusinessCard },
  mounted () {
    if (!this.$route.params.business) this.$router.push({ name: 'Home' })

    const {
      logradouro,
      municipio,
      bairro,
      uf
    } = this.$route.params.business

    this.mapQuerySearch = `${logradouro} ${bairro} ${municipio} ${uf}`.replace(/\s/g, '+')
    this.business = this.$route.params.business
  }
}
</script>

<style lang="sass" scoped>
.map-page
  height: 100%
  .float-card
    width: 18rem
    position: fixed
    left: 0
    top: 0
</style>
