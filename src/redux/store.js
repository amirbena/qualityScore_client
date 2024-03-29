import { createStore, applyMiddleware } from "redux";
import reducer from './reducers';
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);


export default store;


