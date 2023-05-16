import {FC} from 'react'
import {Field} from 'formik'
import {KTSVG} from '../../../_metronic/helpers'

const TLocalPath: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-8 pb-lg-10'>
        <h2 className='fw-bolder text-dark'>로컬경로 확인</h2>

        <div className='text-gray-400 fw-bold fs-6'></div>
      </div>
      <div className='mb-0'>
        <div className='fs-6 text-gray-600 mb-5'></div>
        <div className='notice d-flex bg-light-warning rounded border-warning border border-dashed p-6'>
          <KTSVG
            path='/media/icons/duotune/general/gen044.svg'
            className='svg-icon-2tx svg-icon-warning me-4'
          />
          <div className='row mb-12'>
            <div className='col-md-6 fv-row'>
              <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                <span className='required'>local_path</span>
              </label>

              <div className='position-relative'>
                <Field
                  type='text'
                  className='form-control form-control-solid'
                  placeholder='경로'
                  name='local_path'
                />
              </div>
            </div>
            <div className='col-md-6 fv-row'>
              <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                <span className='required'>{''}</span>
              </label>

              <div className='position-relative'>
                <input
                  type='button'
                  className='btn btn-lg btn-light-success'
                  value={'여부확인'}
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {TLocalPath}
