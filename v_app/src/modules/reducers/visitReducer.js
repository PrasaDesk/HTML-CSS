import {
    REQUEST_GET_VISITS, RESPONSE_GET_VISITS, REQUEST_SEARCH_VISITS, RESPONSE_SEARCH_VISITS
} from '../actions/index'

export default (state = {}, action) => {

    switch (action.type) {
        case REQUEST_GET_VISITS:
            return action
        case RESPONSE_GET_VISITS:
            return action.data
        case REQUEST_SEARCH_VISITS:
            return action.data
        case RESPONSE_SEARCH_VISITS:
            return action.data
        default:
            return state;
    }
}