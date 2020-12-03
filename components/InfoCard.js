app.component('InfoCard', {
  props: {
    endereco: Object,
    cnpj: String,
    nome: String,
    cardType: String,
  },
  template: /*html*/
  `<div class="card" :class="{ 'maps-card' : isInsideMaps }">
    <div class="card-inner">
      <div v-if="isInsideMaps" class="card-header">
        <router-link to="/">
          <button class="button card-header-button card-header-left">
            <span class="fa-stack">
              <i class="far fa-circle fa-stack-2x"></i>
              <i class="fas fa-arrow-left fa-stack-1x"></i>
            </span>
          </button>
        </router-link>
      </div>

      <div class="card-item item">
        <span class="item-label">Razão Social</span>
        <span class="item-content">{{ name  }}</span>
      </div>

      <div class="card-item item">
        <span class="item-label">CNPJ</span>
        <span class="item-content">{{ cnpj }}</span>
      </div>

      <div class="card-item item">
        <span class="item-label">Endereço</span>
        <span class="item-content">{{ address }}</span>
      </div>
    </div>
  </div>`,
  computed: {
    isInsideMaps() {
      return this.cardType === 'maps';
    },
    address() {
      if(typeof this.endereco === 'object' ) {
        let arr = Object.values(this.endereco).slice(0,-2).filter(e => e);

        return arr.map( function(element) {
          let arr = element.split(' ');
          return arr.map(e => _.upperFirst(e.toLowerCase())).join(' ');
        }).join(', ').concat('-', this.endereco.uf);
      }

      return this.endereco;
    },
    name() {
      return this.nome.split(' ').map(e => _.upperFirst(e.toLowerCase())).join(' ');
    }
  },
})