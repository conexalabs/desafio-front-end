import axios from 'axios'

export default () => {
  const axiosInstance = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://www.receitaws.com.br/v1/'
  })
  axiosInstance.interceptors.request.use(
    config => {
      const token = process.env.VUE_APP_TOKEN_API
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    error => Promise.reject(error)
  )
  return axiosInstance
}
