import * as ActionTypes from '../action-types';

const paramsDict= {
    [ActionTypes.REMOVE_FROM_PARAMS]: (state,action)=>{
        const { keys } = action.payload;
        const params = { ...state.params };
        keys.forEach(key => delete params[key]);
        return {
            ...state,
            params
        }
    }
}
export default paramsDict;