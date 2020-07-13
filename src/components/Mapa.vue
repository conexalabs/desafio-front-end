<template>
  <div>
      <div 
        id="card"
        style="z-index: 1000" 
        v-if="no_mapa_dados"
        class="w3-left-align w3-quarter w3-animate-left w3-border w3-round w3-white w3-small w3-padding">
        <router-link to="/"><i class="fas fa-arrow-circle-left"></i> </router-link>
       
        <div class="informacao">
          <strong class="w3-col w3-left-align">{{no_mapa_dados.nome}}</strong>
          <span class="w3-col w3-left-align">Razão social</span>
        </div>

        <div class="informacao">
          <strong class="w3-col w3-left-align">{{no_mapa_dados.cnpj}}</strong>
          <span class="w3-col w3-left-align">CNPJ</span>
        </div>

        <div class="informacao w3-margin-bottom ">
          <strong class="w3-col w3-left-align">{{no_mapa_dados.logradouro}} {{no_mapa_dados.numero}} {{no_mapa_dados.bairro}} {{no_mapa_dados.municipio}} {{no_mapa_dados.uf}}</strong>
          <span class="w3-col w3-left-align">Endereço</span>
        </div>
      </div>
      <div v-else>Não existe dados para carregar o mapa!</div>

      <div id="map" ></div>
    </div>
</template>

<script>
import { API_KEY } from "./API_KEY";
import {Loader, LoaderOptions} from 'google-maps';
import axios from 'axios'
import toastr from 'toastr'

const loader = new Loader(API_KEY);
export default {
  nome: 'mapa',
  data () {
    return {
      endereco_buscado: undefined,
      longitude: undefined,
      latitude: undefined,
      no_mapa_dados: undefined
    }
  },
  methods:{
    buscarMapa(lat, lng){
  
      loader.load().then(function (google) {
        var myLatlng = new google.maps.LatLng(lat, lng);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false, 
            styles: [
            {
                featureType: "water",
                stylers: [
                { saturation: 43 },
                { lightness: -11 },
                { hue: "#0088ff" }
                ]
            },
            {
                featureType: "road",
                elementType: "geometry.fill",
                stylers: [
                { hue: "#ff0000" },
                { saturation: -100 },
                { lightness: 99 }
                ]
            },
            {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{ color: "#808080" }, { lightness: 54 }]
            },
            {
                featureType: "landscape.man_made",
                elementType: "geometry.fill",
                stylers: [{ color: "#ece2d9" }]
            },
            {
                featureType: "poi.park",
                elementType: "geometry.fill",
                stylers: [{ color: "#ccdca1" }]
            },
            {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{ color: "#767676" }]
            },
            {
                featureType: "road",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#ffffff" }]
            },
            { featureType: "poi", stylers: [{ visibility: "off" }] },
            {
                featureType: "landscape.natural",
                elementType: "geometry.fill",
                stylers: [{ visibility: "on" }, { color: "#b8cb93" }]
            },
            { featureType: "poi.park", stylers: [{ visibility: "on" }] },
            {
                featureType: "poi.sports_complex",
                stylers: [{ visibility: "on" }]
            },
            { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
            {
                featureType: "poi.business",
                stylers: [{ visibility: "simplified" }]
            }
            ]
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            title: 'Ponto buscado'
        });
        marker.setMap(map);
      });
    },

    async getLocation() {
       
       this.no_mapa_dados  = await JSON.parse(localStorage.getItem("no_mapa"));
       let cep = this.no_mapa_dados.cep.replace('.','');
       axios.get('https://maps.googleapis.com/maps/api/geocode/json?address='+cep+'&key='+API_KEY).then(json => {
        this.endereco_buscado = JSON.parse(JSON.stringify(json.data.results));
        this.latitude = this.endereco_buscado[0].geometry.location.lat;
        this.longitude = this.endereco_buscado[0].geometry.location.lng;
        this.buscarMapa(this.latitude, this.longitude)
      }).catch(err => {
         toastr.info("Ouve falha na requisição", "Mensagem");
      })
      
    }
  },
  
  mounted() {
    this.getLocation();
  }
};
</script>
<style scoped>
#map{
  
  height: 100vh;
 
}
#card{
  position:absolute;
  z-index: 2000;
  color:#388669 !important;
}
</style>
