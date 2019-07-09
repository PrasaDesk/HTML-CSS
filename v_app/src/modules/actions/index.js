export const REQUEST_API_DATA = "REQUEST_LOGIN_DATA";
export const RESPONSE_API_DATA = "RESPONSE_LOGIN_DATA";
export const FAILURE_API_DATA = "FAILURE_API_DATA"
export const REQUEST_GET_USERS = "REQUEST_GET_USERS"
export const RESPONSE_GET_USERS = "RESPONSE_GET_USERS"

export const request_login_data = (data) => ({
    type: REQUEST_API_DATA,
    data
});

export const response_login_data = data => ({
    type: RESPONSE_API_DATA,
    data
});

export const failure_api_data = error => ({
    type: FAILURE_API_DATA,
    error
})

export const request_get_users = () => ({
    type: REQUEST_GET_USERS
});

export const response_get_users = (data) => ({
    type: RESPONSE_GET_USERS,
    data
});