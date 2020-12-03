app.component('TheNavbar', {
  props:{
    title: String,
  },
  template: /*html*/`
  <nav class="navbar">
    <span class="title">
      <i class="navbar-brand fas fa-building" aria-hidden="true"></i>
      {{ title }}
    </span>

    <form class="navbar-form form form-inline" @submit.prevent="onSubmit">
      <input class="form-input" v-model="cnpj" type="search" placeholder="CNPJ...">
      <button class="button button-pill button-primary navbar-button" type="submit" >Localizar</button>
    </form>

    <router-link to="/location">GoogleMaps</router-link>
  </nav>`,
  data() {
    return {
      cnpj: null,
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('handleSearch', this.cnpj);
    }
  }
})