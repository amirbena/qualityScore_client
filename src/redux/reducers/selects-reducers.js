import initialState from './initial-state';
import * as ActionTypes from '../action-types';

export default function (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_ANIMAL_TYPE_SUCCESS:
            const { types: animalTypes } = action.payload;
            return {
                ...state,
                selects: {
                    ...state.selects,
                    animalTypes
                }
            }

        case ActionTypes.SET_ANIMAL_TYPE_FAILED:
            const { responseError } = action.payload;
            return {
                ...state,
                selects: {
                    ...state.selects,
                    animalTypes
                },
                errors: {
                    ...state.errors,
                    responseError
                }
            }

        case ActionTypes.SET_SELECTED_AGE:
            const { selectedAge } = action.payload;
            return {
                ...state,
                selects: {
                    ...state.selects,
                    selectedAge
                }

            }
        case ActionTypes.SET_SELECTED_ANIMAL_TYPE:
            const { selectedType } = action.payload;
            return {
                ...state,
                selects: {
                    ...state.selects,
                    selectedType
                }
            }
        case ActionTypes.SET_SELECTED_ANIMAL:
            const { selectedAnimal } = action.payload;
            return {
                ...state,
                selects:{
                    ...state.selects,
                    selectedAnimal
                }
            }
        default:
            return state;
    }
}