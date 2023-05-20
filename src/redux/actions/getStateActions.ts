import {STATE_FAILED_REQ, STATE_FAILED_RES, STATE_SUCCESS_REQ, STATE_SUCCESS_RES} from './constants'

export const stateSuccess_REQ = () => {
  return {
    type: STATE_SUCCESS_REQ,
  }
}
export const stateSuccess_RES = (data: number) => {
  return {
    type: STATE_SUCCESS_RES,
    payload: data,
  }
}
export const stateFailed_REQ = () => {
  return {
    type: STATE_FAILED_REQ,
  }
}
export const stateFailed_RES = (data: number) => {
  return {
    type: STATE_FAILED_RES,
    payload: data,
  }
}

export type StateAction = ReturnType<typeof stateSuccess_RES> | ReturnType<typeof stateFailed_RES>
