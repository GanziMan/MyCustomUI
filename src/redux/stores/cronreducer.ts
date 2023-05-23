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
  CRON_VALUE_REQ,
  DAGCREATE_DBMSTYPE_REQ,
  DAGCREATE_SAVEMODE_REQ,
  DAGCREATE_TARGETCONNID_REQ,
  DAGCREATE_TARGETLOCATION_REQ,
  DAGCREATE_TRANSTYPE_REQ,
  FILE_TYPE_LIST_REQ,
  FLOW_FILENAME_REQ,
  FLOW_ISPAUSED_REQ,
  LOG_DAGRUNID_REQ,
  LOG_FLOW_ID,
  LOG_SENSORID_REQ,
  LOG_TASK_REQ,
  LOG_TRYNUMBER_REQ,
  PATH_MESSAGE_REQ,
  PATH_VALUE_REQ,
  SENSOR_ID_REQ,
  SFTPCONNECTION_MESSAGE_REQ,
  SOURCEID_REQ,
  SOURCENAME_CHECK_REQ,
  SOURCE_DBMSTYPE_REQ,
  SOURCE_DB_CONNECTION_ID,
  SOURCE_DB_CONNID_REQ,
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
} from '../actions/constants'
import {ScoreAction} from '../actions/creatorActions'

type Result = {
  cron: any
  message: any
  pathvalue: any
  //여기서부터 connection sftp
  connection_id: any
  connection_name: any
  connection_id_message: any
  connection_name_message: any
  //여기까지 connection sftp

  //여기서부터 connection db
  connection_dbid: any
  connection_dbname: any
  connection_dbid_message: any
  connection_dbname_message: any
  //여기까지 connection db
  connection_file: any
  connection_db: any
  sourcenamecheck: any
  targetnamecheck: any
  connectionMessage: any
  connectionSftpMessage: any
  targetname: any
  targetnamevalue: any
  targetconid: any
  sourceid: any
  targetid: any
  filetypelist: any
  target_conn_id: any
  target_location: any
  save_mode: any
  trans_type: any
  dbms_type: any
  sensor_id: any
  task_id: any
  dag_run_id: any
  flow_id: any
  try_number: any
  update_target_name: any
  update_target_location: any
  update_target_savemode: any
  update_source_nmae: any
  update_source_localpath: any
  update_source_dbmstype: any
  update_target_id: any
  update_target_connid: any
  update_sourece_id: any
  update_sourece_dbconnid: any
  source_db_connection_id: any
  flow_file_name: any

  sftp_resultMsg: any
  is_paused: any
}

const initialState: Result = {
  cron: '',
  message: '',
  pathvalue: '',
  connection_id: '',
  connection_name: '',
  connection_id_message: '',
  connection_name_message: '',
  connection_dbid: '',
  connection_dbname: '',
  connection_dbid_message: '',
  connection_dbname_message: '',
  connection_db: '',
  connection_file: '',
  sourcenamecheck: '',
  targetnamecheck: '',
  connectionMessage: '',
  connectionSftpMessage: '',
  targetname: '',
  targetnamevalue: '',
  targetconid: '',
  sourceid: '',
  filetypelist: '',
  targetid: '',
  target_conn_id: '',
  target_location: '',
  save_mode: '',
  trans_type: '',
  dbms_type: '',
  sensor_id: '',
  dag_run_id: '',
  task_id: '',
  flow_id: '',
  try_number: '',
  update_target_name: '',
  update_target_location: '',
  update_target_savemode: '',
  update_source_nmae: '',
  update_source_localpath: '',
  update_source_dbmstype: '',
  update_target_id: '',
  update_target_connid: '',
  update_sourece_dbconnid: '',
  update_sourece_id: '',
  source_db_connection_id: '',
  flow_file_name: '',
  sftp_resultMsg: '',
  is_paused: '',
}

