// Libraries
import {FC, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useLocation} from 'react-router-dom'

// Components
import {KTSVG} from '../../_metronic/helpers'
import {StatisticsWidget2} from '../../_metronic/partials/widgets'
import {customAxiosAirflow} from '../../apis/utils'
import {
  log_dagrunid_REQ,
  log_sensorid_REQ,
  log_taskid_REQ,
  log_tryNumber,
} from '../../redux/actions/creatorActions'
import {RootState} from '../../redux/stores'
import {LogModal} from './LogModal'

interface RouteState {
  state: {
    dag_run_id: string
    sensor_id: string
  }
}

const TaskList: FC = () => {
  const [tasks1, setTasks1] = useState<string>('')
  const [tasks2, setTasks2] = useState<string>('')
  const [tasks3, setTasks3] = useState<string>('')
  const [duration1, setDuration1] = useState<string>('')
  const [duration2, setDuration2] = useState<string>('')
  const [duration3, setDuration3] = useState<string>('')
  const [try_number1, setTry_number1] = useState<string>('')
  const [try_number2, setTry_number2] = useState<string>('')
  const [try_number3, setTry_number3] = useState<string>('')
  const [start_Date1, setStart_Date1] = useState<string>('')
  const [start_Date2, setStart_Date2] = useState<string>('')
  const [start_Date3, setStart_Date3] = useState<string>('')
  const [End_Date1, setEnd_Date1] = useState<string>('')
  const [End_Date2, setEnd_Date2] = useState<string>('')
  const [End_Date3, setEnd_Date3] = useState<string>('')
  const [task_state1, setState1] = useState<string>('')
  const [task_state2, setState2] = useState<string>('')
  const [task_state3, setState3] = useState<string>('')
  const [dag_run_id1, setDag_run_id1] = useState<string>('')
  const [dag_run_id2, setDag_run_id2] = useState<string>('')
  const [dag_run_id3, setDag_run_id3] = useState<string>('')

  const state = useLocation() as RouteState
  const dag_id = state.state?.dag_run_id.replace('+', '%2B')
  const sensor_id = useSelector((state: RootState) => state.cronreducer.sensor_id)
  const dispatch = useDispatch()

  useEffect(() => {
    customAxiosAirflow
      .get(`get?dags=dags/${sensor_id}/dagRuns/${dag_id}/taskInstances`)
      .then(function (response) {
        console.log(response)
        setTasks1(response.data.data.body.task_instances[0].task_id)
        setTasks2(response.data.data.body.task_instances[1].task_id)
        setTasks3(response.data.data.body.task_instances[2].task_id)
        setDuration1(response.data.data.body.task_instances[0].duration)
        setDuration2(response.data.data.body.task_instances[1].duration)
        setDuration3(response.data.data.body.task_instances[2].duration)
        setTry_number1(response.data.data.body.task_instances[0].try_number)
        setTry_number2(response.data.data.body.task_instances[1].try_number)
        setTry_number3(response.data.data.body.task_instances[2].try_number)
        setStart_Date1(response.data.data.body.task_instances[0].start_date)
        setStart_Date2(response.data.data.body.task_instances[1].start_date)
        setStart_Date3(response.data.data.body.task_instances[2].start_date)
        setEnd_Date1(response.data.data.body.task_instances[0].end_date)
        setEnd_Date2(response.data.data.body.task_instances[1].end_date)
        setEnd_Date3(response.data.data.body.task_instances[2].end_date)
        setState1(response.data.data.body.task_instances[0].state)
        setState2(response.data.data.body.task_instances[1].state)
        setState3(response.data.data.body.task_instances[2].state)
        setDag_run_id1(response.data.data.body.task_instances[0].dag_run_id)
        setDag_run_id2(response.data.data.body.task_instances[1].dag_run_id)
        setDag_run_id3(response.data.data.body.task_instances[2].dag_run_id)
      })
  }, [])
  const LogTask1 = () => {
    dispatch(log_dagrunid_REQ(dag_run_id1.replace('+', '%2B')))
    dispatch(log_sensorid_REQ(sensor_id))
    dispatch(log_taskid_REQ(tasks1))
    dispatch(log_tryNumber(try_number1))
  }
  const LogTask2 = () => {
    dispatch(log_dagrunid_REQ(dag_run_id2.replace('+', '%2B')))
    dispatch(log_sensorid_REQ(sensor_id))
    dispatch(log_taskid_REQ(tasks2))
    dispatch(log_tryNumber(try_number2))
  }
  const LogTask3 = () => {
    dispatch(log_dagrunid_REQ(dag_run_id3.replace('+', '%2B')))
    dispatch(log_sensorid_REQ(sensor_id))
    dispatch(log_taskid_REQ(tasks3))
    dispatch(log_tryNumber(try_number3))
  }
  return (
    <>
      <div className='row g-5 g-xl-8'>
        <div className='col-xl-4'>
          <StatisticsWidget2
            className='card-xl-stretch mb-xl-8'
            avatar='/media/svg/files/folder-document-dark.svg'
            title={tasks1}
            description='task_id'
          />
        </div>

        <div className='col-xl-4'>
          <StatisticsWidget2
            className='card-xl-stretch mb-xl-8'
            avatar='/media/svg/files/folder-document-dark.svg'
            title={tasks2}
            description='task_id'
          />
        </div>

        <div className='col-xl-4'>
          <StatisticsWidget2
            className='card-xl-stretch mb-5 mb-xl-8'
            avatar='/media/svg/files/folder-document-dark.svg'
            title={tasks3}
            description='task_id'
          />
        </div>

        <div className='col-xl-4'>
          <div className='card card-xl-stretch mb-5 mb-xl-8'>
            <div className='card-header border-0'>
              <h3 className='card-title fw-bold text-success'>{tasks1} Details</h3>
              <div className='card-toolbar'>
                <div onClick={LogTask1}>
                  <LogModal></LogModal>
                </div>
              </div>
            </div>
            <div className='card-body pt-0'>
              <div className='d-flex align-items-center bg-light-success rounded p-5'>
                <span className='svg-icon svg-icon-success me-5'>
                  <KTSVG path='/media/icons/duotune/abstract/abs027.svg' className='svg-icon-1' />
                </span>
                <div className='flex-grow-1 me-2'>
                  <a className='fw-bold text-gray-800 text-hover-success fs-6'>Duration</a>
                  <span className='text-success fw-bold d-block'>{duration1}s</span>
                </div>
              </div>
            </div>
            <div className='card-body pt-0'>
              <div className='d-flex align-items-center bg-light-success rounded p-5'>
                <span className='svg-icon svg-icon-info me-5'>
                  <KTSVG path='/media/icons/duotune/abstract/abs027.svg' className='svg-icon-1' />
                </span>
                <div className='flex-grow-1 me-2'>
                  <a className='fw-bold text-gray-800 text-hover-success fs-6'>State</a>
                  <span className='text-success fw-bold d-block'>{task_state1}</span>
                </div>
              </div>
            </div>
            <div className='card-body pt-0'>
              <div className='d-flex align-items-center bg-light-success rounded p-5'>
                <span className='svg-icon svg-ifcon-info me-5'>
                  <KTSVG path='/media/icons/duotune/abstract/abs027.svg' className='svg-icon-1' />
                </span>
                <div className='flex-grow-1 me-2'>
                  <a className='fw-bold text-gray-800 text-hover-success fs-6'>Try_Number</a>
                  <span className='text-success fw-bold d-block'>{try_number1}</span>
                </div>
              </div>
            </div>
            <div className='card-body pt-0'>
              <div className='d-flex align-items-center bg-light-success rounded p-5'>
                <span className='svg-icon svg-icon-info me-5'>
                  <KTSVG path='/media/icons/duotune/abstract/abs027.svg' className='svg-icon-1' />
                </span>
                <div className='flex-grow-1 me-2'>
                  <a className='fw-bold text-gray-800 text-hover-success fs-6'>Start_Date</a>
                  <span className='text-success fw-bold d-block'>{start_Date1}</span>
                </div>
              </div>
            </div>
            <div className='card-body pt-0'>
              <div className='d-flex align-items-center bg-light-success rounded p-5'>
                <span className='svg-icon svg-icon-info me-5'>
                  <KTSVG path='/media/icons/duotune/abstract/abs027.svg' className='svg-icon-1' />
                </span>
                <div className='flex-grow-1 me-2'>
                  <a className='fw-bold text-gray-800 text-hover-success fs-6'>End_Date</a>
                  <span className='text-success fw-bold d-block'>{End_Date1}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xl-4'>
          <div className='card card-xl-stretch mb-5 mb-xl-8'>
            <div className='card-header border-0'>
              <h3 className='card-title fw-bold text-success'>{tasks2} Details</h3>
              <div className='card-toolbar'>
                <div onClick={LogTask2}>
                  <LogModal></LogModal>
                </div>
              </div>
            </div>
            <div className='card-body pt-0'>
              <div className='d-flex align-items-center bg-light-success rounded p-5'>
                <span className='svg-icon svg-icon-info me-5'>
                  <KTSVG path='/media/icons/duotune/abstract/abs027.svg' className='svg-icon-1' />
                </span>
                <div className='flex-grow-1 me-2'>
                  <a className='fw-bold text-gray-800 text-hover-success fs-6'>Duration</a>
                  <span className='text-success fw-bold d-block'>{duration2}s</span>
                </div>
              </div>
            </div>
            <div className='card-body pt-0'>
              <div className='d-flex align-items-center bg-light-success rounded p-5'>
                <span className='svg-icon svg-icon-info me-5'>
                  <KTSVG path='/media/icons/duotune/abstract/abs027.svg' className='svg-icon-1' />
                </span>
                <div className='flex-grow-1 me-2'>
                  <a className='fw-bold text-gray-800 text-hover-success fs-6'>State</a>
                  <span className='text-success fw-bold d-block'>{task_state2}</span>
                </div>
              </div>
            </div>
            <div className='card-body pt-0'>
              <div className='d-flex align-items-center bg-light-success rounded p-5'>
                <span className='svg-icon svg-icon-info me-5'>
                  <KTSVG path='/media/icons/duotune/abstract/abs027.svg' className='svg-icon-1' />
                </span>
                <div className='flex-grow-1 me-2'>
                  <a className='fw-bold text-gray-800 text-hover-success fs-6'>Try_Number</a>
                  <span className='text-success fw-bold d-block'>{try_number2}</span>
                </div>
              </div>
            </div>
            <div className='card-body pt-0'>
              <div className='d-flex align-items-center bg-light-success rounded p-5'>
                <span className='svg-icon svg-icon-info me-5'>
                  <KTSVG path='/media/icons/duotune/abstract/abs027.svg' className='svg-icon-1' />
                </span>
                <div className='flex-grow-1 me-2'>
                  <a className='fw-bold text-gray-800 text-hover-success fs-6'>Start_Date</a>
                  <span className='text-success fw-bold d-block'>{start_Date2}</span>
                </div>
              </div>
            </div>
            <div className='card-body pt-0'>
              <div className='d-flex align-items-center bg-light-success rounded p-5'>
                <span className='svg-icon svg-icon-info me-5'>
                  <KTSVG path='/media/icons/duotune/abstract/abs027.svg' className='svg-icon-1' />
                </span>
                <div className='flex-grow-1 me-2'>
                  <a className='fw-bold text-gray-800 text-hover-success fs-6'>End_Date</a>
                  <span className='text-success fw-bold d-block'>{End_Date2}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xl-4'>
          <div className='card card-xl-stretch mb-5 mb-xl-8'>
            <div className='card-header border-0'>
              <h3 className='card-title fw-bold text-success'>{tasks3} Details</h3>
              <div className='card-toolbar'>
                <div onClick={LogTask3}>
                  <LogModal></LogModal>
                </div>
              </div>
            </div>
            <div className='card-body pt-0'>
              <div className='d-flex align-items-center bg-light-success rounded p-5'>
                <span className='svg-icon svg-icon-info me-5'>
                  <KTSVG path='/media/icons/duotune/abstract/abs027.svg' className='svg-icon-1' />
                </span>
                <div className='flex-grow-1 me-2'>
                  <a className='fw-bold text-gray-800 text-hover-success fs-6'>Duration</a>
                  <span className='text-success fw-bold d-block'>{duration3}s</span>
                </div>
              </div>
            </div>
            <div className='card-body pt-0'>
              <div className='d-flex align-items-center bg-light-success rounded p-5'>
                <span className='svg-icon svg-icon-info me-5'>
                  <KTSVG path='/media/icons/duotune/abstract/abs027.svg' className='svg-icon-1' />
                </span>
                <div className='flex-grow-1 me-2'>
                  <a className='fw-bold text-gray-800 text-hover-success fs-6'>State</a>
                  <span className='text-success fw-bold d-block'>{task_state3}</span>
                </div>
              </div>
            </div>
            <div className='card-body pt-0'>
              <div className='d-flex align-items-center bg-light-success rounded p-5'>
                <span className='svg-icon svg-icon-info me-5'>
                  <KTSVG path='/media/icons/duotune/abstract/abs027.svg' className='svg-icon-1' />
                </span>
                <div className='flex-grow-1 me-2'>
                  <a className='fw-bold text-gray-800 text-hover-success fs-6'>Try_Number</a>
                  <span className='text-success fw-bold d-block'>{try_number3}</span>
                </div>
              </div>
            </div>
            <div className='card-body pt-0'>
              <div className='d-flex align-items-center bg-light-success rounded p-5'>
                <span className='svg-icon svg-icon-info me-5'>
                  <KTSVG path='/media/icons/duotune/abstract/abs027.svg' className='svg-icon-1' />
                </span>
                <div className='flex-grow-1 me-2'>
                  <a className='fw-bold text-gray-800 text-hover-success fs-6'>Start_Date</a>
                  <span className='text-success fw-bold d-block'>{start_Date3}</span>
                </div>
              </div>
            </div>
            <div className='card-body pt-0'>
              <div className='d-flex align-items-center bg-light-success rounded p-5'>
                <span className='svg-icon svg-icon-info me-5'>
                  <KTSVG path='/media/icons/duotune/abstract/abs027.svg' className='svg-icon-1' />
                </span>
                <div className='flex-grow-1 me-2'>
                  <a href='#' className='fw-bold text-gray-800 text-hover-success fs-6'>
                    End_Date
                  </a>
                  <span className='text-success fw-bold d-block'>{End_Date3}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export {TaskList}
