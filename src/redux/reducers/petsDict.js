import * as ActionTypes from '../action-types';


const petsDict = {
    [ActionTypes.SET_PETS_SUCCESS]: (state, action) => {
        const { data: { pets, pagination }, params } = action.payload;
        return {
            ...state,
            petsData: {
                pets,
                pagination
            },
            params

        }
    },
    [ActionTypes.SET_PETS_FAILED]: (state, action) => {
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
    }
}
export default petsDict;