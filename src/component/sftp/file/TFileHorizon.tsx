import {FC, useEffect, useRef, useState} from 'react'
import {Form, Formik, FormikValues} from 'formik'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {StepperComponent} from '../../../_metronic/assets/ts/components'
import {KTSVG} from '../../../_metronic/helpers'
import {customAxios, customAxiosAirflow} from '../../../apis/utils'
import {
  SftpInfo,
  SftpInitValues,
  createAccountSchemas,
} from '../../../app/modules/wizards/components/CreateAccountWizardHelper'
import {RootState} from '../../../redux/stores'
import {SftpInfoCreate} from './SftpInfoCreate'
import {SftpInfoCreateConfirm} from './SftpInfoCreateConfirm'
import {SftpnfoConnectionTest} from './SftpnfoConnectionTest'

const TFileHorizon: FC = () => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0])
  const [initValues, setInitValues] = useState<SftpInfo>(SftpInitValues)
  const [isSubmitButton, setSubmitButton] = useState<boolean>(false)
  const [checkDisabled, setCheckDisabled] = useState<boolean>(true)
  const [sftpConButton, setSftpConButton] = useState<boolean>(true)
  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
  }
  const connection_id = useSelector((state: RootState) => state.cronreducer.connection_id)
  const connection_id_message = useSelector(
    (state: RootState) => state.cronreducer.connection_id_message
  )
  const connection_name = useSelector((state: RootState) => state.cronreducer.connection_name)
  const connection_name_message = useSelector(
    (state: RootState) => state.cronreducer.connection_name_message
  )

  const connection_type = useSelector(
    (state: RootState) => state.connectionSFTPreducer.state.connection_type
  )
  const host = useSelector((state: RootState) => state.connectionSFTPreducer.state.host)
  const login = useSelector((state: RootState) => state.connectionSFTPreducer.state.login)
  const password = useSelector((state: RootState) => state.connectionSFTPreducer.state.password)
  const port = useSelector((state: RootState) => state.connectionSFTPreducer.state.port)
  const sftpmessage = useSelector((state: RootState) => state.cronreducer.connectionSftpMessage)
  const navigate = useNavigate()
  const prevStep = () => {
    if (!stepper.current) {
      return
    }
    setSubmitButton(stepper.current.currentStepIndex === stepper.current.totatStepsNumber! - 1)
    stepper.current.goPrev()
    setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex - 1])
  }
  const submitStep = (values: SftpInfo, actions: FormikValues) => {
    if (!stepper.current) {
      return setInitValues(values)
    }
    values.connection_id = connection_id
    values.connection_name = connection_name
    values.connection_type = connection_type
    values.login = login
    values.password = password
    values.host = host
    values.port = port
    setInitValues(values)
    setSubmitButton(stepper.current.currentStepIndex === stepper.current.totatStepsNumber! - 1)
    setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex])
    if (stepper.current.currentStepIndex !== stepper.current.totatStepsNumber) {
      stepper.current.goNext()
    } else {
      stepper.current.goto(1)
      actions.resetForm()
    }
  }
  useEffect(() => {
    if (!stepperRef.current) {
      return
    }
    loadStepper()
  }, [stepperRef])
  useEffect(() => {
    if (
      connection_id_message === '가능' &&
      connection_name_message === '가능' &&
      connection_id !== '' &&
      connection_name !== ''
    ) {
      setCheckDisabled(false)
    } else {
      setCheckDisabled(true)
    }
    if (sftpmessage === 'Success') {
      setSftpConButton(false)
    } else {
      setSftpConButton(true)
    }
    //ssh메세지로ㅓ 첫번째ㅔ 버튼 disabled 처리하는거 넣기
  })
  const JpaSave = () => {
    if (window.confirm('생성 하시겠습니까?')) {
      customAxiosAirflow
        .post('post', {
          dags: 'connections',
          connection_id: initValues.connection_id,
          conn_type: initValues.connection_type,
          host: initValues.host,
          login: initValues.login,
          password: initValues.password,
          port: initValues.port,
          extra: initValues.extra,
          description: initValues.description,
        })
        .then(function () {
          customAxios.post('connection/save', initValues).then(function (response) {
            console.log(initValues)
            console.log(response)
            navigate('/dashboard')
            toast.success(`SFTP ${connection_name} 생성 완료`)
          })
        })
    }
  }
  return (
    <div className='card'>
      <div className='card-body'>
        <div
          ref={stepperRef}
          className='stepper stepper-links d-flex flex-column pt-15'
          id='kt_create_account_stepper'
        >
          <div className='stepper-nav mb-5'>
            <div className='stepper-item current' data-kt-stepper-element='nav'>
              <h3 className='stepper-title'>FRH서버접속</h3>
            </div>
            <div className='stepper-item' data-kt-stepper-element='nav'>
              <h3 className='stepper-title'>추가 설정</h3>
            </div>
            <div className='stepper-item' data-kt-stepper-element='nav'>
              <h3 className='stepper-title'>입력확인</h3>
            </div>
          </div>

          <Formik validationSchema={currentSchema} initialValues={initValues} onSubmit={submitStep}>
            {() => (
              <Form className='mx-auto mw-600px w-100 pt-15 pb-10' id='kt_create_account_form'>
                <div className='current' data-kt-stepper-element='content'>
                  <SftpnfoConnectionTest />
                </div>

                <div data-kt-stepper-element='content'>
                  <SftpInfoCreate></SftpInfoCreate>
                </div>
                <div data-kt-stepper-element='content'>
                  <SftpInfoCreateConfirm></SftpInfoCreateConfirm>
                </div>

                <div className='d-flex flex-stack pt-15'>
                  <div className='mr-2'>
                    <button
                      onClick={prevStep}
                      type='button'
                      className='btn btn-lg btn-light-success me-3'
                      data-kt-stepper-action='previous'
                    >
                      <KTSVG
                        path='/media/icons/duotune/arrows/arr063.svg'
                        className='svg-icon-4 me-1'
                      />
                      Back
                    </button>
                  </div>

                  <div>
                    {stepper.current?.currentStepIndex === 1 ||
                    stepper.current?.currentStepIndex === undefined ? (
                      <button
                        type='submit'
                        className='btn btn-lg btn-success me-3'
                        disabled={sftpConButton}
                      >
                        <span className='indicator-label'>
                          Continue
                          <KTSVG
                            path='/media/icons/duotune/arrows/arr064.svg'
                            className='svg-icon-3 ms-2 me-0'
                          />
                        </span>
                      </button>
                    ) : stepper.current?.currentStepIndex === 2 ? (
                      <button
                        type='submit'
                        disabled={checkDisabled}
                        className='btn btn-lg btn-success me-3'
                      >
                        {' '}
                        <span className='indicator-label'>
                          Continue
                          <KTSVG
                            path='/media/icons/duotune/arrows/arr064.svg'
                            className='svg-icon-3 ms-2 me-0'
                          />
                        </span>
                      </button>
                    ) : (
                      <button
                        type='submit'
                        onClick={JpaSave}
                        className='btn btn-lg btn-success me-3'
                      >
                        <span className='indicator-label'>
                          {!isSubmitButton && 'Continue'}
                          {isSubmitButton && '생성'}
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export {TFileHorizon}
