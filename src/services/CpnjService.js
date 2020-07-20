import fetchJsonp from "fetch-jsonp";

export default {
  buscarCpnj(cnpj) {
    return fetchJsonp(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`);
  }
};
