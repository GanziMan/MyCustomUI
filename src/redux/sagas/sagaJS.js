// import axios from "axios";
// import { useState } from "react";

// import { useDispatch } from "react-redux";
// import { takeEvery, put, delay, all, takeLatest, fork, select, call, StrictEffect } from "redux-saga/effects";
// import { DBCollection, TestResponse } from "../../app/modules/accounts/components/settings/SettingsModel";
// import { test_REQ, test_RES } from "../actions/actions2";
// import {
//   SCORE_DOWN_ASYNC,
//   SCORE_UP_ASYNC,
//   SCORE_DOWN,
//   SCORE_UP,
//   TEST_ASYNC_RES,
//   TEST_ASYNC_REQ,
//   LIST_DAG_REQ,
//   LIST_DAG_RES,
//   UPDATE_DAG_REQ
// } from "../actions/constants";
// import { RootState } from "../stores/reducers";
// axios.defaults.withCredentials = true;
// //api
// const axiosConfig = {
//   headers: {
//     'Content-Type': 'application/json; charset=UTF-8'
//   },
//   withCredentials: true 
// }
// const Base_URL ="http://localhost:8080/api/v1/";


//   function healthapi () {
//    axios.get("/api/v1/health",axiosConfig)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error){
//     console.error(error);
//   });
// }

//   function ListDags(){
//      axios.get(Base_URL+"/get?dags=dags",axiosConfig)
//    .then(function (response) {
//     console.log(response.data);
//     return "test";
//   }).catch(function (error) {
//     console.error(error);
//   });
//   }

//   function CreatorDags(data){
//     const params = {data}
//     const conf = {params}
//     const dags = "dags/Dag_Creater/dagRuns";
//     const json = {dags,conf};
//     console.log(json);
//     const result = axios.post(Base_URL + "post", json, axiosConfig)
//   .then(function (response) {
//    console.log(response.data);
//   //  dispatch
//    return response;
//  }).catch(function (error) {
//    console.error(error);
//  });
//   return result;
//  }
//  function DagUpdate(data){
//   const dags = "dags/Dag_Creater";
//   const json = {dags,data}; 
//   console.log(json);
//   const result = axios.patch(Base_URL+"patch",json, axiosConfig)
//   .then(function (response) {
//     console.log(response.status);
//    //  dispatch
//     return response;
//   }).catch(function (error) {
//     console.error(error);
//   });
//   return result;
//  }

//  function* testSaga(action){
//   try{
//       console.log(action.payload);
//       const data = yield select((state) => {
//         return state.payload;
//       })
//       const result = yield call(CreatorDags,data);
//       console.log(result);
//       // if (data !== undefined) {
//         console.log(data);
//       // }
//       // yield put({type:TEST_ASYNC_RES,payload:data})
//   }catch(e){
//       console.log(e);
//   }   
// }

// //saga
// // function* scoreUpAsync() {
// //   yield delay(2000);
// //   yield put({ type: SCORE_UP_ASYNC, score: 1 });
// //   console.log("saga작동됨");
// // }

// // function* scoreDownAsync() {
// //   yield delay(2000);
// //   yield put({ type: SCORE_DOWN_ASYNC, score: 1 });
// //   console.log("saga작동됨");
// // }


// // function* updateDagSaga(action :any){
// //   try{
// //       console.log(action.payload);
// //       const {data} = yield call(DagUpdate,action.payload);
// //       console.log(data);
// //       // yield put({type:TEST_ASYNC_RES,payload:data})
// //   }catch(e){
// //       console.log(e);
// //   }   
// // }
// // function* listDagSaga(){
// //   try{
// //     const {data} = yield call(ListDags) || "sibal";
// //     console.log("gd");
// //     // yield put ({typee:LIST_DAG_RES,data});
// //   }catch(e){
// //     console.log(e);
// //   }
// // }

// function* watchAlert(){
//     yield takeLatest(TEST_ASYNC_REQ,testSaga);
//     // yield takeLatest(UPDATE_DAG_REQ,updateDagSaga);
//     // yield takeLatest(LIST_DAG_REQ,listDagSaga);
// }


// export default function* rootSaga() {
//   yield all([fork(watchAlert)]);
// }
