import { REQUEST_API_DATA, RESPONSE_API_DATA, FAILURE_API_DATA } from '../actions/index';

const initialState = {
    fetching: false,
    data: null,
    error: null
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_API_DATA:
            return { ...state, fetching: true, error: null };
        case RESPONSE_API_DATA:
            return { ...state, fetching: false, dog: action.dog };
        case FAILURE_API_DATA:
            return { ...state, fetching: false, dog: null, error: action.error };
        default:
            return state;
    }
}