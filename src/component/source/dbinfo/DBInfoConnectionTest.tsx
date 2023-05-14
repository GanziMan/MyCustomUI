import { FC, useEffect, useState } from 'react'
import { Field } from 'formik'
import { useDispatch } from 'react-redux';
import {connectionMessage_REQ, connectionTest_REQ } from '../../../redux/actions/creatorActions';
import { customAxiosConnection } from '../../../apis/utils';

const DBInfoConnectionTest: FC = () => {
    const dispatch=useDispatch()

    const [dbID, setDBId] = useState<string>('');
    const DBIdchange = (e:any) => {
        setDBId(e.target.value);
    }
    const [dbPassword, setDBPassword] = useState<string>('');
    const DBPasswordChange = (e:any) => {
        setDBPassword(e.target.value);
    }
    const [dbSchema, setDBSchema] = useState<string>('');
    const DBSchemaChange = (e:any) => {
        setDBSchema(e.target.value);
    }
    const [dbHost, setDBHost] = useState<string>('');
    const DBHostChange = (e:any) => {
        setDBHost(e.target.value);
    }
    const [dbPort, setDBPort] = useState<string>('');
    const DBPortChange = (e:any) => {
        setDBPort(e.target.value);
    }
    const [dbExtra, setDBExtra] = useState<string>('');
    const [dbExtra2, setDBExtra2]  = useState<string>('');
    const DBExtraChange = (e:any) => {
        setDBExtra2(e.target.value);
       if(dbType === "ORACLE"){
        setDBExtra(`{'SID': ${e.target.value}}`);
    }else{
        setDBExtra(`{'schema': ${e.target.value}}`);
    }
    }
    const [dbType, setDBType] = useState<string>('');
    const DBTypeChange = (e:any) => {
        setDBType(e.target.value);
    }
    const [dbDescription, setDBDescription] = useState<string>('');
    const DBDescriptionChange = (e:any) => {
        setDBDescription(e.target.value);
    }
    const [connectionMessage,setConnectionMessage] = useState<string|any>('');
    const test:any = {connection_type:dbType,login:dbID,password:dbPassword,host:dbHost,port:dbPort,schema:dbSchema,extra:dbExtra,description:dbDescription};
    const ConnectionTest = () =>{
        customAxiosConnection.post("db",{connection_type:dbType,login:dbID,password:dbPassword,host:dbHost,port:dbPort,schema:dbSchema,extra:dbExtra,description:dbDescription})
        .then(function (response) {
         setConnectionMessage(response.data.message);
         dispatch(connectionTest_REQ(test));
        })
      }
      useEffect(()=>{
        dispatch(connectionMessage_REQ(connectionMessage));
      },[ConnectionTest])
    return (
        <div className='w-100'>
            <div className='pb-10 pb-lg-15'>
                <h2 className='fw-bolder text-dark'>DB 접속정보 입력</h2>
            </div>
        
            <div className='row mb-12'>
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>DB 아이디</span>
                    </label>

                    <div className='position-relative'>
                        <Field
                            type='text'
                            className='form-control form-control-solid'
                            placeholder=''
                            name='login'
                            onChange={DBIdchange}
                            value={dbID}
                        />
                    </div>
                </div>
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>DB 비밀번호</span>
                    </label>

                    <div className='position-relative'>
                        <Field
                            type='password'
                            className='form-control form-control-solid'
                            placeholder=''
                            name='password'
                            onChange={DBPasswordChange}
                            value={dbPassword}
                        />
                    </div>
                </div>


            </div>


            <div className='row mb-12'>
            <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>DB 타입</span>
                    </label>
                    <div className='position-relative'>
                        <Field
                            as='select'
                            name='connection_type'
                            className='form-select form-select-lg form-select-solid'
                            onChange={DBTypeChange}
                            value={dbType}
                        >
                            <option>선택</option>
                            <option value='ORACLE'>Oracle</option>
                            <option value='MYSQL'>Mysql</option>
                            <option value='POSTGRES'>Postgres</option>
                        </Field>
                    </div>
                </div>
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>DB 이름</span>
                    </label>

                    <div className='position-relative'>
                        {
                            dbType === "MYSQL" || dbType === "POSTGRES" ? <> <Field
                                type='text'
                                className='form-control form-control-solid'
                                placeholder=''
                                name='schema'
                                onChange={DBSchemaChange}
                                value={dbSchema}
                                disabled={false}
                            /></> : <> <Field
                                type='text'
                                className='form-control form-control-solid'
                                placeholder='Oracle일 경우 해당이 되지 않습니다.'
                                name='schema'
                                value={""}
                                disabled={true}
                            
                            /></>
                        }
                    </div>
                </div>
              

            </div>
            <div className='row mb-12'>
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>포트</span>
                    </label>

                    <div className='position-relative'>
                        <Field
                            type='text'
                            className='form-control form-control-solid'
                            placeholder='ex) 5432'
                            name='port'
                            onChange={DBPortChange}
                            value={dbPort}
                        />
                    </div>
                </div>

                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>스키마</span>
                    </label>

                    <div className='position-relative'>
                    <Field
                                type='text'
                                className='form-control form-control-solid'
                                name='extra'
                                disabled={false}
                                onChange={DBExtraChange}
                                value={dbExtra2}
                            />

                    </div>
                </div>

            </div>

            <div className='row mb-12'>
            <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>호스트 서버</span>
                    </label>

                    <div className='position-relative'>
                        <Field
                            type='text'
                            className='form-control form-control-solid'
                            placeholder='ex) 192.x.x.x'
                            name='host'
                            onChange={DBHostChange}
                            value={dbHost}
                        />
                    </div>
                </div>

                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>Description</span>
                    </label>

                    <div className='position-relative'>
                        <Field
                            type='text'
                            className='form-control form-control-solid'
                            name='description'
                            onChange={DBDescriptionChange}
                            value={dbDescription}
                        />
                    </div>
                </div>

            </div>
            <div className='row mb-12'>

                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>Connection TEST</span>
                    </label>
                    
                    <div className='position-relative'>
                        <input
                            type='button'
                            className='btn btn-lg btn-light-success me-3'
                            name='description'
                            onClick={ConnectionTest}
                            value={"Connect"}
                        ></input>
                    </div>
                </div>
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>result</span>
                    </label>
                    
                    <div className='position-relative'>
                        {
                            connectionMessage === "Success" ? <div
                            className='btn btn-lg btn-light-success me-3'
                        >SUCCESS</div> : <div
                        className='btn btn-lg btn-light-danger me-3'
                    >{connectionMessage}</div>
                        }
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export { DBInfoConnectionTest }
