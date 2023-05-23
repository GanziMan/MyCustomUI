import {SFTPCONNECTION_REQ} from '../actions/constants'
import {ScoreAction} from '../actions/creatorActions'

type Result = {
  state: any
}

const initialState: Result = {
  state: [],
}

const connectionSFTPreducer = (state: Result = initialState, action: ScoreAction) => {
  switch (action.type) {
    case SFTPCONNECTION_REQ:
      return {
        ...state,
        state: action.payload,
      }
    default:
      return state
  }
}

export default connectionSFTPreducer
