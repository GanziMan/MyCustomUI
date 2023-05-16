import {FC, useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {
  connectionID_Message_REQ,
  connectionID_REQ,
  connectionNAME_Message_REQ,
  connectionNAME_REQ,
} from '../../../redux/actions/creatorActions'
import {customAxios} from '../../../apis/utils'

const SftpInfoCreate: FC = () => {
  const dispatch = useDispatch()
  const [nameValue, setNameValue] = useState<any>('')
  const nameChange = (e: any) => {
    setNameValue(e.target.value)
  }
  const [idValue, setIdValue] = useState<any>('')
  const idChange = (e: any) => {
    setIdValue(e.target.value)
  }
  const [checkMessageID, setCheckMessageID] = useState<string>('')
  const [checkMessageName, setCheckMessageName] = useState<string>('')

  useEffect(() => {
    customAxios
      .get(`connection/duplicateCheck?value=${nameValue}&type=name`)
      .then(function (response) {
        dispatch(connectionNAME_REQ(nameValue))
        dispatch(connectionNAME_Message_REQ(response.data.message))
        setCheckMessageName(response.data.message)
      })
    customAxios
      .get(`connection/duplicateCheck?value=${idValue}&type=connection_id`)
      .then(function (response) {
        dispatch(connectionID_REQ(idValue))
        dispatch(connectionID_Message_REQ(response.data.message))
        setCheckMessageID(response.data.message)
      })
  })
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder text-dark'>SFTP 정보입력</h2>
      </div>
      <div className='row mb-12'>
        <div className='col-md-6 fv-row'>
          <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
            <span className='required'>커넥션 아이디</span>
          </label>
          <div className='position-relative'>
            <input
              type='text'
              className='form-control form-control-solid'
              placeholder='ex) CDW_FRH_SERVER'
              name='connection_id'
              onChange={idChange}
            />
          </div>
        </div>
        <div className='col-md-6 fv-row'>
          <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
            <span className='required'>중복 체크</span>
          </label>
          <div className='form-control form-control-solid' placeholder=''>
            {idValue === '' ? (
              <span className='text-danger'>SFTP커넥션 아이디를 입력해주세요.</span>
            ) : checkMessageID === '가능' ? (
              <span className='text-success'>{checkMessageName} 커넥션 이름 입니다.</span>
            ) : (
              <span className='text-danger'>{checkMessageName} 커넥션 이름 입니다.</span>
            )}
          </div>
        </div>
      </div>
      <div className='row mb-12'>
        <div className='col-md-6 fv-row'>
          <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
            <span className='required'>커넥션 이름</span>
          </label>
          <div className='position-relative'>
            <input
              type='text'
              className='form-control form-control-solid'
              placeholder='ex) 삼성서울병원전용서버'
              name='connection_name'
              onChange={nameChange}
            />
          </div>
        </div>
        <div className='col-md-6 fv-row'>
          <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
            <span className='required'>중복 체크</span>
          </label>
          <div className='form-control form-control-solid' placeholder=''>
            {
              nameValue === '' ? (
                <span className='text-danger'>SFTP커넥션 이름을 입력해주세요.</span>
              ) : checkMessageName === '가능' ? (
                <span className='text-success'>{checkMessageName} 커넥션 이름 입니다.</span>
              ) : (
                <span className='text-danger'>{checkMessageName} 커넥션 이름 입니다.</span>
              )
              // checkMessageName === "가능" ? <span className='text-success'>{checkMessageName} 커넥션 이름 입니다.</span> : <span className='text-danger'>{checkMessageName} 커넥션 이름 입니다.</span>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export {SftpInfoCreate}
