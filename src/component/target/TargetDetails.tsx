/* eslint-disable jsx-a11y/anchor-is-valid */
import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

import { customAxios } from '../../apis/utils';
import {target_connid_REQ, target_id_REQ, target_location_REQ, target_name_REQ, target_savemode_REQ } from '../../redux/actions/creatorActions';
import { RootState } from '../../redux/stores';
import { KTSVG } from '../../_metronic/helpers'

export function TargetDetails() {
    const state = useSelector((state:RootState) => state.flowwidgetreducer.target_name);
    const dispatch = useDispatch();
    const [save_mode,setSave_mode] = useState<any>('');
    const [targetconid,setTargetconid] = useState<any>('');
    const [targetconidUpdate,setTargetconidUpdate] = useState<any>('');
    const [target_location, setTarget_location] = useState<any>('');
    const [id,setId] =useState<any>('');
    const [target_name,setTarget_name] = useState<any>('');

    useEffect(() => {
        customAxios.get(`target/find-by-target-name?id=${state}`)
            .then(function (response) {
                setSave_mode(response.data.data.save_mode);
                setTarget_location(response.data.data.target_location);
                setTargetconid(response.data.data.target_conn_id.connection_id);
                setTargetconidUpdate(response.data.data.target_conn_id.id);
                setTarget_name(response.data.data.target_name);
                setId(response.data.data.id);
            }).catch(function (error) {
                console.error(error);
            });
    }, []);
    console.log(targetconidUpdate);
    const navigate =useNavigate();
    const Delete = () => {
        if (window.confirm("정말 삭제합니까?")) {
            customAxios.delete(`target/delete?id=${id}`)
        .then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.error(error);
        });
            navigate("/dashboard");
            toast.info(``+" 타겟 삭제완료")
          } else {
            alert("취소합니다.");
          }
    }
    const Update = () => {
     navigate("/targetupdate", {state:target_name});
     dispatch(target_name_REQ(target_name));
     dispatch(target_location_REQ(target_location));
     dispatch(target_savemode_REQ(save_mode));
     dispatch(target_id_REQ(id));
     dispatch(target_connid_REQ(targetconidUpdate));
    }
    return (
        <>
            <div className='card mb-5 mb-xl-10' id='kt_profile_details_view'>
                <div className='card-header cursor-pointer'>
                    <div className='card-title m-0'>
                        <h3 className='fw-bolder m-0'> {state} Details</h3>
                    </div>
                    <div className='card-toolbar'>
                        <button
                            type='button'
                            className='btn btn-sm btn-icon btn-color-success btn-active-light-success'
                            data-kt-menu-trigger='click'
                            data-kt-menu-placement='bottom-end'
                            data-kt-menu-flip='top-end'
                        >
                            <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
                        </button>

                        <div
                            className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-success fw-semibold w-200px'
                            data-kt-menu='true'
                        >
                            <div className='menu-item px-3'>
                                <div className='menu-content fs-6 text-dark fw-bold px-3 py-4'>Quick Menu</div>
                            </div>
                            <div className='separator mb-3 opacity-75'></div>
                            <div className='menu-item px-3'>
                               
                            </div>

                         
                            <div className='menu-item px-3' onClick={Update}>
                                <a href='#' className='menu-link px-3'>
                                    Update
                                </a>
                            </div> 
                           
                            
                            <div className='menu-item px-3' onClick={Delete}>
                                <a href='#' className='menu-link px-3'>
                                    Delete
                                </a>
                            </div>

                            <div className='separator mt-3 opacity-75'></div>
                        </div>
                    </div>
                </div>

                <div className='card-body p-9'>
                    <div className='row mb-7'>
                        <label className='col-lg-4 fw-bold text-muted'>
                            타겟 이름
                            <i
                                className='fas fa-exclamation-circle ms-1 fs-7'
                                data-bs-toggle='tooltip'
                                title='Phone number must be active'
                            ></i>
                        </label>

                        <div className='col-lg-8 d-flex align-items-center'>
                            <span className='fw-bolder fs-6 me-2'>{target_name}</span>
                        </div>
                    </div>
                    <div className='row mb-7'>
                        <label className='col-lg-4 fw-bold text-muted'>
                            적재 위치
                            <i
                                className='fas fa-exclamation-circle ms-1 fs-7'
                                data-bs-toggle='tooltip'
                                title='Country of origination'
                            ></i>
                        </label>

                        <div className='col-lg-8'>
                            <span className='fw-bolder fs-6 text-dark'>{target_location}</span>
                        </div>
                    </div>

                    <div className='row mb-7'>
                        <label className='col-lg-4 fw-bold text-muted'>target_conn_id</label>

                        <div className='col-lg-8'>
                            <span className='fw-bolder fs-6 text-dark'>{targetconid}</span>
                        </div>
                    </div>

                    <div className='row mb-10'>
                        <label className='col-lg-4 fw-bold text-muted'>save_mode</label>

                        <div className='col-lg-8'>
                            <span className='fw-bold fs-6'>{save_mode}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
