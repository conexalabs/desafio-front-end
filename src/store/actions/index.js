import { SEARCHED_CNPJ, COMPANIES_FOUND } from './actionTypes';

export const searchedCnpj = (cnpj) => ({
  type: SEARCHED_CNPJ,
  payload: cnpj,
});

export const companiesFound = (companies) => ({
  type: COMPANIES_FOUND,
  payload: companies,
});

