import axios from 'axios';

// Foi utilizado https://cors.bridged.cc antes da api original oara configuração do CORS

const api = axios.create({
  baseURL: 'https://cors.bridged.cc/https://receitaws.com.br',
});

export default api;
