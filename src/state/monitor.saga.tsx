export const dummy = 'dummy'

// /**
//  * Source: https://blog.bitsrc.io/complex-app-logic-with-redux-and-redux-saga-write-an-authentication-monitor-2f5672303d7d
//  */
// // import { delay } from 'redux-saga'
// import { takeEvery, race, take, put, select } from 'redux-saga/effects'
// import { ActionType } from 'typesafe-actions'

// import { RootState } from './reducers'

// // FIXME: to handle for all actions, need to import them all here and update
// // the `type Action` to include all action types
// import * as authActions from './auth/auth.actions'
// import * as globalActions from './global/global.actions'
// import * as billingActions from './entities/billing/billing.actions'
// import * as homeActions from './entities/home/home.actions'
// import * as insightActions from './entities/insight/insight.actions'
// import * as integrationActions from './entities/integration/integration.actions'
// import * as locationsActions from './entities/locations/locations.actions'
// import * as manageActions from './entities/manage/manage.actions'
// import * as marketingActions from './entities/marketing/marketing.actions'
// import * as memberActions from './entities/member/member.actions'
// import * as partnerActions from './entities/partner/partner.actions'
// import * as paymentActions from './entities/payment/payment.actions'
// import * as reviewActions from './entities/review/review.actions'
// import * as settingsActions from './entities/settings/settings.actions'
// import * as userActions from './entities/user/user.actions'
// import * as analyticsActions from './entities/analytics/analytics.actions'

// export type Action = ActionType<
//   typeof authActions &
//     typeof globalActions &
//     typeof billingActions &
//     typeof homeActions &
//     typeof insightActions &
//     typeof integrationActions &
//     typeof locationsActions &
//     typeof manageActions &
//     typeof marketingActions &
//     typeof memberActions &
//     typeof partnerActions &
//     typeof paymentActions &
//     typeof reviewActions &
//     typeof settingsActions &
//     typeof userActions &
//     typeof analyticsActions
// >

// const ignoreActionTypes: string[] = [
//   'USER_AUTH_WITH_CODE_REQUEST',
//   'USER_TOKEN_REFRESH_REQUEST_FAILURE'
// ]

// function monitorableAction(action: Action) {
//   return (
//     action.type.includes('REQUEST') &&
//     ignoreActionTypes.every(fragment => !action.type.includes(fragment))
//   )
// }

// function identifyAction(action: Action) {
//   return action.type
//     .split('_')
//     .slice(0, -1)
//     .join('_')
// }

// function getSuccessType(action: Action) {
//   return `${identifyAction(action)}_SUCCESS`
// }

// function getFailType(action: Action) {
//   return `${identifyAction(action)}_FAILURE`
// }

// function* monitor(monitoredAction: Action) {
//   /* tslint:disable no-console */
//   console.log('started monitoring', monitoredAction.type)
//   const { fail } = yield race({
//     success: take(getSuccessType(monitoredAction)),
//     fail: take(getFailType(monitoredAction))
//   })

//   if (fail && fail.payload && fail.payload.error) {
//     const { auth }: RootState = yield select()

//     console.log('REQUEST FAILURE:', fail)

//     if (!auth.isRefreshingToken) {
//       console.log('detected 401, refreshing token')
//       yield put(authActions.userTokenRefreshRequest())

//       const { success } = yield race({
//         success: take(authActions.userTokenRefreshSuccess().type),
//         fail: take(authActions.userTokenRefreshFailure(fail.payload).type)
//       })

//       if (success) {
//         console.log('token refreshed, retrying', monitoredAction.type)
//         yield put(monitoredAction)
//       } else {
//         console.log('token refresh failed, logging out user')

//         yield put(authActions.userLogout())
//       }
//     }
//   }

//   console.log('monitoring', monitoredAction.type, 'finished')
// }

// export function* watchMonitor() {
//   yield takeEvery(monitorableAction, monitor)
// }

// export default [watchMonitor]

// // TODO: NEXT STEPS
// // - Should I have a `monitor` prop of the store and add `isRefreshing` boolean in there? (as per: https://blog.bitsrc.io/complex-app-logic-with-redux-and-redux-saga-write-an-authentication-monitor-2f5672303d7d)
// // - Should I have a `state/monitor/` folder and have reducer to set up `monitor` state? (Or better named thing)
// // - How should I handle request retries to avoid infinitely looping the monitor*() function?
