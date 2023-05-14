import * as Yup from 'yup'

export interface ICreateAccount {
  accountType: string
  accountTeamSize: string
  accountName: string
  accountPlan: string
  businessName: string
  businessDescriptor: string
  businessType: string
  businessDescription: string
  businessEmail: string
  nameOnCard: string
  cardNumber: string
  cardExpiryMonth: string
  cardExpiryYear: string
  cardCvv: string
  saveCard: string
}
const createAccountSchemas = [
  // Yup.object({

  // }),
  // Yup.object({
  //   source_name: Yup.string().required().label('source_name'),
  // }),
  // Yup.object({
  //   schedule_interval: Yup.string().required().label('schedule_interval'),
  //   trans_type: Yup.string().required().label('trans_type'),
  //   save_mode: Yup.string().required().label('save_mode'),
  //   data_type: Yup.string().required().label('data_type'),
  // }),
  // Yup.object({
  //   file_type_list: Yup.string().required().label('file_type_list'),
  //   delimiter: Yup.string().required().label('delimiter'),

  //   file_name: Yup.string().required().label('file_name'),
  //   privacy_on_off: Yup.string().required().label('privacy_on_off'),
  // }),
]
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
  // target_conn_id:string
  // target_location:string
  privacy_on_off:string
  source_name:string
  schedule_interval_view:string
}


const createFileSchemas = [
  Yup.object({ // 1step
  }),
  Yup.object({ // 2step
  }),
  Yup.object({ // 3step
  }),
  Yup.object({ // 4step
  }),
]


export interface SftpInfo {
  connection_id:string
  connection_name:string
  connection_type:string
  host:string
  login:string
  extra:string
  port:string
  password:string
  description:string
}

export interface SDBInfo {
  connection_id:string
  connection_name:string
  conn_type:string
  host:string
  schema:string
  port:string
  password:string
  extra:string
  login:string
  description:string
  connection_type:string
}
export interface TargetCollection {
  target_name:string;
  target_location:string;
  target_conn_id:any;
  save_mode:string;
}
const createTargetSchemas = [
  Yup.object({
  }),
  Yup.object({
    target_location: Yup.string().required().label('target_location'),
  }),
  
]
export interface Flowfile {
  sensor_id:string;
  schedule_interval:string;
  source_id : any;
  target_id:any;
  dag_name:string;
  owner:string;
  data_type:string;
  file_type_list:string;
  delimiter:string;
  file_name:string;
  privacy_on_off:string;
  trans_type:string;
  save_mode:string;
  local_path:string;
  target_location:string;
  target_conn_id:any;
}
export interface Flowdb{
  sensor_id:string;
  schedule_interval:string;
  source_id : any;
  target_id:any;
  dag_name:string;
  owner:string;
  engine_code_file_name:string;
  db_read_table_name:string;
  db_sql:string;
  partition_size:string
  trans_type:string;
  save_mode:string;
  target_location:string;
  target_conn_id:string;
  dbms_type:string;

}



const inits: ICreateAccount = {
  accountType: 'personal',
  accountTeamSize: '50+',
  accountName: '',
  accountPlan: '1',
  businessName: 'Keenthemes Inc.',
  businessDescriptor: 'KEENTHEMES',
  businessType: '1',
  businessDescription: '',
  businessEmail: 'corp@support.com',
  nameOnCard: 'Max Doe',
  cardNumber: '4111 1111 1111 1111',
  cardExpiryMonth: '1',
  cardExpiryYear: '2025',
  cardCvv: '123',
  saveCard: '1',
}

export const FileCollectionInitValues: FileCollection = {
  owner:'',  
  sensor_id:'',
  schedule_interval:'',
  trans_type:'FILE',
  save_mode:'',
  data_type:'',
  file_type_list:'',
  delimiter:'',
  local_path:'',
  file_name:'',
  // target_conn_id:'',
  // target_location:'',
  privacy_on_off:'',
  source_name:'',
  schedule_interval_view:''
}

export const SftpInitValues: SftpInfo = {
  connection_id:'',
  connection_type:'',
  host:'',
  login:'',
  port:'',
  password:'',
  connection_name:'',
  extra:"{'no_host_key_check': true}",
  description:null,
}

export const DBInfoInitValues: SDBInfo = {
  connection_id:'',
  connection_name:'',
  conn_type:'',
  schema:'',
  host:'',
  login:'',
  port:'',
  password:'',
  extra:"{'schema': public}",
  description:'',
  connection_type:''
}
export const TargetInitValues: TargetCollection ={
  target_name:'',
  target_location:'',
  target_conn_id:'',
  save_mode:'FILE'
}

export const FlowfileInitValues: Flowfile ={
  sensor_id:'',
  schedule_interval:"None",
  source_id : '',
  target_id:'',
  dag_name:'',
  owner:'agent',
  data_type:'structed',
  file_type_list:'txt',
  delimiter:'chr(15)',
  file_name:'',
  privacy_on_off:'OFF',
  trans_type:'FILE',
  save_mode:'',
  local_path:'',
  target_location:'',
  target_conn_id:''
}

export const FlowdbInitValues: Flowdb ={
  sensor_id:'',
  schedule_interval:'',
  source_id : '',
  target_id:'',
  dag_name:'',
  owner:'',
  engine_code_file_name:'',
  db_read_table_name:'',
  db_sql:'',
  partition_size:'',
  trans_type:'',
  save_mode:'',
  target_location:'',
  target_conn_id:'',
  dbms_type:'',

}
export {createAccountSchemas, inits,createTargetSchemas}
