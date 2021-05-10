import initialState from './initial-state';
import * as ActionTypes from '../action-types';

export default function (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_PETS_SUCCESS:
            const { data: { pets, pagination },params } = action.payload;
            return {
                ...state,
                petsData: {
                    ...state.petsData,
                    pets,
                    pagination
                },
                params

            }

        
        case ActionTypes.SET_PETS_FAILED:
            const { responseError } = action.payload;
            return {
                ...state,
                petsData: {
                    ...state.petsData,
                    pets: [],
                },
                errors: {
                    ...state.errors,
                    responseError
                }
            }

        default:
            return state;
    }
}