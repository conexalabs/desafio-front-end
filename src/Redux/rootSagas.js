import { all, fork } from 'redux-saga/effects'

import  watchRequestCNPJ from './Sagas'

export default function* rootSaga() {
  return yield all([
    fork (watchRequestCNPJ),
  ])
}