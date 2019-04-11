export const dummy = 'dummy'

// import { createAction } from 'typesafe-actions'

// import { LocalStorageCredentials } from '../../types/auth/localStorageCredentials.type'
// import { User } from '../../types/user/user.type'

// /**
//  * User token refresh
//  */
// export const userTokenRefreshRequest = createAction(
//   'USER_TOKEN_REFRESH_REQUEST',
//   resolve => () => resolve('trying to refresh token')
// )

// export const userTokenRefreshSuccess = createAction(
//   'USER_TOKEN_REFRESH_REQUEST_SUCCESS',
//   resolve => () => resolve('token refresh success')
// )

// export const userTokenRefreshFailure = createAction(
//   'USER_TOKEN_REFRESH_REQUEST_FAILURE',
//   resolve => (error: string) =>
//     resolve({ error: `token refresh failed: ${error}` })
// )

// /**
//  * User auth with code
//  */
// export const userAuthWithCodeRequest = createAction(
//   'USER_AUTH_WITH_CODE_REQUEST',
//   resolve => (code: string) => resolve({ code })
// )

// export const userAuthWithCodeSuccess = createAction(
//   'USER_AUTH_WITH_CODE_SUCCESS',
//   resolve => (credentials: LocalStorageCredentials) => resolve({ credentials })
// )

// export const userAuthWithCodeFailure = createAction(
//   'USER_AUTH_WITH_CODE_FAILURE',
//   resolve => () => resolve({ error: 'user auth with code failed' })
// )

// /**
//  * Login
//  */
// export const userLogin = createAction(
//   'USER_LOGIN',
//   resolve => (currentUser: User, accessToken: string) =>
//     resolve({ currentUser, accessToken })
// )

// /**
//  * Log Out
//  */
// // as required by the monitor saga?
// export const userLogout = createAction('USER_LOGOUT', resolve => () =>
//   resolve()
// )

// export const userLogoutSuccess = createAction(
//   'USER_LOGOUT_SUCCESS',
//   resolve => () => resolve()
// )

// export const userLogoutFailure = createAction(
//   'USER_LOGOUT_FAILURE',
//   resolve => () => resolve()
// )

// /**
//  * Fetch current user
//  */
// export const fetchCurrentUserRequest = createAction(
//   'USER_FETCH_CURRENT_REQUEST',
//   resolve => () => resolve()
// )

// export const fetchCurrentUserSuccess = createAction(
//   'USER_FETCH_CURRENT_SUCCESS',
//   resolve => (currentUser: User) => resolve({ currentUser })
// )

// export const fetchCurrentUserFailure = createAction(
//   'USER_FETCH_CURRENT_FAILURE',
//   resolve => () => resolve({ error: 'fetch current user failed' })
// )
