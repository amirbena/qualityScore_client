import initialState from './initial-state';
import * as ActionTypes from '../action-types';

export default function (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.REMOVE_FROM_PARAMS:
            const { keys } = action.payload;
            const params = { ...state.params };
            keys.forEach(key => delete params[key]);
            delete params[key];
            return {
                ...state,
                params
            }



        default:
            return state;
    }
}