import {FC, useEffect, useState} from 'react'
import {Field, ErrorMessage} from 'formik'
import {useDispatch} from 'react-redux'
import {sourcenameCheck_REQ} from '../../../redux/actions/creatorActions'
import {customAxios} from '../../../apis/utils'
const DBCreate: FC = () => {
  const dispatch = useDispatch()
  const [sourceName, setSourcetName] = useState<any>('')
  const [message, setMeesage] = useState('')
  const sourcetNameChange = (e: any) => {
    setSourcetName(e.target.value)
  }
  useEffect(() => {
    customAxios.get(`source/duplicateCheck?value=${sourceName}`).then(function (response) {
      if (response.data.message === '가능') {
        dispatch(sourcenameCheck_REQ(sourceName))
      } else {
        dispatch(sourcenameCheck_REQ(response.data.message))
      }
      setMeesage(response.data.message)
    })
  })
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark'>DB 수집</h2>
      </div>
      <div className='row mb-12'>
        <div className='col-md-6 fv-row'>
          <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
            <span className='required'>소스이름</span>
          </label>

          <div className='position-relative'>
            <input
              type='text'
              className='form-control form-control-solid'
              placeholder=''
              name='source_name'
              onChange={sourcetNameChange}
            />
          </div>
        </div>
        <div className='col-md-6 fv-row'>
          <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
            <span className='required'>Result</span>
          </label>

          <div className='form-control form-control-solid ' placeholder=''>
            {message === '가능' ? (
              <span className='text-success'>{message} Source 이름 입니다.</span>
            ) : (
              <span>
                <span className='text-danger'>{message} Source 이름 입니다.</span>
              </span>
            )}
          </div>
        </div>
      </div>
      <div className='row mb-12'>
        <div className='col-md-12 fv-row'>
          <div className='fv-row mb-10'>
            <label className='form-label required'>데이터베이스 타입</label>
            <Field
              as='select'
              name='dbms_type'
              className='form-select form-select-lg form-select-solid'
            >
              <option value='MARIA'>Maria</option>
              <option value='ORACLE'>Oracle</option>
              <option value='POSTGRES'>Postgres</option>
            </Field>
            <div className='text-danger mt-2'>
              <ErrorMessage name='businessType' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {DBCreate}
