<template>
  <div class='row lista-resultados'>
    <div class="col-md">
      <carousel
        class="companies-list"
        :mouse-drag="false"
        :paginationEnabled="false"
        :navigationEnabled="true"
        :navigation-next-label="navigationNext"
        :navigation-prev-label="navigationPrev"
        :perPageCustom="[[425, 1], [768, 2], [1024, 3], [1440, 4]]">
        <slide 
          v-for="(item, index) in items"
          v-bind:item="item"
          v-bind:index="index"
          v-bind:key="index">
          <div class="box" @click="openItem(item)">
            <p>
              <strong>{{item.nome}}</strong><br />
              <span>Razão social</span>
            </p>
            <p>
              <strong>{{item.cnpj}}</strong><br />
              <span>CNPJ</span>
            </p>
            <p>
              <strong>{{getAddress(item)}}</strong><br />
              <span>{{ getAddress(item) ? "Endereço" : "" }}</span>
            </p>
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
  import Companies from '@/utils/Companies';
  import { Carousel, Slide } from 'vue-carousel';

  export default {
    data(){
      return {
        page: 0
      }
    },
    props: [
      "items"
    ],
    components: {
      Carousel,
      Slide 
    },
    computed:{
      navigationNext() {
        return '<i style="color:white; font-size: 25px;" class="fas fa-chevron-right"></i>';
      },
      navigationPrev() {
        return '<i style="color:white; font-size: 25px; margin-left: -45px; !important" class="fas fa-chevron-left"></i>';
      }
    },
    methods: {
      openItem(item){
        let cnpj = item.cnpj;
        this.$router.push({ name: 'Maps', params: { cnpj } });
      },
      getAddress(item){
        return Companies.getAddress(item)
      },
      next(){
        this.page++
      },
      prev(){
        this.page = Math.max(0, this.page - 1)
      },
    }
  }
</script>


<style lang="scss" scoped>
  .lista-resultados{
    &{
      position: relative;
    }
    .box{
      &{
        background-color: white;
        border-radius: 10px;
        padding: 12px;
        transition: 0.3s;
        width: 250px;
        height: 320px;
        margin-bottom: 30px;
        cursor: pointer;
        font-size: 16px;
        color: #3a8970;
      }
      &:hover{
        opacity: 0.9;
      }
      &:active{
        opacity: 0.70;
      }
      p{
        line-height: 24px;
      }
    }
  }
  @media (min-width: 425px){ .box{ width: 400px !important; }}
  @media (min-width: 768px){ .box{ width: 320px !important; }}
  @media (min-width: 1024px){ .box{ width: 280px !important; }}
  @media (min-width: 1440px){ .box{ width: 250px !important; }}
</style>