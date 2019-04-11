export interface Config {
  appName: string
  url: {
    api: string
  }
  auth: {
    clientId: string
    clientSecret: string
    redirectUri: string
  }
  localStorageKeys: {
    userCredentials: string
  }
  enableWhyDidYouUpdate: boolean
}
