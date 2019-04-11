import { createStore, applyMiddleware, compose, StoreEnhancer } from 'redux'
import { persistStore } from 'redux-persist'
import sagaMiddlewareFactory from 'redux-saga'
import { routerMiddleware } from 'react-router-redux'
import { createBrowserHistory } from 'history'

import { rootReducer } from './reducers'
import rootSaga from './sagas'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
      enhancer: StoreEnhancer<{ dispatch: {} }>
    ): StoreEnhancer
  }
}

const history = createBrowserHistory()

const configureStore = (initialState = {}) => {
  /* tslint:disable-next-line no-unbound-method */
  const composeEnhancers =
    (typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose
  const sagaMiddleware = sagaMiddlewareFactory()

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
  )
  const persistor = persistStore(store)

  sagaMiddleware.run(rootSaga)

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./reducers', () => {
        store.replaceReducer(rootReducer)
      })
    }
  }

  return { persistor, store, history }
}

export default configureStore
