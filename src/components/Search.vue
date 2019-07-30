<template>
  <div class="search">
    <form @submit.prevent="submit">
      <div class="row justify-content-md-center">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <input
            type="text"
            autofocus
            v-model="cnpj"
            v-mask="'##.###.###/####-##'"
            name="cnpj"
            placeholder="CNPJ..."
          />
          <div class="errors" v-if="{errors}">
            <span>{{ errors.message }}</span>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12">
          <button id="submit" type="submit" v-if="!loading">Localizar</button>
          <button type="text" v-if="loading" disa>
            <img width="25" src="@/assets/images/loading.svg" />
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { validate } from 'cnpj';
import { mask } from 'vue-the-mask';

export default {
  name: 'Search',
  data: () => ({
    errors: {},
    teste: '123',
    cnpj: '',
  }),
  props: ['search', 'loading'],
  directives: { mask },
  methods: {
    submit() {
      this.errors = {};
      if (validate(this.cnpj)) {
        this.search({ cnpj: this.cnpj.replace(/\D/g, '') });
      } else {
        this.errors = { message: 'CNPJ inválido' };
      }
    },
  },
};
</script>

<style lang="sass" scoped>

  .errors
    text-align: left
    span
      font-size: 12px
      color: #b72222

  input[type=text]
    height: 64px
    width: 100%
    border: 2px solid $color
    border-radius: 5px
    padding: 0 25px
    font-size: 20px
    background: #f6f6f6
    &::placeholder
      color: $color-placeholder
      opacity: 1
    @media (max-width: $mobile)
      width: 80%

  button
    text-transform: uppercase
    color: white
    height: 55px
    width: 100%
    font-weight: 600
    font-size: 18px
    background: $color
    border-radius: 25px
    @media (max-width: $mobile)
      width: 80%
      margin-top: 25px

</style>
