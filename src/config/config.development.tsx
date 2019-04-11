import { DeepPartial } from 'ts-essentials'

import { Config } from './config.type'

const config: DeepPartial<Config> = {
  appName: 'react-redux-typescript-demo',
  url: {
    api: ''
  },
  enableWhyDidYouUpdate: false
}

export default config