const cronreducer = (state: Result = initialState, action: ScoreAction) => {
  switch (action.type) {
    case CRON_VALUE_REQ:
      return {
        ...state,
        cron: action.payload,
      }
    case PATH_MESSAGE_REQ:
      return {
        ...state,
        message: action.payload,
      }
    case PATH_VALUE_REQ:
      return {
        ...state,
        pathvalue: action.payload,
      }
    //여기서부터 sftp connection
    case CONNECTION_ID_REQ:
      return {
        ...state,
        connection_id: action.payload,
      }
    case CONNECTION_NAME_REQ:
      return {
        ...state,
        connection_name: action.payload,
      }
    case CONNECTION_ID_MESSAGE_REQ:
      return {
        ...state,
        connection_id_message: action.payload,
      }
    case CONNECTION_NAME_MESSAGE_REQ:
      return {
        ...state,
        connection_name_message: action.payload,
      }
    //여기까지 sftp connection

    //여기서부터 db connection
    case CONNECTION_DBID_REQ:
      return {
        ...state,
        connection_dbid: action.payload,
      }
    case CONNECTION_DBNAME__REQ:
      return {
        ...state,
        connection_dbname: action.payload,
      }
    case CONNECTION_DBID_MESSAGE_REQ:
      return {
        ...state,
        connection_dbid_message: action.payload,
      }
    case CONNECTION_DBNAME_MESSAGE_REQ:
      return {
        ...state,
        connection_dbname_message: action.payload,
      }
    //여기까지 db connection

    case CONNECTION_DB_REQ:
      return {
        ...state,
        connection_db: action.payload,
      }
    case CONNECTION_FILE_REQ:
      return {
        ...state,
        connection_file: action.payload,
      }
    case SOURCENAME_CHECK_REQ:
      return {
        ...state,
        sourcenamecheck: action.payload,
      }
    case TARGETNAME_CHECK_REQ:
      return {
        ...state,
        targetnamecheck: action.payload,
      }
    case CONNECTION_MESSAGE_REQ:
      return {
        ...state,
        connectionMessage: action.payload,
      }
    case SFTPCONNECTION_MESSAGE_REQ:
      return {
        ...state,
        connectionSftpMessage: action.payload,
      }
    case TARGETNAME_REQ:
      return {
        ...state,
        targetname: action.payload,
      }
    case TARGETNAMEVALUE_REQ:
      return {
        ...state,
        targetnamevalue: action.payload,
      }
    case TARGETCONID_REQ:
      return {
        ...state,
        targetconid: action.payload,
      }
    case SOURCEID_REQ:
      return {
        ...state,
        sourceid: action.payload,
      }
    case TARGETID_REQ:
      return {
        ...state,
        targetid: action.payload,
      }
    case FILE_TYPE_LIST_REQ:
      return {
        ...state,
        filetypelist: action.payload,
      }
    case DAGCREATE_SAVEMODE_REQ:
      return {
        ...state,
        save_mode: action.payload,
      }
    case DAGCREATE_TARGETCONNID_REQ:
      return {
        ...state,
        target_conn_id: action.payload,
      }
    case DAGCREATE_TARGETLOCATION_REQ:
      return {
        ...state,
        target_location: action.payload,
      }
    case DAGCREATE_TRANSTYPE_REQ:
      return {
        ...state,
        trans_type: action.payload,
      }
    case DAGCREATE_DBMSTYPE_REQ:
      return {
        ...state,
        dbms_type: action.payload,
      }
    case SENSOR_ID_REQ:
      return {
        ...state,
        sensor_id: action.payload,
      }
    case TASK_SENSORID_REQ:
      return {
        ...state,
        sensor_id: action.payload,
      }

    case LOG_DAGRUNID_REQ:
      return {
        ...state,
        dag_run_id: action.payload,
      }

    case LOG_SENSORID_REQ:
      return {
        ...state,
        sensor_id: action.payload,
      }
    case LOG_TASK_REQ:
      return {
        ...state,
        task_id: action.payload,
      }
    case LOG_FLOW_ID:
      return {
        ...state,
        flow_id: action.payload,
      }
    case LOG_TRYNUMBER_REQ:
      return {
        ...state,
        try_number: action.payload,
      }
    case TARGET_NAME_REQ:
      return {
        ...state,
        update_target_name: action.payload,
      }
    case TARGET_LOCATION_REQ:
      return {
        ...state,
        update_target_location: action.payload,
      }
    case TARGET_SAVEMODE_REQ:
      return {
        ...state,
        update_target_savemode: action.payload,
      }
    case SOURCE_NAME_REQ:
      return {
        ...state,
        update_source_name: action.payload,
      }
    case SOURCE_LOCALPATH_REQ:
      return {
        ...state,
        update_source_localpath: action.payload,
      }
    case SOURCE_DBMSTYPE_REQ:
      return {
        ...state,
        update_source_dbmstype: action.payload,
      }
    case TARGET_ID_REQ:
      return {
        ...state,
        update_target_id: action.payload,
      }

    case TARGET_CONNID_REQ:
      return {
        ...state,
        update_target_connid: action.payload,
      }

    case SOURCE_ID_REQ:
      return {
        ...state,
        update_source_id: action.payload,
      }

    case SOURCE_DB_CONNID_REQ:
      return {
        ...state,
        update_source_dbconnid: action.payload,
      }

    case SOURCE_DB_CONNECTION_ID:
      return {
        ...state,
        source_db_connection_id: action.payload,
      }

    case FLOW_FILENAME_REQ:
      return {
        ...state,
        flow_file_name: action.payload,
      }
    case FLOW_FILENAME_REQ:
      return {
        ...state,
        sftp_resultMsg: action.payload,
      }
    case FLOW_ISPAUSED_REQ:
      return {
        ...state,
        is_paused: action.payload,
      }
    default:
      return state
  }
}

export default cronreducer
