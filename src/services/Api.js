import axios from 'axios'

export default () => {
  const axiosInstance = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? '' : 'https://www.receitaws.com.br/v1'
  })
  axiosInstance.interceptors.request.use(
    config => {
      const token = process.env.TOKEN_API
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    error => Promise.reject(error)
  )
  return axiosInstance
}
