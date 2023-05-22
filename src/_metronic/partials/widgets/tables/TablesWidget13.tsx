import React, {useEffect, useState} from 'react'
import {customAxios} from '../../../../apis/utils'
import {KTSVG} from '../../../helpers'

type Props = {
  className: string
}
interface Connection {
  connection_name: string
  connection_id: string
  connection_type: string
  login: string
  host: string
  port: string
  id: string
}
interface ConnectionProps {
  ConnectionList: Connection[]
}
const TablesWidget13: React.FC<Props> = ({className}, {ConnectionList}: ConnectionProps) => {
  const [data, setData] = useState([])
  useEffect(() => {
    customAxios
      .get(`connection/find-sftp?type=SFTP`)
      .then(function (response) {
        setData(response.data.data)
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [])
  ConnectionList = data
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>SFTP List</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>Connection List</span>
        </h3>
        <div className='card-toolbar'>
          {/* begin::Menu */}
          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
          </button>
          {/* begin::Menu 2 */}
          <div
            className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-200px'
            data-kt-menu='true'
          >
            {/* begin::Menu item */}
            <div className='menu-item px-3'>
              <div className='menu-content fs-6 text-dark fw-bold px-3 py-4'>Quick Actions</div>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu separator */}
            <div className='separator mb-3 opacity-75'></div>
            {/* end::Menu separator */}
            {/* begin::Menu item */}
            <div className='menu-item px-3'>
              <a href='#!' className='menu-link px-3'>
                New Ticket
              </a>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu item */}
            <div className='menu-item px-3'>
              <a href='#!' className='menu-link px-3'>
                New Customer
              </a>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu item */}
            <div
              className='menu-item px-3'
              data-kt-menu-trigger='hover'
              data-kt-menu-placement='right-start'
              data-kt-menu-flip='left-start, top'
            >
              {/* begin::Menu item */}
              <a href='#!' className='menu-link px-3'>
                <span className='menu-title'>New Group</span>
                <span className='menu-arrow'></span>
              </a>
              {/* end::Menu item */}
              {/* begin::Menu sub */}
              <div className='menu-sub menu-sub-dropdown w-175px py-4'>
                {/* begin::Menu item */}
                <div className='menu-item px-3'>
                  <a href='#!' className='menu-link px-3'>
                    Admin Group
                  </a>
                </div>
                {/* end::Menu item */}
                {/* begin::Menu item */}
                <div className='menu-item px-3'>
                  <a href='#!' className='menu-link px-3'>
                    Staff Group
                  </a>
                </div>
                {/* end::Menu item */}
                {/* begin::Menu item */}
                <div className='menu-item px-3'>
                  <a href='#!' className='menu-link px-3'>
                    Member Group
                  </a>
                </div>
                {/* end::Menu item */}
              </div>
              {/* end::Menu sub */}
            </div>
            {/* end::Menu item */}
            {/* begin::Menu item */}
            <div className='menu-item px-3'>
              <a href='#!' className='menu-link px-3'>
                New Contact
              </a>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu separator */}
            <div className='separator mt-3 opacity-75'></div>
            {/* end::Menu separator */}
            {/* begin::Menu item */}
            <div className='menu-item px-3'>
              <div className='menu-content px-3 py-3'>
                <a className='btn btn-primary btn-sm px-4' href='#!'>
                  Generate Reports
                </a>
              </div>
            </div>
            {/* end::Menu item */}
          </div>
          {/* end::Menu 2 */}
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
            {/* begin::Table head */}
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
                <th className='min-w-150px'>Connection_NAME</th>
                <th className='min-w-140px'>Connection_ID</th>
                <th className='min-w-120px'>PORT</th>
                <th className='min-w-120px'>HOST</th>

                <th className='min-w-120px'>LOGIN</th>
                <th className='min-w-120px'>Connection_TYPE</th>
                {/* <th className='min-w-100px text-end'></th> */}
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {ConnectionList &&
                ConnectionList.map((connection) => (
                  <>
                    <tr key={connection.id}>
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
                        <a href='#!' className='text-dark fw-bold text-hover-primary fs-6'>
                          {connection.connection_name}
                        </a>
                      </td>
                      <td>
                        <a
                          href='#!'
                          className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'
                        >
                          {connection.connection_id}
                        </a>
                      </td>
                      <td>
                        <a
                          href='#!'
                          className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'
                        >
                          {connection.port}
                        </a>
                      </td>
                      <td>
                        <a
                          href='#!'
                          className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'
                        >
                          {connection.host}
                        </a>
                      </td>
                      <td className='text-dark fw-bold text-hover-primary fs-6'>
                        {connection.login}
                      </td>
                      <td>
                        <span className='badge badge-light-success'>
                          {' '}
                          {connection.connection_type}
                        </span>
                      </td>
                      <td className='text-end'>
                        <a
                          href='#!'
                          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                        >
                          <KTSVG
                            path='/media/icons/duotune/general/gen019.svg'
                            className='svg-icon-3'
                          />
                        </a>
                        <a
                          href='#!'
                          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                        >
                          <KTSVG
                            path='/media/icons/duotune/art/art005.svg'
                            className='svg-icon-3'
                          />
                        </a>
                        <a
                          href='#!'
                          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                        >
                          <KTSVG
                            path='/media/icons/duotune/general/gen027.svg'
                            className='svg-icon-3'
                          />
                        </a>
                      </td>
                    </tr>
                  </>
                ))}
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {TablesWidget13}
