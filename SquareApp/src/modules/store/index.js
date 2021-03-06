import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers/index";
import mySaga from "../saga/index";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

// then run the saga
sagaMiddleware.run(mySaga);
