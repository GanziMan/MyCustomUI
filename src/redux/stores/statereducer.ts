import {
  STATE_FAILED_REQ,
  STATE_FAILED_RES,
  STATE_SUCCESS_REQ,
  STATE_SUCCESS_RES,
} from '../actions/constants'

import {StateAction} from '../actions/getStateActions'

type Result = {
  success: number
  failed: number
}
const initialState: Result = {
  success: 0,
  failed: 0,
}

const StateReducer = (state: Result = initialState, action: StateAction) => {
  switch (action.type) {
    case STATE_SUCCESS_REQ:
      return {}
    case STATE_SUCCESS_RES:
      return {
        ...state,
        success: action.payload,
      }
    case STATE_FAILED_REQ:
      return {}
    case STATE_FAILED_RES:
      return {
        ...state,
        failed: action.payload,
      }
    default:
      return {}
  }
}

export default StateReducer
