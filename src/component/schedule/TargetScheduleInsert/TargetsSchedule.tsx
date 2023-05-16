import React, {useEffect, useState} from 'react'
import {customAxios} from '../../../apis/utils'

type Props = {
  className: string
}
interface Place {
  id: string
  target_name: string
  target_location: string
  save_mode: string
}
interface PlacesProps {
  placeList: Place[]
}
const TargetsSchedule: React.FC<Props> = ({className}, {placeList}: PlacesProps) => {
  const [data, setData] = useState([])
  useEffect(() => {
    customAxios.get(`target/findAll`).then(function (response) {
      setData(response.data.data)
    })
  }, [])
  placeList = data
  return (
    <div className={`card ${className}`}>
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Target</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>Target Schedule</span>
        </h3>
      </div>
      <div className='card-body py-3'>
        <div className='table-responsive'>
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
                <th className='min-w-140px'>ID</th>
                <th className='min-w-140px'>적재위치</th>
                <th className='min-w-120px'>타겟이름</th>
                <th className='min-w-120px'>저장방식</th>
              </tr>
            </thead>
            <tbody>
              {placeList &&
                placeList.map((place) => (
                  <tr key={place.id}>
                    <td>
                      <div className='form-check form-check-sm form-check-custom form-check-solid'>
                        <input
                          className='form-check-input widget-13-check'
                          type='checkbox'
                          value='1'
                        />
                      </div>
                    </td>
                    <td className='text-dark fw-bold text-hover-success fs-6'>{place.id}</td>
                    <td>
                      <a
                        href='#!'
                        className='text-dark fw-bold text-hover-success d-block mb-1 fs-6'
                      >
                        {place.target_location}
                      </a>
                    </td>
                    <td>
                      <a
                        href='#!'
                        className='text-dark fw-bold text-hover-success d-block mb-1 fs-6'
                      >
                        {place.target_name}
                      </a>
                    </td>
                    <td>
                      <a
                        href='#!'
                        className='text-dark fw-bold text-hover-success d-block mb-1 fs-6'
                      >
                        {place.save_mode}
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

export {TargetsSchedule}
