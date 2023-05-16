/* eslint-disable jsx-a11y/anchor-is-valid */
import {ErrorMessage, Field, FormikProvider, useFormik} from 'formik'
import {FC} from 'react'
import {FaDatabase, FaFile} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

interface test {
  test: string
}
const initialValues: test = {
  test: '',
}
const FlowTranstypeComponent: FC = () => {
  const navigate = useNavigate()
  const FileMethod = () => {
    navigate('/flowfilehorizon')
  }
  const DBMethod = () => {
    navigate('/flowdbhorizon')
  }

  const formik = useFormik<test>({
    initialValues,
    onSubmit: (values) => {
      setTimeout(() => {}, 1000)
    },
  })
  return (
    <FormikProvider value={formik}>
      <div className='card'>
        <div className='card-body'>
          <div className='w-100'>
            <div className='pb-10 pb-lg-15'>
              <h2 className='fw-bolder d-flex align-items-center text-dark'>
                Dag Create
                <i
                  className='fas fa-exclamation-circle ms-2 fs-7'
                  data-bs-toggle='tooltip'
                  title='Billing is issued based on your selected account type'
                ></i>
              </h2>

              <div className='text-gray-400 fw-bold fs-6'>
                댁 생성을 선택해주세요.
                {/* <a href='/dashboard' className='link-success fw-bolder'>
            {' '}
            Help Page
          </a>
          . */}
              </div>
            </div>

            <div className='fv-row'>
              <div className='row'>
                <div className='col-lg-6'>
                  <Field
                    type='button'
                    className='btn-check'
                    name='accountType'
                    value='personal'
                    id='kt_create_account_form_account_type_personal'
                    onClick={FileMethod}
                  />
                  <label
                    className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10'
                    htmlFor='kt_create_account_form_account_type_personal'
                  >
                    <FaFile className='svg-icon-3x me-5' size={35} />

                    <span className='d-block fw-bold text-start'>
                      <span className='text-dark fw-bolder d-block fs-4 mb-2'>DAG FILE</span>
                      <span className='text-gray-400 fw-bold fs-6'>
                        {/* If you need more info, please check it out */}
                      </span>
                    </span>
                  </label>
                </div>
                <div className='col-lg-6'>
                  <Field
                    type='button'
                    className='btn-check'
                    name='accountType'
                    value='corporate'
                    id='kt_create_account_form_account_type_corporate'
                    onClick={DBMethod}
                  />
                  <label
                    className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center'
                    htmlFor='kt_create_account_form_account_type_corporate'
                  >
                    <FaDatabase className='svg-icon-3x me-5' size={35} />

                    <span className='d-block fw-bold text-start'>
                      <span
                        className='text-dark fw-bolder d-block fs-4 mb-2'
                        onClick={() => DBMethod}
                      >
                        DAG DB
                      </span>
                      <span className='text-gray-400 fw-bowwld fs-6'></span>
                    </span>
                  </label>
                </div>
                <div className='text-danger mt-2'>
                  <ErrorMessage name='accountType' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormikProvider>
  )
}

export {FlowTranstypeComponent}
