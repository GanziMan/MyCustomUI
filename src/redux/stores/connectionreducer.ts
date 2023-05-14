import {CONNECTION_TEST_REQ } from "../actions/constants";
import { ScoreAction } from "../actions/creatorActions";


type Result = {

    state:any
}

const initialState: Result = {

     state:[]
}

const connectionreducer = (state: Result = initialState, action: ScoreAction) => {
    switch (action.type) {
        case CONNECTION_TEST_REQ:
            return{
                ...state,
                state:action.payload
              }
        default:
            return state;
    }
};


export default connectionreducer;