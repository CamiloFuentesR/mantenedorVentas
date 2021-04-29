import { types } from "../type/type"


export const startLogin = () => {
    return (dispatch) => {
        dispatch(login());


    }
}
export const startLogout = () => {
    return (dispatch)=> {
        dispatch(logout());
    }
}



const login = () => ({
    type: types.login,
    payload:true
});

const logout = () => ({
    type: types.logout,
    payload:false
})