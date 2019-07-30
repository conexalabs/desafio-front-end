export default {
  set: company => {
    let companies = JSON.parse(localStorage.getItem('companies'));
    if (companies === null) companies = [];
    companies.push(company);
    localStorage.setItem('companies', JSON.stringify(companies));
    return companies;
  },

  get: cnpj => {
    let companies = JSON.parse(localStorage.getItem('companies'));
    if (companies === null) companies = [];
    const company = companies.find(item => item.cnpj.replace(/\D/g, '') === cnpj);
    return company;
  },

  all: () => {
    return JSON.parse(localStorage.getItem('companies'));
  },
};
