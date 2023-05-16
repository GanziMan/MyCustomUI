import axios from 'axios'
import {useFormik} from 'formik'
import React, {useState} from 'react'
import * as Yup from 'yup'
import {DbInfo, DbInitValues as initialValues} from '../SettingsModel'

const profileDetailsSchema = Yup.object().shape({
  DBconnection_id: Yup.string().required('DBconnection_id is required'),
  DBconn_type: Yup.string().required('DBconn_type is required'),
  DBhost: Yup.string().required('DBhost is required'),
  DBlogin: Yup.string().required('DBlogin is required'),
  DBschema: Yup.string().required('DBschema is required'),
  DBport: Yup.string().required('DBport is required'),
  DBpassword: Yup.string().required('DBpassword is required'),
  DBextra: Yup.string().required('DBextra is required'),
})

const SftpCon: React.FC = () => {
  const [data, setData] = useState<DbInfo>(initialValues)
  const [loading, setLoading] = useState(false)
  const formik = useFormik<DbInfo>({
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
      .then(function (response) {
        console.log(response.data)
      })
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
          <h3 className='fw-bolder m-0'>접속정보</h3>
        </div>
      </div>

      <div id='kt_account_profile_details' className='collapse show'>
        <form onSubmit={formik.handleSubmit} noValidate className='form'>
          <div className='card-body border-top p-9'>
            <div className='row mb-6'>
              <label className='col-lg-2 col-form-label required fw-bold fs-6'>
                DBconnection_id
              </label>
              <div className='col-lg-3 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='DBconnection_id'
                  {...formik.getFieldProps('DBconnection_id')}
                />
                {formik.touched.DBconnection_id && formik.errors.DBconnection_id && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.DBconnection_id}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-2 col-form-label required fw-bold fs-6'>DBconn_type</label>

              <div className='col-lg-3 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='DBconn_type'
                  {...formik.getFieldProps('DBconn_type')}
                />
                {formik.touched.DBconn_type && formik.errors.DBconn_type && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.DBconn_type}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-2 col-form-label required fw-bold fs-6'>DBhost</label>
              <div className='col-lg-3 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='DBhost'
                  {...formik.getFieldProps('DBhost')}
                />
                {formik.touched.DBhost && formik.errors.DBhost && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.DBhost}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-2 col-form-label required fw-bold fs-6'>DBlogin</label>
              <div className='col-lg-3 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='DBlogin'
                  {...formik.getFieldProps('DBlogin')}
                />
                {formik.touched.DBlogin && formik.errors.DBlogin && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.DBlogin}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-2 col-form-label required fw-bold fs-6'>DBschema</label>
              <div className='col-lg-3 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='DBschema'
                  {...formik.getFieldProps('DBschema')}
                />
                {formik.touched.DBschema && formik.errors.DBschema && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.DBschema}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-2 col-form-label required fw-bold fs-6'>DBport</label>
              <div className='col-lg-3 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='DBport'
                  {...formik.getFieldProps('DBport')}
                />
                {formik.touched.DBport && formik.errors.DBport && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.DBport}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-2 col-form-label required fw-bold fs-6'>DBpassword</label>
              <div className='col-lg-3 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='DBpassword'
                  {...formik.getFieldProps('DBpassword')}
                />
                {formik.touched.DBpassword && formik.errors.DBpassword && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.DBpassword}</div>
                  </div>
                )}
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-2 col-form-label required fw-bold fs-6'>DBextra</label>
              <div className='col-lg-3 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  placeholder='DBextra'
                  {...formik.getFieldProps('DBextra')}
                />
                {formik.touched.DBextra && formik.errors.DBextra && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.DBextra}</div>
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
