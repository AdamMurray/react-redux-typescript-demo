import { Reducer } from 'redux'
import { ActionType, getType } from 'typesafe-actions'
import produce from 'immer'

import * as actions from './global.actions'

export type GlobalAction = ActionType<typeof actions>

/**
 * NOTE: interface MUST be named 'StateType' (corresponding to StateType
 * from typesafe-actions)
 */
export interface StateType {
  readonly infoBanner: {
    readonly isOpen: boolean
  }
}

/**
 * Reducer's initial state
 */
const initialState: StateType = {
  infoBanner: {
    isOpen: false
  }
}

const globalReducer: Reducer<StateType, GlobalAction> = (
  state = initialState,
  action
) =>
  produce<StateType>(state, draft => {
    switch (action.type) {
      /**
       * GLOBAL_OPEN_INFO_BANNER
       *
       * Opens the info banner
       */
      case getType(actions.openInfoBanner): {
        draft.infoBanner.isOpen = true
        break
      }
      /**
       * GLOBAL_CLOSE_INFO_BANNER
       *
       * Closes the info banner
       */
      case getType(actions.closeInfoBanner): {
        draft.infoBanner.isOpen = false
        break
      }
    }
  })

export default globalReducer
