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

    <form class="navbar-form form" @submit.prevent="onSubmit">
      <span v-show="infoStatus" class="form-message" :class="{ 'form-message-error' : isError }">
        {{infoMessage}}
      </span>

      <div class="form-inline">
        <input class="form-input" type="search" placeholder="012.345.678/1000-90 "
          v-model="cnpj"
          :class="{ 'form-input-error' : isError }"
          :maxlength="19"
        >
        <button class="button button-pill button-primary navbar-button" type="submit" >Localizar</button>
      </div>
    </form>
  </nav>
  `,
  data() {
    return {
      cnpj: null,
      show: true,
    }
  },
  computed: {
    ...Vuex.mapGetters([
      'infoMessage',
      'infoStatus'
    ]),
    isError() {
      return this.infoStatus === 'ERROR';
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('handleSearch', this.cnpj);
    }
  }
})