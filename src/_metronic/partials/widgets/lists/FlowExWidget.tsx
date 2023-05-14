/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import { stateSuccess_REQ } from '../../../../redux/actions/getStateActions'
import { RootState } from '../../../../redux/stores'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'

type Props = {
  className: string
  items?: number
}
interface State {
  success:number,
  failed:number,
}

interface StateProps{
  stateList:State[]
}

const FlowExWidget: React.FC<Props> = ({className, items = 6}) => {
  const selector = useSelector((state:RootState) => state.StateReducer);
  const arr :any =selector;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(stateSuccess_REQ());
   },[]);  

  return (
    <div className='card card-xl-stretch mb-xl-8'>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold text-dark'>Dags EXECUTIONS</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>Dags Executions Details</span>
        </h3>
        <div className='card-toolbar'>
        </div>
      </div>
      <div className='card-body pt-5'>
        {items > 4 &&  (
          <div className='d-flex align-items-sm-center mb-7'>
     
              <span className='symbol-label'>
              <a href='#' className='symbol symbol-40px me-7 btn btn-sm btn-light-success fw-bolder ms-1 fs-6 py-1 px-4'>
                   Dag_Creator
                </a>
              </span>
          
            <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
              <div className='flex-grow-1 me-1' onClick={()=>{
              navigate("/", {state:"Dag_Creator"})
              }}>
             <span className='badge badge-light-success'>Success  : {arr.success} </span> 
             <br></br>
             <span className='badge badge-light-danger'>Failed : {arr.failed}  </span> 

                {/* <span className='text-muted fw-semibold d-block fs-7'>Disco, Retro, Sports</span> */}
              </div>
            </div>
            <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
              <div className='flex-grow-1 me-2'>
                <a href='#' className='text-gray-800 text-hover-primary fs-6 fw-bold'>
                 
                </a>
                {/* <span className='text-muted fw-semibold d-block fs-7'>Disco, Retro, Sports</span> */}
              </div>

              
              {/* <span className='badge badge-light fw-bold my-2'>+4500$</span> */}
            </div>
          </div>
            )}
        {items > 5 && (
          <div className='d-flex align-items-sm-center'>
            {/* begin::Symbol */}
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
        )}
      </div>
    </div>
  )
}

export {FlowExWidget}
