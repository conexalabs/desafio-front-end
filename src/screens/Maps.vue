<template>
  <div class="map" v-if="company && center">
    <company-card :company="company" button-back="true" />
    <GmapMap
      :options="{
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,
      disableDefaultUi: false
    }"
      :center="center"
      :zoom="15"
      class="googleMaps"
    >
      <GmapMarker :position="google && new google.maps.LatLng(center.lat, center.lng)" />
    </GmapMap>
  </div>
</template>

<script>
import { gmapApi } from 'vue2-google-maps';
import store from '../services/store';
import CompanyCard from '../components/CompanyCard.vue';

export default {
  name: 'Map',
  data() {
    return {
      company: null,
      center: { lat: -15.7941, long: -47.8825 },
    };
  },
  computed: {
    google: gmapApi,
  },
  components: {
    CompanyCard,
  },
  mounted() {
    this.company = store.get(this.$route.params.cnpj);
    const addressObj = {
      address_line_1: `${this.company.nome} ${this.company.bairro} ${this.company.complemento}`,
      city: this.company.municipio,
      state: this.company.uf,
      zip_code: this.company.cep,
    };
    this.$geocoder.send(addressObj, response => {
      if (response.results) {
        const { lat, lng } = response.results[0].geometry.location;
        this.center = { lat: parseFloat(lat), lng: parseFloat(lng) };
      }
    });
  },
};
</script>

<style lang="sass" scoped>
  .map
    width: 100wh
    height: 100vh
    .card
      z-index: 1
      background: white
      position: absolute
      top: -5px
      left: -5px
      width: 300px
    .googleMaps
      width: 100wh
      height: 100vh

</style>
