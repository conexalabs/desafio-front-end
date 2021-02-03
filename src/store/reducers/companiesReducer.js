import { SEARCHED_CNPJ, COMPANIES_FOUND } from '../actions/actionTypes';

const initialState = { 
  searchedCnpj: '',
  companiesFound: [], 
};

export const companiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCHED_CNPJ:
      return {
        ...state,
        searchedCnpj: action.payload,
      };
    case COMPANIES_FOUND:
      return {
        ...state,
        companiesFound: action.payload,
      };
    default:
      return state;
  }
};