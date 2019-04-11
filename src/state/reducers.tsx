import { persistCombineReducers, PersistConfig } from 'redux-persist'
import { routerReducer } from 'react-router-redux'
import storage from 'redux-persist/lib/storage'
import { StateType } from 'typesafe-actions'

// import auth from './auth/auth.reducer'
// import entities from './entities'
import global from './global/global.reducer'

// -----------------------------------------------------------------------------
// REDUCER

// TODO: getting a type mismatch error in VSCode, but code compiles properly
const config: PersistConfig = {
  storage,
  key: 'root',
  transforms: [],
  whitelist: [/* 'auth', */ 'global'] // We have to explicitly include the reducers to be persisted
}

const reducers = {
  // auth,
  // entities,
  global,
  routing: routerReducer
}

export const rootReducer = persistCombineReducers(config, reducers)

export type RootState = StateType<typeof reducers>
