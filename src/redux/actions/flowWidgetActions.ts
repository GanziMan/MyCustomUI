import {
  FLOWWIDGET_ID_REQ,
  FLOWWIDGET_SENSORID_REQ,
  SOURCEWIDGET_NAME_REQ,
  TARGETWIDGET_NAME_REQ,
} from './constants'

export const flowwidget_id_req = (data: string) => {
  return {
    type: FLOWWIDGET_ID_REQ,
    payload: data,
  }
}
export const flowwidget_sensorid_req = (data: string) => {
  return {
    type: FLOWWIDGET_SENSORID_REQ,
    payload: data,
  }
}
export const sourcewidget_sourcename_req = (data: string) => {
  return {
    type: SOURCEWIDGET_NAME_REQ,
    payload: data,
  }
}

export const targetwidget_targetname_req = (data: string) => {
  return {
    type: TARGETWIDGET_NAME_REQ,
    payload: data,
  }
}
export type flowWidgetAction =
  | ReturnType<typeof flowwidget_id_req>
  | ReturnType<typeof flowwidget_sensorid_req>
  | ReturnType<typeof sourcewidget_sourcename_req>
  | ReturnType<typeof targetwidget_targetname_req>
