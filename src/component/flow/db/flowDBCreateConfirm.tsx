import {FC} from 'react'
import {Field} from 'formik'

const FlowDBCreateConfirm: FC = () => {
  {
    /* .map */
  }

  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark'>Dag 입력 확인</h2>
      </div>
      <div className='row mb-12'>
        <div className='col-md-6 fv-row'>
          <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
            <span className='required'>Dag_Name</span>
          </label>

          <div className='position-relative'>
            <Field
              className='form-control form-control-solid'
              placeholder='Dag_Name'
              name='dag_name'
              disabled={true}
            />
          </div>
        </div>
        <div className='col-md-6 fv-row'>
          <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
            <span className='required'>수집주기</span>
          </label>
          <div className='position-relative'>
            <Field
              className='form-control form-control-solid'
              placeholder=''
              name='schedule_interval'
              disabled={true}
            />
          </div>
        </div>
      </div>

      <div className='row mb-12'>
        <div className='col-md-6 fv-row'>
          <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
            <span className='required'>관리자</span>
          </label>
          <div className='position-relative'>
            <Field
              className='form-control form-control-solid'
              placeholder=''
              name='owner'
              disabled={true}
            />
          </div>
        </div>
        <div className='col-md-6 fv-row'>
          <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
            <span className='required'>db_read_table_name</span>
          </label>

          <div className='position-relative'>
            <Field
              disabled={true}
              className='form-control form-control-solid'
              placeholder=''
              name='db_read_table_name'
            />
          </div>
        </div>
      </div>
      <div className='row mb-12'>
        <div className='col-md-6 fv-row'>
          <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
            <span className='required'>Engine_code_file_name</span>
          </label>

          <div className='position-relative'>
            <Field
              disabled={true}
              className='form-control form-control-solid'
              placeholder=''
              name='engine_code_file_name'
            />
          </div>
        </div>
        <div className='col-md-6 fv-row'>
          <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
            <span className='required'>db_sql</span>
          </label>

          <div className='position-relative'>
            <Field
              disabled={true}
              className='form-control form-control-solid'
              placeholder=''
              name='db_sql'
            />
          </div>
        </div>
      </div>
      <div className='row mb-12'>
        <div className='col-md-6 fv-row'>
          <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
            <span className='required'>파티션 사이즈</span>
          </label>
          <div className='position-relative'>
            <Field
              disabled={true}
              className='form-control form-control-solid'
              placeholder='100000'
              name='partition_size'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export {FlowDBCreateConfirm}
