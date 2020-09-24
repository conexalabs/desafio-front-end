<template>
<div class="row container-fluid containerMap" >
  <div class="card cardsmap col p-3" style="width: 18rem;">
      <router-link to="/listCompany">
        <i class="fas fa-arrow-circle-left"></i>
      </router-link>
    <div class="card-body p-1">
      <span class="card-title text">{{empresa.refMaps.nome}}</span>
      <p class="card-subtitle mb-2 ">Razão social</p>
      <span class="card-title">{{empresa.refMaps.cnpj}}</span>
      <p class="card-subtitle mb-2 ">CNPJ</p>
      <span class="card-title">{{empresa.refMaps.endereco}}</span>
      <p class="card-subtitle mb-2 ">Endereço</p>
    </div>
  </div>
  <div class="col" id="mapa"><div>
    </div>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
import gmapsInit from '../utils/gmaps'
export default {
  name: 'Maps',
  async mounted () {
    try {
      const google = await gmapsInit()
      const geocoder = new google.maps.Geocoder()
      const map = new google.maps.Map(document.getElementById('mapa'), {
        zoom: 8,
        center: {
          lat: -34.397,
          lng: 150.644
        }
      })

      console.log(this.empresa.refMaps.endereco)
      const adress = this.empresa.refMaps.endereco
      geocoder.geocode({ address: adress }, (results, status) => {
        if (status !== 'OK' || !results[0]) {
          throw new Error(status)
        }
        map.setCenter(results[0].geometry.location)
        map.fitBounds(results[0].geometry.viewport)
        const maps = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        })
        console.log(maps)
      })
    } catch (error) {
      console.error(error)
    }
  },
  computed: {
    ...mapState(['empresa'])
  }
}
</script>

<style lang="scss">
@import '../assets/styles/variables';
.containerMap{
  margin: 0;
  padding: 0;
  span {
    font-weight: 600;
  }
  span,
   p {
      @include style-card;
      margin-top: 0!important;
    }
    .cardsmap {
      z-index: 11111111111111;
      position: absolute;
      text-align: left;
      box-shadow: #00000036 5px 5px 5px;
      .fa-arrow-circle-left{
        color: $primary;
      }
    }
}
#mapa {
  width: 90%;
  height: 100vh;
  margin: auto;
  background-color: gray;
  position: relative;

}
</style>
