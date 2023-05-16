import {Field} from 'formik'
import {FC} from 'react'

const SftpInfoCreateConfirm: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark'>입력 확인</h2>
      </div>
      <div className='row mb-12'>
        <div className='col-md-6 fv-row'>
          <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
            <span className='required'>커넥션 아이디</span>
          </label>
          <div className='position-relative'>
            <Field
              className='form-control form-control-solid'
              placeholder='FRH_TMP_SERVER'
              name='connection_id'
              disabled={true}
            />
          </div>
        </div>
        <div className='col-md-6 fv-row'>
          <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
            <span className='required'>커넥션 이름</span>
          </label>
          <div className='position-relative'>
            <Field
              className='form-control form-control-solid'
              placeholder='FRH_TMP_SERVER'
              name='connection_name'
              disabled={true}
            />
          </div>
        </div>
      </div>
      <div className='row mb-12'>
        <div className='col-md-6 fv-row'>
          <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
            <span className='required'>접속 아이디</span>
          </label>
          <div className='position-relative'>
            <Field
              type='text'
              className='form-control form-control-solid'
              placeholder=''
              name='login'
              disabled={true}
            />
          </div>
        </div>
        <div className='col-md-6 fv-row'>
          <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
            <span className='required'>접속비밀번호</span>
          </label>

          <div className='position-relative'>
            <Field
              type='text'
              className='form-control form-control-solid'
              placeholder=''
              name='password'
              disabled={true}
            />
          </div>
        </div>
      </div>
      <div className='row mb-12'>
        <div className='col-md-6 fv-row'>
          <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
            <span className='required'>호스트 서버</span>
          </label>

          <div className='position-relative'>
            <Field
              type='text'
              className='form-control form-control-solid'
              placeholder=''
              name='host'
              disabled={true}
            />
          </div>
        </div>
        <div className='col-md-6 fv-row'>
          <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
            <span className='required'>포트</span>
          </label>

          <div className='position-relative'>
            <Field
              type='text'
              className='form-control form-control-solid'
              placeholder='2022'
              name='port'
              disabled={true}
            />
          </div>
        </div>
      </div>
      <div className='row mb-12'>
        <div className='col-md-6 fv-row'>
          <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
            <span className='required'>커넥션 타입</span>
          </label>

          <div className='position-relative'>
            <Field
              type='text'
              className='form-control form-control-solid'
              disabled={true}
              name='connection_type'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export {SftpInfoCreateConfirm}
