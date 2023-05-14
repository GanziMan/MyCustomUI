import { IMPORTERROR_REQ } from "../actions/constants";
import { dashboardActions } from "../actions/dashboardActions";

type Result = {
    import_error_num : string
};

const initialState: Result = {
    import_error_num : ''
};


const dashboardreducer = (state: Result = initialState, action: dashboardActions) => {
    switch (action.type) {
        case IMPORTERROR_REQ:
            return {
                ...state,
                import_error_num: action.payload
            }
        default:
            return state;
    }
};


export default dashboardreducer;