import { FC, useEffect, useRef, useState } from 'react'
import { KTSVG } from '../../../_metronic/helpers'
import { StepperComponent } from '../../../_metronic/assets/ts/components'
import { Formik, Form, FormikValues } from 'formik'
import { createAccountSchemas, DBInfoInitValues, SDBInfo } from '../../../app/modules/wizards/components/CreateAccountWizardHelper'
import { DBInfoCreate } from './DBInfoCreate'
import { DBInfoCreateConfirm } from './DBInfoCreateConfirm'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/stores'
import { DBInfoConnectionTest } from './DBInfoConnectionTest'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { customAxios, customAxiosAirflow } from '../../../apis/utils'

//api
const DBInfoHorizon: FC = () => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0])
  const [initValues, setInitValues] = useState<SDBInfo>(DBInfoInitValues)
  const [isSubmitButton, setSubmitButton] = useState(false)
  const [checkDisabled, setCheckDisabled] = useState(true);
  const connection_id = useSelector((state: RootState) => state.cronreducer.connection_dbid);
  const connection_id_message = useSelector((state: RootState) => state.cronreducer.connection_dbid_message);
  const connection_name = useSelector((state: RootState) => state.cronreducer.connection_dbname);
  const connection_name_message = useSelector((state: RootState) => state.cronreducer.connection_dbname_message);
  const connection_message = useSelector((state: RootState) => state.cronreducer.connectionMessage);
  const [connectionDisabled, setConnectionDisabled] = useState<boolean>(true);
  const connection_type = useSelector((state: RootState) => state.connectionreducer.state.connection_type);
  const description = useSelector((state: RootState) => state.connectionreducer.state.description);
  const extra = useSelector((state: RootState) => state.connectionreducer.state.extra);
  const host = useSelector((state: RootState) => state.connectionreducer.state.host);
  const login = useSelector((state: RootState) => state.connectionreducer.state.login);
  const password = useSelector((state: RootState) => state.connectionreducer.state.password);
  const port = useSelector((state: RootState) => state.connectionreducer.state.port);
  const schema = useSelector((state: RootState) => state.connectionreducer.state.schema);
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
  const submitStep = (values: SDBInfo, actions: FormikValues) => {
    if (!stepper.current) {
      return setInitValues(values);
    }
    values.connection_id = connection_id;
    values.connection_name = connection_name;
    values.connection_type = connection_type;
    values.description = description;
    values.extra = extra
    values.host = host;
    values.login = login;
    values.password = password;
    values.port = port;
    values.schema = schema;
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
    if(connection_id_message === "가능" && connection_name_message==="가능" && connection_id!=='' && connection_name !=='')
    {
      setCheckDisabled(false);
    }else{
      setCheckDisabled(true);
    }
    if (connection_message === "Success") {
      setConnectionDisabled(false);
    } else {
      setConnectionDisabled(true);
    }

  })
  const JpaSave = () => {
    if (window.confirm("생성 하시겠습니까?")) {

      customAxiosAirflow.post("post", { dags: "connections", connection_id: initValues.connection_id, conn_type: initValues.connection_type, host: initValues.host, login: initValues.login, password: initValues.password, port: initValues.port, schema: initValues.schema, description: initValues.description, extra: "{'schema': public}" })
        .then(function () {
          customAxios.post("connection/save", initValues)
            .then(function () {
              navigate("/dashboard");
              toast.info(`${connection_name} DB CONNECTION 등록`);
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
              <h3 className='stepper-title'>DB 접속정보세팅</h3>
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
                  <DBInfoConnectionTest />
                </div>

                <div data-kt-stepper-element='content'>
                  <DBInfoCreate />
                </div>

                <div data-kt-stepper-element='content'>
                  <DBInfoCreateConfirm></DBInfoCreateConfirm>
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
                      (stepper.current?.currentStepIndex === 2 || stepper.current?.currentStepIndex === undefined) ? <button type='submit' className='btn btn-lg btn-success me-3' disabled={checkDisabled}>
                        <span className='indicator-label'>
                          {'Continue'}
                          <KTSVG
                            path='/media/icons/duotune/arrows/arr064.svg'
                            className='svg-icon-3 ms-2 me-0'
                          />
                        </span>
                      </button> : stepper.current?.currentStepIndex === 1 || stepper.current?.currentStepIndex === undefined ? <button type='submit' className='btn btn-lg btn-success me-3' disabled={connectionDisabled}>
                        <span className='indicator-label'>
                          {'Connection Test'}
                          <KTSVG
                            path='/media/icons/duotune/arrows/arr064.svg'
                            className='svg-icon-3 ms-2 me-0'
                          />

                        </span>
                      </button> : <button type='submit' className='btn btn-lg btn-success me-3' onClick={JpaSave} disabled={connectionDisabled}>
                        <span className='indicator-label'>
                          {'생성'}
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

export { DBInfoHorizon }
