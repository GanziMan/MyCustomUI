//Libraries
import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'

import storage from 'redux-persist/lib/storage'
import reducer from './reducers'
import StateReducer from './statereducer'
import cronreducer from './cronreducer'
import sourcedetailreducer from './sourcedetailreducer'
import connectionreducer from './connectionreducer'
import connectionSFTPreducer from './connectionSFTPreducer'
import flowwidgetreducer from './flowwidgetreducer'

import dashboardreducer from './dashboardreducer'
const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({
  reducer,
  StateReducer,
  cronreducer,
  sourcedetailreducer,
  connectionreducer,
  connectionSFTPreducer,
  flowwidgetreducer,
  dashboardreducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer

// useSelector로 스토어에 접근할 때 필요하다!
export type RootState = ReturnType<typeof persistedReducer>
