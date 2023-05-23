import {FC, useEffect, useRef, useState} from 'react'
import {KTSVG} from '../../../_metronic/helpers'
import {StepperComponent} from '../../../_metronic/assets/ts/components'
import {Formik, Form, FormikValues} from 'formik'
import {
  createAccountSchemas,
  FileCollection,
  FileCollectionInitValues,
} from '../../../app/modules/wizards/components/CreateAccountWizardHelper'
import {LocalPath} from './LocalPath'
import {FileCreate} from './FileCreate'
import {useSelector} from 'react-redux'
import {RootState} from '../../../redux/stores'
import {Step3} from '../../../app/modules/wizards/components/steps/Step3'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {customAxios} from '../../../apis/utils'

const FileHorizon: FC = () => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0])
  const [initValues, setInitValues] = useState<FileCollection>(FileCollectionInitValues)
  const [isSubmitButton, setSubmitButton] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true)
  const selector = useSelector((state: RootState) => state.cronreducer.message)
  const cronvalue = useSelector((state: RootState) => state.cronreducer.cron)
  const pathvalue = useSelector((state: RootState) => state.cronreducer.pathvalue)
  const sourcename = useSelector((state: RootState) => state.cronreducer.sourcenamecheck)
  const [sourceCheckDisabled, setSourceCheckDisabled] = useState<boolean>(true)
  const navigate = useNavigate()
  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
  }
  const prevStep = () => {
    if (!stepper.current) {
      return
    }
    setSubmitButton(stepper.current.currentStepIndex === stepper.current.totatStepsNumber! - 1)
    stepper.current.goPrev()
    setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex - 1])
  }
  const submitStep = (values: FileCollection, actions: FormikValues) => {
    if (!stepper.current) {
      return setInitValues(values)
    }
    values.schedule_interval = cronvalue
    values.local_path = pathvalue
    values.source_name = sourcename
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
    if (selector === '0') {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
    if (sourcename === '중복' || sourcename === 'value is null') {
      setSourceCheckDisabled(true)
    } else {
      setSourceCheckDisabled(false)
    }
  })
  const JpaSave = () => {
    if (window.confirm('생성 하시겠습니까?')) {
      customAxios.post('source/save', initValues)
      navigate('/dashboard')
      toast.success(`${sourcename} 소스 생성 완료`)
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
              <h3 className='stepper-title'>로컬경로</h3>
            </div>

            <div className='stepper-item' data-kt-stepper-element='nav'>
              <h3 className='stepper-title'>파일수집</h3>
            </div>

            <div className='stepper-item' data-kt-stepper-element='nav'>
              <h3 className='stepper-title'>입력결과</h3>
            </div>
          </div>

          <Formik validationSchema={currentSchema} initialValues={initValues} onSubmit={submitStep}>
            {() => (
              <Form className='mx-auto mw-600px w-100 pt-15 pb-10' id='kt_create_account_form'>
                <div className='current' data-kt-stepper-element='content'>
                  <LocalPath />
                </div>

                <div data-kt-stepper-element='content'>
                  <FileCreate />
                </div>

                <div data-kt-stepper-element='content'>
                  <Step3></Step3>
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
                        disabled={buttonDisabled}
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
                        disabled={sourceCheckDisabled}
                        className='btn btn-lg btn-success me-3'
                      >
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
                        className='btn btn-lg btn-success me-3'
                        onClick={JpaSave}
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

export {FileHorizon}
