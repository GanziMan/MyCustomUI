export interface IProfileDetails {
  avatar: string
  fName: string
  lName: string
  company: string
  contactPhone: string
  companySite: string
  country: string
  language: string
  timeZone: string
  currency: string

  communications: {
    email: boolean
    phone: boolean
  }
  allowMarketing: boolean
}

export interface SftpInfo {
  //SFTP 접속방법
  connection_id: string
  conn_type: string
  host: string
  login: string
  schema: string
  port: string
  password: string
  extra: string
}

export interface DbInfo{

    //DB접속방법
    DBconnection_id: string
    DBconn_type: string
    DBhost: string
    DBlogin: string
    DBschema: string
    DBport: string
    DBpassword: string
    DBextra: string

}

export interface FileCollection{
  owner:string  
  sensor_id:string
  schedule_interval:string
  trans_type:string
  save_mode:string
  data_type:string
  file_type_list:string
  delimiter:string
  local_path:string
  file_name:string
  target_conn_id:string
  target_location:string
  privacy_on_off:string
  result:string
}

export interface DBCollection{
  owner:string  
  sensor_id:string
  schedule_interval:string
  trans_type:string
  save_mode:string
  dbms_type:string
  engine_code_file_name:string
  db_conn_id:string
  db_partition_size:string
  db_read_table_name:string
  db_sql:string
  target_conn_id:string
  target_location:string
}
export interface TestResponse{
  data:string
  message:string 
  status:string
}

export interface ListDags{
  dag_id:string;
  default_view:string;
  description:string|null;
  file_token:string;
  fileloc:string;
  has_import_erros:boolean;
  has_task_concurrency_limits:boolean;
  is_active:boolean;
  is_paused:boolean;
  is_subdag:boolean;
  last_expired:string|null;
  last_parsed_time:string;
  lastpickled:string|null;
  max_activeruns:number;
}

export interface Flowexecutions {
  success:string
}
export interface UpdateDag{
  is_paused : boolean;
}

export interface IUpdateEmail {
  newEmail: string
  confirmPassword: string
}

export interface IUpdatePassword {
  currentPassword: string
  newPassword: string
  passwordConfirmation: string
}

export interface IConnectedAccounts {
  google: boolean
  github: boolean
  stack: boolean
}

export interface IEmailPreferences {
  successfulPayments: boolean
  payouts: boolean
  freeCollections: boolean
  customerPaymentDispute: boolean
  refundAlert: boolean
  invoicePayments: boolean
  webhookAPIEndpoints: boolean
}

export interface INotifications {
  notifications: {
    email: boolean
    phone: boolean
  }
  billingUpdates: {
    email: boolean
    phone: boolean
  }
  newTeamMembers: {
    email: boolean
    phone: boolean
  }
  completeProjects: {
    email: boolean
    phone: boolean
  }
  newsletters: {
    email: boolean
    phone: boolean
  }
}

export interface IDeactivateAccount {
  confirm: boolean
}

export const profileDetailsInitValues: IProfileDetails = {
  avatar: '/media/avatars/300-1.jpg',
  fName: 'Max',
  lName: 'Smith',
  company: 'Keenthemes',
  contactPhone: '044 3276 454 935',
  companySite: 'keenthemes.com',
  country: '',
  language: '',
  timeZone: '',
  currency: '',
  communications: {
    email: false,
    phone: false,
  },
  allowMarketing: false,
}

export const FileCollectionInitValues: FileCollection = {
  owner:'',  
  sensor_id:'',
  schedule_interval:'',
  trans_type:'',
  save_mode:'',
  data_type:'string',
  file_type_list:'',
  delimiter:'',
  local_path:'',
  file_name:'',
  target_conn_id:'',
  target_location:'',
  privacy_on_off:'',
  result:''
}

export const DBCollectionInitValues: DBCollection = {
  owner:'',
  sensor_id:'',
  schedule_interval:'',
  trans_type:'',
  save_mode:'',
  dbms_type:'',
  engine_code_file_name:'',
  db_conn_id:'',
  db_partition_size:'',
  db_read_table_name:'',
  db_sql:'',
  target_conn_id:'',
  target_location:'',
}

export const SftpInitValues: SftpInfo = {
  //sftp접속
  connection_id: '',
  conn_type: '',
  host: '',
  login: '',
  schema: '',
  port: '',
  password: '',
  extra: '',
}

export const DbInitValues: DbInfo ={
    //DB접속방법
    DBconnection_id: '',
    DBconn_type: '',
    DBhost: '',
    DBlogin: '',
    DBschema: '',
    DBport: '',
    DBpassword: '',
    DBextra: '',
}
export const UpdateDagInitValues : UpdateDag ={
  is_paused : true
}

export const updateEmail: IUpdateEmail = {
  newEmail: 'support@keenthemes.com',
  confirmPassword: '',
}

export const updatePassword: IUpdatePassword = {
  currentPassword: '',
  newPassword: '',
  passwordConfirmation: '',
}

export const connectedAccounts: IConnectedAccounts = {
  google: true,
  github: true,
  stack: false,
}

export const emailPreferences: IEmailPreferences = {
  successfulPayments: false,
  payouts: true,
  freeCollections: false,
  customerPaymentDispute: true,
  refundAlert: false,
  invoicePayments: true,
  webhookAPIEndpoints: false,
}

export const notifications: INotifications = {
  notifications: {
    email: true,
    phone: true,
  },
  billingUpdates: {
    email: true,
    phone: true,
  },
  newTeamMembers: {
    email: true,
    phone: false,
  },
  completeProjects: {
    email: false,
    phone: true,
  },
  newsletters: {
    email: false,
    phone: false,
  },
}

export const deactivateAccount: IDeactivateAccount = {
  confirm: false,
}
