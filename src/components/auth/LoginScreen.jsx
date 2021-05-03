import React, { useState } from 'react'
import { NavBar } from '../ui/NavBar'
import login from '../ui/img/login.jpg';
import { useDispatch } from 'react-redux';
import { startLogin } from '../../redux/actions/authActions';
export const LoginScreen = () => {

    
    const initForm = {
        user_email:'kmi@gmail.com',
        user_password:'123456'
    }
    
    const [form, setForm] = useState(initForm)
    const {user_email,user_password} =form
    const dispatch = useDispatch()

    const handleInputChange = ({target}) => {
        setForm({
            ...form,
            [target.name] : target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(startLogin(form))
    }

    return (
        <div>
            <NavBar />
            <div className="animate__animated animate__fadeIn animate__faster">
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                            <div className="login100-form-title" style={{ backgroundImage: login }} >
                                <span className="login100-form-title-1" >
                                    Inicio de Sesión
					            </span>
                            </div>
                            <form className="login100-form validate-form">
                                <div className="wrap-input100 validate-input m-b-26" data-validate="Username is required">
                                    <span className="label-input100">Username</span>
                                    <input 
                                        className="input100" 
                                        type="text" 
                                        name="user_email" 
                                        placeholder="Enter username" 
                                        value={user_email}
                                        onChange={handleInputChange}
                                        />
                                    <span className="focus-input100"></span>
                                </div>
                                <div className="wrap-input100 validate-input m-b-18" data-validate="Password is required">
                                    <span className="label-input100">Password</span>
                                    <input 
                                        className="input100" 
                                        type="password" 
                                        name="user_password" 
                                        autoComplete="false" 
                                        placeholder="Enter password" 
                                        value={user_password}
                                        onChange={handleInputChange}
                                        />
                                    <span className="focus-input100"></span>
                                </div>
                                <div className="flex-sb-m w-full p-b-30">
                                    <div className="contact100-form-checkbox">
                                    </div>
                                </div>
                                <div className="container-login100-form-btn">
                                    <button
                                        type="submit"
                                        className="login100-form-btn "
                                        onClick={handleSubmit}
                                    >Login
						            </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
