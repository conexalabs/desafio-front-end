import HomeCart from './Constants'

const INITIAL_STATE = {
  cnpj: [],
  error: false,
  loading: false
}

const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HomeCart.FETCH_CNPJ:
      return { ...state, loading: true }
    case HomeCart.FETCH_SUCCESS:
      return { ...state, cnpj: [ ...state.cnpj, action.payload.cnpj] }
    case HomeCart.FETCH_FAILURE:
      return { ...state, loading: false, error: true, cnpj: [] }
    default:
      return state
  }
}

export default homeReducer