import {FC, useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {KTSVG} from '../../_metronic/helpers'
import {customAxios} from '../../apis/utils'
import {
  dagcreateSAVEMODE_REQ,
  dagcreateTARGETCONNID_REQ,
  dagcreateTargetLocation_REQ,
  targetID_REQ,
} from '../../redux/actions/creatorActions'

const FlowtargetCon: FC = () => {
  const dispatch = useDispatch()
  const [dbselect, setDbSelect] = useState<string[]>([])
  const [dbConnection, setDbConnection] = useState<string>('')
  const dbConnectionChagnge = (e: any) => {
    setDbConnection(e.target.value)
  }
  useEffect(() => {
    customAxios
      .get(`target/findAll`)
      .then(function (response) {
        setDbSelect(response.data.data)
        // dispatch(connectionDB_REQ(dbConnection)); // DB커넥션조회에서 값 디스패치
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [])

  return (
    <div className='w-100'>
      <div className='pb-8 pb-lg-10'>
        <h2 className='fw-bolder text-dark'>Source커넥션</h2>
        <div className='text-gray-400 fw-bold fs-6'></div>
      </div>
      <div className='mb-0'>
        <div className='fs-6 text-gray-600 mb-5'></div>
        <div>
          <div className={`card ${'card-xl-stretch mb-xl-8'}`}>
            {/* begin::Body */}
            <div className='card-body p-0'>
              {/* begin::Header */}
              <div className={`px-9 pt-7 card-rounded h-275px w-100 bg-Light`}>
                {/* begin::Heading */}
                <div className='d-flex flex-stack'>
                  <h3 className='m-0 text-black fw-bold fs-3'>Target 조회</h3>
                  <div className='ms-1'>
                    {/* begin::Menu */}
                    <button
                      type='button'
                      className={`btn btn-sm btn-icon btn-color-white btn-active-white btn-active-color-dark border-0 me-n3`}
                      data-kt-menu-trigger='click'
                      data-kt-menu-placement='bottom-end'
                      data-kt-menu-flip='top-end'
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen024.svg'
                        className='svg-icon-2'
                      />
                    </button>
                  </div>
                </div>
                <div className='d-flex text-center flex-column text-white pt-8'>
                  <div className='row mb-12'>
                    <div className='col-md-6 fv-row'>
                      <div className='position-relative'>
                        <select
                          className='form-select form-select-lg form-select-solid'
                          placeholder='디비커넥션'
                          onChange={dbConnectionChagnge}
                        >
                          <option value=''>타겟 선택 해주세요.</option>
                          {dbselect &&
                            dbselect?.map((flow: any) => {
                              return <option key={flow.id}>{flow.target_name}</option>
                            })}
                        </select>
                      </div>
                    </div>
                    <div className='col-md-6 fv-row'>
                      <div className='position-relative'>
                        <input
                          type='button'
                          className='btn btn-lg btn-light-success'
                          name='conButton'
                          value={'커넥션 조회'}
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='shadow-xs card-rounded mx-9 mb-9 px-6 py-9 position-relative z-index-1 bg-body'
                style={{marginTop: '-100px'}}
              >
                {dbselect.length >= 1 ? (
                  <>
                    {' '}
                    <div className='d-flex align-items-center mb-6'></div>
                    <div className='d-flex align-items-center mb-6'>
                      <div className='symbol symbol-45px w-40px me-5'>
                        <span className='symbol-label bg-lighten'>
                          <KTSVG
                            path='/media/icons/duotune/maps/map004.svg'
                            className='svg-icon-1'
                          />
                        </span>
                      </div>
                      <div className='d-flex align-items-center flex-wrap w-100'>
                        <div className='mb-1 pe-3 flex-grow-1'>
                          <a href='#' className='fs-5 text-gray-800 text-hover-success fw-bold'>
                            적재위치
                          </a>
                        </div>
                        <div className='d-flex align-items-center'>
                          <div className='fw-bold fs-5 text-gray-800 pe-1'>
                            {dbselect &&
                              dbselect?.map((flow: any) => {
                                {
                                  if (flow.target_name === dbConnection) {
                                    dispatch(targetID_REQ(flow.id))
                                    dispatch(dagcreateSAVEMODE_REQ(flow.save_mode))
                                    dispatch(
                                      dagcreateTARGETCONNID_REQ(flow.target_conn_id.connection_id)
                                    )
                                    dispatch(dagcreateTargetLocation_REQ(flow.target_location))
                                    return <div key={flow.id}>{flow.target_location}</div>
                                  }
                                }
                              })}
                          </div>
                          <KTSVG
                            path='/media/icons/duotune/arrows/arr043.svg'
                            className='svg-icon-5 svg-icon-success ms-1'
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ) : dbselect.length === 0 ? (
                  <>
                    {' '}
                    <a href='#' className='fs-5 text-gray-800 text-hover-danger fw-bold'>
                      <p className='text-dark'> 커넥션을 조회 해주세요.</p>
                    </a>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export {FlowtargetCon}
