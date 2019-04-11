import { Config } from './config.type'

const config: Config = {
  appName: 'react-redux-typescript-demo',
  url: {
    api: ''
  },
  auth: {
    clientId: '',
    clientSecret: '',
    redirectUri: ''
  },
  localStorageKeys: {
    userCredentials: 'user-credentials'
  },
  enableWhyDidYouUpdate: false
}

export default config
