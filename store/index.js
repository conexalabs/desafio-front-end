const store = Vuex.createStore({
  state() {
    return {
      companies: [
        {
          id: "1234",
          social: "Conexa Hub de Inovação 1",
          cnpj: "342.454.0001-76",
          address: "Av Brasil 2233, Centro, Goiânia"
        },
        {
          id: "5678",
          social: "Conexa Hub de Inovação 2",
          cnpj: "342.454.0001-76",
          address: "Av Brasil 2233, Centro, Goiânia"
        },
        {
          id: "9012",
          social: "Conexa Hub de Inovação 3",
          cnpj: "342.454.0001-76",
          address: "Av Brasil 2233, Centro, Goiânia"
        },
        {
          id: "3456",
          social: "Conexa Hub de Inovação 4",
          cnpj: "342.454.0001-76",
          address: "Av Brasil 2233, Centro, Goiânia"
        },
        // {
        //   id: "7890",
        //   social: "Conexa Hub de Inovação 5",
        //   cnpj: "342.454.0001-76",
        //   address: "Av Brasil 2233, Centro, Goiânia"
        // },
      ],
      currentCompany: {},
      sliderList: [],
      viewportWidth: window.innerWidth,
    }
  },

  actions: {
    getCompany({ commit }, cnpj) {
      console.log(cnpj);
      axios.get(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`)
      .then(response => commit('addCompany', response.data))
    }
  },

  getters: {
    allCompanies: (state) => state.companies,
    company: (state, cnpj) => state.companies.find(cnpj),
    companiesCount: (state) => state.companies.length,
    sliderListSize: (state) => state.sliderList.length,
  },

  mutations: {
    addCompany (state, company) {
      console.log(company);
      state.companies.push(company);
      state.sliderList.push(company);
      state.currentCompany = company;
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
    rotateListLeft(state) {
      state.sliderList.push(state.sliderList.shift());
    },
    rotateListRight(state) {
      state.sliderList.unshift(state.sliderList.pop());
    },
    shuffle(state) {
      state.sliderList = _.shuffle(state.sliderList);
    },
  }
})