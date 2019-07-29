import { call, put, takeLatest } from "redux-saga/effects";
import {
    response_login_data, REQUEST_LOGIN_DATA, failure_login_data, REQUEST_LOGOUT_DATA,
    response_logout_data, REQUEST_CHECK_EMAIL, response_check_email, REQUEST_VERIFY_OTP,
    response_verify_otp, response_update_forget_password, REQUEST_UPDATE_FORGET_PASSWORD,
    response_get_users, REQUEST_GET_USERS, REQUEST_GET_VISITS, response_get_visits, REQUEST_SEARCH_VISITS,
    response_search_visits, REQUEST_REGISTER_USER, response_register_user, response_search_user, REQUEST_SEARCH_USER,
    REQUEST_ONE_USER, response_one_user, REQUEST_UPDATE_USER, response_update_user, REQUEST_RESET_PASSWORD, response_reset_password
} from '../actions/index';
import {
    fetchLoginData, logoutUser, fetchCheckEmail, fetchVerifyOTP, updateForgetPassword, ResetPassword,
    GetAllUsers, GetAllVisits, GetSearchVisits, RegisterUser, GetSearchUser, GetOneUser, UpdateUserData
} from "../services/index";
import { createBrowserHistory } from 'history';

let his = createBrowserHistory()

function ExpireSession(data) {

    if (data.status === 401) {
        alert("Your Session Has beeen Expired\nPlease, Login again!!!");
        localStorage.clear()
        his.push('/login')
        window.location.reload();
    }
}

function* postLoginData(action) {
    try {
        const { history } = action.data.history;
        const data = yield call(fetchLoginData, action.data);
        if (data.status !== 404) {
            yield put(response_login_data(data))
            yield put(failure_login_data({}))
            history.push('/dashboard');
        }
        if (data.status === 404) {
            yield put(failure_login_data(data));
            // history.push('/login');
        }

    } catch (e) {
        console.log(e);

    }
}

function* postLogoutUser(action) {
    try {

        const { history } = action.data.history;

        let payload = { refresh: localStorage.getItem("refresh_token") }

        const data = yield call(logoutUser, payload);

        if (data.status !== 401 && data.status !== 422) {
            yield put(response_logout_data(data))

            localStorage.clear();

            his.push("/login")
            window.location.reload()
        }
        else if (data.status === 401) {
            yield put(response_logout_data(data))
            history.push("/login")
        }
        else {
            history.push("/notfound")
        }

    } catch (e) {
        console.log(e)
    }
}

function* postCheckEmail(action) {
    try {
        const data = yield call(fetchCheckEmail, action.data);
        if (data.status !== 404) {

            yield put(response_check_email(data))
        }
        if (data.status === 404) {

            yield put(response_check_email(data));
        }
    } catch (e) {
        console.log(e);
    }
}

function* postVerifyOTP(action) {
    try {
        const data = yield call(fetchVerifyOTP, action.otp);
        if (data.status !== 404) {

            yield put(response_verify_otp(data))
        }
        if (data.status === 404) {

            yield put(response_verify_otp(data));
        }
    } catch (e) {
        console.log(e);
    }
}

function* putForgetPasswordUpdate(action) {
    try {
        const data = yield call(updateForgetPassword, action.pswd);
        if (data.status !== 404) {

            yield put(response_update_forget_password(data))
            localStorage.clear();
            alert("Password reset, Successfully Done!\nYou can login now with your new password.");
            his.push("/login");
            window.location.reload();
        }
        if (data.status === 404) {

            yield put(response_update_forget_password(data));
        }
    } catch (e) {
        console.log(e);
    }
}

function* getAllUsers(action) {
    try {
        const data = yield call(GetAllUsers);
        ExpireSession(data)
        if (data.status !== 404) {

            yield put(response_get_users(data))
        }
        if (data.status === 404) {

            yield put(response_get_users(data));
        }
    } catch (e) {
        console.log(e);
    }
}

function* getAllVisits(action) {
    try {
        const data = yield call(GetAllVisits);
        ExpireSession(data)
        if (data.status !== 404) {

            yield put(response_get_visits(data))
        }
        if (data.status === 404) {

            yield put(response_get_visits(data));
        }
    } catch (e) {
        console.log(e);
    }
}

function* getSearchVisits(action) {
    try {

        const data = yield call(GetSearchVisits, action.data);
        ExpireSession(data)
        if (data.status !== 404) {

            yield put(response_search_visits(data))
        }
        if (data.status === 404) {

            yield put(response_search_visits(data));
        }
    } catch (e) {
        console.log(e);
    }
}

function* registerUser(action) {
    try {
        const data = yield call(RegisterUser, action.data)
        ExpireSession(data)
        if (data.status === 400) {
            yield put(response_register_user(data))
        }
        else if (data.status !== 404) {
            yield put(response_register_user(data))
            console.log(data)
            alert("User successfully registered !!!")
        }
        else if (data.status === 404) {

            yield put(response_register_user(data));
        }
    } catch (e) {
        console.log(e);
    }
}

function* getSearchUser(action) {
    try {

        const data = yield call(GetSearchUser, action.data);
        ExpireSession(data)
        if (data.status !== 404) {

            yield put(response_search_user(data))
        }
        if (data.status === 404) {

            yield put(response_search_user(data));
        }
    } catch (e) {
        console.log(e);
    }
}

function* getOneUser(action) {
    try {
        const data = yield call(GetOneUser, action.data);
        ExpireSession(data)
        yield put(response_one_user(data));

    } catch (e) {
        console.log(e);
    }
}

function* updateUserData(action) {
    try {
        const data = yield call(UpdateUserData, action.data, action.id);
        ExpireSession(data)
        if (data.status !== 404) {

            yield put(response_update_user(data))
            alert("User Data Updated Successfully!");
        }
        if (data.status === 404) {

            yield put(response_update_forget_password(data));
        }
    } catch (e) {
        console.log(e);
    }
}

function* resetPassword(action) {
    try {
        const data = yield call(ResetPassword, action.data);
        ExpireSession(data)

        if (data.status === 400) {
            alert("You entered wrong old password\nPlease, try again !!!")
        }
        if (data.data === "Password Reset Successfully") {
            alert("Password Reset Successful!!!")
        }
        yield put(response_reset_password(data));
    } catch (e) {
        console.log(e);
    }
}

export default function* SagaFunc() {
    yield takeLatest(REQUEST_LOGIN_DATA, postLoginData);
    yield takeLatest(REQUEST_LOGOUT_DATA, postLogoutUser);
    yield takeLatest(REQUEST_CHECK_EMAIL, postCheckEmail);
    yield takeLatest(REQUEST_VERIFY_OTP, postVerifyOTP);
    yield takeLatest(REQUEST_UPDATE_FORGET_PASSWORD, putForgetPasswordUpdate);
    yield takeLatest(REQUEST_GET_USERS, getAllUsers);
    yield takeLatest(REQUEST_GET_VISITS, getAllVisits);
    yield takeLatest(REQUEST_SEARCH_VISITS, getSearchVisits);
    yield takeLatest(REQUEST_REGISTER_USER, registerUser);
    yield takeLatest(REQUEST_SEARCH_USER, getSearchUser);
    yield takeLatest(REQUEST_ONE_USER, getOneUser);
    yield takeLatest(REQUEST_UPDATE_USER, updateUserData);
    yield takeLatest(REQUEST_RESET_PASSWORD, resetPassword);
}