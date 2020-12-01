app.component('SliderCard', {
  props: {
    address: String,
    cnpj: String,
    social: String,
  },
  template: /*html*/
  `<div>
    <div class="card-inner">
      <div class="card-item item">
      <span class="item-label">Razão Social</span>
      <span class="item-content">{{ social }}</span>
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
})