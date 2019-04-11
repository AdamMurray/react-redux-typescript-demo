import { createAction } from 'typesafe-actions'

/* Test global action: open/close info banner */

/**
 * Info banner
 */

export const openInfoBanner = createAction(
  'GLOBAL_OPEN_INFO_BANNER',
  resolve => () => resolve()
)

export const closeInfoBanner = createAction(
  'GLOBAL_CLOSE_INFO_BANNER',
  resolve => () => resolve()
)
