import {
    RESPONSE_LOGIN_DATA, REQUEST_LOGIN_DATA, FAILURE_LOGIN_DATA,
    REQUEST_REGISTER_USER, RESPONSE_REGISTER_USER
} from '../actions/index'

export default (state = {}, action) => {
    
    switch (action.type) {
        case REQUEST_LOGIN_DATA:
            return action.data;
        case RESPONSE_LOGIN_DATA:
            return action.data;
        case FAILURE_LOGIN_DATA:
            return action.data;
        case REQUEST_REGISTER_USER:
            return action.data
        case RESPONSE_REGISTER_USER:
            return action.data
        default:
            return state;
    }
}