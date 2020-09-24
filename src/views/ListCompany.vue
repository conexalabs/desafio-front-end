<template>
  <div class="about ">
    <Pesquisar msg="Localizador de Emprezas"/>
    <div class="conteudo" >
      <div class="row carousel p-4">
      <div class="col col-10 m-auto">
      <a @click="showPrev" ><i  class="fas fa-chevron-left"></i> </a>
      <transition name="fade">
      <VueSlickCarousel @init="update"  ref="carousel"   v-bind="key">
        <ul v-for="(item, index) in empresaSA " :key="index">
          <a href="#" @click="verif(item)">
          <div class="cards">
            <div class="card" >
              <div class="card-body p-3">
                  <li class="p-0" >
                    <span>{{item.nome}}</span>
                    <p>Razão social</p>
                  </li>

                  <li class="p-0">
                    <span> {{item.cnpj}} </span>
                    <p>CNPJ</p>
                  </li>
                  <li class="p-0">
                    <span>{{item.endereco}}</span>
                    <p>Endereço</p>
                  </li>
                  <li>{{teste}}</li>
              </div>
            </div>
          </div>
          </a>
        </ul>
      </VueSlickCarousel>
      </transition>
      <a @click="showNext" ><i  class="fas fa-chevron-right"></i> </a>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import Pesquisar from '../components/Pesquisar'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import VueSlickCarousel from 'vue-slick-carousel'
import { mapGetters } from 'vuex'
export default {
  props: {
    teste: Array,
    msg: Array
  },
  data () {
    return {
      empresaSA: {},
      key: {
        arrows: false,
        focusOnSelect: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        centerPadding: ('10%'),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1

            }
          }
        ]
      }
    }
  },
  methods: {
    showNext () {
      this.$refs.carousel.next()
    },
    showPrev () {
      this.$refs.carousel.prev()
    },
    verif (item) {
      this.$store.dispatch('map', item)
    },
    update () {
      this.empresaSA = JSON.parse(localStorage.getItem('empresas'))
    }
  },
  components: {
    VueSlickCarousel,
    Pesquisar
  },
  computed: {
    ...mapGetters(['empresas'])
  },
  created () {
    this.empresaSA = JSON.parse(localStorage.getItem('empresas'))
    console.log(this.empresaSA.length)
  },
  watch: {
    empresas (newValue) {
      // update array
      this.empresaSA = newValue
    }
  },
  name: 'ListCompany'
}
</script>
<style lang="scss" scoped>
  @import './style.scss';
</style>
