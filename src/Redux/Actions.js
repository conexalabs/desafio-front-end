import HomeCart from './Constants'

export function fetchCNPJ(cnpj) {
  return {
    type: HomeCart.FETCH_CNPJ,
    payload: cnpj
  }
}

export function fetchSuccess(cnpj) {
  return {
    type: HomeCart.FETCH_SUCCESS,
    payload: { cnpj }
  }
}

export function fetchFailure() {
  return {
    type: HomeCart.FETCH_FAILURE
  }
}