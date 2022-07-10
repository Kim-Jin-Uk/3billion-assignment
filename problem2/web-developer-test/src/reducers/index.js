import {produce} from 'immer'

export const initialState = {
    animalList:[],
    animalClassification:[],

    getAnimalLoading: false,
    getAnimalSuccess: false,
    getAnimalError: null,
}

export const GET_ANIMAL_LIST_REQUEST = 'GET_ANIMAL_LIST_REQUEST'
export const GET_ANIMAL_LIST_SUCCESS = 'GET_ANIMAL_LIST_SUCCESS'
export const GET_ANIMAL_LIST_FAILURE = 'GET_ANIMAL_LIST_FAILURE'

export const CREATE_AN_ANIMAL_CLASSIFICATION = 'CREATE_AN_ANIMAL_CLASSIFICATION'

const rootReducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case GET_ANIMAL_LIST_REQUEST:
            draft.getAnimalLoading = true
            draft.getAnimalSuccess = false
            draft.getAnimalError = null
            break
        case GET_ANIMAL_LIST_SUCCESS:
            draft.getAnimalLoading = false
            draft.getAnimalSuccess = true
            draft.getAnimalError = null
            draft.animalList = action.data
            break
        case GET_ANIMAL_LIST_FAILURE:
            draft.getAnimalLoading = false
            draft.getAnimalSuccess = false
            draft.getAnimalError = action.error
            draft.animalList = []
            break
        case CREATE_AN_ANIMAL_CLASSIFICATION:
            draft.animalClassification = action.data
            break
        default:
            break
    }
});

export default rootReducer;
