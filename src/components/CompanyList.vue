<template>
  <div class='row lista-resultados'>
    <div class="col-md">
      <i v-if="page > 0" @click="prev" class="fas fa-chevron-left"></i>
      <carousel 
        :per-page="4" 
        :navigate-to="page" 
        :mouse-drag="false"
        :paginationEnabled="false"
        :navigateTo="page">
        <slide 
          v-for="(item, index) in items"
          v-bind:item="item"
          v-bind:index="index"
          v-bind:key="index"
          class="col-sm-3">
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
      <i v-if="Object.keys(items).length - 4 > page" @click="next" class="fas fa-chevron-right"></i>
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
      }
    }
  }
</script>


<style lang="scss" scoped>
  .lista-resultados{
    &{
      position: relative;
    }
    .fa-chevron-right, .fa-chevron-left{
      color: white;
      font-size: 45px;
      position: absolute;
      top: 130px;
      cursor: pointer;
    }
    .fa-chevron-right{
      right: -50px;
    }
    .fa-chevron-left{
      left: -50px;
    }
    .box{
      &{
        background-color: white;
        border-radius: 10px;
        padding: 12px;
        transition: 0.3s;
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
</style>