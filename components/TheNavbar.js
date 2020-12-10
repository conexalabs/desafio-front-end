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
      <input class="form-input" v-model.number="cnpj" type="search" placeholder="CNPJ...">
      <button class="button button-pill button-primary navbar-button" type="submit" >Localizar</button>
    </form>

    <ul style="display: flex; justify-content: space-between; width: 120px;">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/location">Mapa</router-link></li>
    </ul>
  </nav>`,
  data() {
    return {
      cnpj: null,
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('getCompany', this.cnpj);
    }
  }
})