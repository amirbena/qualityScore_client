import petsDict from './petsDict';
import selectsDict from './selectsDict';
import paramsDict from './paramsDict';
import initialState from './initial-state';

const reducer = (state = initialState, action) => {
    const bigDictionary = {
        ...petsDict, ...selectsDict,
        ...paramsDict
    }
    const updateStore = bigDictionary[action.type];
    if (!updateStore) return state;
    return updateStore(state, action);
}
export default reducer;

