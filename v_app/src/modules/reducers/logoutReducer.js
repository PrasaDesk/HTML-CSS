import { RESPONSE_LOGOUT_DATA, REQUEST_LOGOUT_DATA } from '../actions/index'

export default (state = {}, action) => {

    switch (action.type) {
        case REQUEST_LOGOUT_DATA:
            return action.data;
        case RESPONSE_LOGOUT_DATA:
            return action.data;
        default:
            return state;
    }
}