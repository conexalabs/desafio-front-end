import Api from './Api'

export default {
  search (cnpj) {
    return Api().get(`/cnpj/${cnpj}`)
  }
}
