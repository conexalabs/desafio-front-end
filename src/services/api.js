import axios from 'axios'

const api = axios.create({
    baseURL: 'https://thingproxy.freeboard.io/fetch/https://www.receitaws.com.br/v1/cnpj',

})

export default api