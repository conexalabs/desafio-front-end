const app = Vue.createApp({
  data() {
    return {
      title: 'Localizador de Empresas',
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
        {
          id: "7890",
          social: "Conexa Hub de Inovação 5",
          cnpj: "342.454.0001-76",
          address: "Av Brasil 2233, Centro, Goiânia"
        },
      ],
    }
  },
  methods: {
    shuffleCompanies() {
      this.companies = _.shuffle(this.companies);
    },
    rotateLeft() {
      this.companies.push(this.companies.shift());
    },
    rotateRight() {
      this.companies.unshift(this.companies.pop());
    },
  }
})
