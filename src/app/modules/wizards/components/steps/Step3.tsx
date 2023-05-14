import React, { FC } from 'react'
import { Field, ErrorMessage, useFormikContext } from 'formik'

const Step3: FC = () => {
  const value = useFormikContext();

  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark'>파일 수집</h2>
      </div>
      <div className='row mb-12'>
        <div className='col-md-6 fv-row'>
          <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
            <span className='required'>Local Path</span>
          </label>

          <div className='position-relative'>
            <Field
              className='form-control form-control-solid'
              placeholder=''
              name='local_path'
              disabled={true}
            />
          </div>
        </div>

        <div className='col-md-6 fv-row'>
          <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
            <span className='required'>소스이름</span>
          </label>

          <div className='position-relative'>
            <Field
              className='form-control form-control-solid'
              placeholder=''
              name='source_name'
              disabled={true}
            />
          </div>
        </div>
        {/* <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>프로세스</span>
                    </label>

                    <div className='position-relative'>
                        <Field
                            type='text'
                            className='form-control form-control-solid'
                            placeholder=''
                            name='sensor_id'
                        />
                    </div>
                </div> */}
      </div>
      <div className='row mb-12'>
        <div className='col-md-6 fv-row'>
          <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
            <span className='required'>전송 방식</span>
          </label>
          <div className='position-relative'>
            <Field
              disabled={true}
              className='form-control form-control-solid'
              name='trans_type'
            />
          </div>
        </div>

        {/* <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>클릭</span>
                    </label>

                    <div className='position-relative'>
                    <SourceModal ></SourceModal>
                    </div>
                </div> */}
      </div>
      {/* <div className='row mb-12'>
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>파일 구분자</span>
                    </label>

                    <div className='position-relative'>
      
                        <Field
                            as='select'
                            name='delimiter'
                            className='form-select form-select-lg form-select-solid'
                        >ㄴ
                            <option value=','>,</option>
                            <option value='\t'>\t</option>
                            <option value='|'>|</option>
                        </Field>
                    </div>
                </div>
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>file_name</span>
                    </label>

                    <div className='position-relative'>
                        <Field
                            type='text'
                            className='form-control form-control-solid'
                            placeholder=''
                            name='file_name'
                        />
                    </div>
                </div>
               
            </div> */}
      {/* <div className='row mb-12'>
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>Sftp 접속 정보 아이디 </span>
                    </label>

                    <div className='position-relative'>
                        <Field
                            type='text'
                            className='form-control form-control-solid'
                            placeholder=''
                            name='target_conn_id'
                        />
                    </div>
                </div> 
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>파일 위치</span>
                    </label>

                    <div className='position-relative'>
                        <Field
                            type='text'
                            className='form-control form-control-solid'
                            placeholder=''
                            name='target_location'
                        />
                    </div>
                </div>
            </div> */}
      {/* <div className='row mb-12'>
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>privacy_on_off</span>
                    </label>

                    <div className='position-relative'>
                        <Field
                            as='select'
                            name='privacy_on_off'
                            className='form-select form-select-lg form-select-solid'
                        >
                            <option value='ON'>ON</option>
                            <option value='OFF'>OFF</option>
                        </Field>
                    </div>
                </div>
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>trans_type</span>
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
            </div> */}

      {/* <div className='row mb-12'>

               
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>파일 확장자</span>
                    </label>

                    <div className='position-relative'>
                        <Field
                            as='select'
                            name='file_type_list'
                            className='form-select form-select-lg form-select-solid'
                        >
                           
                            <option value='csv'>csv</option>
                            <option value='tsv'>tsv</option>
                            <option value='psv'>psv</option>
                        </Field>
                    </div>
                </div>
            </div> */}

      {/* <div className='d-flex flex-stack'>
                <div className='me-5'>
                    <label className='fs-6 fw-bold form-label'>Save Card for further billing?</label>
                    <div className='fs-7 fw-bold text-gray-400'>
                        If you need more info, please check budget planning
                    </div>
                </div>

                <label className='form-check form-switch form-check-custom form-check-solid'>
                    <Field className='form-check-input' type='checkbox' value='1' checked={true} />
                    <span className='form-check-label fw-bold text-gray-400'>Save Card</span>
                </label>
            </div> */}
    </div>
  )
}

export { Step3 }
