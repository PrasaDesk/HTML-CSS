import {
    REQUEST_ONE_USER, RESPONSE_ONE_USER
} from '../actions/index'

export default (state = {}, action) => {

    switch (action.type) {
        case REQUEST_ONE_USER:
            return action.data
        case RESPONSE_ONE_USER:
            return action.data
        default:
            return state;
    }
}