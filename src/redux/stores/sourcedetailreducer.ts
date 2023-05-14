import {SOURCE_DETAIL_REQ } from "../actions/constants";
import { ScoreAction } from "../actions/creatorActions";


type Result = {

    state:any
}

const initialState: Result = {

     state:[]
}


const sourcedetailreducer = (state: Result = initialState, action: ScoreAction) => {
  switch (action.type) {
    case SOURCE_DETAIL_REQ:
        console.log(state)
      return{
        ...state,
        state:action.payload
      }
    default:
      return state;
  }
};


export default sourcedetailreducer;