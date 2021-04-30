import React from 'react'
import { NavBar } from '../ui/NavBar'
import login from '../ui/img/login.jpg';

export const RegisterScreen = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <div>
        <NavBar/>
        <div>
        <div className="limiter">
    <div className="container-login100">
        <div className="wrap-login100">
            <div className="login100-form-title" style={{backgroundImage: login}} >
                <span className="login100-form-title-1" >
                    Registro
                </span>
            </div>

            <form className="login100-form validate-form">
                <div className="wrap-input100 validate-input m-b-26" data-validate="Username is required">
                    <span className="label-input100">Username</span>
                    <input className="input100" type="text" name="username" placeholder="Enter username"/>
                    <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input m-b-18" data-validate = "Password is required">
                    <span className="label-input100">Password</span>
                    <input className="input100" type="password" name="pass"autoComplete="false" placeholder="Enter password"/>
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
                        >
                        
                        Login
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
