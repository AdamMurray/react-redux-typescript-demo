export const dummy = 'dummy'

// import { push } from 'react-router-redux'
// import { call, put, takeLatest } from 'redux-saga/effects'
// import { ActionType, getType } from 'typesafe-actions'
// import uuidv5 from 'uuid/v5'
// import camelcaseKeys from 'camelcase-keys'

// import config from '../../config'
// import { LocalStorageCredentials } from '../../types/auth/localStorageCredentials.type'
// import { User, ApiUser } from '../../types/user/user.type'
// import { get, post, postWithoutAuth } from '../../utils/api'
// import { encodeUrlParams } from '../../utils/common'

// import * as actions from './auth.actions'

// const USER_AUTH_WITH_CODE_API_PATH = '/oauth/token'
// const USER_REFRESH_TOKEN_API_PATH = '/oauth/token'
// const FETCH_USER_API_PATH = '/members/me/member'

// interface ApiUserRefreshTokenRequestData {
//   client_id: string
//   client_secret: string
//   grant_type: 'refresh_token'
//   refresh_token: string
// }

// interface ApiUserRefreshTokenResponse {
//   access_token?: string
//   expires_in?: number
//   refresh_token?: string
//   scope?: null // FIXME: what type should this be
//   token_type?: 'Bearer'
//   error?: string
//   error_description?: string
// }

// interface ApiUserCredentials {
//   access_token: string
//   expires_in: number
//   refresh_token: string
//   scope: null // FIXME: what type should this be
//   token_type: 'Bearer'
// }

// /* User auth with code
//  * =========================================== */
// function* userAuthWithCode(
//   action: ActionType<typeof actions.userAuthWithCodeRequest>
// ) {
//   try {
//     const { code } = action.payload

//     const userAuthWithCodeRequestData = {
//       code,
//       client_id: config.auth.clientId,
//       client_secret: config.auth.clientSecret,
//       grant_type: 'authorization_code',
//       redirect_uri: config.auth.redirectUri
//     }
//     const response: ApiUserCredentials = yield call(async () =>
//       postWithoutAuth(USER_AUTH_WITH_CODE_API_PATH, userAuthWithCodeRequestData)
//     )

//     const credentials: LocalStorageCredentials = {
//       accessToken: response.access_token,
//       expiresIn: response.expires_in,
//       refreshToken: response.refresh_token,
//       scope: response.scope, // TODO: what is scope for?
//       tokenType: response.token_type
//     }

//     localStorage.setItem(
//       config.localStorageKeys.userCredentials,
//       JSON.stringify(credentials)
//     )

//     yield put(push('/home'))
//     yield put(actions.userAuthWithCodeSuccess(credentials))
//   } catch (error) {
//     console.error('Error:', error)
//     yield put(actions.userLogout())
//     yield put(actions.userAuthWithCodeFailure())
//   }
// }

// export function* watchUserAuthWithCode() {
//   yield takeLatest(getType(actions.userAuthWithCodeRequest), userAuthWithCode)
// }

// /* User token refresh
//  * =========================================== */
// function* refreshUserToken() {
//   try {
//     // First try to get refresh token from LS, if it doesn't exist, throw error
//     const userCredentialsLocalStorage: LocalStorageCredentials = JSON.parse(
//       localStorage.getItem(config.localStorageKeys.userCredentials)
//     )

//     if (
//       userCredentialsLocalStorage &&
//       userCredentialsLocalStorage.refreshToken
//     ) {
//       const userRefreshTokenRequestData: ApiUserRefreshTokenRequestData = {
//         client_id: config.auth.clientId,
//         client_secret: config.auth.clientSecret,
//         grant_type: 'refresh_token',
//         refresh_token: userCredentialsLocalStorage.refreshToken
//       }
//       const response: ApiUserRefreshTokenResponse = yield call(async () =>
//         post(USER_REFRESH_TOKEN_API_PATH, userRefreshTokenRequestData)
//       )

//       // If the response contains an access token, then it succeeded,
//       // and we then store the user credentials in local storage.
//       if (response.access_token) {
//         const userCredentials: LocalStorageCredentials = {
//           accessToken: response.access_token,
//           expiresIn: response.expires_in,
//           refreshToken: response.refresh_token,
//           scope: response.scope,
//           tokenType: response.token_type
//         }

//         localStorage.setItem(
//           config.localStorageKeys.userCredentials,
//           JSON.stringify(userCredentials)
//         )

//         yield put(actions.userTokenRefreshSuccess())
//       } else {
//         throw Error(response.error_description)
//       }
//     } else {
//       throw Error('refresh token does not exist in local storage')
//     }
//   } catch (error) {
//     // TODO: might want to pass the error to the action,
//     // or notify the error somewhere
//     yield put(actions.userTokenRefreshFailure(error))
//   }
// }

// export function* watchRefreshUserToken() {
//   yield takeLatest(getType(actions.userTokenRefreshRequest), refreshUserToken)
// }

// /* User logout
//  * =========================================== */

// /**
//  * Logout user by sending them to the accounts service
//  */
// function* userLogout() {
//   // FIXME: should probably have some types in here
//   const codeParams = {
//     client_id: config.auth.clientId,
//     redirect_uri: config.auth.redirectUri,
//     response_type: 'code',
//     state: uuidv5(config.auth.redirectUri, uuidv5.URL),
//     auto_accept: true
//   }

//   window.location.href = `${config.url.accounts}?${encodeUrlParams(codeParams)}`

//   yield put(actions.userLogoutSuccess())
// }

// export function* watchUserLogout() {
//   yield takeLatest(getType(actions.userLogout), userLogout)
// }

// /* Fetch current user
//  * =========================================== */
// function* fetchCurrentUser() {
//   try {
//     const response: { status: number; message: ApiUser } = yield call(
//       async () => get(FETCH_USER_API_PATH)
//     )

//     const apiUser = response.message

//     // FIXME: update keys in User to be camelCase and map between ApiUser and User here
//     const user: User = camelcaseKeys(apiUser)

//     yield put(actions.fetchCurrentUserSuccess(user))
//   } catch (error) {
//     yield put(actions.fetchCurrentUserFailure())
//   }
// }

// export function* watchFetchCurrentUser() {
//   yield takeLatest(getType(actions.fetchCurrentUserRequest), fetchCurrentUser)
// }

// export default [
//   watchFetchCurrentUser,
//   watchRefreshUserToken,
//   watchUserLogout,
//   watchUserAuthWithCode
// ]
