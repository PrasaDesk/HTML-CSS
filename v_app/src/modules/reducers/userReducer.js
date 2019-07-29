import {
    REQUEST_GET_USERS, RESPONSE_GET_USERS, REQUEST_SEARCH_USER, RESPONSE_SEARCH_USER,
    REQUEST_ONE_USER, RESPONSE_ONE_USER, REQUEST_UPDATE_USER, RESPONSE_UPDATE_USER
} from '../actions/index'

export default (state = {}, action) => {

    switch (action.type) {
        case REQUEST_GET_USERS:
            return action
        case RESPONSE_GET_USERS:
            return action.data
        case REQUEST_SEARCH_USER:
            return action.data
        case RESPONSE_SEARCH_USER:
            return action.data
        case REQUEST_ONE_USER:
            return action.data
        case RESPONSE_ONE_USER:
            return action.data
        case REQUEST_UPDATE_USER:
            return { data: action.data, id: action.id }
        case RESPONSE_UPDATE_USER:
            return action.data
        default:
            return state;
    }
}