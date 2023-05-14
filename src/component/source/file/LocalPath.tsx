import  { FC, useState } from 'react'
import { KTSVG } from '../../../_metronic/helpers'
import { useDispatch, useSelector } from 'react-redux'
import { pathMessage_REQ, pathValue_REQ } from '../../../redux/actions/creatorActions'
import { RootState } from '../../../redux/stores'
import { customAxiosConnection } from '../../../apis/utils'

const LocalPath: FC = () => {
    const [textValue, setTextValue] = useState<any>('');
    const onChange = (e: any) => {
        setTextValue(e.target.value);
    };
    const dispatch = useDispatch();
    const selector = useSelector((state: RootState) => state.cronreducer.message);
    const [localPath, setLocalPath] = useState<any>('');
    const [message, setMessage] = useState<any>('');
    const PathCheck = () => {
        customAxiosConnection.get(`local-path?path=${textValue}`)
            .then(function (response) {
                console.log(response);
                dispatch(pathMessage_REQ(response.data.message));
                dispatch(pathValue_REQ(textValue));
                setLocalPath(response.data.data);
                setMessage(response.data.message);
            }).catch(function (error) {
                console.error(error);
            });
    }
    return (
        <div className='w-100'>
            <div className='pb-8 pb-lg-10'>
                <h2 className='fw-bolder text-dark'>로컬경로 확인</h2>
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
                                    <h3 className='m-0 text-black fw-bold fs-3'>   {
                                        selector !== '0' ? <KTSVG
                                            path='/media/icons/duotune/general/gen044.svg'
                                            className='svg-icon-2tx svg-icon-danger me-4'
                                        /> : <KTSVG
                                            path='/media/icons/duotune/general/gen044.svg'
                                            className='svg-icon-2tx svg-icon-success me-4'
                                        />
                                    }Local_Path 조회</h3>
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
                                                <input
                                                    type='text'
                                                    className='form-control form-control-solid'
                                                    placeholder='경로'
                                                    name='local_path'
                                                    onChange={onChange}
                                                />
                                            </div>
                                        </div>
                                        <div className='col-md-6 fv-row'>
                                            <div className='position-relative'>
                                                <input type="button" className='btn btn-lg btn-light-success' onClick={PathCheck} value={"경로확인"}></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className='shadow-xs card-rounded mx-9 mb-9 px-6 py-9 position-relative z-index-1 bg-body'
                            style={{ marginTop: '-100px' }}
                        >
                            {message === "0" ? <div className='d-flex align-items-center mb-6'>
                                <div className='symbol symbol-45px w-40px me-5'>
                                    <span className='symbol-label bg-lighten'>
                                        <KTSVG path='/media/icons/duotune/maps/map004.svg' className='svg-icon-1' />
                                    </span>
                                </div>
                                <div className='d-flex align-items-center flex-wrap w-100'>
                                    <div className='mb-1 pe-3 flex-grow-1'>
                                        <a href='#' className='fs-5 text-gray-800 text-hover-success fw-bold'>
                                            해당 경로의 파일
                                        </a>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <div className='fw-bold fs-5 text-gray-800 pe-1'>
                                            {localPath}
                                        </div>
                                        <KTSVG
                                            path='/media/icons/duotune/arrows/arr043.svg'
                                            className='svg-icon-5 svg-icon-success ms-1'
                                        />
                                    </div>
                                </div>
                            </div> 
                            : message === "" ?  <a href='#' className='fs-5 text-gray-800 text-hover-danger fw-bold'>
                            <p className="text-gray-600">경로를 입력 후 조회를 해주세요.</p>
                                        </a> :
                            <a href='#' className='fs-5 text-gray-800 text-hover-danger fw-bold'>
                            <p className="text-danger">잘못된 경로 또는 권한이 없습니다.</p>
                                        </a>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export { LocalPath }
