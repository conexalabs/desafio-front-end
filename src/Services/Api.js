import axios from 'axios'

const api = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://www.receitaws.com.br/v1/'
})

export default api