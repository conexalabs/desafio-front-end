import { call, put, takeLatest } from 'redux-saga/effects'
import api from '../Services/Api'
import { fetchSuccess, fetchFailure } from './Actions'
import HomeCart from './Constants'

export default function* watchRequestCNPJ() {
  yield takeLatest(HomeCart.FETCH_CNPJ, searchCNPJ)
}

function* searchCNPJ(action) {
  try {
    const cnpj = action.payload

    const response = yield call(api.get, `/cnpj/${cnpj}`)
    
    yield put(fetchSuccess(response.data))
  } catch (err) {
    yield put(fetchFailure())
  }
}