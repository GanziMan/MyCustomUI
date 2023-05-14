import { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { sourcenameCheck_REQ } from '../../../redux/actions/creatorActions'
import { customAxios } from '../../../apis/utils'

const FileCreate: FC = () => {
    const dispatch = useDispatch();
    const [sourceName, setSourceName] = useState<any>('');
    const sourceNameChange = (e: any) => {
        setSourceName(e.target.value);
    }
    const [message, setMeesage] = useState('');
    useEffect(() => {
        customAxios.get(`source/duplicateCheck?value=${sourceName}`)
            .then(function (response) {
                if (response.data.message === "가능") {
                    dispatch(sourcenameCheck_REQ(sourceName));
                }
                else {
                    dispatch(sourcenameCheck_REQ(response.data.message));
                }
                setMeesage(response.data.message);
            })
    })
    return (
        <div className='w-100'>
            <div className='pb-10 pb-lg-15'>
                <h2 className='fw-bolder text-dark'>파일 수집</h2>
            </div>
            <div className='row mb-12'>


                <div className='col-md-12 fv-row'>
                    <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                        <span className='required'>소스이름</span>
                    </label>

                    <div className='position-relative'>
                        <input
                            type='text'
                            className='form-control form-control-solid'
                            placeholder=''
                            name='source_name'
                            onChange={sourceNameChange}
                            
                        />
                    </div>
                </div>
            </div>
            <div className='row mb-12'>
                <div className='col-md-12 fv-row'>
                    <div className='position-relative'>
                        <div
                            className='form-control form-control-solid'
                            placeholder=''
                        >
                            {
                                message === "가능" ? <span className='text-success'>{message} Source 이름 입니다.</span> : message === "value is null" ? <span className='text-gray-400'>이름을 입력해주세요.</span> : <span className='text-danger'>{message} Source 이름 입니다.</span>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { FileCreate }
