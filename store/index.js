const store = Vuex.createStore({
  state() {
    return {
      companies: [],
      currentCompany: {},
      sliderList: [],
      viewportWidth: window.innerWidth,
    }
  },

  actions: {
    handleSearch({ commit, state }, keyword) {
      var onlyDigits = keyword.match(/\d+/g).join('');

      if(onlyDigits.length > 15 || onlyDigits.length < 13) {
        // TO-DO: Notify message to user.
        console.log("Invalid cnpj number");
      }
      else if(state.companies.find( ({ cnpj }) => cnpj === keyword)) {
        commit('updateSliderPosition', keyword);
      }
      else {
        axios.get(`https://www.receitaws.com.br/v1/cnpj/${onlyDigits}`)
          .then(response => commit('handleSearchResult', response.data));
      }
    },
  },

  getters: {
    allCompanies: (state) => state.companies,
    company: (state, cnpj) => state.companies.find(cnpj),
    companiesCount: (state) => state.companies.length,
    sliderListSize: (state) => state.sliderList.length,
  },

  mutations: {
    initializeStore(state) {
      var sampleData = [
        {
          id: "1234",
          name: "Conexa Hub de Inovação",
          cnpj: "342.454.0001-76",
          cnpjNumber: "342454000176",
          endereco: {
            logradouro: "Av Brasil",
            numero: "2233",
            bairro: "Centro",
            municipio: "Goiânia",
            uf: "GO",
            cep: ''
          },
          address: "Av Brasil, 2233, Centro, Goiânia-GO",
        },
        {
          id: "5678",
          name: "Conexa Hub de Inovação",
          cnpj: "342.454.0001-76",
          cnpjNumber: "342454000176",
          endereco: {
            logradouro: "Av Caiapó",
            numero: "",
            bairro: "",
            municipio: "Goiânia",
            uf: "GO",
            cep: ''
          },
          address: "Av Caiapó, Goiânia-GO",
        },
      ];

      const companies       = localStorage.getItem('companies');
      const currentCompany  = localStorage.getItem('currentCompany');

      state.companies = companies ? JSON.parse(companies) : sampleData;
      state.currentCompany = currentCompany ? JSON.parse(currentCompany) : sampleData[0];
    },

    generateSliderList(state) {
      var vw = state.viewportWidth;         // TO-DO: find properly way to get an viewport value;
      var elWidth = 260;                  // TO-DO: find properly way to get an element attribute;

      var threshold = Math.round( (vw - 100) / elWidth );
      var elements = [];

      do {
        elements = elements.concat([...state.companies]);
      } while(elements.length < threshold + 2);

      state.sliderList = elements.map(e => e = {...e});
    },

    handleSearchResult(state, data) {
      if(data.message) {
        // TO-DO: Notify message to user.
        console.log(data.message);
        return;
      } else {
        store.commit('addCompany', data);
      }
    },

    addCompany (state, data) {
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

      store.commit('updateSliderList', company);
      state.companies.push(company);
      state.currentCompany = company;
      localStorage.setItem('companies', JSON.stringify(state.companies));
      localStorage.setItem('currentCompany', JSON.stringify(state.currentCompany));
    },

    rotateListLeft(state) {
      state.sliderList.push(state.sliderList.shift());
    },
    rotateListRight(state) {
      state.sliderList.unshift(state.sliderList.pop());
    },
    shuffle(state) {
      state.sliderList = _.shuffle(state.sliderList);
    },
    updateSliderList(state, element) {
      const N = state.companies.length;
      const L = state.sliderList.length;

      for(let i = L-1; i > 0; i -= N) {
        state.sliderList.splice(i, 0, {...element});
      }
    },
    updateSliderPosition(state, cnpj) {
      const middle = state.sliderList.length / 2;

      while(state.sliderList[middle].cnpj != cnpj) {
        store.commit('rotateListLeft');
      }
    }
  }
})