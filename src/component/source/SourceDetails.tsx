/* eslint-disable jsx-a11y/anchor-is-valid */
import  { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { customAxios } from '../../apis/utils';
import { RootState } from '../../redux/stores';
import { KTSVG } from '../../_metronic/helpers'

export function SourceDetails() {
    const [data, setData] = useState([]);
    const state = useSelector((state:RootState) => state.flowwidgetreducer.source_name);
    const dispatch = useDispatch();
    // const local_path= useSelector((state:RootState) => state.sourcedetailreducer.state.local_path)
    const [local_path , setLocal_path] = useState<string>("");
    // const source_name= useSelector((state:RootState) => state.sourcedetailreducer.state.source_name)
    const [source_name, setSource_name] = useState<string>("");
    // const id= useSelector((state:RootState) => state.sourcedetailreducer.state.id);
    const [id, setId] =useState<string>("");
    // const trans_type= useSelector((state:RootState) => state.sourcedetailreducer.state.trans_type);
    const [trans_type, setTrans_type] = useState<string>("");
    // const dbms_type = useSelector((state:RootState) => state.sourcedetailreducer.state.dbms_type);
    const[dbms_type,setDbms_type] = useState<string>("");
    const navigate =useNavigate();
    useEffect(() => {
     const response =customAxios.get(`source/find-by-source-name?id=${state}`)
            .then(function (response) {
                console.log(response.data.data);
                setLocal_path(response.data.data.local_path);
                setSource_name(response.data.data.source);
                setId(response.data.data.id);
                setTrans_type(response.data.data.trans_type);
                setDbms_type(response.data.data.dbms_type);
                
                // dispatch(sourcedetail_REQ(response.data.data));
                setData(response.data.data);
            }).catch(function (error) {
                console.error(error);
            });
    }, []);

    const Delete = () => {
        if (window.confirm("정말 삭제합니까?")) {
            customAxios.delete(`source/delete?id=${id}`)
        .then(function () {
            navigate("/dashboard");
            toast.info(`${source_name}`+" 소스가 삭제완료")
        }).catch(function (error) {
            toast.warn("소스삭제 실패! DAG이랑 연결되어있는 Source입니다.")
        });
           
          } else {
            alert("취소합니다.");
          }
    }
    return (
        <>
            <div className='card mb-5 mb-xl-10' id='kt_profile_details_view'>
                <div className='card-header cursor-pointer'>
                    <div className='card-title m-0'>
                        <h3 className='fw-bolder m-0'>{state} Details</h3>
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
                            {trans_type === "FILE" ?  <div className='menu-item px-3' onClick={() => {navigate("/sourcefileupdate", {state:source_name})}}>
                                <a href='#' className='menu-link px-3'>
                                    Update
                                </a>
                            </div> :  <div className='menu-item px-3' onClick={() => {navigate("/sourcedbupdate", {state:source_name})}}>
                                <a href='#' className='menu-link px-3'>
                                    Update
                                </a>
                            </div>}
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
                            전송방식
                            <i
                                className='fas fa-exclamation-circle ms-1 fs-7'
                                data-bs-toggle='tooltip'
                                title='Phone number must be active'
                            ></i>
                        </label>

                        <div className='col-lg-8 d-flex align-items-center'>
                            <span className='fw-bolder fs-6 me-2'>{trans_type}</span>
                        </div>
                    </div>
                    <div className='row mb-7'>
                        <label className='col-lg-4 fw-bold text-muted'>
                            파일위치
                            <i
                                className='fas fa-exclamation-circle ms-1 fs-7'
                                data-bs-toggle='tooltip'
                                title='Country of origination'
                            ></i>
                        </label>

                        <div className='col-lg-8'>
                            {
                                trans_type === "FILE" ?  <span className='fw-bolder fs-6 text-dark'>{local_path}</span> :<span className='fw-bolder fs-6 text-danger'>( ※ DB 수집 소스입니다. )</span>
                            }
                           
                        </div>
                    </div>

                    <div className='row mb-7'>
                        <label className='col-lg-4 fw-bold text-muted'>소스이름</label>

                        <div className='col-lg-8'>
                            <span className='fw-bolder fs-6 text-dark'>{state}</span>
                        </div>
                    </div>

                    <div className='row mb-10'>
                       
                        <label className='col-lg-4 fw-bold text-muted'>DBMS_TYPE</label>

                        <div className='col-lg-8'>
                        {
                            trans_type === "FILE" ? <span className='fw-bold text-danger fs-6'>( ※ FILE 수집 소스입니다. )</span> : <span className='fw-bold fs-6'>{dbms_type}</span> 
                        }
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
