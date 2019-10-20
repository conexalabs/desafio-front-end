<template>
  <div class="area">
    <div class="map"></div>
    <div class="info">
      <a href="#/home"><i class="fas fa-arrow-circle-left"></i></a>
      <p>
        <strong>{{company.nome}}</strong><br />
        <span>Razão social</span>
      </p>
      <p>
        <strong>{{company.cnpj}}</strong><br />
        <span>CNPJ</span>
      </p>
      <p>
        <strong>{{company.endereco}}</strong><br />
        <span>{{ company.endereco ? "Endereço" : "" }}</span>
      </p>
    </div>
  </div>
</template>

<script>
  import gmapsInit from '@/utils/gmaps';
  import Companies from '@/utils/Companies';
  export default {
    data(){
      return {
        company: {}
      }
    },
    props: [
      "cnpj"
    ],
    async mounted() {
      try {
        this.company = Companies.getCompany(this.cnpj)
        const google = await gmapsInit();
        const geocoder = new google.maps.Geocoder();
        const map = new google.maps.Map($(this.$el).find('.map')[0]);
        geocoder.geocode({ address: this.company.endereco }, (results, status) => {
          if (status !== 'OK' || !results[0]) {
            throw new Error(status);
          }
          map.setCenter(results[0].geometry.location);
          map.fitBounds(results[0].geometry.viewport);
          let latLng = { lat: map.center.lat(), lng: map.center.lng() }
          let marker = new google.maps.Marker({
            position: latLng,
            map: map,
            title: this.company.nome
          });

        });
      } catch (error) {
        console.error(error);
      }
    },
  };
</script>

<style lang="scss" scoped>
  .area{
    width: 100vw;
    height: 100vh;
  }
  .map { 
    width: 100vw;
    height: 100vh;
  }
  .info{
    position: absolute;
    z-index: 9999 !important;
    top: 0;
    left: 0;
    background-color: white;
    width: 250px;
    height: 320px;
    border-radius: 0 0 15px 0;
    box-shadow: 0 0 20px #000;
    padding: 15px;
    font-size: 16px;
    p{
      font-size: 16px;
      line-height: 20px;
    }
    .fa-arrow-circle-left{
      font-size: 32px;
      margin-bottom:  20px;
      display: inline-block;
      color: #3a8970;
    }
  }
</style>