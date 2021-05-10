import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as ActionTypes from '../action-types';
import * as API from '../../api';

function* fetchAllTypesByAnimal(action) {
    try {
        const types = yield call(API.getTypesByAnimal, action.payload.animalType);
        yield put({ type: ActionTypes.SET_ANIMAL_TYPE_SUCCESS, payload: { types } });
    } catch (error) {
        yield put({ type: ActionTypes.SET_ANIMAL_TYPE_FAILED, payload: { responseError: error.message } });
    }
}


function* fetchAllPets(action) {
    const { object } = action.payload;
    const params = { ...action.payload.params, ...object };
    try {
        const data = yield call(API.fetchPets, params);
        yield put({ type: ActionTypes.SET_PETS_SUCCESS, payload: { data,params } });
    } catch (error) {
        yield put({ type: ActionTypes.SET_PETS_FAILED, payload: { responseError: error.message } });
    }
}


export default function* mySaga() {
    yield takeEvery(ActionTypes.SET_ANIMAL_TYPE_ACTION, fetchAllTypesByAnimal);
    yield takeEvery(ActionTypes.SET_PETS_ACTION, fetchAllPets);
}

