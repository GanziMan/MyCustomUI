import {FileCollection} from '../../app/modules/accounts/components/settings/SettingsModel'
import {
  CONNECTION_DBID_MESSAGE_REQ,
  CONNECTION_DBID_REQ,
  CONNECTION_DBNAME_MESSAGE_REQ,
  CONNECTION_DBNAME__REQ,
  CONNECTION_DB_REQ,
  CONNECTION_FILE_REQ,
  CONNECTION_ID_MESSAGE_REQ,
  CONNECTION_ID_REQ,
  CONNECTION_MESSAGE_REQ,
  CONNECTION_NAME_MESSAGE_REQ,
  CONNECTION_NAME_REQ,
  CONNECTION_TEST_REQ,
  CRON_VALUE_REQ,
  DAGCREATE_DBMSTYPE_REQ,
  DAGCREATE_SAVEMODE_REQ,
  DAGCREATE_TARGETCONNID_REQ,
  DAGCREATE_TARGETLOCATION_REQ,
  DAGCREATE_TRANSTYPE_REQ,
  FILE_TYPE_LIST_REQ,
  FLOW_FILENAME_REQ,
  FLOW_ISPAUSED_REQ,
  LIST_DAG_REQ,
  LIST_DAG_RES,
  LOG_DAGRUNID_REQ,
  LOG_FLOW_ID,
  LOG_SENSORID_REQ,
  LOG_TASK_REQ,
  LOG_TRYNUMBER_REQ,
  PATH_MESSAGE_REQ,
  PATH_VALUE_REQ,
  POST_DAGRUN_REQ,
  POST_DAGRUN_RES,
  SENSOR_ID_REQ,
  SFTPCONNECTION_MESSAGE_REQ,
  SFTPCONNECTION_REQ,
  SFTP_RESULT_MSG_REQ,
  SOURCEID_REQ,
  SOURCENAME_CHECK_REQ,
  SOURCE_DBMSTYPE_REQ,
  SOURCE_DB_CONNECTION_ID,
  SOURCE_DB_CONNID_REQ,
  SOURCE_DETAIL_REQ,
  SOURCE_ID_REQ,
  SOURCE_LOCALPATH_REQ,
  SOURCE_NAME_REQ,
  TARGETCONID_REQ,
  TARGETID_REQ,
  TARGETNAMEVALUE_REQ,
  TARGETNAME_CHECK_REQ,
  TARGETNAME_REQ,
  TARGET_CONNID_REQ,
  TARGET_ID_REQ,
  TARGET_LOCATION_REQ,
  TARGET_NAME_REQ,
  TARGET_SAVEMODE_REQ,
  TASK_SENSORID_REQ,
  TEST_ASYNC_REQ,
  TEST_ASYNC_RES,
} from './constants'

type msgresult = {
  msg: string
  failed: string
}
type cron = {
  cron: string
}
type path = {
  path: string
}
type pathvalue = {
  pathvalue: string
}

//여기서부터 SFTP Connection
type connection_id = {
  connection_id: string
}
type connection_name = {
  connection_name: string
}
type connection_id_message = {
  connection_id_message: string
}
type connection_name_message = {
  connection_name_message: string
}
// 여기까지 SFTP connection

// 여기부터 DB Connection
type connection_dbid = {
  connection_dbid: string
}
type connection_dbname = {
  connection_dbname: string
}
type connection_dbid_message = {
  connection_dbid_message: string
}
type connection_dbname_message = {
  connection_dbname_message: string
}

type connection_file = {
  connection_file: string
}

type targetnamecheck = {
  targetnamecheck: string
}

type connection_test = {
  dbId: string
  dbPassword: string
  dbSchema: string
  dbHost: string
  dbPort: string
  dbExtra: string
  dbType: string
  dbDescription: string
}
type sourcedetail = {
  owner: string
  save_mode: string
  schedule_interval: string
  schedule_interval_view: string
  sensor_id: string
  source_name: string
  trans_type: string
  local_path: string
  id: string
  db_conn_id: string
}

type connectionMessage = {
  message: string
}
type connectionSFTP_test = {
  connection_type: string
  login: string
  password: string
  host: string
  port: string
}
type connectionSFTPMessage = {
  message: string
}
type targetname = {
  targetname: string
}

