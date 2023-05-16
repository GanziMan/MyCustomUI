import {FC, useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {KTSVG} from '../../../_metronic/helpers'
import {customAxios} from '../../../apis/utils'
import {
  connectionDB_REQ,
  dagcreateTRANSTYPE_REQ,
  log_FLOW_ID,
  pathValue_REQ,
  sourceID_REQ,
} from '../../../redux/actions/creatorActions'

const FlowsourcefileCon: FC = () => {
  const dispatch = useDispatch()
  const [dbConnection, setDbConnection] = useState<any>('')
  const [dbselect, setDbSelect] = useState<any | string[]>('')

  const dbConnectionChagnge = (e: any) => {
    setDbConnection(e.target.value)
  }
  useEffect(() => {
    customAxios
      .get(`source/findAll`)
      .then(function (response) {
        setDbSelect(response.data.data)
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [])

  useEffect(() => {
    dispatch(connectionDB_REQ(dbConnection)) // DB커넥션조회에서 값 디스패치
  })

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
                  <h3 className='m-0 text-black fw-bold fs-3'>Source 조회</h3>
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
                          <option value=''>소스 선택 해주세요.</option>
                          {dbselect &&
                            dbselect?.map((flow: any) => {
                              if (flow.local_path !== null) {
                                return <option key={flow.source_name}>{flow.source_name}</option>
                              }
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
                            전송 방식
                          </a>
                        </div>
                        <div className='d-flex align-items-center'>
                          <div className='fw-bold fs-5 text-gray-800 pe-1'>
                            {dbselect &&
                              dbselect?.map((flow: any) => {
                                {
                                  if (flow.source_name === dbConnection) {
                                    dispatch(sourceID_REQ(flow.id))
                                    dispatch(dagcreateTRANSTYPE_REQ(flow.trans_type))
                                    dispatch(log_FLOW_ID(flow.id))
                                    return <div key={flow.trans_type}>{flow.trans_type}</div>
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
                            Local_Path
                          </a>
                        </div>
                        <div className='d-flex align-items-center'>
                          <div className='fw-bold fs-5 text-gray-800 pe-1'>
                            {dbselect &&
                              dbselect?.map((flow: any) => {
                                {
                                  if (flow.source_name === dbConnection) {
                                    dispatch(pathValue_REQ(flow.local_path))
                                    dispatch(dagcreateTRANSTYPE_REQ(flow.trans_type))
                                    return <div key={flow.local_path}>{flow.local_path}</div>
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

export {FlowsourcefileCon}
