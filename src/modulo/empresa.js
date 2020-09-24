import Axios from 'axios'
import { vm } from '@/main'

// yourMutation (state, someRouteName) {
//   vm.$router.push({name: someRouteName})
// }

export default {
  state: {
    refMaps: [],
    validate: false,
    cnpj: '',
    empresa: {
      nome: String,
      cnpj: Number,
      endereco: String
    },
    empresas: []
  },
  actions: {
    async addCNPJ ({ commit, state }, data) {
      const dado = data.cnpj
      try {
        // ver vue.config.js
        const Details = await Axios.get(`/v1/cnpj/${dado}`, {
          validateStatus: function (status) {
            return status >= 200 && status < 300 // default
          }
        })
        if (Details.data.status !== 'ERROR') {
          commit('SET_CNPJ', await Details)
          // state.validate = false
          // console.log(state.validate)
          return Details.data
        } else {
          console.log(Details.data.status)
          state.validate = true
          console.log(state.validate)
        }
      } catch (error) {
        console.error(error)
        console.log(error)
      }
    },
    map ({ commit, state }, data) {
      commit('REF_MAPS', data)
      console.log(data)
      console.log(state.refMaps)
    }
  },
  mutations: {
    REF_MAPS (state, payload) {
      state.refMaps = payload
      vm.$router.push({ name: 'Maps' })
    },
    SET_CNPJ (state, Details) {
      if (vm.$router.currentRoute.name === 'Home') {
        vm.$router.push({ name: 'ListCompany' })
      }
      const data = Details.data
      console.log('setcnpj')
      state.validate = false
      state.empresa.nome = data.nome
      state.empresa.cnpj = data.cnpj
      state.empresa.endereco = data.bairro
      if (localStorage.getItem('empresas') === null) {
        var empresas = []
        empresas.unshift(state.empresa)
        localStorage.setItem('empresas', JSON.stringify(empresas))
      } else {
        var emprezas = JSON.parse(localStorage.getItem('empresas'))
        emprezas.unshift(state.empresa)
        localStorage.setItem('empresas', JSON.stringify(emprezas))
        console.log('passando')
        state.empresas = JSON.parse(localStorage.getItem('empresas'))
      }
    }
  },
  getters: {
    empresas: state => state.empresas,
    validate: state => state.validate

  }
}