type targetnameValue = {
  targetnamevalue: string
}
type targetconid = {
  targetconid: string
}
type sourceid = {
  sourceid: string
}
type targetid = {
  targetid: string
}
type trans_type = {
  trans_type: string
}
type save_mode = {
  save_mode: string
}
type target_location = {
  target_location: string
}
type target_conn_id = {
  target_conn_id: string
}
type dbms_type = {
  dbms_type: string
}

type sensor_id = {
  sensor_id: string
}

type log_flow_id = {
  log_flow_id: string
}

type update_target_name = {
  update_target_name: string
}
type update_target_location = {
  update_target_location: string
}
type update_target_save_mode = {
  update_target_save_mode: string
}
type update_target_id = {
  update_target_id: string
}
type update_target_connid = {
  update_target_connid: string
}
type update_source_name = {
  update_source_name: string
}
type update_source_localpath = {
  update_source_localpath: string
}
type update_source_dbmstype = {
  update_source_dbmstype: string
}
type update_source_id = {
  update_source_id: string
}
type update_source_dbconnid = {
  update_source_dbconnid: string
}

type flow_file_name = {
  flow_file_name: string
}
type sftp_resultMsg = {
  sftp_resultMsg: string
}
type is_paused = {
  is_paused: boolean
}

export const test_REQ = (data: FileCollection) => {
  console.log(data)
  return {
    type: TEST_ASYNC_REQ,
    payload: data,
  }
}

export const test_RES = (data: msgresult) => {
  return {
    type: TEST_ASYNC_RES,
    payload: data,
  }
}
// daglist 조회
export const listDag_REQ = () => {
  return {
    type: LIST_DAG_REQ,
  }
}
export const listDag_RES = () => {
  return {
    type: LIST_DAG_RES,
  }
}

//post dag runs 실행
export const runDag_REQ = (data: string) => {
  return {
    type: POST_DAGRUN_REQ,
    payload: data,
  }
}
export const runDag_RES = () => {
  return {
    type: POST_DAGRUN_RES,
  }
}

export const cronValue_REQ = (data: cron) => {
  return {
    type: CRON_VALUE_REQ,
    payload: data,
  }
}

export const pathMessage_REQ = (data: path) => {
  return {
    type: PATH_MESSAGE_REQ,
    payload: data,
  }
}
export const pathValue_REQ = (data: pathvalue) => {
  return {
    type: PATH_VALUE_REQ,
    payload: data,
  }
}
// 여기부터 SFTP connection
export const connectionID_REQ = (data: connection_id) => {
  return {
    type: CONNECTION_ID_REQ,
    payload: data,
  }
}
export const connectionNAME_REQ = (data: connection_name) => {
  return {
    type: CONNECTION_NAME_REQ,
    payload: data,
  }
}
export const connectionID_Message_REQ = (data: connection_id_message) => {
  return {
    type: CONNECTION_ID_MESSAGE_REQ,
    payload: data,
  }
}
export const connectionNAME_Message_REQ = (data: connection_name_message) => {
  return {
    type: CONNECTION_NAME_MESSAGE_REQ,
    payload: data,
  }
}
// 여기까지 SFTP connection

// 여기부터 DB connection
export const connectionID_DB_REQ = (data: connection_dbid) => {
  return {
    type: CONNECTION_DBID_REQ,
    payload: data,
  }
}
export const connectionNAME_DB_REQ = (data: connection_dbname) => {
  return {
    type: CONNECTION_DBNAME__REQ,
    payload: data,
  }
}
export const connectionID_DB_Message_REQ = (data: connection_dbid_message) => {
  return {
    type: CONNECTION_DBID_MESSAGE_REQ,
    payload: data,
  }
}
export const connectionNAME_DB_Message_REQ = (data: connection_dbname_message) => {
  return {
    type: CONNECTION_DBNAME_MESSAGE_REQ,
    payload: data,
  }
}
// 여기까지 DB connection

