<template>
  <div class="card" v-if="company">
    <div class="button-back" v-if="buttonBack" @click="back">
      <img width="45" src="@/assets/images/icon-arrow-left.png" />
    </div>
    <ul>
      <li class="name">
        <div class="title">{{ company.nome || '' }}</div>
        <div class="subtitle">Razão Social</div>
      </li>
      <li class="cnpj">
        <div class="title">{{ company.cnpj || '' }}</div>
        <div class="subtitle">CNPJ</div>
      </li>
      <li class="endereco">
        <div class="title">{{ company.bairro || '' }}</div>
        <div class="subtitle">Endereço</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CompanyCard',
  props: ['company', 'button-back'],
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="sass" scoped>
    .card
      color: $color
      border-radius: 15px
      min-height: 200px
      padding: 20px
      box-shadow: 0px 0px 17px -6px rgba(0,0,0,0.71)
      .button-back
        cursor: pointer
        margin-bottom: 20px
        img
          margin-left: -5px
      ul
        padding: 0
        list-style: none
        li
          margin-bottom: 25px
          color: $color
          .title
            font-size: 16px
            font-weight: 700
          .subtitle
            font-size: 16px

</style>
