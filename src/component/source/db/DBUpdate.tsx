import  { FC, useState } from 'react';
import {  useSelector } from 'react-redux';
import { KTSVG } from '../../../_metronic/helpers';
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { RootState } from '../../../redux/stores'; 
import { customAxios } from '../../../apis/utils';
const DBUpdate: FC = () => {
    const navigate = useNavigate();
    const id= useSelector((state:RootState) => state.sourcedetailreducer.state.id);
    const prevSource_name= useSelector((state:RootState) => state.sourcedetailreducer.state.source_name)
    const prevDBms_type = useSelector((state:RootState) => state.cronreducer.dbms_type);
    const trans_type= useSelector((state:RootState) => state.sourcedetailreducer.state.trans_type);
    const db_conn_id = useSelector((state:RootState) => state.sourcedetailreducer.state.db_conn_id.id);  console.log(db_conn_id);
    const [source_name, setSource_name] = useState<string>(prevSource_name);
    const [dbms_type, setDbms_type] = useState<string>(prevDBms_type);
    const SourceNameChange = (e: any) => {
        setSource_name(e.target.value);
    };
    const DBMS_TYPEChange = (e: any) => {
        setDbms_type(e.target.value);
    };
    const Update = () => {
        if(window.confirm("저장 하시겠습니까?"))
        {
            customAxios.patch("update", {id:id, source_name: source_name, dbms_type: dbms_type,trans_type:trans_type, db_conn_id:{id:db_conn_id} })
            .then(function(response){
                toast.info("DB UPDATE 완료");
                navigate("/dashboard");
            })
        }
    }
    return (
        <div className='card'>

            <div className='card-body'>
                <div className='w-100'>
                    <div className='pb-10 pb-lg-15'>
                        <h2 className='fw-bolder text-dark'>SFTP 업데이트</h2>
                    </div>
                    <div className='row mb-12'>
                        <div className='col-md-12 fv-row'>
                            <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                                <span className='required'>Source_name</span>
                            </label>
                            <div className='position-relative'>
                                <input
                                    type='text'
                                    className='form-control form-control-solid'
                                    placeholder='ex) CDW_FRH_SERVER'
                                    name='source_name'
                                    onChange={SourceNameChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className='row mb-12'>
                        <div className='col-md-12 fv-row'>
                            <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                                <span className='required'>DBMS_TYPE</span>
                            </label>
                            <div className='position-relative'>
                                <input
                                    type='text'
                                    className='form-control form-control-solid'
                                    placeholder='ex) CDW_FRH_SERVER'
                                    name='dbms_type'
                                    onChange={DBMS_TYPEChange}
                                />
                            </div>
                        </div>

                    </div>

                </div>
                <div className='d-flex flex-stack pt-15'>
                    <div className='mr-2'>
                        <button type='submit' className='btn btn-lg btn-success me-3' onClick={()=> {navigate("/dashboard")}}>
                            <span className='indicator-label'>
                            <KTSVG
                                    path='/media/icons/duotune/arrows/arr063.svg'
                                    className='svg-icon-3 ms-0 me-4'
                                />
                            취소
                            </span>
                        </button>

                    </div>
                    <div>
                    <button type='submit' className='btn btn-lg btn-success me-3' onClick={Update}>
                        <span className='indicator-label'>
                        저장
                          <KTSVG
                            path='/media/icons/duotune/arrows/arr064.svg'
                            className='svg-icon-3 ms-4 me-0'
                          />
                        </span>
                      </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export { DBUpdate }
