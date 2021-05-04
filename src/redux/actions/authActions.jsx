import Swal from "sweetalert2";
import  clienteAxios, { clienteAxiosToken, token }  from "../../config/axios";
import { types } from "../type/type"

export const startLogin = (values) => {
    return async (dispatch) => {
             await clienteAxios.post('/auth',values)
                 .then(({data})=> {
                     localStorage.setItem("token",data.token);
                     localStorage.setItem("token-init-date",new Date().getTime());
                     dispatch(login({
                         uid: data.uid,
                         name:data.name
                     }));
                    })
                    .catch((error)=> {
                        console.log(error.response);
                    })
    }
}


export const startChecking = () => {
    return async (dispatch) => {
        const isCurrentToken = !!token() || '';
        if (!isCurrentToken) {
            // dispatch(checkingFinish());
            return;
        }
        await clienteAxiosToken.get('/auth/renew')
            .then(({ data }) => {
                localStorage.setItem('token', data.token);
                localStorage.setItem('token-init-date', new Date().getTime());

                setTimeout(() => {
                    dispatch(startLogout())
                    Swal.fire('Fin de la sesión',`'Su Sesión ha expirado`,'warning')
                }, 600000);
                dispatch(login({
                    uid: data.uid,
                    name: data.name
                }));
            })
            .catch(({ response: { data: { msg } } }) => {
                dispatch(checkingFinish());
            });
    }

}
export const startLogout = () => {
    return (dispatch)=> {
        localStorage.clear();
        dispatch(logout());
    }
}

const login = (data) => ({
    type: types.logIn,
    payload: data
});

const logout = () => ({
    type: types.logOut,
    payload:false
})
const checkingFinish = () => ({
    type: types.authCheckingFinish
});