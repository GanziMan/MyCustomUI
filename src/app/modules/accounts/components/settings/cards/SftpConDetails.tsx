import axios from 'axios'
import {useFormik} from 'formik'
import React, {useState} from 'react'
import * as Yup from 'yup'
import {SftpInfo, SftpInitValues as initialValues} from '../SettingsModel'

const profileDetailsSchema = Yup.object().shape({
  connection_id: Yup.string().required('connection_id is required'),
  conn_type: Yup.string().required('conn_type is required'),
  host: Yup.string().required('host is required'),
  login: Yup.string().required('login is required'),
  schema: Yup.string().required('schema is required'),
  port: Yup.string().required('port is required'),
  password: Yup.string().required('password is required'),
  extra: Yup.string().required('extra is required'),
})

const SftpCon: React.FC = () => {
  const [data, setData] = useState<SftpInfo>(initialValues)
  const [loading, setLoading] = useState(false)
  const formik = useFormik<SftpInfo>({
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

  const axiosConfig = {
    headers: {
      // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'Content-Type': 'application/json;',
    },
    auth: {
      username: 'qjatn0955',
      password: 'kim50089',
    },
  }

  const Creatapi = () => {
    axios
      .post(
        '/api/v1/connections',
        {
          connection_id: 'string2',
          conn_type: 'string2',
          description: 'string2',
          host: 'string2',
          login: 'string2',
          schema: 'string2',
          port: 0,
          password: 'pa$$word',
          extra: 'string',
        },
        axiosConfig
      )
      .catch(function (error) {
        console.error(error)
      })
  }

  return (
    <div className='card mb-5 mb-xl-10'>
      <div
        className='card-header border-0 cursor-pointer'
        role='button'
        data-bs-toggle='collapse'
        data-bs-target='#kt_account_profile_details'
        aria-expanded='true'
        aria-controls='kt_account_profile_details'
      >
        <div className='card-title m-0'>
          <h3 className='fw-bolder m-0'>SFTP 접속정보</h3>
        </div>
      </div>

      <div id='kt_account_profile_details' className='collapse show'>
        <form onSubmit={formik.handleSubmit} noValidate className='form'>
          <div className='card-body border-top p-9'>
            <div className='row mb-6'>
              <label className='col-lg-2 col-form-label required fw-bold fs-6'>connection_id</label>
              <div className='col-lg-3 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='connection_id'
                  {...formik.getFieldProps('connection_id')}
                />
                {formik.touched.connection_id && formik.errors.connection_id && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.connection_id}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-2 col-form-label required fw-bold fs-6'>conn_type</label>

              <div className='col-lg-3 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='conn_type'
                  {...formik.getFieldProps('conn_type')}
                />
                {formik.touched.conn_type && formik.errors.conn_type && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.conn_type}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-2 col-form-label required fw-bold fs-6'>host</label>
              <div className='col-lg-3 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='host'
                  {...formik.getFieldProps('host')}
                />
                {formik.touched.host && formik.errors.host && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.host}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-2 col-form-label required fw-bold fs-6'>login</label>
              <div className='col-lg-3 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='login'
                  {...formik.getFieldProps('login')}
                />
                {formik.touched.login && formik.errors.login && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.login}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-2 col-form-label required fw-bold fs-6'>schema</label>
              <div className='col-lg-3 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='schema'
                  {...formik.getFieldProps('schema')}
                />
                {formik.touched.schema && formik.errors.schema && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.schema}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-2 col-form-label required fw-bold fs-6'>port</label>
              <div className='col-lg-3 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='port'
                  {...formik.getFieldProps('port')}
                />
                {formik.touched.port && formik.errors.port && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.port}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-2 col-form-label required fw-bold fs-6'>password</label>
              <div className='col-lg-3 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='password'
                  {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.password}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-2 col-form-label required fw-bold fs-6'>extra</label>
              <div className='col-lg-3 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='extra'
                  {...formik.getFieldProps('extra')}
                />
                {formik.touched.extra && formik.errors.extra && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.extra}</div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className='card-footer d-flex justify-content-end py-6 px-9'>
            <button type='submit' className='btn btn-primary' disabled={loading} onClick={Creatapi}>
              {!loading && 'Save Changes'}
              {loading && (
                <span className='indicator-progress' style={{display: 'block'}}>
                  Please wait...{' '}
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export {SftpCon}
