import React, {FC} from 'react'
import {KTSVG} from '../../../../../_metronic/helpers'
import {Link} from 'react-router-dom'
import { Field } from 'formik'

const Step5: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-8 pb-lg-10'>
        <h2 className='fw-bolder text-dark'>로컬경로 확인</h2>

        <div className='text-gray-400 fw-bold fs-6'>
          {/* If you need more info, please
          <Link to='/auth/login' className='link-primary fw-bolder'>
            {' '}
            Sign In
          </Link>
          . */}
        </div>
      </div>

      <div className='mb-0'>
        <div className='fs-6 text-gray-600 mb-5'>
          {/* Writing headlines for blog posts is as much an art as it is a science and probably
          warrants its own post, but for all advise is with what works for your great & amazing
          audience. */}
        </div>

        <div className='notice d-flex bg-light-warning rounded border-warning border border-dashed p-6'>
          <KTSVG
            path='/media/icons/duotune/general/gen044.svg'
            className='svg-icon-2tx svg-icon-warning me-4'
          />
          <div className='d-flex flex-stack flex-grow-1'>
            <div className='fw-bold'>
            <div className='d-flex flex-column mb-7 fv-row'>
        <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
          <span className='required'>파일경로</span>
          <i
            className='fas fa-exclamation-circle ms-2 fs-7'
            data-bs-toggle='tooltip'
            title="Specify a card holder's name"
          ></i>
        </label>

        <Field
          type='text'
          className='form-control form-control-solid'
          placeholder=''
          name='nameOnCard'
        />
      </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {Step5}
