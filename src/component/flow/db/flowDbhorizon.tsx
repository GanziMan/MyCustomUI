import  { FC, useEffect, useRef, useState } from 'react'

import { KTSVG } from '../../../_metronic/helpers'
import { StepperComponent } from '../../../_metronic/assets/ts/components'
import { Formik, Form, FormikValues } from 'formik'
import { createAccountSchemas, Flowdb, FlowdbInitValues} from '../../../app/modules/wizards/components/CreateAccountWizardHelper'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/stores'
import { FlowsourcedbCon } from './flowsourcedbCon'
import { FlowDBCreate } from './flowDBCreate'
import { FlowtargetCon } from '../flowtargetCon'
import { toast } from 'react-toastify'
import { FlowDBCreateConfirm } from './flowDBCreateConfirm'

import { customAxios, customAxiosAirflow } from '../../../apis/utils'

const FlowDbhorizon: FC = () => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0])
  const [initValues, setInitValues] = useState<Flowdb>(FlowdbInitValues)
  const [isSubmitButton, setSubmitButton] = useState(false);
  const cronvalue = useSelector((state:RootState)=> state.cronreducer.cron);
  const sourceid : any = useSelector((state:RootState) => state.cronreducer.sourceid);
  const targetid : any= useSelector((state:RootState) => state.cronreducer.targetid);
  const dag_name = useSelector((state: RootState) => state.cronreducer.sourcenamecheck);
  const dbms_type =useSelector((state:RootState) => state.cronreducer.dbms_type);
  const trans_type =useSelector((state:RootState) => state.cronreducer.trans_type);
  const save_mode =useSelector((state:RootState) => state.cronreducer.save_mode);
  const target_location =useSelector((state:RootState) => state.cronreducer.target_location);
  const target_conn_id =useSelector((state:RootState) => state.cronreducer.target_conn_id);
  const [sourceCheckDisabled, setSourceCheckDisabled] = useState<boolean>(false);
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
  const submitStep = (values: Flowdb, actions: FormikValues) => {
    if (!stepper.current) {
      return setInitValues(values);
    }
    values.schedule_interval=cronvalue;
    values.source_id={id:sourceid};
    values.dag_name = dag_name;
    values.sensor_id = values.engine_code_file_name;
    values.target_id = {id:targetid};
    values.dbms_type = dbms_type;
    values.trans_type = trans_type;
    values.save_mode=save_mode;
    values.target_location = target_location;
    values.target_conn_id =  target_conn_id;
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
  const confFile = { params: {trans_type: initValues.trans_type, owner: initValues.owner, sensor_id:initValues.sensor_id, save_mode:initValues.save_mode, schedule_interval:initValues.schedule_interval, db_conn_id:"", partition_size:initValues.partition_size,dbms_type:initValues.dbms_type,engine_code_file_name:initValues.engine_code_file_name,db_read_table_name:initValues.db_read_table_name,db_sql:initValues.db_sql,target_conn_id:initValues.target_conn_id,target_location:initValues.target_location} }
  const dags = "dags/Dag_Creater/dagRuns";
  const DagRunDB = async () => {
    try {
      const response:any = await customAxiosAirflow.post(`post`, { dags, conf: confFile });
      toast.info(`${dag_name} DAG 생성 중`);
      await new Promise(resolve => setTimeout(resolve, 8000));
      const response4 = await customAxiosAirflow.get(`get?dags=dags/Dag_Creater/dagRuns/${response.data.data.body.dag_run_id.replace("+","%2B")}`)
      console.log(response4.data.data.body.state);
      if(response4.data.data.body.state ==="success"){
        const response4 = await customAxios.post("flow/save", initValues)
        toast.info(`${dag_name} DAG 등록 완료`);
        await customAxiosAirflow.get(`get?dags=dags/Dag_Creater/dagRuns/${response.data.data.body.dag_run_id.replace("+","%2B")}`)
      }else if(response4.data.data.body.state === "failed"){
        toast.info(`${dag_name} DAG 등록에 실패 하였습니다.`);
      }
    } catch (err) {
      console.log("Error >>" + err);
    }  
  }
  useEffect(() => {
    if (dag_name === "중복") {
      setSourceCheckDisabled(true);
    }else{
      setSourceCheckDisabled(false);
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

          <Formik validationSchema={currentSchema} initialValues={initValues} onSubmit={submitStep}>
            {() => (
              <Form className='mx-auto mw-600px w-100 pt-15 pb-10' id='kt_create_account_form'>
                <div className='current' data-kt-stepper-element='content'>
                  <FlowsourcedbCon />
                </div>
                <div data-kt-stepper-element='content'>
                  <FlowDBCreate></FlowDBCreate>
                </div>
                <div data-kt-stepper-element='content'>
                  <FlowtargetCon></FlowtargetCon>
                </div>

                <div data-kt-stepper-element='content'>
                  <FlowDBCreateConfirm></FlowDBCreateConfirm>
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
                      </button> : stepper.current?.currentStepIndex === 2 ? <button type='submit' disabled={sourceCheckDisabled} className='btn btn-lg btn-success me-3'>
                        <span className='indicator-label'>
                          {!isSubmitButton && 'Continue'}
                          {isSubmitButton && '생성'}
                          <KTSVG
                            path='/media/icons/duotune/arrows/arr064.svg'
                            className='svg-icon-3 ms-2 me-0'
                          />
                        </span>
                      </button> :stepper.current?.currentStepIndex === 4 ? <button type='submit' disabled={sourceCheckDisabled} onClick={DagRunDB} className='btn btn-lg btn-success me-3'>
                        <span className='indicator-label'>
                          {!isSubmitButton && 'Continue'}
                          {isSubmitButton && '생성'}
                          <KTSVG
                            path='/media/icons/duotune/arrows/arr064.svg'
                            className='svg-icon-3 ms-2 me-0'
                          />
                        </span>
                      </button> : <button type='submit' className='btn btn-lg btn-success me-3'>
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

export { FlowDbhorizon }
