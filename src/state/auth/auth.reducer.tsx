export const dummy = 'dummy'

// import { Reducer } from 'redux'
// import { ActionType, getType } from 'typesafe-actions'
// import produce from 'immer'

// import { User } from '../../types/user/user.type'

// import * as actions from './auth.actions'

// export type AuthAction = ActionType<typeof actions>

// export interface StateType {
//   readonly currentUser: User | null
//   readonly isRefreshingToken: boolean
// }

// const initialState: StateType = {
//   currentUser: null,
//   isRefreshingToken: false
// }

// const authReducer: Reducer<StateType, AuthAction> = (
//   state = initialState,
//   action
// ) =>
//   produce<StateType>(state, draft => {
//     switch (action.type) {
//       /** USER_TOKEN_REFRESH_REQUEST */
//       case getType(actions.userTokenRefreshRequest): {
//         draft.isRefreshingToken = true
//         break
//       }
//       /** USER_TOKEN_REFRESH_SUCCESS */
//       case getType(actions.userTokenRefreshSuccess): {
//         draft.isRefreshingToken = false
//         break
//       }
//       /** USER_TOKEN_REFRESH_FAILURE */
//       case getType(actions.userTokenRefreshFailure): {
//         draft.isRefreshingToken = false
//         break
//       }
//       /** USER_LOGIN */
//       case getType(actions.userLogin): {
//         draft.currentUser = action.payload.currentUser
//         break
//       }
//       /** USER_LOGOUT_SUCCESS */
//       case getType(actions.userLogoutSuccess): {
//         draft.currentUser = null
//         break
//       }
//       /** USER_FETCH_CURRENT_REQUEST */
//       case getType(actions.fetchCurrentUserRequest): {
//         draft.currentUser = null
//         break
//       }
//       /** USER_FETCH_CURRENT_SUCCESS */
//       case getType(actions.fetchCurrentUserSuccess): {
//         draft.currentUser = action.payload.currentUser
//         break
//       }
//       /** USER_FETCH_CURRENT_ERROR */
//       case getType(actions.fetchCurrentUserFailure): {
//         draft.currentUser = null
//         break
//       }
//     }
//   })

// export default authReducer
