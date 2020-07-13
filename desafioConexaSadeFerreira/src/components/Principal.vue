<template>
  <div class="tela w3-col">
    <div id="pesquisa">
      <h3 class="titulo" style="color: #3a8970">
        <i class="fas fa-building"></i>&nbsp;Localizador de Empresas
      </h3>

      <div class="w3-col  entrada-de-dados">
        <input 
          type="text" 
          placeholder="CNPJ..." 
          v-model="cnpj"
          class="w3-input w3-border w3-round w3-col s12 m3 l3">
        <button @click="buscarCNPJ(cnpj)" class="w3-btn w3-col s12 m2 l2 w3-text-white" style="background-color: #3a8970; border-radius: 20px; ">LOCALIZAR</button>
      </div>
    </div>

    <div id="cards-resultados" class="w3-panel">
      <div 
        @click="pagina_atual = 1" 
        v-if="dados.length > 0"
        :disabled="pagina_atual == 1">
        <i class="fas fa-chevron-left seta-left"></i>
      </div>
       <div  
          @click="pagina_atual += 1" 
          v-if="dados.length > 0"
          :disabled="pagina_atual == total_paginas">
          <i class="fas fa-chevron-right seta-right"></i>
      </div>
      

      <div class="container w3-animate-right ">
        <div 
          v-show="(indice >= (pagina_atual * c_itens_por_pagina) - c_itens_por_pagina) && (indice < (pagina_atual * c_itens_por_pagina))"
          v-for="(dado, indice) in dados"
          :key="indice"
          @click="abrirMapa(dado)"
          id="card" 
          class="w3-quarter w3-animate-left w3-border w3-round w3-white w3-small w3-padding">
          <div class="informacao" @click="abrirMapa(dado)">
            <strong class="w3-col w3-left-align">{{dado.nome}}</strong>
            <span class="w3-col w3-left-align">Razão social</span>
          </div>

          <div class="informacao">
            <strong class="w3-col w3-left-align">{{dado.cnpj}}</strong>
            <span class="w3-col w3-left-align">CNPJ</span>
          </div>

          <div class="informacao w3-margin-bottom ">
            <strong class="w3-col w3-left-align">{{dado.logradouro}}&nbsp;{{dado.bairro}}&nbsp;{{dado.municipio}}, </strong>
            <span class="w3-col w3-left-align">Endereço</span>
          </div>
        </div>

        <div class="w3-col w3-margin-top w3-padding" v-if="dados.length == 0">
          <div class="w3-col">
            <img src="static/imagens/search.png"/> 
          </div>

          <div class="w3-margin-top w3-text-white w3-col">
            <span>Localize acima a primeira empresa</span> 
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import CnpjApi from '@/servicos/CnpjApi';
import VueJsonp from 'vue-jsonp'
import Vue from 'vue'
import toastr from 'toastr'
Vue.use(VueJsonp)
export default {
  name: 'Principal',
  data () {
    return {
      cnpj: undefined,
      dados: [],

       /* PAGINAÇÃO */
      pagina_atual: 0,
      quantidade_pedidos: 0,
      total_paginas: 0,

      /* CONSTANTES */
      c_itens_por_pagina: 4
    }
  },
  async mounted(){
    if(localStorage.getItem("CNPJ")){
      this.dados = await JSON.parse(localStorage.getItem("CNPJ"));
    }
    this.paginar();
  },
  
  methods:{
    /*função para verificar padrão de cpf e cnpj*/
    cnpjOk(registro) {
      let cnpj = registro.toString();
      // Remove caracteres invá¡lidos do valor
      cnpj = cnpj.replace(/[^0-9]/g, "");
      // Verifica CPF
      if (cnpj.length === 11) {
        return true;
      } else if (cnpj.length === 14) {
        return true;
      } else {
        return false;
      }
    },
    async abrirMapa(dado){
      await localStorage.setItem('no_mapa', JSON.stringify(dado));
      window.location.href = "/mapa"
    },
    paginar(){
      this.pagina_atual = 1;
      this.quantidade_pedidos = this.dados.length;
      this.total_paginas = Math.ceil(this.quantidade_pedidos / this.c_itens_por_pagina);
    },

    buscarCNPJ(cnpj){
      this.cnpjOk(cnpj);
      console.log(cnpj);
      let numero_cnpj = cnpj.replace(".","");
      numero_cnpj = numero_cnpj.replace(".","");
      numero_cnpj = numero_cnpj.replace("-","");
      numero_cnpj = numero_cnpj.replace("/","");
     
      this.$jsonp('https://www.receitaws.com.br/v1/cnpj/'+ numero_cnpj).then(json => {
      
        if(json.status === "ERROR"){
           toastr.info("Cnpj invalido ou inesistente", "Mensagem");
           return;
        }
        this.dados.push(json);
        
        localStorage.setItem('CNPJ', JSON.stringify(this.dados))
        this.paginar();
        toastr.info("Dados inseridos", "Sucesso")
       
      }).catch(err => {
         toastr.info("Ouve falha na requisição", "Mensagem");
      })
      
      
    }
  }

}
</script>

<style scoped>
#cards-resultados{
  background-image: linear-gradient(to right, #388669 , #459A9E);
  height: 50vh!important;
  margin-top: 10vh;
  font-size: 16px!important;
}
.seta-left{
  position: relative;
  font-size: 30px!important;
  color: white;
  float: left!important;
  margin-top: 25vh;
}
.seta-left:hover{
  font-size: 35px!important;
}
.seta-right{
  position: relative;
  font-size: 30px!important;
  color: white;
  float: right;
  margin-top: 25vh;
}
.seta-right:hover{
  font-size: 35px!important;
}
.informacao{
  padding: 4vh;
  margin-top:-10px;
  padding-left: 2px;
  color: #459A9E;
}
input{
  border-color:#388669!important;
}

button{
  font-weight: bold!important;
  font-size: 20px!important;
  margin-left: 10px;
}
#card{
  margin-top: 15vh;
  margin-right: 20px;
  width: 20%;
  /*usei 8px pq 16px ficou muito grande*/
  font-size: 8px!important;
  animation-name: cardAnimacao;
  animation-duration: 4s;
}
.container{
  margin-left: 10% ;
}
.entrada-de-dados{
  margin-left: 26%
}
.titulo{
  padding-top:1px ;
  font-size: 60px!important;
}

.tela{
  font-family:  Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
}
@keyframes cardAnimacao {
  0%   {background-color:#459A9E!important; left:0px; top:0px;}
  25%  {background-color:green; left:50px; top:0px;}
  100% {background-color:#388669; left:0px; top:0px;}
}
@media only screen and (max-width: 600px) {
  .entrada-de-dados{
    margin-left: 25%;
    max-width: 200px;
  } 
  .titulo{
    padding-top:1px ;
    font-size: 20px!important;
  }
  button{
    font-weight: bold!important;
    font-size: 16px!important;
    max-width: 100%;
    margin-top: 3%;
    margin-left: 0px;
  }
  .container{
    padding-top: 0%;
  }
  
  #cards-resultados{
    width: 100vw;
    height: 100vh!important;
    margin-top: 20vh;
    font-size: 16px!important;
    position: absolute;
  }
   #card{
    width: 90%;
    margin-top: 20vh;
    font-size: 16px!important;
  }
  .seta-left{
    position: absolute;
    font-size: 30px!important;
    color: white;
    float: left!important;
    margin-top: 1vh;
    margin-right: 5vw;
  }
  .seta-right{
    position: absolute;
    font-size: 30px!important;
    color: white;
    float: left!important;
    margin-top: 1vh;
    margin-left: 7vw;
  }
}
</style>
