import { takeLatest, call, put } from "redux-saga/effects";
// import fetchData from '../services/index';
import axios from 'axios';

export function* watcherSaga() {
    yield takeLatest("REQUEST_API_DATA", workersaga);
}

const fetchData = () => {
    return axios({
        method: "get",
        url: 'http://localhost:5050' + '/users'
    });
}

function* workersaga() {
    try {
        const response = yield call(fetchData)
        const data = response.data
        console.log("data from saga file:  ", data)

        yield put({ type: "RESPONSE_API_DATA", data })
    }
    catch (error) {
        yield put({ type: "FAILURE_API_DATA", error })
    }
}