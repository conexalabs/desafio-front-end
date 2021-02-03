import { combineReducers } from 'redux';

import { companiesReducer } from './companiesReducer';

export const rootReducer = combineReducers({
  companies: companiesReducer,
});