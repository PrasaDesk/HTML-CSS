import { REQUEST_GET_USERS, RESPONSE_GET_USERS } from '../actions/index';

const initialState = {
    fetching: false,
    data: null,
    error: null
}

export default (state = initialState, action) => {
    console.log("ACTION: ", action)
    switch (action.type) {
        case REQUEST_GET_USERS:
            console.log("call request: ", action)
            return { ...state, fetching: true, error: null };
        case RESPONSE_GET_USERS:
            console.log("call response: ", action)
            return { ...state, fetching: false, data: action.data };
        default:
            return state;
    }
}