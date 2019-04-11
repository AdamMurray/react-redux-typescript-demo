import { getType } from 'typesafe-actions'

import globalReducer, { StateType } from './global.reducer'
import * as actions from './global.actions'

describe('Global reducer', () => {
  it('should open info banner', () => {
    const initialState: StateType = {
      infoBanner: {
        isOpen: false
      }
    }

    const action = { type: getType(actions.openInfoBanner) }
    const newState = globalReducer(initialState, action)

    expect(initialState.infoBanner.isOpen).toBe(false)
    expect(newState.infoBanner.isOpen).toBe(true)
  })

  it('should close info banner', () => {
    const initialState: StateType = {
      infoBanner: {
        isOpen: true
      }
    }

    const action = { type: getType(actions.closeInfoBanner) }
    const newState = globalReducer(initialState, action)

    expect(initialState.infoBanner.isOpen).toBe(true)
    expect(newState.infoBanner.isOpen).toBe(false)
  })
})
