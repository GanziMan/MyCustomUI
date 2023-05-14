import { FC} from 'react'
import { Field } from 'formik'
const FlowFileConfirm: FC = () => {
    return (
        <div className='w-100'>
            <div className='pb-10 pb-lg-15'>
                <h2 className='fw-bolder text-dark'>Dag 설정</h2>
            </div>
            <div className='row mb-12'>
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>Dag_Name</span>
                    </label>

                    <div className='position-relative'>
                        <Field
                           disabled={true}
                           className='form-control form-control-solid'
                            placeholder='Dag_Name'
                            name='dag_name'
                           
                        />
                    </div>
                </div>
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>수집주기</span>
                    </label>

                    <div className='position-relative'>
                        <Field
                        disabled={true}
                            type='text'
                            className='form-control form-control-solid'
                            placeholder=''
                            name='schedule_interval'
                        
                        />
                    </div>
                </div>
            </div>
            <div className='row mb-12'>
               
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>파일 타입</span>
                    </label>

                    <div className='position-relative'>
                        <Field
                        disabled={true}
                            name='file_type_list'
                            className='form-control form-control-solid'
                        >
                        </Field>
                    </div>
                </div>
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>file_name</span>
                    </label>

                    <div className='position-relative'>
                    <Field
                                disabled={true}
                                className='form-control form-control-solid'
                                placeholder='파일 타입을 선택해주세요.'
                                name='file_name'
                              
                            />
                    </div>
                </div>

            </div>
            <div className='row mb-12'>
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>파일 구분자</span>
                    </label>
                    <div className='position-relative'>
                        <Field
                            disabled={true}
                            name='delimiter'
                            className='form-control form-control-solid'
                        >
                        </Field>
                    </div>
                </div>

                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>데이터 타입</span>
                    </label>
                    <div className='position-relative'>
                        <Field
                        disabled={true}
                            name='data_type'
                            className='form-control form-control-solid'
                        >
                        </Field>
                    </div>
                </div>
            </div>
            <div className='row mb-12'>
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>privacy_on_off</span>
                    </label>
                    <div className='position-relative'>
                        <Field
                        disabled={true}
                            name='privacy_on_off'
                            className='form-control form-control-solid'
                        >
                        </Field>
                    </div>
                </div>

                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>관리자</span>
                    </label>

                    <div className='position-relative'>
                        <Field
                        disabled={true}
                            type='text'
                            className='form-control form-control-solid'
                            placeholder=''
                            name='owner'
                        />
                    </div>
                </div>

            </div>
          
        </div>
    )
}

export { FlowFileConfirm }
