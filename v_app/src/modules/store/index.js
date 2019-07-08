import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";

import { reducer } from '../reducers/apiReducer';
import { watcherSaga } from '../saga/index';

const sagaMiddleware = createSagaMiddleware();

const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(
    reducer,
    compose(applyMiddleware(sagaMiddleware), reduxDevTool)
);

sagaMiddleware.run(watcherSaga)