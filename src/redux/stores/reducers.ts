import { LIST_DAG_REQ, LIST_DAG_RES, TEST_ASYNC_REQ, TEST_ASYNC_RES, UPDATE_DAG_REQ, POST_DAGRUN_REQ, POST_DAGRUN_RES } from "../actions/constants";
import { ScoreAction } from "../actions/creatorActions";
type Result = {
  msg: string;
  failed: string;
  cron:string;

};
const initialState: Result = {
  msg: '',
  failed: '',
  cron:'',

};

const reducer = (state: Result = initialState, action: ScoreAction) => {
  switch (action.type) {
    case TEST_ASYNC_REQ:
      return {
        ...state,
        state: action.payload
      };
    case TEST_ASYNC_RES:
      return {
        msg: state.msg + action.payload,
        failed: state.failed + action.payload
      }
    case LIST_DAG_REQ:
      return {
        ...state,
      }
    case LIST_DAG_RES:
      return {
        ...state,
      }
    case UPDATE_DAG_REQ:
      return {
        ...state,
      }

    case POST_DAGRUN_REQ:
      return {
        ...state
      }
    case POST_DAGRUN_RES:
      return {
        ...state
      }
   
    default:
      return state;
  }
};


export default reducer;