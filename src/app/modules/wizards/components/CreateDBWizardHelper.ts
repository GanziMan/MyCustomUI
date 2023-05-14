import * as Yup from 'yup'

export interface DBCollection{
  owner:string  
  sensor_id:string
  schedule_interval:string
  trans_type:string
  save_mode:string
  dbms_type:string
  engine_code_file_name:string
  db_conn_id:any;
  db_partition_size:string
  db_read_table_name:string
  db_sql:string
  source_name:string
  conButton:boolean

}

const createDBSchemas = [
  Yup.object({ // 1step
 
  }),
  Yup.object({ // 2step
  }),
  
]
const DBCollectionInitValues: DBCollection = {
  owner:'',
  sensor_id:'',
  schedule_interval:'',
  trans_type:'DB',
  save_mode:'',
  dbms_type:'MARIA',
  engine_code_file_name:'',
  db_conn_id:'',
  db_partition_size:'',
  db_read_table_name:'',
  db_sql:'',
  source_name:'',
  conButton:true,
}
export {createDBSchemas, DBCollectionInitValues}
