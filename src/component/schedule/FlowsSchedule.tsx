import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {useLocation} from 'react-router-dom'
import {customAxios} from '../../apis/utils'

type Props = {
  className: string
}
interface Place {
  dag_name: string
  owner: string

  sensor_id: string
  schedule_interval: string
}
interface PlacesProps {
  placeList: Place[]
}

const FlowsSchedule2: React.FC<Props> = ({className}, {placeList}: PlacesProps) => {
  const dispatch = useDispatch()
  const state: any = useLocation().state
  const [data, setData] = useState([])
  useEffect(() => {
    customAxios.get(`flow/findAll`).then(function (response) {
      setData(response.data.data)
    })
  }, [])
  placeList = data

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Flow Schedule</span>
          {/* <span className='text-muted mt-1 fw-semibold fs-7'>Source Schedule</span> */}
        </h3>
        <div className='card-toolbar'></div>
      </div>
      <div className='card-body py-3'>
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
            <thead>
              <tr className='fw-bold text-muted'>
                <th className='w-25px'>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='1'
                      data-kt-check='true'
                      data-kt-check-target='.widget-13-check'
                    />
                  </div>
                </th>
                <th className='min-w-140px'>댁 이름</th>
                <th className='min-w-140px'>관리자</th>
                <th className='min-w-120px'>수집주기</th>
                <th className='min-w-120px'>sensor_id</th>
              </tr>
            </thead>
            <tbody>
              {placeList &&
                placeList.map((place, i: number) => (
                  <tr key={i}>
                    <td>
                      <div className='form-check form-check-sm form-check-custom form-check-solid'>
                        <input
                          className='form-check-input widget-13-check'
                          type='checkbox'
                          value='1'
                        />
                      </div>
                    </td>
                    <td className='text-dark fw-bold text-hover-primary fs-6'>{place.dag_name}</td>
                    <td>
                      <a
                        href='#'
                        className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'
                      >
                        {place.owner}
                      </a>
                    </td>
                    <td>
                      <a
                        href='#'
                        className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'
                      >
                        {place.schedule_interval}
                      </a>
                    </td>
                    <td>
                      <a
                        href='#'
                        className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'
                      >
                        {place.sensor_id}
                      </a>
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

export {FlowsSchedule2}
