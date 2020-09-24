<template>
  <div class="home row">
    <Pesquisar msg="Localizador de Emprezas"/>
    <div class="container-fluid conteudo col-12" >
      <div class="row cont-home">
        <figure class="col-12 m-auto">
          <img src="../assets/search.svg" alt="Kiwi standing on oval">
          <dir class="col-12">
            <span> Faça aqui a pesquisa de sua empreza</span>
          </dir>
        </figure>
      </div>
      <div>
      </div>
    </div>
  </div>
</template>

<script>
import Pesquisar from '@/components/Pesquisar.vue'

export default {
  name: 'Home',
  components: {
    Pesquisar
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/styles/variables' ;
.cont-home {
  height: 100%;
}
  img {
    max-width: 15%;
    height: auto;
  }
</style>
