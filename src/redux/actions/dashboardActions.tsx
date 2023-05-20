import {IMPORTERROR_REQ} from './constants'

export const importerror_req = (data: string) => {
  return {
    type: IMPORTERROR_REQ,
    payload: data,
  }
}

export type dashboardActions = ReturnType<typeof importerror_req>
