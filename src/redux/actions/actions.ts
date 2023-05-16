import {SAVE_BIG_LEAGUE, SAVE_BIG_RES} from '../actionTypes/types'

interface saveBigLeaguePropsType {
  name: string
  nameRes: string
  owner: string
  sensor_id: string
  schedule_interval: string
  trans_type: string
  save_mode: string

  //(파일수집) 생성요청
  data_type: string
  file_type_list: string
  delimiter: string
  local_path: string
  file_name: string

  //(데이터베이스 수집) 생성요청
  dbms_type: string
  engine_code_file_name: string
  db_conn_id: string
  db_partition_size: string
  db_read_table_name: string
  db_sql: string

  //파일수집 디비수집 공통 인 것들
  target_conn_id: string
  target_location: string

  //sftpcon & dbcon
  connection_id: string
  connection_Type: string
  host: string
  Password: string
  Port: string
  Extra: string

  //sftpcon
  Username: string

  //dbcon
  login: string
  schema: string

  //variableinfo
  airflow_log_level: string //  ON/OFF
  user_log_setting: string //  { 'info': 'ON', 'warn': 'ON', 'error': 'ON' }
  privacy_regex_dict: string // { 'jumin' : "\d{2}([0]\d|[1][0-2])([0][1-9]|[1-2]\d|[3][0-1])[-]*[1-4]\d{6}", # 주민번호 'phone_nm' : "/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/", # 핸드폰 번호 'drive_nm' : "(\d{2}-\d{2}-\d{6}-\d{2})", # 운전번호 'email' : "(([\w!-_\.])*@([\w!-_\.])*\.[\w]{2,3})", # Email 'url' : "(http(s)?:\/\/)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}" # url }
  sep_dict: string // { ',': 'COMM', '|': 'PIPE', '\t': 'TAB', '': 'SMCSEP' }
}

export function saveBigLeague(action: saveBigLeaguePropsType) {
  return {
    type: SAVE_BIG_LEAGUE,
    payload: action,
  }
}

export function saveBigLeagueRES(action: saveBigLeaguePropsType) {
  return {
    type: SAVE_BIG_RES,
    payload: action.name,
  }
}
