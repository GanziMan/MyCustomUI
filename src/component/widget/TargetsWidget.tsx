/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from 'react'
import {Dropdown1} from '../../_metronic/partials/content/dropdown/Dropdown1'
import {KTSVG} from '../../_metronic/helpers'
import {useNavigate} from 'react-router-dom'
import {FaPlus} from 'react-icons/fa'
import {AiOutlineCloudServer} from 'react-icons/ai'
import {customAxios} from '../../apis/utils'
import {useDispatch} from 'react-redux'
import {targetwidget_targetname_req} from '../../redux/actions/flowWidgetActions'

type Props = {
  className: string
  color: string
}
interface Target {
  target_name: string
  save_mode: string
  target_location: string
  id: string
}
interface TargetProps {
  targetList: Target[]
}

const TargetsWidget: React.FC<Props> = ({className, color}, {targetList}: TargetProps) => {
  const dispatch = useDispatch()
  const [data, setData] = useState([])
  const navigate = useNavigate()

  const AddTarget = () => {
    navigate('/targethorizon')
  }

  const TargetDetailClick = (e: any, target_name: string) => {
    navigate('/targetdetails')
    dispatch(targetwidget_targetname_req(target_name))
    e.preventDefault()
  }

  useEffect(() => {
    customAxios
      .get('target/findAll')
      .then(function (response) {
        setData(response.data.data)
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [])

  targetList = data

  return (
    <div className={`card ${className}`}>
      <div className='card-body p-0'>
        <div className={`px-9 pt-7 card-rounded h-275px w-100 bg-light-${color}`}>
          <div className='d-flex flex-stack'>
            <h3 className='m-0 text-success fw-bold fs-3'>Target</h3>
            <div className='ms-1'>
              <button
                type='button'
                className='btn btn-sm btn-icon btn-color-primary btn-active-light-success'
                data-kt-menu-trigger='click'
                data-kt-menu-placement='bottom-end'
                data-kt-menu-flip='top-end'
                onClick={AddTarget}
              >
                <FaPlus size={20} color={'gray'} />
              </button>
              <Dropdown1 />
            </div>
          </div>
          <div className='d-flex text-center flex-column text-white pt-8'>
            <span className='fw-bold text-dark fs-7'>Total</span>
            <span className='fw-bold text-dark fs-2x pt-1'>{targetList.length}</span>
          </div>
        </div>
        <div
          className='shadow-xs card-rounded mx-9 mb-9 px-6 py-9 position-relative z-index-1 bg-light-success h-50'
          style={{marginTop: '-100px', overflowY: 'scroll'}}
        >
          {targetList &&
            targetList.map((target) => (
              <div key={target.id}>
                <div className='d-flex align-items-center mb-6'>
                  <div className='symbol symbol-45px w-40px me-5'>
                    <span className='symbol-label bg-success'>
                      <AiOutlineCloudServer size={27} color='white'></AiOutlineCloudServer>
                    </span>
                  </div>
                  <div className='d-flex align-items-center flex-wrap w-100'>
                    <div
                      className='mb-1 pe-3 flex-grow-1'
                      onClick={(e) => {
                        TargetDetailClick(e, target.target_name)
                      }}
                    >
                      <a href='#' className='fs-5 text-gray-800 text-hover-success fw-bold'>
                        {target.target_name}
                      </a>
                    </div>
                    <div className='d-flex align-items-center'>
                      <div className='fw-bold fs-5 text-gray-800 pe-1'>{target.save_mode}</div>
                      <KTSVG
                        path='/media/icons/duotune/arrows/arr066.svg'
                        className='svg-icon-5 svg-icon-success ms-1'
                      />
                    </div>
                  </div>
                </div>
                <hr></hr>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export {TargetsWidget}
