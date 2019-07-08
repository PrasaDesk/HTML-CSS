export const REQUEST_API_DATA = "REQUEST_LOGIN_DATA";
export const RESPONSE_API_DATA = "RESPONSE_LOGIN_DATA";
export const FAILURE_API_DATA = "FAILURE_API_DATA"

export const request_login_data = () => ({
    type: REQUEST_API_DATA,
});

export const response_login_data = data => ({
    type: RESPONSE_API_DATA,
    data
});

export const failure_api_data = error => ({
    type: FAILURE_API_DATA,
    error
})