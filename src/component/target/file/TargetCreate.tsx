import {FC, useEffect, useState} from 'react'
import {Field} from 'formik'
import {useDispatch} from 'react-redux'
import {targetnameValue_REQ, targetname_REQ} from '../../../redux/actions/creatorActions'
import {customAxios} from '../../../apis/utils'

const TargetCreate: FC = () => {
  const dispatch = useDispatch()
  const [message, setMessage] = useState<string>('')
  const [nameValue, setNameValue] = useState<any>('')

  const nameChange = (e: any) => {
    setNameValue(e.target.value)
  }

  useEffect(() => {
    customAxios.get(`target/duplicateCheck?value=${nameValue}`).then(function (response) {
      setMessage(response.data.message)
      dispatch(targetname_REQ(response.data.message))
      dispatch(targetnameValue_REQ(nameValue))
    })
  })

  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark'>파일 수집</h2>
      </div>
      <div className='row mb-12'>
        <div className='col-md-6 fv-row'>
          <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
            <span className='required'>타겟 이름</span>
          </label>
          <div className='position-relative'>
            <Field
              type='text'
              className='form-control form-control-solid'
              placeholder='target_name'
              name='target_name'
              onChange={nameChange}
              value={nameValue}
            />
          </div>
        </div>
        <div className='col-md-6 fv-row'>
          <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
            <span className='required'>중복 체크</span>
          </label>
          <div className='form-control form-control-solid' placeholder=''>
            {message === '가능' ? (
              <span className='text-success'>{message} Target 이름 입니다.</span>
            ) : (
              <span className='text-danger'>{message} Target 이름 입니다.</span>
            )}
          </div>
        </div>
      </div>
      <div className='row mb-12'>
        <div className='col-md-12 fv-row'>
          <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
            <span className='required'>타겟 위치</span>
          </label>
          <div className='position-relative'>
            <Field
              type='text'
              className='form-control form-control-solid'
              placeholder='ex) /Users'
              name='target_location'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export {TargetCreate}
