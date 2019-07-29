export const REQUEST_LOGIN_DATA = "REQUEST_LOGIN_DATA"
export const RESPONSE_LOGIN_DATA = "RESPONSE_LOGIN_DATA"
export const FAILURE_LOGIN_DATA = "FAILURE_LOGIN_DATA"
export const REQUEST_LOGOUT_DATA = "REQUEST_LOGOUT_DATA"
export const RESPONSE_LOGOUT_DATA = "RESPONSE_LOGOUT_DATA"
export const REQUEST_CHECK_EMAIL = "REQUEST_CHECK_EMAIL"
export const RESPONSE_CHECK_EMAIL = "RESPONSE_CHECK_EMAIL"
export const REQUEST_VERIFY_OTP = "REQUEST_VERIFY_OTP"
export const RESPONSE_VERIFY_OTP = "RESPONSE_VERIFY_OTP"
export const REQUEST_UPDATE_FORGET_PASSWORD = "REQUEST_UPDATE_FORGET_PASSWORD"
export const RESPONSE_UPDATE_FORGET_PASSWORD = "RESPONSE_UPDATE_FORGET_PASSWORD"
export const REQUEST_GET_USERS = "REQUEST_GET_USERS"
export const RESPONSE_GET_USERS = "RESPONSE_GET_USERS"
export const REQUEST_REGISTER_USER = "REQUEST_REGISTER_USER"
export const RESPONSE_REGISTER_USER = "RESPONSE_REGISTER_USER"
export const REQUEST_GET_VISITS = "REQUEST_GET_VISITS"
export const RESPONSE_GET_VISITS = "RESPONSE_GET_VISITS"
export const REQUEST_SEARCH_VISITS = "REQUEST_SEARCH_VISITS"
export const RESPONSE_SEARCH_VISITS = "RESPONSE_SEARCH_VISITS"
export const REQUEST_SEARCH_USER = "REQUEST_SEARCH_USER"
export const RESPONSE_SEARCH_USER = "RESPONSE_SEARCH_USER"
export const REQUEST_ONE_USER = "REQUEST_ONE_USER"
export const RESPONSE_ONE_USER = "RESPONSE_ONE_USER"
export const REQUEST_UPDATE_USER = "REQUEST_UPDATE_USER"
export const RESPONSE_UPDATE_USER = "RESPONSE_UPDATE_USER"
export const REQUEST_RESET_PASSWORD = "REQUEST_RESET_PASSWORD"
export const RESPONSE_RESET_PASSWORD = "RESPONSE_RESET_PASSWORD"

export const request_login_data = (data) => ({ type: REQUEST_LOGIN_DATA, data });

export const response_login_data = (data) => ({ type: RESPONSE_LOGIN_DATA, data });

export const failure_login_data = (data) => ({ type: FAILURE_LOGIN_DATA, data });

export const request_logout_data = (data) => ({ type: REQUEST_LOGOUT_DATA, data });

export const response_logout_data = (data) => ({ type: RESPONSE_LOGOUT_DATA, data });

export const request_check_email = (data) => ({ type: REQUEST_CHECK_EMAIL, data });

export const response_check_email = (data) => ({ type: RESPONSE_CHECK_EMAIL, data });

export const request_verify_otp = (otp) => ({ type: REQUEST_VERIFY_OTP, otp });

export const response_verify_otp = (otp) => ({ type: RESPONSE_VERIFY_OTP, otp });

export const request_update_forget_password = (pswd) => ({ type: REQUEST_UPDATE_FORGET_PASSWORD, pswd });

export const response_update_forget_password = (pswd) => ({ type: RESPONSE_UPDATE_FORGET_PASSWORD, pswd });

export const request_get_users = () => ({ type: REQUEST_GET_USERS });

export const response_get_users = (data) => ({ type: RESPONSE_GET_USERS, data });

export const request_register_user = (data) => ({ type: REQUEST_REGISTER_USER, data });

export const response_register_user = (data) => ({ type: RESPONSE_REGISTER_USER, data });

export const request_get_visits = () => ({ type: REQUEST_GET_VISITS });

export const response_get_visits = (data) => ({ type: RESPONSE_GET_VISITS, data });

export const request_search_visits = (data) => ({ type: REQUEST_SEARCH_VISITS, data });

export const response_search_visits = (data) => ({ type: RESPONSE_SEARCH_VISITS, data });

export const request_search_user = (data) => ({ type: REQUEST_SEARCH_USER, data });

export const response_search_user = (data) => ({ type: RESPONSE_SEARCH_USER, data });

export const request_one_user = (data) => ({ type: REQUEST_ONE_USER, data });

export const response_one_user = (data) => ({ type: RESPONSE_ONE_USER, data });

export const request_update_user = (data, id) => ({ type: REQUEST_UPDATE_USER, data, id });

export const response_update_user = (data) => ({ type: RESPONSE_UPDATE_USER, data });

export const request_reset_password = (data) => ({ type: REQUEST_RESET_PASSWORD, data });

export const response_reset_password = (data) => ({ type: RESPONSE_RESET_PASSWORD, data });