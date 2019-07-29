import { combineReducers } from "redux";
import loginRegisterReducer from './loginRegisterReducer';
import logoutReducer from './logoutReducer';
import forgetReducer from './forgetReducer';
import userReducer from './userReducer';
import visitReducer from './visitReducer';

const rootReducer = combineReducers({
    loginRegisterReducer,
    logoutReducer,
    forgetReducer,
    userReducer,
    visitReducer
});

export default rootReducer