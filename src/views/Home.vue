<template>
  <div class="home">
    <v-row class="header-section pt-6">
      <v-col>
        <v-row class="justify-center align-center">
          <v-col cols="auto">
            <font-awesome-icon size="3x" icon="building" :color="$vuetify.theme.defaults.light.primary" />
          </v-col>
          <v-col cols="auto">
            <h1 class="header-title font-weight-regular">Localizador de Empresas</h1>
          </v-col>
        </v-row>
        <v-form v-model="isValidForm" class="mt-4">
          <v-row class="justify-center align-center">
            <v-col cols="auto">
              <v-text-field
                label=""
                outlined
                auto-grow
                hide-details
                height="65px"
                v-model="cnpjInputText"
                color="primary"
                placeholder="CNPJ..."
                :rules="[
                  v => this.documentRules(v) || 'CNPJ inválido'
                ]"
                class="search-input text-h6"
                v-mask="['##.###.###/####-##']"
              ></v-text-field>
            </v-col>
            <v-col cols="auto">
              <v-btn
                rounded
                x-large
                height="50px"
                :disabled="!isValidForm"
                @click="searchCNPJ"
                :loading="loading"
                depressed
                class="font-weight-bold"
                color="primary"
              >
                Localizar
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
    <v-row
      v-if="businessList.lenghth > 0"
      class="content-section align-center justify-center px-10"
    >
      <v-col cols="auto">
        <v-btn icon>
          <v-icon color="white" x-large>mdi-chevron-left</v-icon>
        </v-btn>
      </v-col>
      <v-col
        v-for="(business, index) in 4"
        :key="`list-item-${index}`"
      >
        <BusinessCard
          @onClick="$router.push({ name: 'MapPage', params: { business } })"
          :companyName="business.nome"
          :cnpj="business.cnpj"
          :address="`
            ${business.logradouro} ${business.numero}, ${business.numero} ${business.bairro}, ${business.municipio} ${business.uf}
          `"
        />
      </v-col>
      <v-col cols="auto">
        <v-btn icon>
          <v-icon color="white" x-large>mdi-chevron-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-row
      v-else
      class="content-section align-center justify-center px-10"
    >
      <v-col cols="auto">
        <v-row class="justify-center">
          <v-col cols="auto">
            <img width="200" src="@/assets/images/illustration.png" alt="illustration">
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <span class="white--text text-h6 font-weight-regular">Localize acima a primeira empresa</span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <toast
      :snackbar="showToast"
      :color="typeToast"
      :timeout="8000"
      :text="textToast"
      @close="showToast = false"
    />
  </div>
</template>

<script>
import { mask } from 'vue-the-mask'
import Toast from '@/components/Toast'
import { mapActions, mapState } from 'vuex'
import CustomRules from '@/helpers/custom-rules'
import BusinessService from '@/services/BusinessService'
import BusinessCard from '@/components/cards/BusinessCard.vue'

export default {
  name: 'Home',
  data: () => ({
    typeToast: '',
    textToast: '',
    loading: false,
    showToast: false,
    cnpjInputText: '',
    isValidForm: false
  }),
  directives: { mask },
  components: { BusinessCard, Toast },
  computed: {
    ...mapState({
      businessList: state => state.businessList
    })
  },
  methods: {
    ...mapActions([
      'addBusinessToListAction'
    ]),
    async searchCNPJ () {
      try {
        this.loading = true
        const unmaskedCNPJ = this.$options.filters.unmaskNumber(this.cnpjInputText)
        const resultData = (await BusinessService.search(unmaskedCNPJ)).data
        if (resultData.status === 'ERROR') {
          this.showToastMessage('error', 'Não foi possível localizar o CNPJ')
          return
        }
        const {
          nome, cnpj, logradouro,
          numero, bairro, municipio, uf
        } = resultData
        this.addBusinessToListAction({
          nome,
          cnpj,
          logradouro,
          numero,
          bairro,
          municipio,
          uf
        })
        this.showToastMessage('success', 'CNPJ localizado com sucesso')
        this.loading = false
      } catch (error) {
        this.showToastMessage('error', 'Não foi possível localizar o CNPJ')
        this.loading = false
        console.log(error)
      }
    },
    documentRules (v) {
      if (!v) return false
      return CustomRules.cnpjRules(v) && v.length > 14
    },
    showToastMessage (status, message) {
      this.textToast = message
      this.typeToast = status
      this.showToast = true
    }
  }
}
</script>

<style lang="sass" scoped>
.home
  height: 100%
  .header-section
    height: 33%
    .search-input
      width: 370px
    .header-title
      color: $primary-color
      font-size: 60px
  .content-section
    height: 70%
    margin-top: 0px
    background-image: $primary-gradient
</style>
