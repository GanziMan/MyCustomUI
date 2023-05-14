/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { FaPlus, FaFile } from 'react-icons/fa'
import { SiMariadb, SiOracle, SiPostgresql } from 'react-icons/si'
import { useDispatch } from 'react-redux'
import { customAxios } from '../../apis/utils'
import { sourcewidget_sourcename_req } from '../../redux/actions/flowWidgetActions'
import { Dropdown1 } from '../../_metronic/partials'
import { KTSVG } from '../../_metronic/helpers'


type Props = {
  className: string
  color: string
}

interface Source {
  source_name: string;
  trans_type: string;
  local_path: string;
  dbms_type: string;
  id: string;
}

interface SourceProps {
  sourceList: Source[]
}

const SourcesWidget: React.FC<Props> = ({ className, color }, { sourceList }: SourceProps) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
      customAxios.get("source/findAll")
      .then(function (response) {
        setData(response.data.data)
      }).catch(function (error) {
        console.error(error);
      });
  }, []);
  sourceList = data;
  const AddSource = () => {
    navigate("/transtypesource");
  }
  const SourceDetailClick = (e:any ,source_name: string) => {
    navigate("/sourcedetails");
    dispatch(sourcewidget_sourcename_req(source_name));
    e.preventDefault();

  }
  return (
    <div className={`card ${className}`}>
      <div className='card-body p-0'>
        <div className={`px-9 pt-7 card-rounded h-275px w-100 bg-light-${color}`}>
          <div className='d-flex flex-stack'>
            <h3 className='m-0 text-success fw-bold fs-3'>Source</h3>
            <div className='ms-1'>
              <button
                type='button'
                className='btn btn-sm btn-icon btn-color-primary btn-active-light-success'
                data-kt-menu-trigger='click'
                data-kt-menu-placement='bottom-end'
                data-kt-menu-flip='top-end'
                onClick={AddSource}
              >
                <FaPlus size={20} color={"gray"} />
              </button>
              <Dropdown1 />
            </div>
          </div>
          <div className='d-flex text-center flex-column text-white pt-8'>
            <span className='fw-bold text-dark fs-7'>Total</span>
            <span className='fw-bold text-dark fs-2x pt-1'>{sourceList.length}</span>
          </div>
        </div>
        <div
          className='shadow-xs card-rounded mx-9 mb-9 px-6 py-9 position-relative z-index-1 bg-light-success h-25'
          style={{ marginTop: '-100px', overflowY: "scroll" }}
        >
          {
            sourceList && sourceList.map((source) => (

              <div key={source.id}>
                <div className='d-flex align-items-center mb-6'>
                  <div className='symbol symbol-45px w-40px me-5'>
                    <span className='symbol-label bg-success'>
                      {
                        source.trans_type === "FILE" ? <FaFile
                          className='h-50 align-self-center' color={"white"} size={15}
                        /> : source.dbms_type === "ORACLE" ? <SiOracle className='h-50 align-self-center' color={"white"} size={20} />
                          : source.dbms_type === "POSTGRES" ? <SiPostgresql className='h-50 align-self-center' color={"white"} size={20} />
                            : <SiMariadb className='h-50 align-self-center' color={"white"} size={25} />
                      }
                    </span>
                  </div>
                  <div className='d-flex align-items-center flex-wrap w-100' onClick={(e) => { SourceDetailClick(e, source.source_name) }}>
                    <div className='mb-1 pe-3 flex-grow-1'>
                      <a href='#' className='fs-5 text-gray-800 text-hover-success fw-bold'>
                        {source.source_name}
                      </a>
                    </div>
                    <div className='d-flex align-items-center'>
                      <div className='fw-bold fs-5 text-gray-800 pe-1'>{source.trans_type}</div>
                      <KTSVG
                        path='/media/icons/duotune/arrows/arr066.svg'
                        className='svg-icon-5 svg-icon-success ms-1'
                      />
                    </div>
                  </div>
                </div>
                <hr></hr>
              </div>
              
            ))
          }
        
        </div>
      </div>
    </div>
  )
}

export { SourcesWidget }
