// TODO: re-implement when required
import { fork, all } from 'redux-saga/effects'

// import auth from './auth/auth.saga'
// import monitor from './monitor.saga'

const sagas: any[] = []

function* rootSaga() {
  yield all(sagas.map(fork))
}

export default rootSaga
