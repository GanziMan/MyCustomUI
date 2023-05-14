import { FC } from 'react'
import { Field } from 'formik'

const DBCreateConfirm: FC = () => {
    return (
        <div className='w-100'>
            <div className='pb-10 pb-lg-15'>
                <h2 className='fw-bolder text-dark'>DB 수집</h2>
            </div>
            <div className='row mb-12'>
                <div className='col-md-12 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>소스명</span>
                    </label>
                    <div className='position-relative'>
                        <Field
                            type='text'
                            className='form-control form-control-solid'
                            placeholder=''
                            name='source_name'
                        />
                    </div>
                </div>
            </div>
            <div className='row mb-12'>
                <div className='col-md-6 fv-row'>
                    <div className='fv-row mb-10'>
                        <label className='form-label required'>데이터베이스관리시스템</label>
                     
                        <Field
                            type='text'
                            className='form-control form-control-solid'
                            placeholder=''
                            name='dbms_type'
                        />

                    </div>
                </div>
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>전송방식</span>
                    </label>

                    <div className='position-relative'>
                        <Field
                            type='text'
                            className='form-control form-control-solid'
                            placeholder=''
                            name='trans_type'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { DBCreateConfirm }
