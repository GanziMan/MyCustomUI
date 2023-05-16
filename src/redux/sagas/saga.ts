import axios from 'axios'
import {StrictEffect, all, call, fork, put, takeLatest} from 'redux-saga/effects'
import {
  POST_DAGRUN_REQ,
  STATE_FAILED_RES,
  STATE_SUCCESS_REQ,
  STATE_SUCCESS_RES,
  TEST_ASYNC_REQ,
  TEST_ASYNC_RES,
} from '../actions/constants'
axios.defaults.withCredentials = true
//api
const axiosConfig = {
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
  withCredentials: true,
}
const Base_URL = 'http://localhost:8088/api/v1/'

function CreatorDags(params: any) {
  const conf = {params}
  const dags = 'dags/Dag_Creater/dagRuns'
  const json = {dags, conf}
  console.log(json)
  const result = axios
    .post(Base_URL + 'post', json, axiosConfig)
    .then(function (response) {
      //  dispatch
      return response
    })
    .catch(function (error) {
      console.error(error)
    })
  return result
}
//Dag_creator 전용
function DagUpdate(is_paused: any) {
  const dags = 'dags/kk3'
  const json = {dags, is_paused}
  axios
    .patch(Base_URL + 'patch', json, axiosConfig)
    .then(function (response) {
      console.log(response)
      //  dispatch
      return response.data
    })
    .catch(function (error) {
      console.error(error)
    })
}

//Dag_Run 전용
function DagRunUpdate(data: any) {
  const dags = `dags/${data}`
  const is_paused: boolean = false
  const json = {dags, is_paused}
  axios
    .patch(Base_URL + 'patch', json, axiosConfig)
    .then(function (response) {
      console.log(response)
      //  dispatch
      return response.data
    })
    .catch(function (error) {
      console.error(error)
    })
}

function GetStateSuccess() {
  const result = axios
    .get(Base_URL + 'get?dags=dags/Dag_Creater/dagRuns?state=success', axiosConfig)
    .then(function (response) {
      console.log(response)
      return response.data.data.body.total_entries
    })
    .catch(function (error) {
      console.error(error)
      return error
    })
  return result
}
function GetStateFailed() {
  const result = axios
    .get(Base_URL + 'get?dags=dags/Dag_Creater/dagRuns?state=failed', axiosConfig)
    .then(function (response) {
      return response.data.data.body.total_entries
    })
    .catch(function (error) {
      console.error(error)
    })
  return result
}

function DagRuns(data: any) {
  const dags = `dags/${data}/dagRuns`
  axios
    .post(Base_URL + 'post', {dags}, axiosConfig)
    .then(function (response) {
      console.log(response.data)
      return response.data
    })
    .catch(function (error) {
      console.error(error)
      return error
    })
}

function* testSaga(action: any): Generator<StrictEffect, any, any> {
  try {
    yield call(DagUpdate, false) //is_paused
    const data = yield call(CreatorDags, action.payload) // trigger new create
    // console.log(data.data.data.body.dag_run_id.replace("+","%2B"));
    yield put({type: TEST_ASYNC_RES, payload: data.data.data.body.dag_run_id.replace('+', '%2B')})
    // yield put({type:TEST_ASYNC_RES,payload:data})
  } catch (e) {
    console.log(e)
  }
}

function* GetStateSaga(): Generator<StrictEffect, any, any> {
  try {
    const success = yield call(GetStateSuccess)
    const failed = yield call(GetStateFailed)
    yield put({type: STATE_SUCCESS_RES, payload: success})
    yield put({type: STATE_FAILED_RES, payload: failed})
    // yield put();
    // yield put();
  } catch (e) {}
}

function* PostRunSaga(action: any): Generator<any, any, any> {
  try {
    yield call(DagRunUpdate, action.payload)
    const run = yield call(DagRuns, action.payload)

    console.log(run)
  } catch (e) {}
}

function* watchAlert() {
  yield takeLatest(TEST_ASYNC_REQ, testSaga)
  yield takeLatest(STATE_SUCCESS_REQ, GetStateSaga)
  yield takeLatest(POST_DAGRUN_REQ, PostRunSaga)
}

export default function* rootSaga() {
  yield all([fork(watchAlert)])
}
