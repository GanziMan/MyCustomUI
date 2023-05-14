import { FC } from 'react'
import { Field } from 'formik'

const TargetCreateConfirm: FC = () => {
    return (
        <div className='w-100'>
            <div className='pb-10 pb-lg-15'>
                <h2 className='fw-bolder text-dark'>입력 결과</h2>
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
                            disabled={true}
                        />
                    </div>
                </div>
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>저장 위치</span>
                    </label>
                    <div className='position-relative'>
                        <Field
                            type='text'
                            className='form-control form-control-solid'
                            placeholder='ex) /Users'
                            name='target_location'
                            disabled={true}
                        />
                    </div>
                </div>
            </div>
            <div className='row mb-12'>
             

                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>저장 방식</span>
                    </label>
                    <div className='position-relative'>
                        <Field
                            type='text'
                            className='form-control form-control-solid'
                            placeholder=''
                            name='save_mode'
                            disabled={true}
                        />
                    </div>
                </div>
            </div>
         
        </div>
    )
}

export { TargetCreateConfirm }
