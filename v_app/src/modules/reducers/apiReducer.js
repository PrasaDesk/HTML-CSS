import { REQUEST_API_DATA, RESPONSE_API_DATA, FAILURE_API_DATA } from '../actions/index';

const initialState = {
    fetching: false,
    data: null,
    error: null
}

export default (state = initialState, action) => {
    console.log("ACTION: ", action)
    switch (action.type) {
        case REQUEST_API_DATA:
        console.log("call request: ", action)
            return { ...state, fetching: true, error: null };
        case RESPONSE_API_DATA:
            console.log("call response: ", action)
            return { ...state, fetching: false, data: action.data };
        case FAILURE_API_DATA:
            return { ...state, fetching: false, data: null, error: action.error };
        default:
            return state;
    }
}