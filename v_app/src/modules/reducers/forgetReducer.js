import {
    RESPONSE_CHECK_EMAIL, REQUEST_CHECK_EMAIL, REQUEST_VERIFY_OTP, RESPONSE_VERIFY_OTP,
    REQUEST_UPDATE_FORGET_PASSWORD, RESPONSE_UPDATE_FORGET_PASSWORD, REQUEST_RESET_PASSWORD,
    RESPONSE_RESET_PASSWORD
} from '../actions/index'

export default (state = {}, action) => {
    
    switch (action.type) {
        case REQUEST_CHECK_EMAIL:
            return action.data;
        case RESPONSE_CHECK_EMAIL:
            return action.data;
        case REQUEST_VERIFY_OTP:
            return action.otp
        case RESPONSE_VERIFY_OTP:
            return action.otp
        case REQUEST_UPDATE_FORGET_PASSWORD:
            return action.pswd
        case RESPONSE_UPDATE_FORGET_PASSWORD:
            return action.pswd
        case REQUEST_RESET_PASSWORD:
            return action.data
        case RESPONSE_RESET_PASSWORD:
            return action.data
        default:
            return state;
    }
}