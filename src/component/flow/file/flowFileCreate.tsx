import { FC, useEffect, useState } from 'react'
import { Field } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/stores'
import { filetypelist_REQ, flow_file_name_REQ, sourcenameCheck_REQ } from '../../../redux/actions/creatorActions'
import { SourceModal } from '../../source/Modal'
import { customAxios, customAxiosConnection } from '../../../apis/utils'
const FlowFileCreate: FC = () => {
    const dispatch = useDispatch();
    const [sourceName, setSourceName] = useState<any>();
    const [dagCheckMessage, setDagCheckMessage] = useState<string>('');
    const CronValue = useSelector((state: RootState) => state.cronreducer.cron);
    const [fileTypeValue, setFileTypeValue] = useState<any>('');
    const local_path = useSelector((state: RootState) => state.cronreducer.pathvalue);
    const [filenames, setFileNames] = useState<string>('');
    const FileTypeChange = (e: any) => {
        setFileTypeValue(e.target.value);
    }
    const fileNamesArray = filenames.slice(1, -1).split(', ');
    const sourceNameChange = (e: any) => {
        setSourceName(e.target.value);
    }
    useEffect(()=>{
        customAxios.get(`flow/duplicateCheck?type=dag_name&value=${sourceName}`)
        .then(function (response) {
            setDagCheckMessage(response.data.message);
            if (response.data.message === "가능") {
                dispatch(sourcenameCheck_REQ(sourceName));
            }
            else {
                dispatch(sourcenameCheck_REQ(response.data.message));
            }
        })
    })

    useEffect(() => {
        if (fileTypeValue !== '') {
            customAxiosConnection.get(`local-path?path=${local_path}`)
                .then(function (response) {
                    setFileNames(response.data.data);
                })
            dispatch(filetypelist_REQ(fileTypeValue));
        }
    })
    return (
        <div className='w-100'>
            <div className='pb-10 pb-lg-15'>
                <h2 className='fw-bolder text-dark'>Dag 설정</h2>
            </div>
            <div className='row mb-12'>
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>Dag_Name</span>
                    </label>

                    <div className='position-relative'>
                        <input
                            type='text'
                            className='form-control form-control-solid'
                            placeholder='Dag_Name'
                            name='dag_name'
                            onChange={sourceNameChange}
                        />
                    </div>
                </div>
                <div className='col-md-6 fv-row'>
                <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>중복 체크</span>
                    </label>
                    <div className='form-control form-control-solid' placeholder=''>
                        {
                            dagCheckMessage === "가능" ? <span className='text-success'>{dagCheckMessage} Dag 이름 입니다.</span> : sourceName === <span className='text-danger'>{dagCheckMessage} Dag 이름 입니다.</span>
                        }
                    </div>
                </div>
            </div>
            <div className='row mb-12'>
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>파일 타입</span>
                    </label>
                    <div className='position-relative'>
                        <Field
                            as='select'
                            name='file_type_list'
                            className='form-select form-select-lg form-select-solid'
                            onChange={FileTypeChange}
                            value={fileTypeValue}
                        >
                            <option value='csv'>csv</option>
                            <option value='txt' selected>txt</option>
                            <option value='psv'>psv</option>
                        </Field>
                    </div>
                </div>
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>file_name</span>
                    </label>

                    <div className='position-relative'>
                        {
                            fileTypeValue === '' ? <Field
                                type='text'
                                className='form-control form-control-solid'
                                placeholder='파일 타입을 선택해주세요.'
                                name='file_name'
                                disabled={true}
                            />: <Field
                                as='select'
                                name='file_name'
                                className='form-select form-select-lg form-select-solid'
                            >
                                <option value=''>선택 해주세요.</option>
                                {fileNamesArray && fileNamesArray?.map((file: any) => {
                                    if(file.includes(fileTypeValue))
                                    {
                                        dispatch(flow_file_name_REQ((file.split('_'))[0]));  // file _REQ 자르기 
                                        return (<option key={file}>{file}</option>);
                                    }
                                  
                                })}
                            </Field>
                        }
                    </div>
                </div>

            </div>
            <div className='row mb-12'>
              
            <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>privacy_on_off</span>
                    </label>
                    <div className='position-relative'>
                        <Field
                            as='select'
                            name='privacy_on_off'
                            className='form-select form-select-lg form-select-solid'>
                            <option value='ON'>on</option>
                            <option value='OFF' selected>off</option>

                        </Field>
                    </div>
                </div>

                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>데이터 타입</span>
                    </label>
                    <div className='position-relative'>
                        <Field
                            as='select'
                            name='data_type'
                            className='form-select form-select-lg form-select-solid'>
                            <option value='structed'>정형 데이터</option>
                            <option value='unstructed'>비정형 데이터</option>
                        </Field>
                    </div>
                </div>
            </div>
            <div className='row mb-12'>
            <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>파일 구분자</span>
                    </label>
                    <div className='position-relative'>
                        <Field
                            type="text"
                            name='delimiter'
                            className='form-control form-control-solid'
                        >
                        </Field>
                    </div>
                </div>
               
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className ='required'>관리자</span>
                    </label>

                    <div className='position-relative'>
                        <Field
                            type='text'
                            className='form-control form-control-solid'
                            placeholder=''
                            name='owner'
                        />
                    </div>
                </div>

            </div>
            <div className='row mb-12'>
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>수집주기</span>
                    </label>

                    <div className='position-relative'>
                        <Field
                            type='text'
                            className='form-control form-control-solid'
                            placeholder=''
                            name='schedule_interval'
                            value={CronValue}

                        />
                    </div>
                </div>
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>클릭</span>
                    </label>

                    <div className='position-relative'>
                        <SourceModal ></SourceModal>
                    </div>
                </div>
            </div>
         
        </div>
    )
}

export { FlowFileCreate }
