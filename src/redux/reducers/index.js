import { combineReducers } from "redux";
import PetsReducer from './pets-reducer';
import SelectsReducer from './selects-reducers';
import ParamsReducer from './params-reducer';

export default combineReducers(PetsReducer,SelectsReducer,ParamsReducer);