export const connectionDB_REQ = (data: string) => {
  return {
    type: CONNECTION_DB_REQ,
    payload: data,
  }
}
export const connectionFILE_REQ = (data: connection_file) => {
  return {
    type: CONNECTION_FILE_REQ,
    payload: data,
  }
}
export const sourcenameCheck_REQ = (data: string) => {
  return {
    type: SOURCENAME_CHECK_REQ,
    payload: data,
  }
}
export const targetnameCheck_REQ = (data: targetnamecheck) => {
  return {
    type: TARGETNAME_CHECK_REQ,
    payload: data,
  }
}
export const connectionTest_REQ = (data: connection_test) => {
  return {
    type: CONNECTION_TEST_REQ,
    payload: data,
  }
}
export const sourcedetail_REQ = (data: sourcedetail) => {
  return {
    type: SOURCE_DETAIL_REQ,
    payload: data,
  }
}
export const connectionMessage_REQ = (data: connectionMessage) => {
  return {
    type: CONNECTION_MESSAGE_REQ,
    payload: data,
  }
}
export const connectionSFTP_REQ = (data: connectionSFTP_test) => {
  return {
    type: SFTPCONNECTION_REQ,
    payload: data,
  }
}
export const connectionSFTPMessage_REQ = (data: connectionSFTPMessage) => {
  return {
    type: SFTPCONNECTION_MESSAGE_REQ,
    payload: data,
  }
}

export const targetname_REQ = (data: targetname) => {
  return {
    type: TARGETNAME_REQ,
    payload: data,
  }
}
export const targetnameValue_REQ = (data: targetnameValue) => {
  return {
    type: TARGETNAMEVALUE_REQ,
    payload: data,
  }
}
export const targetconID_REQ = (data: targetconid) => {
  return {
    type: TARGETCONID_REQ,
    payload: data,
  }
}
export const sourceID_REQ = (data: sourceid) => {
  return {
    type: SOURCEID_REQ,
    payload: data,
  }
}
export const targetID_REQ = (data: targetid) => {
  return {
    type: TARGETID_REQ,
    payload: data,
  }
}
export const filetypelist_REQ = (data: string) => {
  return {
    type: FILE_TYPE_LIST_REQ,
    payload: data,
  }
}

export const dagcreateSAVEMODE_REQ = (data: save_mode) => {
  return {
    type: DAGCREATE_SAVEMODE_REQ,
    payload: data,
  }
}
export const dagcreateTRANSTYPE_REQ = (data: trans_type) => {
  return {
    type: DAGCREATE_TRANSTYPE_REQ,
    payload: data,
  }
}
export const dagcreateTargetLocation_REQ = (data: target_location) => {
  return {
    type: DAGCREATE_TARGETLOCATION_REQ,
    payload: data,
  }
}
export const dagcreateTARGETCONNID_REQ = (data: target_conn_id) => {
  return {
    type: DAGCREATE_TARGETCONNID_REQ,
    payload: data,
  }
}
export const dagcreateDBMSTYPE_REQ = (data: dbms_type) => {
  return {
    type: DAGCREATE_DBMSTYPE_REQ,
    payload: data,
  }
}

export const sensor_id_REQ = (data: sensor_id) => {
  return {
    type: SENSOR_ID_REQ,
    payload: data,
  }
}
export const tast_sensorID_REQ = (data: sensor_id) => {
  return {
    type: TASK_SENSORID_REQ,
    payload: data,
  }
}

export const log_dagrunid_REQ = (data: string) => {
  return {
    type: LOG_DAGRUNID_REQ,
    payload: data,
  }
}

export const log_sensorid_REQ = (data: sensor_id) => {
  return {
    type: LOG_SENSORID_REQ,
    payload: data,
  }
}
export const log_taskid_REQ = (data: string) => {
  return {
    type: LOG_TASK_REQ,
    payload: data,
  }
}
export const log_FLOW_ID = (data: log_flow_id) => {
  return {
    type: LOG_FLOW_ID,
    payload: data,
  }
}
export const log_tryNumber = (data: string) => {
  return {
    type: LOG_TRYNUMBER_REQ,
    payload: data,
  }
}
export const target_name_REQ = (data: update_target_name) => {
  return {
    type: TARGET_NAME_REQ,
    payload: data,
  }
}
export const target_location_REQ = (data: update_target_location) => {
  return {
    type: TARGET_LOCATION_REQ,
    payload: data,
  }
}
export const target_savemode_REQ = (data: update_target_save_mode) => {
  return {
    type: TARGET_SAVEMODE_REQ,
    payload: data,
  }
}
export const target_id_REQ = (data: update_target_id) => {
  return {
    type: TARGET_ID_REQ,
    payload: data,
  }
}
export const target_connid_REQ = (data: update_target_connid) => {
  return {
    type: TARGET_CONNID_REQ,
    payload: data,
  }
}
export const source_name_REQ = (data: update_source_name) => {
  return {
    type: SOURCE_NAME_REQ,
    payload: data,
  }
}
export const source_localpath_REQ = (data: update_source_localpath) => {
  return {
    type: SOURCE_LOCALPATH_REQ,
    payload: data,
  }
}
export const source_dbmstype_REQ = (data: update_source_dbmstype) => {
  return {
    type: SOURCE_DBMSTYPE_REQ,
    payload: data,
  }
}

