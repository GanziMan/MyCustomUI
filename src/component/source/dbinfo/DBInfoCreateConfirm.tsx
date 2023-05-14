import { FC } from 'react'
import { Field } from 'formik'

const DBInfoCreateConfirm: FC = () => {
    return (
        <div className='w-100'>
            <div className='pb-10 pb-lg-15'>
                <h2 className='fw-bolder text-dark'>입력정보 확인</h2>
            </div>
            <div className='row mb-12'>
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>Connection_ID</span>
                    </label>

                    <div className='position-relative'>
                        <Field
                            type='text'
                            className='form-control form-control-solid'
                            placeholder='DB_CONNET_ID'
                            name='connection_id'
                        />
                    </div>
                </div>
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>Connection_NANE</span>
                    </label>

                    <div className='position-relative'>
                        <Field
                            type='text'
                            className='form-control form-control-solid'
                            placeholder=''
                            name='connection_name'
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
                        />
                    </div>
                </div>
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>DB 아이디</span>
                    </label>

                    <div className='position-relative'>
                        <Field
                            type='text'
                            className='form-control form-control-solid'
                            placeholder=''
                            name='login'
                        />
                    </div>
                </div>
            </div>
            <div className='row mb-12'>
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>schema</span>
                    </label>

                    <div className='position-relative'>
                        <Field
                            type='text'
                            className='form-control form-control-solid'
                            placeholder=''
                            name='schema'
                        />
                    </div>
                </div>
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>DB 비밀번호</span>
                    </label>

                    <div className='position-relative'>
                        <Field
                            type='text'
                            className='form-control form-control-solid'
                            placeholder=''
                            name='password'
                        />
                    </div>
                </div>
            </div>
            <div className='row mb-12'>
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
                        />
                    </div>
                </div>

                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>Extra</span>
                    </label>

                    <div className='position-relative'>
                        <Field
                            type='text'
                            className='form-control form-control-solid'
                            placeholder='Extra'
                            name='extra'
                        />
                    </div>
                </div>
            </div>

            <div className='row mb-12'>
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>DB 타입</span>
                    </label>

                    <div className='position-relative'>
                        <Field
                            as='select'
                            name='connection_type'
                            className='form-select form-select-lg form-select-solid'
                        >
                            <option value='1'>Oracle</option>
                            <option value='2'>Mysql</option>
                            <option value='3'>Postgres</option>
                        </Field>
                    </div>
                </div>
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>Description</span>
                    </label>

                    <div className='position-relative'>
                        <Field
                            type='text'
                            className='form-control form-control-solid'
                            name='description'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { DBInfoCreateConfirm }
