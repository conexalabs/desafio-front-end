const store = Vuex.createStore({
  state() {
    return {
      companies: [],
      currentCompany: {},
      info: {
        status: false,
        message: '',
      },
      viewportWidth: window.innerWidth,
    }
  },

  getters: {
    allCompanies:   (state) => state.companies,
    currentCompany: (state) => state.currentCompany,
    infoStatus:     (state) => state.info && state.info.status,
    infoMessage:    (state) => state.info && state.info.message,
    viewportWidth:  (state) => state.viewportWidth,
  },

  actions: {
    initialize({ commit }) {
      commit('initializeStore');
    },

    handleSearch({ commit, state }, keyword) {
      commit('clearInfoMessage');

      try {
        if(keyword === null || keyword.length === 0) {
          throw {
            status: 'INFO',
            message: 'Digite um CNPJ para buscar sua localização.'
          }
        }

        var onlyDigits = keyword.match(/\d+/g);

        if(onlyDigits === null) {
          throw {
            status: 'ERROR',
            message: 'Essa busca considera apenas números/dígitos, filtrando quaisquer outros caracteres digitados.'
          }
        }

        onlyDigits = onlyDigits.join('');

        if(onlyDigits.length > 15 || onlyDigits.length < 13) {
          throw {
            status: 'ERROR',
            message: 'A quantidade de dígitos informada não corresponde a um número de CNPJ válido.'
          };
        }

        if(state.companies.find( ({ cnpj }) => cnpj === keyword)) {
          commit('setCurrentCompany', keyword);
        } else {
          axios.get(`https://www.receitaws.com.br/v1/cnpj/${onlyDigits}`)
          .then(response => {

            if(response.data.status === 'ERROR') {
              throw {
                message: `${response.data.message} ou não encontrado.`,
                status: 'NOTFOUND'
              }
            }

            return commit('addCompany', response.data)
          });
        }
      } catch(e) {
        commit('setInfoMessage', {
          status: e.status || 'ERROR',
          message: e.message || 'Não foi possível realizar sua busca!'
        });
      }
    },

    selectCompany({ commit }, cnpj) {
      commit('setCurrentCompany', cnpj);
      commit('clearInfoMessage');
    },

    updateViewportWidth({ commit }, width) {
      commit('updateViewportWidth', width);
    },
  },

  mutations: {
    initializeStore(state) {
      const companies       = localStorage.getItem('companies');
      const currentCompany  = localStorage.getItem('currentCompany');

      state.companies = companies ? JSON.parse(companies) : [];
      state.currentCompany = currentCompany ? JSON.parse(currentCompany) : {};
    },

    clearInfoMessage(state) {
      state.info.status = false;
      state.info.message = '';
    },

    addCompany(state, data) {
      try {
        const { nome, cnpj, logradouro, numero, bairro, municipio, uf } = data;
        const company = {
          cnpj,
          cnpjNumber: cnpj.match(/\d+/g).join(''),
          name: nome.split(' ').map(e => _.upperFirst(e.toLowerCase())).join(' '),
          address: [
            logradouro,
            numero,
            bairro,
            municipio,
          ].map( function(element) {
            let arr = element.split(' ');
            return arr.map(e => _.upperFirst(e.toLowerCase())).join(' ');
          }).join(', ').concat('-', uf),
        }

        state.currentCompany = company;
        state.companies = [...state.companies, company];
        localStorage.setItem('companies', JSON.stringify(state.companies));
        localStorage.setItem('currentCompany', JSON.stringify(state.currentCompany));
      } catch (e) {
        commit('setInfoMessage', {
          status: e.status || 'ERROR',
          message: e.message || 'Erro ao adicionar empresa encontrada.'
        });
      }
    },

    setCurrentCompany(state, cnpj) {
      try {
        state.currentCompany = state.companies.find(company => company.cnpj === cnpj);
        state.currentCompany = {...state.currentCompany};
        localStorage.setItem('currentCompany', JSON.stringify(state.currentCompany));
      } catch(e) {
        commit('setInfoMessage', {
          status: e.status || 'ERROR',
          message: e.message || 'Erro inesperado: não foi possível selecionar empresa.'
        });
      }
    },

    setInfoMessage(state, data) {
      state.info.status = data.status;
      state.info.message = data.message;
    },

    updateViewportWidth(state, width) {
      state.viewportWidth = width;
    },
  }
})