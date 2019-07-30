import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

const baseURL = 'https://www.receitaws.com.br/v1/cnpj/';

const api = axios.create({
  baseURL,
  adapter: jsonpAdapter,
  timeout: 5000,
});

export default api;
