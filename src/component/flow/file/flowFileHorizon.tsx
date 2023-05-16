import {Form, Formik, FormikValues} from 'formik'
import {FC, useEffect, useRef, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {Loader} from '../../../Loader'
import {StepperComponent} from '../../../_metronic/assets/ts/components'
import {KTSVG} from '../../../_metronic/helpers'
import {customAxios, customAxiosAirflow} from '../../../apis/utils'
import {
  Flowfile,
  FlowfileInitValues,
  createAccountSchemas,
} from '../../../app/modules/wizards/components/CreateAccountWizardHelper'
import {RootState} from '../../../redux/stores'
import {FlowtargetCon} from '../flowtargetCon'
import {FlowFileConfirm} from './flowFileConfirm'
import {FlowFileCreate} from './flowFileCreate'
import {FlowsourcefileCon} from './flowsourcefileCon'

const FlowFileHorizon: FC = () => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0])
  const [initValues, setInitValues] = useState<Flowfile>(FlowfileInitValues)
  const [isSubmitButton, setSubmitButton] = useState(false)
  const cronvalue = useSelector((state: RootState) => state.cronreducer.cron)
  const dag_name = useSelector((state: RootState) => state.cronreducer.sourcenamecheck)
  const [sourceCheckDisabled, setSourceCheckDisabled] = useState<boolean>(true)
  const sourceid: any = useSelector((state: RootState) => state.cronreducer.sourceid)
  const targetid: any = useSelector((state: RootState) => state.cronreducer.targetid)
  const filetypelist = useSelector((state: RootState) => state.cronreducer.filetypelist)
  const save_mode = useSelector((state: RootState) => state.cronreducer.save_mode)
  const target_conn_id = useSelector((state: RootState) => state.cronreducer.target_conn_id)
  const target_location = useSelector((state: RootState) => state.cronreducer.target_location)
  // dagcreate
  const trans_type = useSelector((state: RootState) => state.cronreducer.trans_type)
  const local_path = useSelector((state: RootState) => state.cronreducer.pathvalue)
  const flow_file_name = useSelector((state: RootState) => state.cronreducer.flow_file_name)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(null)
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
  const submitStep = (values: Flowfile, actions: FormikValues) => {
    if (!stepper.current) {
      return setInitValues(values)
    }
    values.schedule_interval = cronvalue
    values.sensor_id = flow_file_name
    values.file_name = flow_file_name
    values.file_type_list = filetypelist
    values.trans_type = trans_type
    values.local_path = local_path.replace('/' + flow_file_name, '')
    values.save_mode = save_mode
    values.source_id = {id: sourceid}
    values.target_id = {id: targetid}
    values.target_location = target_location
    values.target_conn_id = target_conn_id
    values.dag_name = dag_name
    setInitValues(values)
    setSubmitButton(stepper.current.currentStepIndex === stepper.current.totatStepsNumber! - 1)
    setCurrentSchema(createAccountSchemas[stepper.current?.currentStepIndex])
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
  const confFile = {
    params: {
      trans_type: initValues.trans_type,
      owner: initValues.owner,
      sensor_id: initValues.sensor_id,
      save_mode: initValues.save_mode,
      data_type: initValues.data_type,
      file_type_list: initValues.file_type_list,
      delimiter: initValues.delimiter,
      schedule_interval: initValues.schedule_interval,
      local_path: initValues.local_path,
      target_location: initValues.target_location + '/' + initValues.sensor_id,
      target_conn_id: initValues.target_conn_id,
      file_name: initValues.file_name,
      privacy_on_off: initValues.privacy_on_off,
    },
  }
  const dags = 'dags/Dag_Creater/dagRuns'

  useEffect(() => {
    if (dag_name === '중복' || dag_name === undefined || dag_name === '') {
      setSourceCheckDisabled(true)
    } else {
      setSourceCheckDisabled(false)
    }
  })
  console.log(dag_name)
  const JpaSave = async () => {
    try {
      const response: any = await customAxiosAirflow.post(`post`, {dags, conf: confFile})
      toast.info(`${dag_name} DAG 생성 중`)
      console.log(response)
      setLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 8000))
      setLoading(false)
      const response4 = await customAxiosAirflow.get(
        `get?dags=dags/Dag_Creater/dagRuns/${response.data.data.body.dag_run_id.replace(
          '+',
          '%2B'
        )}`
      )
      if (response4.data.data.body.state === 'success') {
        await customAxios.post('flow/save', initValues)
        toast.info(`${dag_name} DAG 등록 완료`)
        navigate('/dashboard')
        await customAxiosAirflow.get(
          `get?dags=dags/Dag_Creater/dagRuns/${response.data.data.body.dag_run_id.replace(
            '+',
            '%2B'
          )}`
        )
      } else if (response4.data.data.body.state === 'failed') {
        toast.info(`${dag_name} DAG 등록에 실패 하였습니다.`)
      }
    } catch (err) {
      console.log('Error >>' + err)
    }
  }
  if (loading) return <Loader type='spin' color='#87CEFA' message={'DAG이 생성중입니다.'} />
  else
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
                <h3 className='stepper-title'>Source조회</h3>
              </div>
              <div className='stepper-item' data-kt-stepper-element='nav'>
                <h3 className='stepper-title'>Dag설정</h3>
              </div>
              <div className='stepper-item' data-kt-stepper-element='nav'>
                <h3 className='stepper-title'>Target조회</h3>
              </div>
              <div className='stepper-item' data-kt-stepper-element='nav'>
                <h3 className='stepper-title'>입력결과</h3>
              </div>
            </div>
            <Formik
              validationSchema={currentSchema}
              initialValues={initValues}
              onSubmit={submitStep}
            >
              {() => (
                <Form className='mx-auto mw-600px w-100 pt-15 pb-10' id='kt_create_account_form'>
                  <div className='current' data-kt-stepper-element='content'>
                    <FlowsourcefileCon></FlowsourcefileCon>
                  </div>
                  <div data-kt-stepper-element='content'>
                    <FlowFileCreate />
                  </div>
                  <div data-kt-stepper-element='content'>
                    <FlowtargetCon></FlowtargetCon>
                  </div>
                  <div data-kt-stepper-element='content'>
                    <FlowFileConfirm></FlowFileConfirm>
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
                          disabled={false}
                        >
                          <span className='indicator-label'>
                            {!isSubmitButton && 'Continue'}
                            {isSubmitButton && '생성'}
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
                            {!isSubmitButton && 'Continue'}
                            {isSubmitButton && '생성'}
                            <KTSVG
                              path='/media/icons/duotune/arrows/arr064.svg'
                              className='svg-icon-3 ms-2 me-0'
                            />
                          </span>
                        </button>
                      ) : stepper.current?.currentStepIndex === 4 ? (
                        <button
                          type='submit'
                          disabled={sourceCheckDisabled}
                          onClick={JpaSave}
                          className='btn btn-lg btn-success me-3'
                        >
                          <span className='indicator-label'>
                            {!isSubmitButton && 'Continue'}
                            {isSubmitButton && '생성'}
                            <KTSVG
                              path='/media/icons/duotune/arrows/arr064.svg'
                              className='svg-icon-3 ms-2 me-0'
                            />
                          </span>
                        </button>
                      ) : (
                        <button type='submit' className='btn btn-lg btn-success me-3'>
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

export {FlowFileHorizon}
