/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import {  useNavigate } from 'react-router-dom'
import {Dropdown1} from '../../content/dropdown/Dropdown1'


type Props = {
  className: string
  items?: number
}
interface Target{
  dag_id:string;
}
interface TargetProps{
  targetList:Target[]
} 
const TargetWidget: React.FC<Props> = ({className, items = 6}, {targetList}:TargetProps) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const axiosConfig = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    withCredentials: true 
  }
  useEffect(()=> {
    axios.get("http://localhost:8080/manager-ui/airflow/get?dags=dags",axiosConfig)
    .then(function (response) {
      setData(response.data.data.body.dags);
   }).catch(function (error) {
     console.error(error);
   });
  },[]);
 
  targetList=data.slice(6);
  return (
    <div className='card card-xl-stretch mb-xl-8'>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold text-dark'>적재위치</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>Target</span>
        </h3>
        <div className='card-toolbar'>
          {/* begin::Menu */}
          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
            onClick={()=> {navigate("/tfilehorizon")}}
          >
             <FaPlus size={20} />
          </button>
          <Dropdown1 />
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-5'>
        {/* {items > 4 && targetList && targetList.map((place) => (
          <div className='d-flex align-items-sm-center mb-7' key={place.dag_id}>
            <div className='symbol symbol-50px me-5'>
              <span className='symbol-label '>
                <img
                  src={toAbsoluteUrl('/media/icons/duotune/abstract/abs027.svg')}
                  className='h-50 align-self-center'
                  color='success'
                  alt=''
                />
              </span>
            </div>
            <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
              <div className='flex-grow-1 me-2'>
                <Link to='/targetschedule' className='text-gray-800 text-hover-primary fs-6 fw-bold'>
                <a href='#' className='btn btn-sm btn-light-success fw-bolder ms-2 fs-5 py-1 px-4'>
                   {place.dag_id}
                </a>
                </Link>
                </div>
             </div>
          </div>
        ))} */}

        {/* {items > 5 && (
          <div className='d-flex align-items-sm-center'>
            <div className='symbol symbol-50px me-5'>
              <span className='symbol-label'>
                <img
                  src={toAbsoluteUrl('/media/svg/brand-logos/fox-hub.svg')}
                  className='h-50 align-self-center'
                  alt=''
                />
              </span>
            </div>
            <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
              <div className='flex-grow-1 me-2'>
                <a href='#' className='text-gray-800 text-hover-primary fs-6 fw-bold'>
                  Fox Broker App
                </a>
                <span className='text-muted fw-semibold d-block fs-7'>Finance, Corporate, Apps</span>
              </div>
              <span className='badge badge-light fw-bold my-2'>+4500$</span>
            </div>
          </div>
        )} */}
      </div>
    </div>
  )
}

export {TargetWidget}
