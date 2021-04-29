import { types } from "../type/type";


const initialState = {
    isLogged: null,

}

export const authReducer = (state= initialState,action) => {


    switch (action.type) {
        case types.login :
            return{
                ...state,
                isLogged: action.payload
            }
        case types.logout:
            return{
                ...state,
                isLogged:action.payload
            }
            
    
        default:
            return state;
    }
}