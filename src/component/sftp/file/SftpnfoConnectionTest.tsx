import { FC, useEffect, useState } from 'react'
import { Field } from 'formik'
import { useDispatch } from 'react-redux';
import { connectionSFTPMessage_REQ, connectionSFTP_REQ } from '../../../redux/actions/creatorActions';
import { customAxiosConnection } from '../../../apis/utils';

const SftpnfoConnectionTest: FC = () => {
    const dispatch = useDispatch();
    const [fileID, setFileId] = useState<any>('');
    const FIleIdchange = (e: any) => {
        setFileId(e.target.value);
    }
    const [FilePassword, setFilePassword] = useState<any>('');
    const FilePasswordChange = (e: any) => {
        setFilePassword(e.target.value);
    }
    const [fileHost, setFileHost] = useState<any>('');
    const FileHostChange = (e: any) => {
        setFileHost(e.target.value);
    }
    const [filePort, setFilePort] = useState<any>('');
    const FilePortChange = (e: any) => {
        setFilePort(e.target.value);
    }
    const [fileType, setFileType] = useState<any>('');
    const FileTypeChange = (e: any) => {
        setFileType(e.target.value);
    }
    const test: any = { connection_type: fileType, login: fileID, password: FilePassword, host: fileHost, port: filePort };
    const [connectionMessage, setConnectionMessage] = useState<any>();
    const [status, setStatus] = useState<string>('');
    const ConnectionTest = () => {
        customAxiosConnection.post("sftp", { connection_type: fileType, login: fileID, password: FilePassword, host: fileHost, port: filePort, extra: "true" })
            .then(function (response) {
                setConnectionMessage(response.data.message);
                setStatus(response.data.status);
                dispatch(connectionSFTP_REQ(test));
            })
    }
    useEffect(() => {
        dispatch(connectionSFTPMessage_REQ(connectionMessage));
    }, [ConnectionTest])
    return (
        <div className='w-100'>
            <div className='pb-10 pb-lg-15'>
                <h2 className='fw-bolder text-dark'>FRH서버접속</h2>
            </div>
            <div className='row mb-12'>
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>접속 아이디</span>
                    </label>

                    <div className='position-relative'>
                        <Field
                            type='text'
                            className='form-control form-control-solid'
                            placeholder=''
                            name='Username'
                            value={fileID}
                            onChange={FIleIdchange}
                        />
                    </div>
                </div>
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>접속비밀번호</span>
                    </label>

                    <div className='position-relative'>
                        <Field
                            type='password'
                            className='form-control form-control-solid'
                            placeholder=''
                            name='Password'
                            value={FilePassword}
                            onChange={FilePasswordChange}
                        />
                    </div>
                </div>


            </div>
            <div className='row mb-12'>
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>호스트</span>
                    </label>

                    <div className='position-relative'>
                        <Field
                            type='text'
                            className='form-control form-control-solid'
                            placeholder='ex) 192.x.x.x'
                            name='host'
                            value={fileHost}
                            onChange={FileHostChange}
                        />
                    </div>
                </div>
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>포트</span>
                    </label>

                    <div className='position-relative'>
                        <Field
                            type='text'
                            className='form-control form-control-solid'
                            placeholder='ex) 22'
                            name='Port'
                            value={filePort}
                            onChange={FilePortChange}
                        />
                    </div>
                </div>
            </div>
            <div className='row mb-12'>
                <div className='col-md-6 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>connection_Type</span>
                    </label>

                    <div className='position-relative'>
                        <select className='form-control form-control-solid' placeholder='SFTP' name='connection_type' value={fileType} onChange={FileTypeChange}>
                            <option defaultValue={""} >선택</option>
                            <option value="SFTP">SFTP</option>
                        </select>
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
                            status === "0000" ? <div
                                className='btn btn-lg btn-light-success me-3'
                            >{connectionMessage}</div> : <div
                                className='btn btn-lg btn-light-danger me-3'
                            >{connectionMessage}</div>}

                    </div>
                </div>
            </div>
        </div>
    )
}

export { SftpnfoConnectionTest }
