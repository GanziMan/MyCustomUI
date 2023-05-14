import { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { targetconID_REQ } from '../../../redux/actions/creatorActions';
import { KTSVG } from '../../../_metronic/helpers';
import { customAxios } from '../../../apis/utils';

const TargetConnectionTest: FC = () => {
    const dispatch = useDispatch();
    const [sftpSelect, setSftpSelect] = useState<any | string[]>('');
    const [sftpConnection, setSftpConnection] = useState<any>('');
    const sftpConnectionChagnge = (e: any) => {
        setSftpConnection(e.target.value);
    }
    useEffect(() => {
        customAxios.get(`connection/find-sftp?type=SFTP`)
            .then(function (response) {
                setSftpSelect(response.data.data);
            });
    }, [])
    return (
        <div className='w-100'>
            <div className='pb-8 pb-lg-10'>
                <h2 className='fw-bolder text-dark'>SFTP커넥션</h2>
                <div className='text-gray-400 fw-bold fs-6'>
                </div>
            </div>
            <div className='mb-0'>
                <div>
                    <div className={`card ${"card-xl-stretch mb-xl-8"}`}>
                        <div className='card-body p-0'>
                            <div className={`px-9 pt-7 card-rounded h-275px w-100 bg-Light`}>
                                <div className='d-flex flex-stack'>
                                    <h3 className='m-0 text-black fw-bold fs-3'>SFTP 조회</h3>
                                </div>
                                <div className='d-flex text-center flex-column text-white pt-8'>
                                    <div className='row mb-12'>
                                        <div className='col-md-6 fv-row'>
                                            <div className='position-relative'>
                                                <select
                                                    className='form-select form-select-lg form-select-solid'
                                                    placeholder='SFTP커넥션'
                                                    onChange={sftpConnectionChagnge}
                                                >
                                                    <option value=''>커넥션 선택 해주세요.</option>
                                                    {sftpSelect && sftpSelect?.map((sftp: any,i:number) => {
                                                        return (<option key={sftp.connection_name}>{sftp.connection_name}</option>);
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
                                {sftpSelect.length >= 1 ? <> <div className='d-flex align-items-center mb-6'>
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
                                                {sftpSelect && sftpSelect?.map((sftp: any) => {
                                                    {
                                                        if (sftpConnection === sftp.connection_name) {
                                                            return (<div key={sftp.connection_id}>{sftp.connection_id}</div>)
                                                        }else{
                                                            return(<div key={sftp.connection_id}>{sftpConnection === sftp.connection_name}</div>)
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
                                                    ID
                                                </a>
                                            </div>
                                            <div className='d-flex align-items-center'>
                                                <div className='fw-bold fs-5 text-gray-800 pe-1'>
                                                    {sftpSelect && sftpSelect?.map((sftp: any) => {
                                                        {
                                                            if (sftp.connection_name === sftpConnection) {
                                                                dispatch(targetconID_REQ(sftp.id))
                                                                return (<div key={sftp.id}>{sftp.id}</div>)
                                                               
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
                                                    {sftpSelect && sftpSelect?.map((sftp: any) => {
                                                        {
                                                            if (sftp.connection_name === sftpConnection) {
                                                                return (<div key={sftp.connection_type}>{sftp.connection_type}</div>)
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
                                                    {sftpSelect && sftpSelect?.map((sftp: any) => {
                                                        {
                                                            if (sftp.connection_name === sftpConnection) {
                                                                return (<div key={sftp.port}>{sftp.port}</div>)
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
                                                    Host
                                                </a>
                                            </div>
                                            <div className='d-flex align-items-center'>
                                                <div className='fw-bold fs-5 text-gray-800 pe-1'>
                                                    {sftpSelect && sftpSelect?.map((sftp: any) => {
                                                        {
                                                            if (sftp.connection_name === sftpConnection) {
                                                                return (<div key={sftp.host}>{sftp.host}</div>)
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
                                </> : sftpSelect.length === 0 ? <> <a href='#' className='fs-5 text-gray-800 text-hover-danger fw-bold'>
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

export { TargetConnectionTest }
