import { types } from "../type/type";


const initialState = {
    checking: false,

}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.logIn:
            return {
                ...state,
                ...action.payload,
                isLogged: true
            }
        case types.logOut:
            return {
                checking: action.payload
            }
        case types.authCheckingFinish:
            return {
                ...state,
                checking: false
            }


        default:
            return state;
    }
}