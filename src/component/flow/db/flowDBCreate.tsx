import {Field} from 'formik'
import {FC, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {customAxios} from '../../../apis/utils'
import {sourcenameCheck_REQ} from '../../../redux/actions/creatorActions'
import {RootState} from '../../../redux/stores'
import {SourceModal} from '../../source/Modal'

const FlowDBCreate: FC = () => {
  const dispatch = useDispatch()
  const CronValue = useSelector((state: RootState) => state.cronreducer.cron)

  const [sourceName, setSourceName] = useState<string>()
  const [dagCheckMessage, setDagCheckMessage] = useState<string>('')

  const sourceNameChange = (e: any) => {
    setSourceName(e.target.value)
  }

  useEffect(() => {
    customAxios.get(`duplicateCheck?type=dag_name&value=${sourceName}`).then(function (response) {
      setDagCheckMessage(response.data.message)
      if (response.data.message === '가능') {
        dispatch(sourcenameCheck_REQ(sourceName))
      } else {
        dispatch(sourcenameCheck_REQ(response.data.message))
      }
    })
  })

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
            <input
              type='text'
              className='form-control form-control-solid'
              placeholder='Dag_Name'
              name='dag_name'
              onChange={sourceNameChange}
            />
          </div>
        </div>
        <div className='col-md-6 fv-row'>
          <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
            <span className='required'>중복 체크</span>
          </label>
          <div className='form-control form-control-solid' placeholder=''>
            {dagCheckMessage === '가능' ? (
              <span className='text-success'>{dagCheckMessage} Dag 이름 입니다.</span>
            ) : (
              <span className='text-danger'>{dagCheckMessage} Dag 이름 입니다.</span>
            )}
          </div>
        </div>
      </div>
      <div className='row mb-12'>
        <div className='col-md-6 fv-row'>
          <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
            <span className='required'>수집주기</span>
          </label>

          <div className='position-relative'>
            <Field
              type='text'
              className='form-control form-control-solid'
              placeholder=''
              name='schedule_interval'
              value={CronValue}
            />
          </div>
        </div>
        <div className='col-md-6 fv-row'>
          <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
            <span className='required'>클릭</span>
          </label>

          <div className='position-relative'>
            <SourceModal></SourceModal>
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
              type='text'
              className='form-control form-control-solid'
              placeholder=''
              name='owner'
            />
          </div>
        </div>
        <div className='col-md-6 fv-row'>
          <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
            <span className='required'>db_read_table_name</span>
          </label>

          <div className='position-relative'>
            <Field
              type='text'
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
              type='text'
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
              type='text'
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
              type='text'
              className='form-control form-control-solid'
              placeholder='10000'
              name='partition_size'
            />
          </div>
        </div>
      </div>

      {/* <div className='row mb-12'>
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>수집주기</span>
                    </label>

                    <div className='position-relative'>
                    <Field
                               type='text'
                               className='form-control form-control-solid'
                               name='schedule_interval'
                               value={CronValue}
                        />
                    </div>
                </div>
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>클릭</span>
                    </label>

                    <div className='position-relative'>
                    <SourceModal ></SourceModal>
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
                        <span className='required'>저장 타입</span>
                    </label>

                    <div className='position-relative'>

                          <Field
                            as='select'
                            name='save_mode'
                            className='form-select form-select-lg form-select-solid'
                        >
                            <option value=''>선택</option>
                            <option value='DB'>DB</option>
                            <option value='FILE'>FILE</option>
                        </Field>
                    </div>
                </div>
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>데이터 타입</span>
                    </label>

                    <div className='position-relative'>
                      
                         <Field
                            as='select'
                            name='data_type'
                            className='form-select form-select-lg form-select-solid'
                        >
                            <option value='structed'>정형</option>
                            <option value='unstructed'>비정형</option>
                        </Field>
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

export {FlowDBCreate}
