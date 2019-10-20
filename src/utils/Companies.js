import Storage from '@/utils/Storage';

class Companies {
  constructor() {
    this.companies = this._get() || {};
  }
  addCompany(company) {
    if (!this.companies[company.cnpj])
      this.companies[company.cnpj] = company;
    this._save();
  }
  getCompanies() {
    return this.companies;
  }
  getCompany(cnpj){
    let company = this.companies[cnpj];
    company.endereco = this.getAddress(company);
    return company
  }
  getAddress(company){
    let endereco = ""
    if(company.logradouro)
      endereco += " " + company.logradouro
    if(company.complemento)
      endereco += " " + company.complemento
    if(company.bairro)
      endereco += " " + company.bairro
    if(company.municipio)
      endereco += " " + company.municipio
    return endereco
  }
  _save() {
    Storage.setLocalStorage('companies', this.companies);
  }
  _get() {
    return Storage.getLocalStorage('companies', this.companies);
  }
}
export default new Companies();