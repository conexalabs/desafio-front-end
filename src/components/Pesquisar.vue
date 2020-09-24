<template>
<div class="nav col">
  <div class="hello col-12 m-auto">
    <h1 class="mb-4"> <i class="fas fa-building"></i> {{ msg }}</h1>
    <div class="row m-auto justify-content-center">
      <div class="form-row m-auto align-items-baseline justify-content-center col-sm-5">
          <div class="col-sm-6">
            <input type="text" maxlength="14" class="form-control input-cnpj mb-1" id="cpfcnpj" placeholder="CNPJ" v-model="cnpj" @keyup="Validate" required>
            <transition name="fade">
            <div class="alert alert-danger" v-if="show" >
               {{text}}
            </div>
            </transition>
          </div>
          <div class="col-auto ml-3">
            <button type="submit" class="btn btn-success mb-1 p-2"   @click="addCnpj">
              <span class="p-4">LOCALIZAR</span> </button>
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'Pesquisar',
  props: {
    msg: String
  },
  data () {
    return {
      text: String,
      show: false,
      cnpj: '',
      empresa: {
        nome: String,
        cnpj: Number,
        endereco: String
      }
    }
  },
  methods: {
    addCnpj () {
      if (this.cnpj !== '') {
        this.$store.dispatch('addCNPJ', { cnpj: this.cnpj })
        if (this.$store.state.empresa.validate === true) {
          console.log(this.$store.state.empresa.validate)
          this.show = true
          this.text = 'CNPJ INVÁLIDO'
        }
      } else {
        this.show = true
        this.text = 'CAMPO OBRIGATÓRIO'
      }
      this.cnpj = ''
    },
    Validate () {
      this.show = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./style.scss";

</style>
