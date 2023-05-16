import React, {useState} from 'react'
import {DBCollection, DBCollectionInitValues as initialValues} from '../SettingsModel'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import axios from 'axios'
import {useSelector} from 'react-redux'
import {RootState} from '../../../../../../redux/stores'

const profileDetailsSchema = Yup.object().shape({
  owner: Yup.string().required('owner is required'),
  sensor_id: Yup.string().required('sensor_id is required'),
  schedule_interval: Yup.string().required('schedule_interval is required'),
  trans_type: Yup.string().required('trans_type is required'),
  save_mode: Yup.string().required('save_mode is required'),
  dbms_type: Yup.string().required('dbms_type is required'),
  engine_code_file_name: Yup.string().required('engine_code_file_name is required'),
  db_conn_id: Yup.string().required('db_conn_id is required'),
  db_partition_size: Yup.string().required('db_partition_size is required'),
  db_read_table_name: Yup.string().required('db_read_table_name is required'),
  db_sql: Yup.string().required('db_sql is required'),
  target_conn_id: Yup.string().required('target_conn_id is required'),
  target_location: Yup.string().required('target_location is required'),
})

const DBCollectionCreate: React.FC = () => {
  const [data, setData] = useState<DBCollection>(initialValues)
  const [loading, setLoading] = useState(false)
  const formik = useFormik<DBCollection>({
    initialValues,
    validationSchema: profileDetailsSchema,
    onSubmit: (values) => {
      setLoading(true)
      setTimeout(() => {
        // values.communications.email = data.communications.email
        // values.communications.phone = data.communications.phone
        // values.allowMarketing = data.allowMarketing
        const updatedData = Object.assign(data, values)
        setData(updatedData)
        setLoading(false)
      }, 1000)
    },
  })
  const selector = useSelector((state: RootState) => state)
  axios.defaults.withCredentials = true
  //api
  const axiosConfig = {
    headers: {
      // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'Content-Type': 'application/json;',
    },
    withCredentials: true,
  }

  return (
    <div className='card mb-5 mb-xl-12'>
      <div
        className='card-header border-0 cursor-pointer'
        role='button'
        data-bs-toggle='collapse'
        data-bs-target='#kt_account_profile_details'
        aria-expanded='true'
        aria-controls='kt_account_profile_details'
      >
        <div className='card-title m-0'>
          <h3 className='fw-bolder m-0'>(데이터베이스 수집)생성</h3>
        </div>
      </div>

      <div id='kt_account_profile_details' className='collapse show'>
        <form onSubmit={formik.handleSubmit} noValidate className='form'>
          <div className='card-body border-top p-12'>
            <div className='row mb-6'>
              <label className='col-lg-2 col-form-label required fw-bold fs-6'>owner</label>
              <div className='col-lg-3 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='owner'
                  {...formik.getFieldProps('owner')}
                />
                {formik.touched.owner && formik.errors.owner && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.owner}</div>
                  </div>
                )}
              </div>
              <label className='col-lg-2 col-form-label required fw-bold fs-6'>sensor_id</label>

              <div className='col-lg-3 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='sensor_id'
                  {...formik.getFieldProps('sensor_id')}
                />
                {formik.touched.sensor_id && formik.errors.sensor_id && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.sensor_id}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-2 col-form-label required fw-bold fs-6'>
                schedule_interval
              </label>
              <div className='col-lg-3 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='schedule_interval'
                  {...formik.getFieldProps('schedule_interval')}
                />
                {formik.touched.schedule_interval && formik.errors.schedule_interval && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.schedule_interval}</div>
                  </div>
                )}
              </div>
              <label className='col-lg-2 col-form-label required fw-bold fs-6'>trans_type</label>
              <div className='col-lg-3 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='trans_type'
                  {...formik.getFieldProps('trans_type')}
                />
                {formik.touched.trans_type && formik.errors.trans_type && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.trans_type}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-2 col-form-label required fw-bold fs-6'>save_mode</label>
              <div className='col-lg-3 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='save_mode'
                  {...formik.getFieldProps('save_mode')}
                />
                {formik.touched.save_mode && formik.errors.save_mode && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.save_mode}</div>
                  </div>
                )}
              </div>
              <label className='col-lg-2 col-form-label required fw-bold fs-6'>dbms_type</label>
              <div className='col-lg-3 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='dbms_type'
                  {...formik.getFieldProps('dbms_type')}
                />
                {formik.touched.dbms_type && formik.errors.dbms_type && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.dbms_type}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-2 col-form-label required fw-bold fs-6'>
                engine_code_file_name
              </label>
              <div className='col-lg-3 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='engine_code_file_name'
                  {...formik.getFieldProps('engine_code_file_name')}
                />
                {formik.touched.engine_code_file_name && formik.errors.engine_code_file_name && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.engine_code_file_name}</div>
                  </div>
                )}
              </div>
              <label className='col-lg-2 col-form-label required fw-bold fs-6'>db_conn_id</label>
              <div className='col-lg-3 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='db_conn_id'
                  {...formik.getFieldProps('db_conn_id')}
                />
                {formik.touched.db_conn_id && formik.errors.db_conn_id && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.db_conn_id}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-2 col-form-label required fw-bold fs-6'>
                db_partition_size
              </label>
              <div className='col-lg-3 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='db_partition_size'
                  {...formik.getFieldProps('db_partition_size')}
                />
                {formik.touched.db_partition_size && formik.errors.db_partition_size && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.db_partition_size}</div>
                  </div>
                )}
              </div>
              <label className='col-lg-2 col-form-label required fw-bold fs-6'>
                db_read_table_name
              </label>
              <div className='col-lg-3 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='db_read_table_name'
                  {...formik.getFieldProps('db_read_table_name')}
                />
                {formik.touched.db_read_table_name && formik.errors.db_read_table_name && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.db_read_table_name}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-2 col-form-label required fw-bold fs-6'>db_sql</label>
              <div className='col-lg-3 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='db_sql'
                  {...formik.getFieldProps('db_sql')}
                />
                {formik.touched.db_sql && formik.errors.db_sql && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.db_sql}</div>
                  </div>
                )}
              </div>
              <label className='col-lg-2 col-form-label required fw-bold fs-6'>
                target_conn_id
              </label>
              <div className='col-lg-3 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='target_conn_id'
                  {...formik.getFieldProps('target_conn_id')}
                />
                {formik.touched.target_conn_id && formik.errors.target_conn_id && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.target_conn_id}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-2 col-form-label required fw-bold fs-6'>
                target_location
              </label>
              <div className='col-lg-3 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='target_location'
                  {...formik.getFieldProps('target_location')}
                />
                {formik.touched.target_location && formik.errors.target_location && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.target_location}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export {DBCollectionCreate}
