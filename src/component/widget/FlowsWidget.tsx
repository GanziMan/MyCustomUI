/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from 'react'
import {FaPlus} from 'react-icons/fa'
import {RiFolderTransferLine} from 'react-icons/ri'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {KTSVG} from '../../_metronic/helpers'
import {Dropdown1} from '../../_metronic/partials'
import {customAxios} from '../../apis/utils'
import {flowwidget_id_req, flowwidget_sensorid_req} from '../../redux/actions/flowWidgetActions'

type Props = {
  className: string
  color: string
}

interface Flow {
  dag_name: string
  schedule_interval_view: string
  owner: string
  id: string
  sensor_id: string
}

interface FlowProps {
  flowList: Flow[]
}

const FlowsWidget: React.FC<Props> = ({className, color}, {flowList}: FlowProps) => {
  const [data, setData] = useState([])
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    customAxios
      .get('flow/findAll')
      .then(function (response) {
        setData(response.data.data)
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [])
  flowList = data
  const AddSource = () => {
    navigate('/dagcreate')
  }
  const FlowDetailClick = (e: any, id: string, sensor_id: string) => {
    navigate('/flowdetails')
    dispatch(flowwidget_id_req(id))
    dispatch(flowwidget_sensorid_req(sensor_id))
    e.preventDefault()
  }
  return (
    <div className={`card ${className}`}>
      <div className='card-body p-0'>
        <div className={`px-9 pt-7 card-rounded h-275px w-100 bg-light-${color}`}>
          <div className='d-flex flex-stack'>
            <h3 className='m-0 text-success fw-bold fs-3'>Dags</h3>
            <div className='ms-1'>
              <button
                type='button'
                className='btn btn-sm btn-icon btn-color-primary btn-active-light-success'
                data-kt-menu-trigger='click'
                data-kt-menu-placement='bottom-end'
                data-kt-menu-flip='top-end'
                onClick={AddSource}
              >
                <FaPlus size={20} color={'gray'} />
              </button>
              <Dropdown1 />
            </div>
          </div>
          <div className='d-flex text-center flex-column text-white pt-8'>
            <span className='fw-bold text-dark fs-7'>Total</span>
            <span className='fw-bold text-dark fs-2x pt-1'>{flowList.length}</span>
          </div>
        </div>
        <div
          className='shadow-xs card-rounded mx-9 mb-9 px-6 py-9 position-relative z-index-1 bg-success bg-opacity-50 h-50'
          style={{marginTop: '-100px', overflowY: 'scroll'}}
        >
          {flowList &&
            flowList.map((flow) => (
              <div className='d-flex align-items-center mb-6' key={flow.id}>
                <div className='symbol symbol-45px w-40px me-5'>
                  <span className='symbol-label bg-success'>
                    <RiFolderTransferLine color='white' size={27}></RiFolderTransferLine>
                  </span>
                </div>
                <div
                  className='d-flex align-items-center flex-wrap w-100'
                  onClick={(e) => {
                    FlowDetailClick(e, flow.id, flow.sensor_id)
                  }}
                >
                  <div className='mb-1 pe-3 flex-grow-1'>
                    <a href='#' className='fs-5 text-gray-800 text-hover-success fw-bold'>
                      {flow.dag_name}
                    </a>
                    <div className='text-dark fw-semibold fs-7'>{flow.schedule_interval_view}</div>
                  </div>
                  <div className='d-flex align-items-center'>
                    <div className='fw-bold fs-5 text-gray-800 pe-1'>{flow.owner}</div>
                    <KTSVG
                      path='/media/icons/duotune/arrows/arr066.svg'
                      className='svg-icon-5 svg-icon-success ms-1'
                    />
                  </div>
                </div>
              </div>
            ))}
          <hr></hr>
        </div>
      </div>
    </div>
  )
}

export {FlowsWidget}
