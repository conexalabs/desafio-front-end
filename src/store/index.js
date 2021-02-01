import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    businessList: JSON.parse(localStorage.getItem('@businessList')) || []
  },
  mutations: {
    addBusinessToList (state, business) {
      state.businessList = [business, ...state.businessList]
      localStorage.setItem(
        '@businessList',
        JSON.stringify(state.businessList)
      )
    }
  },
  actions: {
    addBusinessToListAction ({ commit }, business) {
      commit('addBusinessToList', business)
    }
  }
})
