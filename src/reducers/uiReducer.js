import { types } from '../constants/actionTypes'

const initialState = {
    loading:false
}

export const uiReducer = (state=initialState,action) =>{ 
    switch (action.type) {
        case types.startLoading:
            return {
                ...state,
                loading:true
            }
        case types.finishLoading:
            return {
                ...state,
                loading:false
            }
        
        default:
            return state;
    }
}