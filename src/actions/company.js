import { URL_API, STORAGE_NAME } from '../contants/config';
import { SAVE_COMPANIES, FETCH_COMPANIES, SET_COMPANY } from '../contants/actions';
import { unformatMask } from '../services/helpers';
let jsonpAdapter = require('axios-jsonp');
const axios = require('axios');

export const searchCompany = (cnpj) => {
  return dispatch => {
    return axios({
      method: 'get',
      url: `${URL_API}cnpj/${cnpj}`,
      adapter: jsonpAdapter,
      callbackParamName: 'c'
    }).then(function (response) {
      if (response.data.status === 'ERROR') return { error: true, msg: response.data.message }
      const company = response.data;
      return dispatch({
        type: SAVE_COMPANIES,
        payload: {
          id: unformatMask(company.cnpj),
          name: company.nome,
          cnpj: company.cnpj,
          address: company.logradouro + ', ' + company.numero + ', ' + company.bairro + ' - ' + company.municipio
        }
      });
    }).catch(error => {
      return { error: true, msg: 'Falha ao buscar o CNPJ' };
    });
  }
}

export const getCompanies = () => {
  return dispatch => {
    let companies = localStorage.getItem(STORAGE_NAME) || '[]';
    companies = JSON.parse(companies);
    return dispatch({
      type: FETCH_COMPANIES,
      payload: companies
    });  
  }

}

export const setCompany = company => {
  return dispatch => {
    return dispatch({
      type: SET_COMPANY,
      payload: company
    })
  }
}