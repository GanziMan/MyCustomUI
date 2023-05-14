import { FLOWWIDGET_ID_REQ, FLOWWIDGET_SENSORID_REQ, SOURCEWIDGET_NAME_REQ, TARGETWIDGET_NAME_REQ } from "../actions/constants";
import { flowWidgetAction } from "../actions/flowWidgetActions";

type Result = {

    sensor_id: string;
    id: string;
    source_name : string;
    target_name: string;
};

const initialState: Result = {
    sensor_id: '',
    id: '',
    source_name:'',
    target_name:'',
};


const flowwidgetreducer = (state: Result = initialState, action: flowWidgetAction) => {
    switch (action.type) {
        case FLOWWIDGET_ID_REQ:
            return {
                ...state,
                id: action.payload
            }
        case FLOWWIDGET_SENSORID_REQ:
            return {
                ...state,
                sensor_id: action.payload
            }
        case SOURCEWIDGET_NAME_REQ:
            return {
                ...state,
                source_name : action.payload
            }
        case TARGETWIDGET_NAME_REQ:
            return {
                ...state,
                target_name : action.payload
            }
        default:
            return state;
    }
};


export default flowwidgetreducer;