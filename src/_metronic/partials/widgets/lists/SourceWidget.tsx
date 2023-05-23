/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { FaPlus, FaFile } from 'react-icons/fa'
import { SiMariadb, SiOracle, SiPostgresql } from 'react-icons/si'
import { useNavigate } from 'react-router-dom'
import { customAxios } from '../../../../apis/utils'
// import { listDag_REQ, test_REQ } from '../../../../redux/actions/creatorActions'


type Props = {
  className: string
  items?: number

}
interface Place {
  source_name: string;
  trans_type: string;
  dbms_type: string;
}
interface PlacesProps {
  placeList: Place[];

}
const SourceWidget: React.FC<Props> = ({ items = 6 }, { placeList }: PlacesProps) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const AddSource = () => {
    navigate("/transtypesource");
  }
  placeList = data;
  useEffect(() => {
    customAxios.get("source/findAll")
      .then(function (response) {
  
        setData(response.data.data);
      }).catch(function (error) {
        console.error(error);
      });
    // dispatch(listDag_REQ());
  }, []);

  return (
    <div className='card card-xl-stretch mb-xl-8'>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold text-dark'>전송위치</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>Source</span>
        </h3>
        <div className='card-toolbar'>
          {/* begin::Menu */}
          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
            onClick={AddSource}
          >
            <FaPlus size={20} />
          </button>

        </div>
      </div>

      <div className='card-body pt-5'>
        {
          items > 4 && placeList && placeList.map((place) => (
            <div className='d-flex align-items-sm-center mb-7' key={place.source_name}>
              <div className='symbol symbol-50px me-5'>
                <span className='symbol-label'>
                  {
                    place.trans_type === "FILE" ? <FaFile
                      className='h-50 align-self-center' size={15}
                    /> : place.dbms_type === "ORACLE" ? <SiOracle className='h-50 align-self-center' size={20} />
                      : place.dbms_type === "POSTGRES" ? <SiPostgresql className='h-50 align-self-center' size={20} />
                        : <SiMariadb className='h-50 align-self-center' size={25} />
                  }

                </span>
              </div>
              <div className='d-flex align-items-center flex-row-fluid flex-wrap'>
                <div className='flex-grow-1 me-2' onClick={() =>
                  navigate(`/sourcedetails`, { state: place.source_name })}>
                  <div className='text-gray-800 text-hover-primary fs-6 fw-bold'>
                    <a href='#' className='btn btn-sm btn-light-success fw-bolder ms-2 fs-5 py-1 px-4'>
                      {place.source_name}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export { SourceWidget }
