import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {customAxios} from '../../../apis/utils'

type Props = {
  className: string
}
interface Place {
  source_name: string
  trans_type: string
  local_path: string
  dbms_type: string
}
interface PlacesProps {
  placeList: Place[]
}

const SourceScheduleTable: React.FC<Props> = ({className}, {placeList}: PlacesProps) => {
  const navigate = useNavigate()
  const [data, setData] = useState([])

  useEffect(() => {
    customAxios.get(`source/findAll`).then(function (response) {
      setData(response.data.data)
    })
  }, [])
  placeList = data

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Source</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>Source Schedule</span>
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

                <th className='min-w-140px'>소스</th>
                <th className='min-w-120px'>전송방식</th>
                <th className='min-w-120px'>전송경로</th>
                <th className='min-w-120px'>데이터베이스관리시스템</th>
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

                    <td>
                      <a
                        href='#'
                        className='text-dark fw-bold text-hover-success d-block mb-1 fs-6'
                      >
                        {place.source_name}
                      </a>
                    </td>
                    <td>
                      <a
                        href='#'
                        className='text-dark fw-bold text-hover-success d-block mb-1 fs-6'
                      >
                        {place.trans_type}
                      </a>
                    </td>
                    <td>
                      {place.trans_type === 'FILE' ? (
                        <a
                          href='#'
                          className='text-dark fw-bold text-hover-success d-block mb-1 fs-6'
                        >
                          {place.local_path}
                        </a>
                      ) : (
                        <a
                          href='#'
                          className='text-danger fw-bold text-hover-danger d-block mb-1 fs-6'
                        >
                          ( ※ 전송방식이 FILE인 소스 입니다.)
                        </a>
                      )}
                    </td>
                    {place.trans_type === 'FILE' ? (
                      <td className='text-danger fw-bold text-hover-danger fs-6'>
                        {' '}
                        ( ※ 전송방식이 FILE인 소스 입니다.){' '}
                      </td>
                    ) : (
                      <td className='text-dark fw-bold text-hover-success fs-6'>
                        {' '}
                        {place.dbms_type}
                      </td>
                    )}

                    <td>
                      <button
                        type='button'
                        className='btn btn-lg btn-success me-3'
                        onClick={() => navigate('/sourcedetails', {state: place.source_name})}
                      >
                        상세보기
                      </button>
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

export {SourceScheduleTable}
