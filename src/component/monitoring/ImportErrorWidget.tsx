/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from 'react'
import {MdErrorOutline} from 'react-icons/md'
import {useDispatch} from 'react-redux'
import {customAxiosAirflow} from '../../apis/utils'
import {importerror_req} from '../../redux/actions/dashboardActions'
import {ImportErrorModal} from '../importError/ImportErrorModal'

type Props = {
  className: string
}

const ImportErrorWidget: React.FC<Props> = ({className}) => {
  const dispatch = useDispatch()
  const [data, setData] = useState([])

  useEffect(() => {
    customAxiosAirflow('get?dags=importErrors')
      .then(function (response) {
        setData(response.data.data.body.import_errors)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])
  const ImportErrorClick = (e: any, import_error_id: string) => {
    dispatch(importerror_req(import_error_id))
    e.preventDefault()
  }
  return (
    <div className={`card ${className}`}>
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1 text-danger'>
            Import Error : {data.length}
          </span>
        </h3>
      </div>
      <div className='card-body py-3'>
        <div className='tab-content'>
          <div className='tab-pane fade show active' id='kt_table_widget_8_tab_1'>
            <div className='table-responsive'>
              <table className='table align-middle gs-0 gy-3'>
                <thead>
                  {/* <tr>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-120 px'></th>
                  </tr> */}
                </thead>
                <tbody>
                  {data &&
                    data?.map((errorList) => (
                      <tr key={errorList.import_error_id}>
                        <td>
                          <div className='symbol symbol-50px me-2'>
                            <span className='symbol-label bg-light-danger'>
                              <MdErrorOutline
                                size={25}
                                className='svg-icon-2x text-danger'
                              ></MdErrorOutline>
                            </span>
                          </div>
                        </td>
                        <td>
                          <a href='#' className='text-danger fw-bold  mb-1 fs-6'>
                            Error ID : {errorList.import_error_id}
                          </a>
                        </td>
                        <td className='text-center'>
                          <span className='text-danger fw-bold d-block fs-7'>
                            {errorList.timestamp}
                          </span>
                        </td>
                        <td className='text-center'>
                          <a
                            onClick={(e) => {
                              ImportErrorClick(e, errorList.import_error_id)
                            }}
                          >
                            <ImportErrorModal></ImportErrorModal>
                          </a>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {ImportErrorWidget}
