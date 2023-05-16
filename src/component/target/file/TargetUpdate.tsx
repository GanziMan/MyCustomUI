import {FC, useState} from 'react'
import {useSelector} from 'react-redux'
import {KTSVG} from '../../../_metronic/helpers'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {RootState} from '../../../redux/stores'
import {customAxios} from '../../../apis/utils'

const TargetUpdate: FC = () => {
  const navigate = useNavigate()
  const prevTarget_name = useSelector((state: RootState) => state.cronreducer.update_target_name)
  const prevTarget_location = useSelector(
    (state: RootState) => state.cronreducer.update_target_location
  )
  const prevSave_mode = useSelector((state: RootState) => state.cronreducer.update_target_savemode)
  const prevTarget_id = useSelector((state: RootState) => state.cronreducer.update_target_id)
  const prevTarget_connid = useSelector(
    (state: RootState) => state.cronreducer.update_target_connid
  )
  const TargetNameChange = (e: any) => {
    setTarget_name(e.target.value)
  }
  const TargetLocationChange = (e: any) => {
    setTarget_location(e.target.value)
  }

  const SaveModeChagnge = (e: any) => {
    setSave_mode(e.target.value)
  }
  const [target_name, setTarget_name] = useState<string>(prevTarget_name)
  const [target_location, setTarget_location] = useState<string>(prevTarget_location)
  const [save_mode, setSave_mode] = useState<string>(prevSave_mode)
  const Update = () => {
    if (window.confirm('저장 하시겠습니까?')) {
      customAxios
        .patch('target/update', {
          id: prevTarget_id,
          target_name: target_name,
          target_location: target_location,
          save_mode: save_mode,
          target_conn_id: {id: prevTarget_connid},
        })
        .then(function (response) {
          toast.info(`${prevTarget_name} TARGET UPDATE 완료`)
          navigate('/dashboard')
        })
    }
  }
  return (
    <div className='card'>
      <div className='card-body'>
        <div className='w-100'>
          <div className='pb-10 pb-lg-15'>
            <h2 className='fw-bolder text-dark'>{prevTarget_name} Update</h2>
          </div>
          <div className='row mb-12'>
            <div className='col-md-12 fv-row'>
              <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                <span className='required'>Target_name</span>
              </label>
              <div className='position-relative'>
                <input
                  type='text'
                  className='form-control form-control-solid'
                  placeholder='ex) CDW_FRH_SERVER'
                  name='target_name'
                  defaultValue={prevTarget_name}
                  onChange={TargetNameChange}
                />
              </div>
            </div>
          </div>

          <div className='row mb-12'>
            <div className='col-md-12 fv-row'>
              <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                <span className='required'>Target_Location</span>
              </label>
              <div className='position-relative'>
                <input
                  type='text'
                  className='form-control form-control-solid'
                  placeholder='ex) CDW_FRH_SERVER'
                  name='target_location'
                  defaultValue={prevTarget_location}
                  onChange={TargetLocationChange}
                />
              </div>
            </div>
          </div>

          <div className='row mb-12'>
            <div className='col-md-12 fv-row'>
              <label className='d-flex align-items-center fs-6 fw-bold form-label mb-2'>
                <span className='required'>Save_mode</span>
              </label>
              <div className='position-relative'>
                <input
                  type='text'
                  className='form-control form-control-solid'
                  placeholder='ex) CDW_FRH_SERVER'
                  name='save_mode'
                  defaultValue={prevSave_mode}
                  onChange={SaveModeChagnge}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex flex-stack pt-15'>
          <div className='mr-2'>
            <button
              type='submit'
              className='btn btn-lg btn-success me-3'
              onClick={() => {
                navigate('/dashboard')
              }}
            >
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

export {TargetUpdate}
