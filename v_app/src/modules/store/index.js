import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers/index";
import SagaFunc from "../sagas/index";


// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

// then run the saga
sagaMiddleware.run(SagaFunc);