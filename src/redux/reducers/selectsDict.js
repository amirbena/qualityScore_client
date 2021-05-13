import * as ActionTypes from '../action-types';


const selectsDict = {
    [ActionTypes.SET_ANIMAL_TYPE_SUCCESS]: (state, action) => {
        const { types: animalTypes } = action.payload;
        return {
            ...state,
            selects: {
                ...state.selects,
                animalTypes: ["", ...animalTypes]
            }
        }
    },
    [ActionTypes.SET_ANIMAL_TYPE_FAILED]: (state, action) => {
        const { responseError } = action.payload;
        return {
            ...state,
            selects: {
                ...state.selects,
                animalTypes: [""]
            },
            errors: {
                ...state.errors,
                responseError
            }
        }
    },
    [ActionTypes.SET_SELECTED_AGE]: (state, action) => {
        const { selectedAge } = action.payload;
        return {
            ...state,
            selects: {
                ...state.selects,
                selectedAge
            }

        }
    },
    [ActionTypes.SET_SELECTED_ANIMAL_TYPE]: (state, action) => {
        const { selectedType } = action.payload;
        return {
            ...state,
            selects: {
                ...state.selects,
                selectedType
            }
        }
    },
    [ActionTypes.SET_SELECTED_ANIMAL]: (state, action) => {
        const { selectedAnimal } = action.payload;
        return {
            ...state,
            selects: {
                ...state.selects,
                selectedAnimal
            }
        }
    }
}

export default selectsDict;
