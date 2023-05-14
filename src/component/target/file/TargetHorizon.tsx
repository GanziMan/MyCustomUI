import  {FC, useEffect, useRef, useState} from 'react'
import {KTSVG} from '../../../_metronic/helpers'
import {StepperComponent} from '../../../_metronic/assets/ts/components'
import {Formik, Form, FormikValues} from 'formik'
import {createAccountSchemas, createTargetSchemas, TargetCollection, TargetInitValues} from '../../../app/modules/wizards/components/CreateAccountWizardHelper'
import { TargetCreate } from './TargetCreate'
import { useNavigate } from 'react-router-dom'
import { TargetConnectionTest } from './TargetConnectionTest'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/stores'
import { TargetCreateConfirm } from './TargetCreateConfirm'
import { toast } from 'react-toastify'
import { customAxios } from '../../../apis/utils'

const TargetHorizon: FC = () => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(createTargetSchemas[0])
  const [initValues,setInitValues] = useState<TargetCollection>(TargetInitValues)
  const [isSubmitButton, setSubmitButton] = useState(false)
  const targetNameMessage = useSelector((state:RootState) => state.cronreducer.targetname)
  const [secondStepDisabled,setSecondStepDisabled] = useState(true);
  const targetnamevalue=  useSelector((state:RootState) => state.cronreducer.targetnamevalue);
  const targetconid :any = useSelector((state:RootState) => state.cronreducer.targetconid);
  const navigate = useNavigate();
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
  const submitStep = (values: TargetCollection, actions: FormikValues) => {
    if (!stepper.current) {
      return setInitValues(values);
    }
    values.target_name=targetnamevalue;
    values.target_conn_id = {id:targetconid};
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

  const JpaSave = () =>{
    if (window.confirm("생성 하시겠습니까?")) {
      customAxios.post("target/save",initValues)
      .then(function (response) {
        console.log(response);
       
      }).catch(function (error) {
      });
      navigate("/dashboard");
      toast.success(`${targetnamevalue} 타겟 생성 완료`);
    } else {
    }
  }
  //ssh메세지로 첫번째 버튼 disabled 처리하기
  useEffect(()=>{
    if(targetNameMessage === "중복" || targetNameMessage === "value is null"){
      setSecondStepDisabled(true);
    }else{
      setSecondStepDisabled(false);
    }
  })
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
              <h3 className='stepper-title'>SSH 접속 </h3>
            </div>

            <div className='stepper-item' data-kt-stepper-element='nav'>
              <h3 className='stepper-title'>타겟설정</h3>
            </div>

            
           <div className='stepper-item' data-kt-stepper-element='nav'>
              <h3 className='stepper-title'>입력결과</h3>
            </div>
          </div>

          <Formik validationSchema={currentSchema} initialValues={initValues} onSubmit={submitStep}>
            {() => (
              <Form className='mx-auto mw-600px w-100 pt-15 pb-10' id='kt_create_account_form'>
                <div className='current' data-kt-stepper-element='content'>
                <TargetConnectionTest />
                </div>

                <div data-kt-stepper-element='content'>
                <TargetCreate />
                </div>

                 <div data-kt-stepper-element='content'>
                <TargetCreateConfirm></TargetCreateConfirm>
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
                  {
                      stepper.current?.currentStepIndex === 1 || stepper.current?.currentStepIndex === undefined ? <button type='submit' className='btn btn-lg btn-success me-3' disabled={false}>
                        <span className='indicator-label'>
                          {!isSubmitButton && 'Continue'}
                          {isSubmitButton && '생성'}
                          <KTSVG
                            path='/media/icons/duotune/arrows/arr064.svg'
                            className='svg-icon-3 ms-2 me-0'
                          />
                        </span>
                      </button> : stepper.current?.currentStepIndex === 2  ? <button type='submit' disabled={secondStepDisabled} className='btn btn-lg btn-success me-3'>
                        <span className='indicator-label'>
                          {!isSubmitButton && 'Continue'}
                          {isSubmitButton && '생성'}
                          <KTSVG
                            path='/media/icons/duotune/arrows/arr064.svg'
                            className='svg-icon-3 ms-2 me-0'
                          />
                        </span>
                      </button> : <button type='submit' className='btn btn-lg btn-success me-3' onClick={JpaSave}>
                        <span className='indicator-label'>
                          {!isSubmitButton && 'Continue'}
                          {isSubmitButton && '생성'}
                        </span>
                      </button>
                    }
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

export {TargetHorizon}
