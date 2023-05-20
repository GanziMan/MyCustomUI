/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {Loader} from '../../Loader'
import {customAxiosAirflow} from '../../apis/utils'
import {tast_sensorID_REQ} from '../../redux/actions/creatorActions'
type Props = {
  className: string
  sensor_id: any
}
interface Flow {
  dag_run_id: string
  run_type: string
  data_interval_start: string
  data_interval_end: string
  state: string
  sensor_id: string
}
interface FlowProps {
  flowList: Flow[]
}
const FlowDetailTable: React.FC<Props> = ({className, sensor_id}, {flowList}: FlowProps) => {
  const [data, setData] = useState([])
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState<boolean>(null)
  
  useEffect(() => {
    const Runs = async () => {
      try {
        setLoading(true)
        await customAxiosAirflow
          .get(`get?dags=dags/${sensor_id}/dagRuns`)
          .then(function (response) {
            setData(response.data.data.body.dag_runs)
          })
          .catch(function (error) {
            console.error(error)
          })
        dispatch(tast_sensorID_REQ(sensor_id))
      } catch (e) {}
      setLoading(false)
    }
    Runs()
  }, [])
  const DagRunDelete = (params: string, e: any) => {
    customAxiosAirflow
      .delete(`delete?dags=dags/${sensor_id}/dagRuns/${params.replace('+', '%2B')}`)
      .then(function (response) {})
      .then(function (error) {
        console.log(error)
      })
    e.preventDefault()
    window.location.reload()
    toast.info('Run 삭제완료')
  }
  flowList = data
  if (loading)
    return <Loader type='spin' color='RGB 값' message={'DAG 정보를 불러오는 중 입니다.'} />
  else
    return (
      <div className={`card ${className}`}>
        {/* begin::Header */}
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-bold fs-3 mb-1'>Runs</span>
            <span className='text-muted mt-1 fw-semibold fs-7'>Runs List</span>
          </h3>
          <div className='card-toolbar'>
            <a className='btn btn-sm btn-light-success'>Run : {flowList.length}</a>
          </div>
        </div>
        {/* end::Header */}
        {/* begin::Body */}
        <div className='card-body py-3'>
          {/* begin::Table container */}
          <div className='table-responsive'>
            {/* begin::Table */}
            <table className='table align-middle gs-0 gy-4'>
              {/* begin::Table head */}
              <thead>
                <tr className='fw-bold text-muted bg-light'>
                  <th className='ps-4 min-w-325px rounded-start'>Dag_run_id</th>
                  <th className='min-w-125px'>Run_type</th>
                  <th className='min-w-125px'>Data_Interval_Start</th>
                  <th className='min-w-200px'>Data_Interval_End</th>
                  <th className='min-w-150px'>State</th>
                  <th className='min-w-200px text-end rounded-end'></th>
                </tr>
              </thead>
              <tbody>
                {flowList &&
                  flowList.map((flow) => (
                    <tr key={flow.dag_run_id}>
                      <td>
                        <div
                          className='d-flex align-items-center'
                          onClick={() =>
                            navigate('/tasklist', {
                              state: {dag_run_id: flow.dag_run_id, sensor_id: sensor_id},
                            })
                          }
                        >
                          <div className='d-flex justify-content-start flex-column'>
                            <a href='#' className='text-dark fw-bold text-hover-success mb-1 fs-6'>
                              {flow.dag_run_id}
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>
                        <a
                          href='#'
                          className='text-dark fw-bold text-hover-success d-block mb-1 fs-6'
                        >
                          {flow.run_type}
                        </a>
                      </td>
                      <td>
                        <a
                          href='#'
                          className='text-dark fw-bold text-hover-success d-block mb-1 fs-6'
                        >
                          {flow.data_interval_start}
                        </a>
                        {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Rejected</span> */}
                      </td>
                      <td>
                        <a
                          href='#'
                          className='text-dark fw-bold text-hover-success d-block mb-1 fs-6'
                        >
                          {flow.data_interval_end}
                        </a>
                        {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Insurance</span> */}
                      </td>
                      <td>
                        {flow.state === 'success' ? (
                          <span className='badge badge-light-success fs-7 fw-semibold'>
                            {flow.state}
                          </span>
                        ) : flow.state === 'failed' ? (
                          <>
                            <span className='badge badge-light-danger fs-7 fw-semibold'>
                              {flow.state}
                            </span>
                          </>
                        ) : (
                          <span className='badge badge-light-warning fs-7 fw-semibold'>
                            {flow.state}
                          </span>
                        )}
                      </td>
                      <td className='text-end d-flex align-items-center'>
                        <span
                          className='badge badge-light-dark fs-7 fw-semibold'
                          onClick={(e) => {
                            DagRunDelete(flow.dag_run_id, e)
                          }}
                        >
                          Delete
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
}

export {FlowDetailTable}
