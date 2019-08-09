import { SAVE_COMPANIES, FETCH_COMPANIES, SET_COMPANY } from "../contants/actions";
import { saveStorage, showAlert } from "../services/helpers";

const INITIAL_STATE = {
  companies: [],
  company: undefined
}

export default (state = INITIAL_STATE, action) => {
  const { payload, type } =  action;

  switch (type) {
    case FETCH_COMPANIES:
      return {
        ...state,
        companies: payload
      }
    case SAVE_COMPANIES:
      let alreadyHasCompany = state.companies.find(company => company.id === payload.id);
      if (!!alreadyHasCompany) {
        showAlert('Aviso', 'CNPJ já cadastrado', 'warning');
        return {
          ...state,
        }
        }
      let companies = [
        ...state.companies,
        payload
      ]
      saveStorage(companies);
      return {
        ...state,
        companies: companies
      }
    case SET_COMPANY:
      return {
        ...state,
        company: payload
      }  
    default:
      return state;
  }
}