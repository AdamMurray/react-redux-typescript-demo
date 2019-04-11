import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Router } from 'react-router'
// import * as Loadable from 'react-loadable'
import 'whatwg-fetch'
import 'intersection-observer'
import 'normalize.css'

import App from './components/App'
import config from './config'
import configureStore from './state/store'
import { unregister } from './registerServiceWorker'
import './index.css'

/* tslint:disable no-var-requires no-require-imports */

if (config.enableWhyDidYouUpdate) {
  const { whyDidYouUpdate } = require('why-did-you-update')
  whyDidYouUpdate(React)
}
/* tslint:enable no-var-requires no-require-imports */

const { persistor, store, history } = configureStore()

ReactDOM.render(
  <PersistGate persistor={persistor}>
    <ReduxProvider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </ReduxProvider>
  </PersistGate>,
  document.getElementById('root')
)

// const renderApp = () => {
//   ReactDOM.hydrate(getRootComponent(), document.getElementById('root'))
// }

/* tslint:disable-next-line no-console no-floating-promises */
// Loadable.preloadReady().then(() => {
//   renderApp()
// })

// if (module.hot) {
//   module.hot.accept('components/App', renderApp)
// }

unregister()
