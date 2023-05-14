import { FC, useEffect, useState } from 'react'
import { KTSVG } from '../../../_metronic/helpers'
import { useDispatch } from 'react-redux'
import { connectionDB_REQ, source_connection_id_DB_REQ } from '../../../redux/actions/creatorActions'

import { customAxios } from '../../../apis/utils'
const DbConnection: FC = () => {
    const dispatch = useDispatch();
    const [dbConnection, setDbConnection] = useState<any>('');
    const [dbselect, setDbSelect] = useState<any | string[]>('');
    const dbConnectionChagnge = (e: any) => {
        setDbConnection(e.target.value);
    }
    useEffect(() => {
        const Response = async () => {
            const response = await customAxios.get(`connection/find-db`)
            setDbSelect(response.data.data);
        }
        Response();
    }, []);
    return (
        <div className='w-100'>
            <div className='pb-8 pb-lg-10'>
                <h2 className='fw-bolder text-dark'>DB커넥션</h2>
                <div className='text-gray-400 fw-bold fs-6'>
                </div>
            </div>
            <div className='mb-0'>
                <div className='fs-6 text-gray-600 mb-5'>
                </div>
                <div>
                    <div className={`card ${"card-xl-stretch mb-xl-8"}`}>
                        <div className='card-body p-0'>
                            <div className={`px-9 pt-7 card-rounded h-275px w-100 bg-Light`}>
                                <div className='d-flex flex-stack'>
                                    <h3 className='m-0 text-black fw-bold fs-3'>DB_Connection 조회</h3>
                                    <div className='ms-1'>
                                        <button
                                            type='button'
                                            className={`btn btn-sm btn-icon btn-color-white btn-active-white btn-active-color-dark border-0 me-n3`}
                                            data-kt-menu-trigger='click'
                                            data-kt-menu-placement='bottom-end'
                                            data-kt-menu-flip='top-end'
                                        >
                                            <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
                                        </button>
                                    </div>
                                </div>
                                <div className='d-flex text-center flex-column text-white pt-8'>
                                    <div className='row mb-12'>
                                        <div className='col-md-6 fv-row'>


                                            <div className='position-relative'>
                                                
                                                <select
                                                    className='form-select form-select-lg form-select-solid'
                                                    placeholder='디비커넥션'
                                                    onChange={dbConnectionChagnge}
                                                    name = "db_conn_id"
                                                >
                                                    
                                                    <option value=''>DB 서버를 조회 해주세요.</option>
                                                    {dbselect && dbselect?.map((db: any) => {

                                                        return (<option key={db.id}>{db.connection_name}</option>);
                                                    })}
                                                </select>
                                           
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className='shadow-xs card-rounded mx-9 mb-9 px-6 py-9 position-relative z-index-1 bg-body'
                                style={{ marginTop: '-100px' }}
                            >
                                {dbselect.length >= 1 ? <> <div className='d-flex align-items-center mb-6'>
                                    <div className='symbol symbol-45px w-40px me-5'>
                                        <span className='symbol-label bg-lighten'>
                                            <KTSVG path='/media/icons/duotune/maps/map004.svg' className='svg-icon-1' />
                                        </span>
                                    </div>
                                    <div className='d-flex align-items-center flex-wrap w-100'>

                                        <div className='mb-1 pe-3 flex-grow-1'>
                                            <a href='#' className='fs-5 text-gray-800 text-hover-success fw-bold'>
                                                Connection_ID
                                            </a>
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <div className='fw-bold fs-5 text-gray-800 pe-1'>
                                                {dbselect && dbselect?.map((db: any) => {
                                                    {
                                                        if (db.connection_name === dbConnection) {
                                                            return (<div key={db.connection_id}>{db.connection_id}</div>)
                                                        }
                                                    }
                                                })}
                                            </div>
                                            <KTSVG
                                                path='/media/icons/duotune/arrows/arr043.svg'
                                                className='svg-icon-5 svg-icon-success ms-1'
                                            />
                                        </div>

                                    </div>

                                </div>
                                    <div className='d-flex align-items-center mb-6'>
                                        <div className='symbol symbol-45px w-40px me-5'>
                                            <span className='symbol-label bg-lighten'>
                                                <KTSVG path='/media/icons/duotune/maps/map004.svg' className='svg-icon-1' />
                                            </span>
                                        </div>
                                        <div className='d-flex align-items-center flex-wrap w-100'>

                                            <div className='mb-1 pe-3 flex-grow-1'>
                                                <a href='#' className='fs-5 text-gray-800 text-hover-success fw-bold'>
                                                    Connection_type
                                                </a>
                                            </div>
                                            <div className='d-flex align-items-center'>
                                                <div className='fw-bold fs-5 text-gray-800 pe-1'>
                                                    {dbselect && dbselect?.map((db: any) => {
                                                        {
                                                            if (db.connection_name === dbConnection) {
                                                                dispatch(connectionDB_REQ(dbConnection));
                                                                dispatch(source_connection_id_DB_REQ(db.id));
                                                                return (<div key={db.connection_type}>{db.connection_type}</div>)
                                                            }
                                                        }
                                                    })}
                                                </div>
                                                <KTSVG
                                                    path='/media/icons/duotune/arrows/arr043.svg'
                                                    className='svg-icon-5 svg-icon-success ms-1'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center mb-6'>
                                        <div className='symbol symbol-45px w-40px me-5'>
                                            <span className='symbol-label bg-lighten'>
                                                <KTSVG path='/media/icons/duotune/maps/map004.svg' className='svg-icon-1' />
                                            </span>
                                        </div>
                                        <div className='d-flex align-items-center flex-wrap w-100'>

                                            <div className='mb-1 pe-3 flex-grow-1'>
                                                <a href='#' className='fs-5 text-gray-800 text-hover-success fw-bold'>
                                                    port
                                                </a>
                                            </div>
                                            <div className='d-flex align-items-center'>
                                                <div className='fw-bold fs-5 text-gray-800 pe-1'>
                                                    {dbselect && dbselect?.map((db: any) => {
                                                        {
                                                            if (db.connection_name === dbConnection) {
                                                                return (<div key={db.port}>{db.port}</div>)
                                                            }
                                                        }
                                                    })}
                                                </div>
                                                <KTSVG
                                                    path='/media/icons/duotune/arrows/arr043.svg'
                                                    className='svg-icon-5 svg-icon-success ms-1'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center mb-6'>
                                        <div className='symbol symbol-45px w-40px me-5'>
                                            <span className='symbol-label bg-lighten'>
                                                <KTSVG path='/media/icons/duotune/maps/map004.svg' className='svg-icon-1' />
                                            </span>
                                        </div>
                                        <div className='d-flex align-items-center flex-wrap w-100'>

                                            <div className='mb-1 pe-3 flex-grow-1'>
                                                <a href='#' className='fs-5 text-gray-800 text-hover-success fw-bold'>
                                                    schema
                                                </a>
                                            </div>
                                            <div className='d-flex align-items-center'>
                                                <div className='fw-bold fs-5 text-gray-800 pe-1'>
                                                    {dbselect && dbselect?.map((db: any) => {
                                                        {
                                                            if (db.connection_name === dbConnection) {
                                                                return (<div key={db.schema}>{db.schema}</div>)
                                                            }
                                                        }
                                                    })}
                                                </div>
                                                <KTSVG
                                                    path='/media/icons/duotune/arrows/arr043.svg'
                                                    className='svg-icon-5 svg-icon-success ms-1'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </> : dbselect.length === 0 ? <> <a href='#' className='fs-5 text-gray-800 text-hover-danger fw-bold'>
                                    <p className="text-dark"> 커넥션을 조회 해주세요.</p>
                                </a></> : <></>}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export { DbConnection }
