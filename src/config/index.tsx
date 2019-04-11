/* tslint:disable no-var-requires non-literal-require no-console no-require-imports */
import _ from 'lodash'
import { DeepPartial } from 'ts-essentials'

import { Config } from './config.type'

const env =
  process.env.REACT_APP_NODE_ENV || process.env.NODE_ENV || 'development'

console.log('Environment:', env)

const commonConfig: Config = require('./config.common').default
const envConfig: DeepPartial<Config> = require(`./config.${env}`).default

const config: Config = _.merge(commonConfig, envConfig)

export default config
