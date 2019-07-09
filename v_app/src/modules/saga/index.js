import { call, put, takeLatest } from "redux-saga/effects";
import { response_login_data, FAILURE_API_DATA, REQUEST_API_DATA, response_get_users, REQUEST_GET_USERS } from '../actions/index';
import { fetchLoginData, fetchUsers } from "../services/index";

function* postLoginData(action) {
    try {
        // const { history } = action.data.history;
        const data = yield call(fetchLoginData, action.data);
        if (data.status !== 400) {
            console.log("data from saga: ", data)
            yield put(response_login_data(data))
            // history.push('/home');
        }
        if (data.status === 400) {
            yield put(FAILURE_API_DATA(data));
            // history.push('/login');
        }

    } catch (e) {
        console.log(e);

    }
}

function* getUserData(action) {
    try {
        const data = yield call(fetchUsers)
        console.log("Get users from Sagas: ", data)
        yield put(response_get_users(data))
    } catch (e) {
        console.log(e)
    }
}


export default function* SagaFunc() {
    yield takeLatest(REQUEST_API_DATA, postLoginData);
    yield takeLatest(REQUEST_GET_USERS, getUserData);
}