export const source_id_REQ = (data: update_source_id) => {
  return {
    type: SOURCE_ID_REQ,
    payload: data,
  }
}

export const source_dbconnid_REQ = (data: update_source_dbconnid) => {
  return {
    type: SOURCE_DB_CONNID_REQ,
    payload: data,
  }
}

export const source_connection_id_DB_REQ = (data: string) => {
  return {
    type: SOURCE_DB_CONNECTION_ID,
    payload: data,
  }
}

export const flow_file_name_REQ = (data: flow_file_name) => {
  return {
    type: FLOW_FILENAME_REQ,
    payload: data,
  }
}
export const sftp_result_msg_REQ = (data: sftp_resultMsg) => {
  return {
    type: SFTP_RESULT_MSG_REQ,
    payload: data,
  }
}
export const is_paused_REQ = (data: is_paused) => {
  return {
    type: FLOW_ISPAUSED_REQ,
    payload: data,
  }
}

export type ScoreAction =
  | ReturnType<typeof test_REQ>
  | ReturnType<typeof test_RES>
  | ReturnType<typeof cronValue_REQ>
  | ReturnType<typeof pathMessage_REQ>
  | ReturnType<typeof pathValue_REQ>
  | ReturnType<typeof sourcedetail_REQ>
  //여기서부터
  | ReturnType<typeof connectionID_REQ>
  | ReturnType<typeof connectionNAME_REQ>
  | ReturnType<typeof connectionID_Message_REQ>
  | ReturnType<typeof connectionNAME_Message_REQ>
  //여기까지 sftp connection
  //여기서부터
  | ReturnType<typeof connectionID_DB_REQ>
  | ReturnType<typeof connectionNAME_DB_REQ>
  | ReturnType<typeof connectionID_DB_Message_REQ>
  | ReturnType<typeof connectionNAME_DB_Message_REQ>
  //여기까지 db connection
  | ReturnType<typeof connectionDB_REQ>
  | ReturnType<typeof connectionFILE_REQ>
  | ReturnType<typeof sourcenameCheck_REQ>
  | ReturnType<typeof targetnameCheck_REQ>
  | ReturnType<typeof connectionTest_REQ>
  | ReturnType<typeof connectionMessage_REQ>
  | ReturnType<typeof connectionSFTP_REQ>
  | ReturnType<typeof connectionSFTPMessage_REQ>
  | ReturnType<typeof targetname_REQ>
  | ReturnType<typeof targetnameValue_REQ>
  | ReturnType<typeof targetconID_REQ>
  | ReturnType<typeof sourceID_REQ>
  | ReturnType<typeof targetID_REQ>
  | ReturnType<typeof dagcreateSAVEMODE_REQ>
  | ReturnType<typeof dagcreateTARGETCONNID_REQ>
  | ReturnType<typeof dagcreateTRANSTYPE_REQ>
  | ReturnType<typeof dagcreateTargetLocation_REQ>
  | ReturnType<typeof dagcreateDBMSTYPE_REQ>
  | ReturnType<typeof tast_sensorID_REQ>
  | ReturnType<typeof sensor_id_REQ>
  | ReturnType<typeof log_dagrunid_REQ>
  | ReturnType<typeof log_sensorid_REQ>
  | ReturnType<typeof log_taskid_REQ>
  | ReturnType<typeof log_FLOW_ID>
  | ReturnType<typeof log_tryNumber>
  | ReturnType<typeof target_name_REQ>
  | ReturnType<typeof target_location_REQ>
  | ReturnType<typeof target_savemode_REQ>
  | ReturnType<typeof target_id_REQ>
  | ReturnType<typeof target_connid_REQ>
  | ReturnType<typeof source_name_REQ>
  | ReturnType<typeof source_localpath_REQ>
  | ReturnType<typeof source_id_REQ>
  | ReturnType<typeof source_dbconnid_REQ>
  | ReturnType<typeof source_connection_id_DB_REQ>
  | ReturnType<typeof flow_file_name_REQ>
  | ReturnType<typeof source_dbmstype_REQ>
  | ReturnType<typeof is_paused_REQ>
  | ReturnType<typeof sftp_result_msg_REQ>
