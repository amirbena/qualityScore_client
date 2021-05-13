import * as ActionTypes from '../action-types';

export const getPets = (object = {}) => {

    console.log(object);
    return {
        type: ActionTypes.SET_PETS_ACTION,
        payload: { object }
    }
}

export const getAnimalTypes = animalType => {
    return {
        type: ActionTypes.SET_ANIMAL_TYPE_ACTION,
        payload: { animalType }
    }
}

export const setSelectedAge = selectedAge => {
    return {
        type: ActionTypes.SET_SELECTED_AGE,
        payload: { selectedAge }
    }
}

export const setSelectedAnimalType = selectedType => {
    return {
        type: ActionTypes.SET_SELECTED_ANIMAL_TYPE,
        payload: { selectedType }
    }
}

export const setSelectedAnimal = selectedAnimal => {
    return {
        type: ActionTypes.SET_SELECTED_ANIMAL,
        payload: { selectedAnimal }
    }
}


export const removeFromParams = keys => {
    return {
        type: ActionTypes.REMOVE_FROM_PARAMS,
        payload: { keys }
    }
}

