<template>
  <div class="maps">
    <Card
    :empresa="empresa"
    backBtn
    @back-btn-clicked="$emit('close-maps')"
    />
    <iframe
    frameBorder="0"
    :src="mapsSource()"
    allowFullScreen>
    </iframe>
  </div>
</template>

<script>
import Card from '../components/Card'

export default {
  components: {
    Card
  },
  props: {
    APIkey: String,
    empresa: Object
  },
  methods: {
    mapsSource () {
      const params = `${this.empresa.nome} ${this.empresa.logradouro} ${this.empresa.numero}`
      const link = `https://www.google.com/maps/embed/v1/search?key=${this.APIkey}&q=${params.replace(/ /g, '+')}`
      return link
    }
  }
}
</script>

<style>
.maps iframe {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1
}
</style>
