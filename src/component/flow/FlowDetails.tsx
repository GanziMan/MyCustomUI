/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {KTSVG} from '../../_metronic/helpers'
import {customAxios, customAxiosAirflow} from '../../apis/utils'
import {RootState} from '../../redux/stores'
import {FlowDetailTable} from './FlowDetailTable'

export function FlowDetails() {
  const ID = useSelector((state: RootState) => state.flowwidgetreducer.id)
  const sensor_id = useSelector((state: RootState) => state.flowwidgetreducer.sensor_id)
  const [trans_type, setTransType] = useState()
  const [saveMode, setSaveMode] = useState()
  const [dataType, setDataType] = useState()
  const [localPath, setLocalPath] = useState()
  const [targetLocation, setTargetLocation] = useState()
  const [dbms_type, setDbms_type] = useState()
  const [engine_code_file_name, setEngine_code_file_name] = useState()
  const [db_read_table_name, setDb_read_table_name] = useState()
  const [partition_size, setPartition_size] = useState()
  const [id, setId] = useState()
  const [dagName, setDagName] = useState()
  const [owner, setOwner] = useState()
  const [scheduleInterval, setScheduleInterval] = useState()
  const [scheduleIntervalView, setScheduleIntervalView] = useState()
  const [sensorID, setSensorID] = useState<string>('')
  const [is_paused, setIs_paused] = useState<any>()

  useEffect(() => {
    customAxios
      .get(`flow/find-by-dag-name?id=${ID}`)
      .then(function (response) {
        setId(response.data.data.id)
        setDagName(response.data.data.dag_name)
        setOwner(response.data.data.owner)
        setScheduleInterval(response.data.data.schedule_interval)
        setScheduleIntervalView(response.data.data.schedule_interval_view)
        setSensorID(response.data.data.sensor_id)
        setTransType(response.data.data.source_id.trans_type)
        setSaveMode(response.data.data.target_id.save_mode)
        setDataType(response.data.data.data_type)
        setLocalPath(response.data.data.source_id.local_path)
        setTargetLocation(response.data.data.target_id.target_location)
        setDbms_type(response.data.data.source_id.dbms_type)
        setEngine_code_file_name(response.data.data.engine_code_file_name)
        setDb_read_table_name(response.data.data.db_read_table_name)
        setPartition_size(response.data.data.partition_size)
      })
      .catch(function (error) {
        console.error(error)
      })
    customAxiosAirflow.get(`get?dags=dags/${sensor_id}`).then(function (response) {
      setIs_paused(response.data.data.body.is_paused)
    })
  }, [])

  const dags = `dags/${sensorID}/dagRuns`
  const patchdags: string = `dags/${sensorID}`
  const DagRunFile = async () => {
    await customAxiosAirflow.patch(`patch`, {dags: patchdags, is_paused: false})
    await customAxiosAirflow.post(`post`, {dags}).then(function (response) {
      toast.info(
        `${sensorID} DagRun 실행 하였습니다. 잠시 후 변동이 없다면 다시한번 실행하여주세요. \n잠시만 기다려주세요.`
      )
      navigate('/dashboard')
    })
  }
  const DagRunDB = () => {
    customAxiosAirflow.post(`post`, {dags})
  }
  const navigate = useNavigate()
  const Delete = () => {
    if (window.confirm('정말 삭제합니까?')) {
      customAxiosAirflow
        .delete(`delete?dags=dags/${sensorID}`)
        .then(function (response) {
          customAxios.delete(`flow/delete?id=${id}`).then(function (response) {
            navigate('/dashboard')
            toast.info('Dag 삭제 완료')
          })
        })
        .catch(function (error) {
          console.error(error)
        })
    } else {
      alert('취소합니다.')
    }
  }
  const ActiveTrue = () => {
    customAxiosAirflow
      .patch('patch', {dags: `dags/${sensorID}`, is_paused: true})
      .then(function (response) {
        toast.info(`${sensorID} 활성화 OFF`)
      })
  }

  return (
    <>
      <div className='card mb-5 mb-xl-10' id='kt_profile_details_view'>
        <div className='card-header cursor-pointer'>
          <div className='card-title m-0'>
            <h3 className='fw-bolder m-0'>{dagName} Dag</h3>
          </div>
          <div className='card-toolbar'>
            {/* begin::Menu */}
            <button
              type='button'
              className='btn btn-sm btn-icon btn-color-success btn-active-light-success'
              data-kt-menu-trigger='click'
              data-kt-menu-placement='bottom-end'
              data-kt-menu-flip='top-end'
            >
              <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
            </button>

            <div
              className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-success fw-semibold w-200px'
              data-kt-menu='true'
            >
              <div className='menu-item px-3'>
                <div className='menu-content fs-6 text-dark fw-bold px-3 py-4'>Quick Menu</div>
              </div>
              <div className='separator mb-3 opacity-75'></div>
              <div className='menu-item px-3'>
                {dbms_type === null ? (
                  <a href='#' className='menu-link px-3' onClick={DagRunFile}>
                    FilE Dag Run
                  </a>
                ) : (
                  <a href='#' className='menu-link px-3' onClick={DagRunDB}>
                    DB Dag Run
                  </a>
                )}
              </div>

              <div className='menu-item px-3'>
                <a href='#' className='menu-link px-3' onClick={ActiveTrue}>
                  Dag Run OFF
                </a>
              </div>
              {/* end::Menu item */}
              {/* begin::Menu item */}
              {/* <div className='menu-item px-3'>
                                <a href='#' className='menu-link px-3'>
                                    Update
                                </a>
                            </div> */}

              <div className='menu-item px-3'>
                <a href='#' className='menu-link px-3' onClick={Delete}>
                  Delete
                </a>
              </div>

              <div className='separator mt-3 opacity-75'></div>
            </div>
          </div>
        </div>

        <div className='card-body p-9'>
          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>
              Dag_Name
              <i
                className='fas fa-exclamation-circle ms-1 fs-7'
                data-bs-toggle='tooltip'
                title='Country of origination'
              ></i>
            </label>

            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{dagName}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>관리자</label>

            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>{owner}</span>
            </div>
          </div>

          <div className='row mb-10'>
            <label className='col-lg-4 fw-bold text-muted'>수집주기</label>

            <div className='col-lg-8'>
              <span className='fw-bold fs-6'>{scheduleIntervalView}</span>
            </div>
          </div>
          <div className='row mb-10'>
            <label className='col-lg-4 fw-bold text-muted'>수집주기(크론식)</label>
            <div className='col-lg-8'>
              <span className='fw-bold fs-6'>{scheduleInterval}</span>
            </div>
          </div>
          <div className='row mb-10'>
            <label className='col-lg-4 fw-bold text-muted'>파일 이름</label>

            <div className='col-lg-8'>
              <span className='fw-bold fs-6'>{sensorID}</span>
            </div>
          </div>
          {dataType !== null ? (
            <div className='row mb-10'>
              <label className='col-lg-4 fw-bold text-muted'>데이터 타입</label>

              <div className='col-lg-8'>
                {dataType === 'structed' ? (
                  <span className='fw-bold fs-6'>정형 데이터</span>
                ) : (
                  <span className='fw-bold fs-6'>비정형 데이터</span>
                )}
              </div>
            </div>
          ) : (
            <></>
          )}
          {db_read_table_name !== null ? (
            <div className='row mb-10'>
              <label className='col-lg-4 fw-bold text-muted'>테이블 이름</label>

              <div className='col-lg-8'>
                <span className='fw-bold fs-6'>{db_read_table_name}</span>
              </div>
            </div>
          ) : (
            <></>
          )}
          {engine_code_file_name !== null ? (
            <div className='row mb-10'>
              <label className='col-lg-4 fw-bold text-muted'>파일 이름</label>

              <div className='col-lg-8'>
                <span className='fw-bold fs-6'>{engine_code_file_name}</span>
              </div>
            </div>
          ) : (
            <></>
          )}
          {partition_size !== null ? (
            <div className='row mb-10'>
              <label className='col-lg-4 fw-bold text-muted'>파티션 사이즈</label>

              <div className='col-lg-8'>
                <span className='fw-bold fs-6'>{partition_size}</span>
              </div>
            </div>
          ) : (
            <></>
          )}
          {trans_type !== null ? (
            <div className='row mb-10'>
              <label className='col-lg-4 fw-bold text-muted'>전송 방식</label>

              <div className='col-lg-8'>
                <span className='fw-bold fs-6'>{trans_type}</span>
              </div>
            </div>
          ) : (
            <></>
          )}
          {saveMode !== null ? (
            <div className='row mb-10'>
              <label className='col-lg-4 fw-bold text-muted'>저장 방식</label>

              <div className='col-lg-8'>
                <span className='fw-bold fs-6'>{saveMode}</span>
              </div>
            </div>
          ) : (
            <></>
          )}
          {localPath !== null ? (
            <div className='row mb-10'>
              <label className='col-lg-4 fw-bold text-muted'>전송 위치</label>

              <div className='col-lg-8'>
                <span className='fw-bold fs-6'>{localPath}</span>
              </div>
            </div>
          ) : (
            <></>
          )}
          {targetLocation !== null ? (
            <div className='row mb-10'>
              <label className='col-lg-4 fw-bold text-muted'>적재 위치</label>

              <div className='col-lg-8'>
                <span className='fw-bold fs-6'>{targetLocation}</span>
              </div>
            </div>
          ) : (
            <></>
          )}

          <div className='row mb-10'>
            <label className='col-lg-4 fw-bold text-muted'>활성화</label>

            {is_paused === false ? (
              <>
                {' '}
                <div className='col-lg-8'>
                  <span className='fw-bold fs-6'>
                    {' '}
                    <a className='btn btn-sm btn-light-success fw-bolder ms-2 fs-8 py-1 px-3'>ON</a>
                  </span>
                </div>
              </>
            ) : (
              <>
                {' '}
                <div className='col-lg-8'>
                  <span className='fw-bold fs-6'>
                    {' '}
                    <a
                      href='#'
                      className='btn btn-sm btn-light-secondary fw-bolder ms-2 fs-8 py-1 px-3'
                    >
                      OFF
                    </a>
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className='row g-5 g-xl-8'>
        <FlowDetailTable sensor_id={sensor_id} className='mb-5 mb-xl-8' />
      </div>
    </>
  )
}
