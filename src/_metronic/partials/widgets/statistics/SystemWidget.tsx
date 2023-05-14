/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {toAbsoluteUrl} from '../../../helpers'

type Props = {
  className: string
  title: string
  nodesAvailable: string
  nodesAvailableColor:string
  agentsAvailable: string
  agentsAvailableColor: string
}

const SystemWidget: React.FC<Props> = ({className, title, nodesAvailable, nodesAvailableColor, agentsAvailable, agentsAvailableColor}) => {
  return (
    <div className={`card ${className}`}>
      <div className='card-body d-flex align-items-center pt-0 pb-0'>
        <div className='d-flex flex-column flex-grow-1 py-1 py-lg-0 me-0'>
          <a href='#' className='fw-bold text-dark fs-6 mb-1 text-hover-success'>
            {title}
          </a>
         <div className={`fw-bold text-${nodesAvailableColor}`}>{nodesAvailable} & {agentsAvailable}</div>
         <div className={`fw-bold text-${agentsAvailableColor}`}></div>
        </div>
      </div>
    </div>
  )
}

export {SystemWidget}
