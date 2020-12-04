app.component('InfoCard', {
  props: {
    id: String,
    address: String,
    cnpj: String,
    name: String,
    cardType: String,
  },
  template: /*html*/
  `<div class="card" :class="{ 'maps-card' : isInsideMaps }">
    <div class="card-inner">
      <div v-if="isInsideMaps" class="card-header">
        <router-link to="/">
          <button class="button card-header-button">
            <span class="fa-stack">
              <i class="far fa-circle fa-stack-2x"></i>
              <i class="fas fa-arrow-left fa-stack-1x"></i>
            </span>
          </button>
        </router-link>
      </div>

      <div class="card-item item">
        <span class="item-label">Razão Social</span>
        <span class="item-content">{{ name }}</span>
      </div>

      <div class="card-item item card-priority">
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
  },
})
