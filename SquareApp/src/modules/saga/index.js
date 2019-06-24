import { call, put, takeLatest } from "redux-saga/effects";
import { responseLoginData, POST_LOGIN_DATA } from '../actions/index';
import { fetchLoginData } from '../services/index'

function* postLoginData(action) {
    try {
        const { history } = action.data.history;
        const data = yield call(fetchLoginData, action.data);
        if (data.status !== 400) {

            if (data.token.access !== undefined) {
                // yield put(setCurrentUser(jwt.decode(data.token.access)));
                yield put(responseLoginData(data))
                history.push('/home');
            }
        }
        if (data.status === 400) {
            // yield put(receiveErrorData(data));
            history.push('/login');
        }

    } catch (e) {
        console.log(e);

    }
}

export default function* mySaga() {
    yield takeLatest(POST_LOGIN_DATA, postLoginData);
}