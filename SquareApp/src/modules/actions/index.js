
export const POST_LOGIN_DATA = "POST_LOGIN_DATA"
export const RESPONSE_LOGIN_DATA = "RESPONSE_LOGIN_DATA";

export const postLoginData = data => ({
    type: POST_LOGIN_DATA, data
});

export const responseLoginData = data => ({
    type: RESPONSE_LOGIN_DATA, data
});
